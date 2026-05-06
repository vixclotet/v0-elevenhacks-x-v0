"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FileCheck, HeadphonesIcon, Leaf, Zap, Shield, Palette, RefreshCw, Award } from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "Free proofs & artwork help",
    description: "Our design team reviews every order and sends a free proof before printing.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 human support",
    description: "Real people ready to help, not bots. Reach us anytime via chat, email, or phone.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly materials",
    description: "Sustainable inks and recyclable materials. Good for your brand and the planet.",
  },
  {
    icon: Zap,
    title: "Made fast in the USA",
    description: "Most orders ship within 4 days. Rush options available for urgent needs.",
  },
  {
    icon: Shield,
    title: "Quality guaranteed",
    description: "Not happy? We reprint your order or give you a full refund. No questions asked.",
  },
  {
    icon: Palette,
    title: "Pantone color matching",
    description: "Need exact brand colors? We match Pantone colors for perfect consistency.",
  },
  {
    icon: RefreshCw,
    title: "Easy reordering",
    description: "One click to reorder past designs. We keep your files safe forever.",
  },
  {
    icon: Award,
    title: "Industry-leading quality",
    description: "Premium materials and printing technology for stickers that last for years.",
  },
]

export function WhySection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground tracking-tight text-balance">
            Why Sticker Mule?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We obsess over the details so you don&apos;t have to. Here&apos;s what makes us different.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="group"
            >
              <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two-image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-C6ZIr4j6HUT72hbJUma3YeDgXE3xem.jpg"
              alt="Colorful assortment of custom stickers — mushrooms, bikes, smiley faces, optimist text, and various artistic designs"
              width={800}
              height={500}
              className="w-full object-cover h-64 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-StickerMuleTT-_16_9-oQl3OAj2a7RZj7Scj6wHRAg222Q3HL.webp"
              alt="Hand holding custom flame sunglasses sticker, with butterfly, avocado skull, and pixel art stickers on orange background"
              width={800}
              height={500}
              className="w-full object-cover h-64 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
