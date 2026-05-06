"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { createPeelSound, createClickSound, createSuccessSound } from "@/lib/sounds"
import { ConfettiBurst } from "@/components/confetti-burst"

const products = [
  {
    name: "Die-Cut Stickers",
    description: "Custom shaped stickers cut to your exact design",
    price: "From $29",
    badge: "Best Seller",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover-1-iEBpLsjWQPXUTbVQbF4VH4tXLvkXuD.webp",
    imageAlt: "Collection of custom die-cut vinyl stickers featuring creative designs including shoes, error message, breakfast and more",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    name: "Holographic Stickers",
    description: "Rainbow shimmer finish that catches every eye",
    price: "From $39",
    badge: "Popular",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover-TxPFdzvIHmsqN1T5pp1f2L1esyXjQF.webp",
    imageAlt: "Holographic stickers with rainbow shimmer effect showing Netflix, Virtual Reality, and Hendrix designs",
    badgeColor: "bg-purple-500 text-white",
  },
  {
    name: "Glitter Stickers",
    description: "Sparkle finish that makes your brand truly shine",
    price: "From $45",
    badge: "New",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobileCover-shmHmwHxY23QuiBihePBtiv3VBJ2Gn.jpg",
    imageAlt: "Glitter stickers on orange background with You Are Worth Everything, scream, and astronaut mule designs",
    badgeColor: "bg-yellow-500 text-foreground",
  },
  {
    name: "Clear Stickers",
    description: "Transparent background for a seamless look on any surface",
    price: "From $35",
    badge: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-StickerMuleTT-_16_9-oQl3OAj2a7RZj7Scj6wHRAg222Q3HL.webp",
    imageAlt: "Hand holding custom stickers on orange background, showing butterfly, flame sunglasses, and avocado skull stickers",
    badgeColor: "",
  },
  {
    name: "Custom Sticker Packs",
    description: "Mix any designs in one order — perfect for events & giveaways",
    price: "From $49",
    badge: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personalized-Custom-High-Quality-Vinyl-Stickers-Die-Cut-Adhesive-Decoration-Stickers-Y7A27V7S07Xj89zEEqMu53CcpdTlhm.webp",
    imageAlt: "Mixed pack of custom stickers including Hogslop Band, Refactor, emben and other brand stickers in a pile",
    badgeColor: "",
  },
  {
    name: "Free Sticker Samples",
    description: "Try before you buy — free samples shipped right to your door",
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
              onHoverStart={playPeel}
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
