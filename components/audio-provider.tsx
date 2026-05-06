"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from "react"

// ─── Constants ────────────────────────────────────────────────────────────────

/** Maximum number of blob URLs kept in memory. Oldest are evicted when exceeded. */
const CACHE_MAX_SIZE = 20

// ─── Types ────────────────────────────────────────────────────────────────────

type AudioContextValue = {
  /** Whether the voice/TTS feature is enabled by the user */
  voiceEnabled: boolean
  /** Toggle voice on/off */
  toggleVoice: () => void
  /** Master volume 0–1 */
  volume: number
  /** Set master volume */
  setVolume: (v: number) => void
  /** Speak text via ElevenLabs TTS. Returns a cancel function. */
  speak: (text: string, voiceId?: string) => () => void
  /** Whether audio is currently buffering from the network */
  loading: boolean
  /** Whether audio is actively playing */
  speaking: boolean
  /** Stop any current audio immediately */
  stop: () => void
}

// ─── LRU Cache ────────────────────────────────────────────────────────────────

/**
 * A minimal LRU cache backed by an insertion-ordered Map.
 * When the cache exceeds maxSize, the oldest entry's ObjectURL is revoked
 * and the entry is deleted to prevent memory leaks.
 */
class LRUBlobCache {
  private map = new Map<string, string>()
  private maxSize: number

  constructor(maxSize: number) {
    this.maxSize = maxSize
  }

  get(key: string): string | undefined {
    const val = this.map.get(key)
    if (val !== undefined) {
      // Re-insert to mark as recently used
      this.map.delete(key)
      this.map.set(key, val)
    }
    return val
  }

  set(key: string, url: string): void {
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    // Evict oldest when at capacity
    if (this.map.size >= this.maxSize) {
      const oldestKey = this.map.keys().next().value
      if (oldestKey !== undefined) {
        const oldUrl = this.map.get(oldestKey)
        if (oldUrl) URL.revokeObjectURL(oldUrl)
        this.map.delete(oldestKey)
      }
    }
    this.map.set(key, url)
  }

  /** Revoke all ObjectURLs and clear the cache (call on unmount if needed). */
  clear(): void {
    for (const url of this.map.values()) {
      URL.revokeObjectURL(url)
    }
    this.map.clear()
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AudioCtx = createContext<AudioContextValue | null>(null)

export function useAudio(): AudioContextValue {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error("useAudio must be used inside <AudioProvider>")
  return ctx
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AudioProvider({ children }: { children: ReactNode }) {
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [volume, setVolumeState] = useState(0.85)
  const [speaking, setSpeaking] = useState(false)
  const [loading, setLoading] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const cacheRef = useRef(new LRUBlobCache(CACHE_MAX_SIZE))

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sm_voice_enabled")
      if (stored !== null) setVoiceEnabled(stored === "true")
      const vol = localStorage.getItem("sm_voice_volume")
      if (vol !== null) setVolumeState(parseFloat(vol))
    } catch { /* ignore */ }
  }, [])

  const toggleVoice = useCallback(() => {
    setVoiceEnabled((prev) => {
      const next = !prev
      try { localStorage.setItem("sm_voice_enabled", String(next)) } catch { /* ignore */ }
      return next
    })
  }, [])

  const setVolume = useCallback((v: number) => {
    const clamped = Math.max(0, Math.min(1, v))
    setVolumeState(clamped)
    try { localStorage.setItem("sm_voice_volume", String(clamped)) } catch { /* ignore */ }
    if (audioRef.current) audioRef.current.volume = clamped
  }, [])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setSpeaking(false)
    setLoading(false)
  }, [])

  const speak = useCallback(
    (text: string, voiceId?: string): (() => void) => {
      if (!voiceEnabled || !text.trim()) return () => {}

      let cancelled = false

      const run = async () => {
        const cacheKey = `${voiceId ?? "default"}:${text}`

        let src: string | undefined = cacheRef.current.get(cacheKey)

        if (!src) {
          setLoading(true)
          let attempt = 0
          const maxAttempts = 2

          while (attempt < maxAttempts) {
            try {
              const res = await fetch("/api/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: text.slice(0, 500), voiceId }),
              })
              if (!res.ok) throw new Error(`TTS HTTP ${res.status}`)
              const blob = await res.blob()
              src = URL.createObjectURL(blob)
              cacheRef.current.set(cacheKey, src)
              break
            } catch {
              attempt++
              if (attempt < maxAttempts) {
                // Exponential backoff: 400ms, then 800ms
                await new Promise((r) => setTimeout(r, 400 * attempt))
              }
            }
          }

          if (!src) {
            setLoading(false)
            return
          }
        }

        if (cancelled) {
          setLoading(false)
          return
        }

        // Stop any previous audio
        if (audioRef.current) {
          audioRef.current.pause()
        }

        const audio = new Audio(src)
        audio.volume = volume
        audioRef.current = audio

        setLoading(false)
        setSpeaking(true)

        audio.onended = () => setSpeaking(false)
        audio.onerror = () => { setSpeaking(false); setLoading(false) }

        audio.play().catch(() => { setSpeaking(false); setLoading(false) })
      }

      run()

      return () => {
        cancelled = true
        stop()
      }
    },
    [voiceEnabled, volume, stop]
  )

  return (
    <AudioCtx.Provider value={{ voiceEnabled, toggleVoice, volume, setVolume, speak, loading, speaking, stop }}>
      {children}
    </AudioCtx.Provider>
  )
}
