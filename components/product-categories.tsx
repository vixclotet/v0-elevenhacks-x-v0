"use client"

import { useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { createHoverSound, createClickSound } from "@/lib/sounds"
import { useAudio } from "@/components/audio-provider"
import { PlayMeButton } from "@/components/play-me-button"

/**
 * ProductCategories — neubrutalist bento grid showcasing all 7 Sticker Mule
 * product families: Stickers, Labels, Magnets, Buttons, Packaging, Apparel, Acrylics.
 *
 * Layout:
 *   Row 1: Stickers (large, 2-col) | Labels | Magnets
 *   Row 2: Buttons & Pins          | Packaging (large, 2-col) | Apparel
 *   Row 3: Acrylics (full-width banner)
 */

const categories = [
  {
    id: "stickers",
    name: "Stickers",
    tagline: "Die-cut. Holographic. Glitter. Clear.",
    description:
      "Custom stickers cut to any shape, in any finish. Die-cut, holographic, glitter, clear, and more — all with free proofs and free shipping.",
    price: "From $29",
    featured: true, // spans 2 columns
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover-1-iEBpLsjWQPXUTbVQbF4VH4tXLvkXuD.webp",
    imageAlt:
      "Assorted custom die-cut stickers on white background — shoe, error window, breakfast, and artistic designs",
    accent: "bg-primary",
    tag: "BEST SELLER",
    tagStyle: "nb-tag-primary",
  },
  {
    id: "labels",
    name: "Labels",
    tagline: "For bottles, jars, boxes & beyond.",
    description:
      "Waterproof custom labels with permanent adhesive. Perfect for packaging, products, and branding.",
    price: "From $32",
    featured: false,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-Stickermule_-_169-7xiYAkBhNMtrw4w9YO35xFK7Z4TBsi.webp",
    imageAlt:
      "Custom product labels on orange background, showing taco die-cut label designs",
    accent: "bg-accent",
    tag: "POPULAR",
    tagStyle: "nb-tag",
  },
  {
    id: "magnets",
    name: "Magnets",
    tagline: "Fridge-ready. Boardroom-ready.",
    description:
      "Full-color custom magnets for fridges, whiteboards, cars, and more. Durable and vibrant.",
    price: "From $35",
    featured: false,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proof-Qry9TMI12cHokSjGKokiQEwabHwx46.png",
    imageAlt:
      "Sticker Mule holographic donkey mascot magnet with glitter border",
    accent: "bg-mint",
    tag: "NEW",
    tagStyle: "nb-tag-cream",
  },
  {
    id: "buttons",
    name: "Buttons & Pins",
    tagline: "Wearable art for every lapel.",
    description:
      "Custom button badges in multiple sizes. Great for events, merch, and brand promotion. Lightweight and bold.",
    price: "From $25",
    featured: false,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gratis-stickermule-pegatinas-gratis-a-domicilio-296x250-89p8GiXzLupujE1ZXCuqjBNWtJACF9.jpg",
    imageAlt:
      "Custom button pins collection on orange background",
    accent: "bg-secondary",
    tag: "POPULAR",
    tagStyle: "nb-tag",
  },
  {
    id: "packaging",
    name: "Packaging",
    tagline: "Poly mailers, boxes & tape.",
    description:
      "Branded packaging that makes every unboxing an experience. Custom poly mailers, boxes, tissue paper, and tape — all printed to your spec.",
    price: "From $55",
    featured: true, // spans 2 columns
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/590fca218f2cd426dcbe24e23636ddc7-M6p9ioAQu0gFUEBqlBe75NiR9O1LIV.jpg",
    imageAlt:
      "Custom branded sticker packs and packaging — retail-ready sticker pack with burger and kickflip designs",
    accent: "bg-primary",
    tag: "E-COMM FAVOURITE",
    tagStyle: "nb-tag-primary",
  },
  {
    id: "apparel",
    name: "Apparel",
    tagline: "Tees, hoodies & hats — your brand, worn.",
    description:
      "Custom printed apparel with vibrant full-color prints. T-shirts, hoodies, and hats with the same Sticker Mule quality guarantee.",
    price: "From $18",
    featured: false,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage-share-image-en-Pg32UVzioeBGLytfzAdfi053guK9Ui.png",
    imageAlt:
      "Custom printed t-shirt and apparel on orange Sticker Mule background",
    accent: "bg-mint",
    tag: "NEW",
    tagStyle: "nb-tag-cream",
  },
  {
    id: "acrylics",
    name: "Acrylics",
    tagline: "Keychains, standees & signs.",
    description:
      "Crystal-clear acrylic products with full-color UV printing and protective film. Keychains, standees, and custom signs that stand out.",
    price: "From $59",
    featured: false, // full-width banner row
    banner: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sm-keychains4-KHF95C6OZBSRs9yP3q6lslbDdE2tj4.jpg",
    imageAlt:
      "Sticker Mule acrylic keychain featuring a monkey skateboarding with protective film card",
    accent: "bg-foreground",
    tag: "PREMIUM",
    tagStyle: "nb-tag-cream",
  },
]

const VOICE_INTRO =
  "Our product catalogue: Stickers in any finish from $29. Custom labels for your products from $32. Magnets for fridges and boards from $35. Button pins for events and merch from $25. Branded packaging from $55. Custom apparel from $18. And acrylic keychains and standees from $59. All with free proofs and free worldwide shipping."

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) {
  const { speak, voiceEnabled } = useAudio()
  const playHover = createHoverSound()
  const playClick = createClickSound()

  const handleHover = useCallback(() => {
    playHover()
    if (voiceEnabled) {
      speak(`${category.name}. ${category.description} Starting at ${category.price}.`)
    }
  }, [voiceEnabled, speak, playHover, category])

  if (category.banner) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06, type: "spring", stiffness: 200, damping: 22 }}
        onHoverStart={handleHover}
        onClick={playClick}
        className="col-span-full nb-card overflow-hidden cursor-pointer group"
      >
        <div className="grid md:grid-cols-2 items-center">
          {/* Text side */}
          <div className="p-8 lg:p-12 nb-dot-grid">
            <span className={`nb-tag ${category.tagStyle} mb-4 inline-block`}>
              {category.tag}
            </span>
            <h3 className="font-display text-4xl lg:text-5xl font-black text-foreground mt-3 tracking-tight">
              {category.name}
            </h3>
            <p className="mt-1 text-muted-foreground font-mono text-sm tracking-wide uppercase">
              {category.tagline}
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed max-w-sm">
              {category.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-display font-black text-2xl text-foreground">
                {category.price}
              </span>
              <button
                className="nb-btn bg-primary text-primary-foreground font-bold text-sm px-6 py-2 inline-flex items-center gap-2 group-hover:bg-primary-dark transition-colors"
                onClick={playClick}
                aria-label={`Customize ${category.name}`}
              >
                Customize
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
          {/* Image side */}
          <div className="relative h-64 md:h-full min-h-[280px] border-l-2 border-foreground">
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 200, damping: 22 }}
      onHoverStart={handleHover}
      onClick={playClick}
      className={`nb-card overflow-hidden cursor-pointer group ${category.featured ? "md:col-span-2" : ""}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden border-b-2 border-foreground ${category.featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dot-grid overlay for texture */}
        <div className="absolute inset-0 nb-dot-grid-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className={`nb-tag ${category.tagStyle}`}>{category.tag}</span>
            <h3 className="font-display text-xl font-black text-foreground mt-2 tracking-tight">
              {category.name}
            </h3>
            <p className="text-muted-foreground text-xs font-mono tracking-wide uppercase mt-0.5">
              {category.tagline}
            </p>
          </div>
          <ArrowUpRight
            className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
            aria-hidden="true"
          />
        </div>

        <p className="mt-3 text-foreground/70 text-sm leading-relaxed line-clamp-2">
          {category.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display font-black text-lg text-foreground">
            {category.price}
          </span>
          <button
            className="nb-btn bg-foreground text-background font-bold text-xs px-4 py-1.5"
            onClick={(e) => { e.stopPropagation(); playClick() }}
            aria-label={`Customize ${category.name}`}
          >
            Customize
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function ProductCategories() {
  // Separate banner from grid cards
  const gridCategories = categories.filter((c) => !c.banner)
  const bannerCategory = categories.find((c) => c.banner)

  return (
    <section className="py-20 lg:py-32 bg-muted nb-dot-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — neubrutalist editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              {/* NB section label */}
              <div className="nb-tag nb-tag-primary inline-block mb-4">All Products</div>
              <h2 className="font-display text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none text-balance">
                Everything you
                <br />
                need to brand up.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
                Seven product families. One platform. Free proofs on every order — stickers, labels,
                magnets, buttons, packaging, apparel, and acrylics.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:items-end flex-shrink-0">
              <PlayMeButton
                text={VOICE_INTRO}
                label="Hear all products"
                variant="pill"
              />
              <div className="nb-tag-cream nb-tag">
                Free Worldwide Shipping on All Orders
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento grid — 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground">
          {gridCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`border-b-2 border-r-2 border-foreground ${cat.featured ? "md:col-span-2" : ""}`}
            >
              <CategoryCard category={cat} index={i} />
            </div>
          ))}
        </div>

        {/* Acrylics full-width banner below grid */}
        {bannerCategory && (
          <div className="border-2 border-t-0 border-foreground">
            <CategoryCard category={bannerCategory} index={gridCategories.length} />
          </div>
        )}
      </div>
    </section>
  )
}
