"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Pause, Play } from "lucide-react"
import { ALL_CAROUSEL_ENTRIES, type CarouselEntry } from "@/components/brand-logos"
import { PlayMeButton } from "@/components/play-me-button"

// ─── Split 25 brands across 3 tracks ────────────────────────────────────────
// Track A: items 0-8   (9 brands)  → scrolls left, 36s
// Track B: items 9-16  (8 brands)  → scrolls right, 42s
// Track C: items 17-24 (8 brands)  → scrolls left, 39s
const TRACK_A: CarouselEntry[] = ALL_CAROUSEL_ENTRIES.slice(0, 9)
const TRACK_B: CarouselEntry[] = ALL_CAROUSEL_ENTRIES.slice(9, 17)
const TRACK_C: CarouselEntry[] = ALL_CAROUSEL_ENTRIES.slice(17)

// Duplicate each track for seamless infinite loop
function doubled(entries: CarouselEntry[]): CarouselEntry[] {
  return [...entries, ...entries]
}

// ─── Shared logo tile ────────────────────────────────────────────────────────
// Every tile is 160px wide × 56px tall, with the logo constrained inside.
// SVG logos get grayscale + opacity at rest; image logos keep natural color
// (many have colored backgrounds) but still get a subtle opacity shift.

interface TileProps {
  entry: CarouselEntry
  uid: string
}

function LogoTile({ entry, uid }: TileProps) {
  const isImg = entry.kind === "img"

  return (
    <div
      key={uid}
      className={[
        "flex-shrink-0 flex items-center justify-center",
        "w-40 h-14 mx-5 select-none rounded-xl",
        "transition-all duration-300",
        isImg
          ? "opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
          : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0",
      ].join(" ")}
      title={entry.name}
      aria-label={entry.name}
      role="img"
    >
      {entry.kind === "svg" ? (
        <entry.Component className="h-8 w-auto max-w-[140px] object-contain" />
      ) : (
        <entry.Component className="h-8 w-auto max-w-[140px] object-contain" />
      )}
    </div>
  )
}

// ─── Single scrolling track ──────────────────────────────────────────────────

interface TrackProps {
  entries: CarouselEntry[]
  direction: "left" | "right"
  duration: number
  paused: boolean
  trackId: string
}

function CarouselTrack({ entries, direction, duration, paused, trackId }: TrackProps) {
  const tiles = doubled(entries)
  const animClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right"

  return (
    <div className="relative overflow-hidden" aria-hidden="true">
      {/* Edge fade — left */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, var(--card) 0%, transparent 100%)" }}
      />
      {/* Edge fade — right */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, var(--card) 0%, transparent 100%)" }}
      />

      <div
        className={`flex ${animClass}`}
        style={{
          width: "max-content",
          animationDuration: `${duration}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {tiles.map((entry, i) => (
          <LogoTile key={`${trackId}-${entry.name}-${i}`} entry={entry} uid={`${trackId}-${i}`} />
        ))}
      </div>
    </div>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function LogoCarousel() {
  const [paused, setPaused] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const effectivePaused = paused || prefersReduced
  const allBrandNames = ALL_CAROUSEL_ENTRIES.map((e) => e.name).join(", ")

  return (
    <section
      className="py-16 bg-card border-y border-border overflow-hidden"
      aria-label="Trusted-by logo carousel"
    >
      {/* ── Heading + controls ── */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.22em] mb-4">
          Trusted by <span className="text-foreground">350,000+</span> teams &amp; creators — including
        </p>

        {/* Controls row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PlayMeButton
            text={`Sticker Mule is trusted by: ${allBrandNames}, and over 350,000 more businesses worldwide.`}
            label="Hear who trusts us"
            variant="pill"
          />

          {/* Pause / play animation button */}
          <button
            onClick={() => setPaused((p) => !p)}
            className={[
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold",
              "border border-border bg-background text-muted-foreground",
              "hover:text-foreground hover:border-foreground/30 transition-all",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            ].join(" ")}
            aria-label={paused ? "Resume logo animation" : "Pause logo animation"}
            aria-pressed={paused}
          >
            {paused ? (
              <><Play className="w-3 h-3" aria-hidden="true" /> Resume</>
            ) : (
              <><Pause className="w-3 h-3" aria-hidden="true" /> Pause</>
            )}
          </button>
        </div>

        {/* Screen-reader list of all brands */}
        <p className="sr-only">
          Featured brands: {allBrandNames}.
        </p>
      </motion.div>

      {/* ── Track A — left ── */}
      <div className="mb-3">
        <CarouselTrack
          entries={TRACK_A}
          direction="left"
          duration={36}
          paused={effectivePaused}
          trackId="a"
        />
      </div>

      {/* ── Track B — right ── */}
      <div className="mb-3">
        <CarouselTrack
          entries={TRACK_B}
          direction="right"
          duration={42}
          paused={effectivePaused}
          trackId="b"
        />
      </div>

      {/* ── Track C — left ── */}
      <div>
        <CarouselTrack
          entries={TRACK_C}
          direction="left"
          duration={39}
          paused={effectivePaused}
          trackId="c"
        />
      </div>

      {/* ── Product showcase strip ── */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-3-nqnR9M6YzuCyIfh5TPIFOfNmxxQPQI.jpg",
              alt: "Custom die-cut stickers with Sticker Mule branding",
              caption: "Your brand. Any shape.",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-1-Zzx25kiQlliEghXzFE2y71QYkRuMZu.jpg",
              alt: "University stickers from Ohio State, LSU, Harvard and more",
              caption: "From campuses to enterprises.",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Die-Cut-Vinyl-Stickers-UvKNC3BimnGrGgGOCmzu7T6i0DqvpL.jpg",
              alt: "Die-cut vinyl stickers with GitHub, Shopify, and Twitter logos",
              caption: "Loved by 350K+ businesses.",
            },
          ].map((img) => (
            <div key={img.src} className="relative rounded-2xl overflow-hidden shadow-lg aspect-video group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm leading-snug drop-shadow-lg">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
