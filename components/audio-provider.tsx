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
  /** Whether audio is currently playing */
  speaking: boolean
  /** Stop any current audio immediately */
  stop: () => void
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
  // Persist preference to localStorage
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [volume, setVolumeState] = useState(0.85)
  const [speaking, setSpeaking] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  // Simple in-memory cache: text → objectURL
  const cacheRef = useRef<Map<string, string>>(new Map())

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sm_voice_enabled")
      if (stored !== null) setVoiceEnabled(stored === "true")
      const vol = localStorage.getItem("sm_voice_volume")
      if (vol !== null) setVolumeState(parseFloat(vol))
    } catch {
      // ignore
    }
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
  }, [])

  const speak = useCallback(
    (text: string, voiceId?: string): (() => void) => {
      if (!voiceEnabled || !text.trim()) return () => {}

      let cancelled = false

      const run = async () => {
        const cacheKey = `${voiceId ?? "default"}:${text}`

        let src: string | undefined = cacheRef.current.get(cacheKey)

        if (!src) {
          try {
            const res = await fetch("/api/tts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text: text.slice(0, 500), voiceId }),
            })
            if (!res.ok) return
            const blob = await res.blob()
            src = URL.createObjectURL(blob)
            cacheRef.current.set(cacheKey, src)
          } catch {
            return
          }
        }

        if (cancelled) return

        // Stop any previous audio
        if (audioRef.current) {
          audioRef.current.pause()
        }

        const audio = new Audio(src)
        audio.volume = volume
        audioRef.current = audio
        setSpeaking(true)

        audio.onended = () => setSpeaking(false)
        audio.onerror = () => setSpeaking(false)

        audio.play().catch(() => setSpeaking(false))
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
    <AudioCtx.Provider value={{ voiceEnabled, toggleVoice, volume, setVolume, speak, speaking, stop }}>
      {children}
    </AudioCtx.Provider>
  )
}
