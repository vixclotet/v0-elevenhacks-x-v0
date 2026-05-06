"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, Square, VolumeX, Loader2 } from "lucide-react"
import { useAudio } from "@/components/audio-provider"

interface PlayMeButtonProps {
  /** The text ElevenLabs will speak */
  text: string
  /** Optional voice ID override */
  voiceId?: string
  /** Visual variant */
  variant?: "pill" | "icon" | "inline"
  /** Extra class names */
  className?: string
  /** Label override (default: "Play") */
  label?: string
}

type PlayState = "idle" | "loading" | "playing"

export function PlayMeButton({
  text,
  voiceId,
  variant = "pill",
  className = "",
  label = "Play",
}: PlayMeButtonProps) {
  const { voiceEnabled, toggleVoice, speak, speaking, stop } = useAudio()
  const [playState, setPlayState] = useState<PlayState>("idle")
  const [cancelFn, setCancelFn] = useState<(() => void) | null>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()

      // If voice is off, just enable it — do not play yet
      if (!voiceEnabled) {
        toggleVoice()
        return
      }

      // If currently playing this button, stop
      if (playState === "playing") {
        if (cancelFn) cancelFn()
        stop()
        setPlayState("idle")
        return
      }

      // Start speaking via the single AudioProvider path only
      setPlayState("loading")
      const cancel = speak(text, voiceId)
      setCancelFn(() => cancel)
    },
    [voiceEnabled, toggleVoice, speak, stop, playState, cancelFn, text, voiceId]
  )

  // Sync local playState with the global speaking/loading flags from AudioProvider
  // loading true  → this button triggered the fetch
  // speaking true → audio is now playing
  // both false    → audio ended or was stopped
  // We only update if this button is the one that triggered playback
  useEffect(() => {
    if (playState === "loading" && speaking) {
      setPlayState("playing")
    } else if (playState === "playing" && !speaking) {
      setPlayState("idle")
    } else if (playState === "loading" && !speaking && cancelFn === null) {
      setPlayState("idle")
    }
  }, [speaking, playState, cancelFn])

  if (variant === "icon") {
    return (
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        title={voiceEnabled ? (playState === "playing" ? "Stop" : "Play aloud") : "Enable voice & play"}
        aria-label={voiceEnabled ? (playState === "playing" ? "Stop audio" : "Play audio") : "Enable voice and play"}
        className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-colors
          ${playState === "playing"
            ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
            : "bg-primary/10 text-primary hover:bg-primary/20"
          } ${className}`}
      >
        {playState === "loading" ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : playState === "playing" ? (
          <>
            <Square className="w-3 h-3 fill-current" />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-primary"
              animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </>
        ) : (
          <Volume2 className="w-3.5 h-3.5" />
        )}
      </motion.button>
    )
  }

  if (variant === "inline") {
    return (
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className={`inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors ${className}`}
        aria-label={playState === "playing" ? "Stop audio" : "Play audio"}
      >
        {playState === "loading" ? (
          <Loader2 className="w-3 h-3 animate-spin" />
        ) : playState === "playing" ? (
          <Square className="w-3 h-3 fill-current" />
        ) : (
          <Volume2 className="w-3 h-3" />
        )}
        <span>{playState === "playing" ? "Stop" : label}</span>
      </motion.button>
    )
  }

  // Default: pill
  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      aria-label={playState === "playing" ? "Stop audio" : `${label} — powered by ElevenLabs`}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all select-none
        ${playState === "playing"
          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
          : !voiceEnabled
          ? "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
          : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
        } ${className}`}
    >
      {/* Pulse ring when playing */}
      <AnimatePresence>
        {playState === "playing" && (
          <motion.span
            key="ring"
            className="absolute inset-0 rounded-full border-2 border-primary"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, repeat: Infinity }}
          />
        )}
      </AnimatePresence>

      {/* Icon */}
      {playState === "loading" ? (
        <Loader2 className="w-3 h-3 animate-spin flex-shrink-0" />
      ) : playState === "playing" ? (
        <Square className="w-3 h-3 fill-current flex-shrink-0" />
      ) : !voiceEnabled ? (
        <VolumeX className="w-3 h-3 flex-shrink-0" />
      ) : (
        <Volume2 className="w-3 h-3 flex-shrink-0" />
      )}

      {/* Label */}
      <span>
        {playState === "playing"
          ? "Stop"
          : !voiceEnabled
          ? "Enable voice"
          : label}
      </span>
    </motion.button>
  )
}
