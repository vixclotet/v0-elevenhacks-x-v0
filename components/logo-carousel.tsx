"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Well-known brands visible on the die-cut stickers product photo
const brands = [
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
  { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg", dark: false },
  { name: "Twitter / X", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png", dark: false },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", dark: false },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png", dark: false },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", dark: true },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", dark: false },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png", dark: false },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/512px-Spotify_logo_with_text.svg.png", dark: false },
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/512px-Logo_NIKE.svg.png", dark: true },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png", dark: false },
  { name: "Discord", logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg", dark: true },
]

// Duplicate for seamless loop
const allBrands = [...brands, ...brands]

export function LogoCarousel() {
  return (
    <section className="py-14 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="font-display text-center text-sm font-bold text-muted-foreground uppercase tracking-widest">
          Trusted by 350,000+ teams &amp; creators worldwide
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {allBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-10 px-4 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`h-8 w-auto object-contain ${brand.dark ? "invert" : ""}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Real sticker product image below */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Die-Cut-Vinyl-Stickers-UvKNC3BimnGrGgGOCmzu7T6i0DqvpL.jpg"
            alt="Die-cut vinyl stickers showcasing popular brand logos including GitHub, Shopify, Twitter, and more"
            width={1400}
            height={500}
            className="w-full object-cover max-h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <p className="text-foreground font-bold text-lg drop-shadow-lg">
              Die-cut to any shape. Premium vinyl. Weatherproof.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
