"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface MotionContextValue {
  reduceMotion: boolean
  toggleReduceMotion: () => void
}

const MotionContext = createContext<MotionContextValue>({
  reduceMotion: false,
  toggleReduceMotion: () => {},
})

export function useMotion() {
  return useContext(MotionContext)
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    // Respect OS preference on mount
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    // Apply class to <html> so CSS can target it
    document.documentElement.classList.toggle("reduce-motion", reduceMotion)
  }, [reduceMotion])

  return (
    <MotionContext.Provider value={{ reduceMotion, toggleReduceMotion: () => setReduceMotion((v) => !v) }}>
      {children}
    </MotionContext.Provider>
  )
}
