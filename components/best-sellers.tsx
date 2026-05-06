"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { createPeelSound, createClickSound, createSuccessSound, createHoverSound } from "@/lib/sounds"
import { ConfettiBurst } from "@/components/confetti-burst"
import { useAudio } from "@/components/audio-provider"
import { PlayMeButton } from "@/components/play-me-button"

const products = [
  // ── Stickers ──────────────────────────────────────────────────────────────
  {
    name: "Die-Cut Stickers",
    category: "Stickers",
    description: "Custom shaped stickers cut to your exact design — any shape, any size",
    price: "From $29",
    badge: "Best Seller",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover-1-iEBpLsjWQPXUTbVQbF4VH4tXLvkXuD.webp",
    imageAlt: "Collection of custom die-cut vinyl stickers featuring creative designs including shoes, error message, breakfast and more",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    name: "Holographic Stickers",
    category: "Stickers",
    description: "Rainbow shimmer finish that catches every eye — printed on genuine holographic vinyl",
    price: "From $39",
    badge: "Popular",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover-TxPFdzvIHmsqN1T5pp1f2L1esyXjQF.webp",
    imageAlt: "Holographic stickers with rainbow shimmer effect showing Netflix, Virtual Reality, and Hendrix designs",
    badgeColor: "bg-purple-500 text-white",
  },
  {
    name: "Glitter Stickers",
    category: "Stickers",
    description: "Sparkle finish with real glitter substrate that makes your brand truly shine",
    price: "From $45",
    badge: "New",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobileCover-shmHmwHxY23QuiBihePBtiv3VBJ2Gn.jpg",
    imageAlt: "Glitter stickers on orange background with You Are Worth Everything, scream, and astronaut mule designs",
    badgeColor: "bg-yellow-500 text-foreground",
  },
  {
    name: "Clear Stickers",
    category: "Stickers",
    description: "Transparent background for a seamless, no-label look on any surface",
    price: "From $35",
    badge: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-StickerMuleTT-_16_9-oQl3OAj2a7RZj7Scj6wHRAg222Q3HL.webp",
    imageAlt: "Hand holding custom stickers on orange background, showing butterfly, flame sunglasses, and avocado skull stickers",
    badgeColor: "",
  },
  // ── Labels ────────────────────────────────────────────────────────────────
  {
    name: "Custom Labels",
    category: "Labels",
    description: "Waterproof permanent-adhesive labels for bottles, jars, boxes, and packaging",
    price: "From $32",
    badge: "Popular",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-Stickermule_-_169-7xiYAkBhNMtrw4w9YO35xFK7Z4TBsi.webp",
    imageAlt: "Custom taco brand labels on Sticker Mule orange background — die-cut product label samples",
    badgeColor: "bg-accent text-accent-foreground",
  },
  // ── Magnets ───────────────────────────────────────────────────────────────
  {
    name: "Custom Magnets",
    category: "Magnets",
    description: "Full-color die-cut magnets for fridges, whiteboards, vehicles, and lockers",
    price: "From $35",
    badge: "New",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proof-Qry9TMI12cHokSjGKokiQEwabHwx46.png",
    imageAlt: "Custom Sticker Mule donkey mascot magnet with holographic glitter border",
    badgeColor: "bg-yellow-500 text-foreground",
  },
  // ── Buttons & Pins ────────────────────────────────────────────────────────
  {
    name: "Buttons & Pins",
    category: "Buttons",
    description: "Custom button badges in multiple sizes — wearable art for events, merch and brand promos",
    price: "From $25",
    badge: "Popular",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gratis-stickermule-pegatinas-gratis-a-domicilio-296x250-89p8GiXzLupujE1ZXCuqjBNWtJACF9.jpg",
    imageAlt: "Custom button pin badges — unicorn, playing card, and mule mascot designs on orange background",
    badgeColor: "bg-primary text-primary-foreground",
  },
  // ── Packaging ─────────────────────────────────────────────────────────────
  {
    name: "Custom Packaging",
    category: "Packaging",
    description: "Branded poly mailers, boxes, and tape — make every unboxing an experience",
    price: "From $55",
    badge: "Popular",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/590fca218f2cd426dcbe24e23636ddc7-M6p9ioAQu0gFUEBqlBe75NiR9O1LIV.jpg",
    imageAlt: "Sticker Packs branded packaging — retail-ready sticker pack with Do A Kickflip and burger stickers",
    badgeColor: "bg-accent text-accent-foreground",
  },
  // ── Apparel ───────────────────────────────────────────────────────────────
  {
    name: "Custom Apparel",
    category: "Apparel",
    description: "Tees, hoodies, and hats with vibrant full-color prints — your brand, worn proudly",
    price: "From $18",
    badge: "New",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage-share-image-en-Pg32UVzioeBGLytfzAdfi053guK9Ui.png",
    imageAlt: "Custom printed apparel and t-shirts on Sticker Mule orange background",
    badgeColor: "bg-green-500 text-white",
  },
  // ── Acrylics ──────────────────────────────────────────────────────────────
  {
    name: "Acrylic Keychains",
    category: "Acrylics",
    description: "Crystal-clear acrylic keychains with UV-printed full-color designs and protective film",
    price: "From $59",
    badge: "New",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sm-keychains4-KHF95C6OZBSRs9yP3q6lslbDdE2tj4.jpg",
    imageAlt: "Sticker Mule custom acrylic keychain featuring a monkey skateboarding with protective film instruction card",
    badgeColor: "bg-yellow-500 text-foreground",
  },
  // ── Free Samples ──────────────────────────────────────────────────────────
  {
    name: "Free Sticker Samples",
    category: "Stickers",
    description: "Try before you buy — free samples from every category shipped right to your door",
    price: "Free",
    badge: "Free",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gratis-stickermule-pegatinas-gratis-a-domicilio-296x250-89p8GiXzLupujE1ZXCuqjBNWtJACF9.jpg",
    imageAlt: "Free sticker samples including unicorn, playing card, and mule mascot stickers on orange background",
    badgeColor: "bg-green-500 text-white",
  },
]

export function BestSellers() {
  const [confettiCard, setConfettiCard] = useState<number | null>(null)
  const playPeel = createPeelSound()
  const playClick = createClickSound()
  const playSuccess = createSuccessSound()
  const playHover = createHoverSound()
  const { speak, voiceEnabled } = useAudio()
  // Track the cancel function for the current hover read-aloud
  const cancelVoiceRef = useRef<(() => void) | null>(null)

  const handleProductHover = useCallback((product: { name: string; description: string; price: string }) => {
    playPeel()
    playHover()
    if (voiceEnabled) {
      // Cancel any previous read-aloud before starting new one
      if (cancelVoiceRef.current) {
        cancelVoiceRef.current()
        cancelVoiceRef.current = null
      }
      const text = `${product.name}. ${product.description}. Starting at ${product.price}.`
      cancelVoiceRef.current = speak(text)
    }
  }, [voiceEnabled, speak, playPeel, playHover])

  const handleCustomize = (index: number) => {
    setConfettiCard(index)
    playSuccess()
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              Best Sellers
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Our most popular products, loved by millions
            </p>
            <div className="mt-3">
              <PlayMeButton
                text="Best sellers. Our most popular products across all categories — Stickers, Labels, Magnets, Buttons and Pins, Packaging, Apparel, and Acrylics. All with free proofs and free worldwide shipping. Hover any card to hear full details."
                label="Hear what we sell"
                variant="inline"
              />
            </div>
          </div>
          <Button
            variant="ghost"
            className="btn-press text-primary hover:text-primary/80 font-semibold group self-start sm:self-auto"
            onClick={playClick}
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, type: "spring", stiffness: 200, damping: 20 }}
              onHoverStart={() => handleProductHover(product)}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 cursor-pointer sticker-peel holo-shine"
            >
              {/* Confetti burst on Customize click */}
              <ConfettiBurst
                active={confettiCard === index}
                onComplete={() => setConfettiCard(null)}
              />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category chip — neubrutalist tag */}
                <span className="inline-block font-mono font-bold text-[10px] tracking-widest uppercase bg-foreground text-background px-2 py-0.5 mb-2">
                  {product.category}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-lg font-black text-foreground">
                    {product.price}
                  </span>
                  <Button
                    className="btn-press bg-primary hover:bg-primary-dark text-primary-foreground rounded-full font-semibold text-sm px-5 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
                    onClick={() => handleCustomize(index)}
                  >
                    Customize
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
