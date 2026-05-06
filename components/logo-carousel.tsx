"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Official brand logos from the provided carousel image
// Using official sources: Wikipedia SVG & official brand CDNs
const brands = [
  {
    name: "lululemon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lululemon_Athletica_logo.svg/512px-Lululemon_Athletica_logo.svg.png",
    dark: false,
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/512px-Logo_NIKE.svg.png",
    dark: true,
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    dark: false,
  },
  {
    name: "Dropbox",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dropbox_Logo_dropbox.svg/512px-Dropbox_Logo_dropbox.svg.png",
    dark: false,
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
    dark: false,
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/512px-Facebook_Logo_%282019%29.png",
    dark: false,
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    dark: false,
  },
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/512px-GitHub_Invertocat_Logo.svg.png",
    dark: true,
  },
  // Second set — extra well-known brands
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/512px-Spotify_logo_with_text.svg.png",
    dark: false,
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
    dark: false,
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png",
    dark: false,
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png",
    dark: false,
  },
]

// Duplicate tracks for seamless infinite loop
const trackA = [...brands, ...brands]
const trackB = [...brands.slice(6), ...brands.slice(0, 6), ...brands.slice(6), ...brands.slice(0, 6)]

export function LogoCarousel() {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="font-display text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
          Trusted by 350,000+ teams &amp; creators — including
        </p>
      </div>

      {/* Track A — scrolls left */}
      <div className="relative mb-5">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-card to-transparent z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-card to-transparent z-10" aria-hidden="true" />
        <motion.div
          className="flex gap-14 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {trackA.map((brand, i) => (
            <div
              key={`a-${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-10 px-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`h-7 w-auto max-w-[120px] object-contain ${brand.dark ? "dark:invert" : ""}`}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Track B — scrolls right (reverse direction) */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-card to-transparent z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-card to-transparent z-10" aria-hidden="true" />
        <motion.div
          className="flex gap-14 items-center"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {trackB.map((brand, i) => (
            <div
              key={`b-${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-10 px-3 grayscale hover:grayscale-0 opacity-35 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`h-7 w-auto max-w-[120px] object-contain ${brand.dark ? "dark:invert" : ""}`}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Product showcase strip — 3 images side by side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-3-nqnR9M6YzuCyIfh5TPIFOfNmxxQPQI.jpg",
              alt: "Sticker Mule brand logo over a blurred mosaic of custom stickers",
              caption: "Your brand. Any shape.",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-1-Zzx25kiQlliEghXzFE2y71QYkRuMZu.jpg",
              alt: "University die-cut stickers including Ohio State, LSU, Harvard, and more campus brand stickers",
              caption: "From campuses to enterprises.",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Die-Cut-Vinyl-Stickers-UvKNC3BimnGrGgGOCmzu7T6i0DqvpL.jpg",
              alt: "Die-cut vinyl stickers with popular brand logos including GitHub, Shopify, and Twitter",
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm drop-shadow-lg">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
