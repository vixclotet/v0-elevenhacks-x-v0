"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BRAND_LOGOS, ALL_BRANDS, CAROUSEL_BRANDS, type BrandName } from "@/components/brand-logos"

// Build two tracks: first is all 12 brands going left, second is offset 6 going right
const TRACK_A: BrandName[] = [...ALL_BRANDS, ...ALL_BRANDS]
const TRACK_B: BrandName[] = [
  ...ALL_BRANDS.slice(6),
  ...ALL_BRANDS.slice(0, 6),
  ...ALL_BRANDS.slice(6),
  ...ALL_BRANDS.slice(0, 6),
]

function BrandItem({ name, trackId, index }: { name: BrandName; trackId: string; index: number }) {
  const Logo = BRAND_LOGOS[name]
  return (
    <div
      key={`${trackId}-${name}-${index}`}
      className="flex-shrink-0 flex items-center justify-center h-12 px-8 select-none group"
      title={name}
      aria-label={name}
    >
      <Logo
        className="h-7 w-auto max-w-[130px] object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 cursor-default"
      />
    </div>
  )
}

export function LogoCarousel() {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.22em]">
          Trusted by <span className="text-foreground">350,000+</span> teams &amp; creators — including
        </p>
      </motion.div>

      {/* Track A — scrolls left */}
      <div className="relative mb-4 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, var(--card) 0%, transparent 100%)" }} aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, var(--card) 0%, transparent 100%)" }} aria-hidden="true" />
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {TRACK_A.map((name, i) => (
            <BrandItem key={`a-${name}-${i}`} name={name} trackId="a" index={i} />
          ))}
        </div>
      </div>

      {/* Track B — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, var(--card) 0%, transparent 100%)" }} aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, var(--card) 0%, transparent 100%)" }} aria-hidden="true" />
        <div className="flex animate-scroll-right" style={{ width: "max-content" }}>
          {TRACK_B.map((name, i) => (
            <BrandItem key={`b-${name}-${i}`} name={name} trackId="b" index={i} />
          ))}
        </div>
      </div>

      {/* Product showcase strip */}
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
