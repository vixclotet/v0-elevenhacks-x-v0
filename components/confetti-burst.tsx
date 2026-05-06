"use client"

import { useEffect, useRef } from "react"

const COLORS = ["#FF4D00", "#00D4FF", "#FFFFFF", "#FF8C42", "#A1E8D5", "#FFD700"]

interface Particle {
  id: number
  x: number
  y: number
  color: string
  size: number
  delay: number
  rotation: number
}

interface ConfettiBurstProps {
  active: boolean
  onComplete?: () => void
}

export function ConfettiBurst({ active, onComplete }: ConfettiBurstProps) {
  const particles = useRef<Particle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    // Generate particles
    particles.current = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: 30 + Math.random() * 40, // percent across container
      y: 20 + Math.random() * 30,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.3,
      rotation: Math.random() * 360,
    }))

    const container = containerRef.current
    // Clear old
    container.innerHTML = ""

    particles.current.forEach((p) => {
      const el = document.createElement("div")
      el.className = "confetti-particle"
      el.style.cssText = `
        left: ${p.x}%;
        top: ${p.y}%;
        width: ${p.size}px;
        height: ${p.size}px;
        background: ${p.color};
        animation-delay: ${p.delay}s;
        transform: rotate(${p.rotation}deg);
      `
      container.appendChild(el)
    })

    const timer = setTimeout(() => {
      if (container) container.innerHTML = ""
      onComplete?.()
    }, 1200)

    return () => clearTimeout(timer)
  }, [active, onComplete])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden z-20"
      aria-hidden="true"
    />
  )
}
