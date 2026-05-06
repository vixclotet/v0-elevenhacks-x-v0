"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles, Clock, Truck, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Design in seconds with AI",
    description: "Our AI-powered studio removes backgrounds, upscales images, and creates vectors instantly.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "Real proofs in minutes",
    description: "Get free, high-quality proofs of your design before you commit. No surprises.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Truck,
    title: "Free worldwide shipping",
    description: "Every order ships free. Yes, everywhere. No minimum order required.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: TrendingUp,
    title: "Pro selling tools",
    description: "Turn your designs into a business with our marketplace and seller dashboard.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
]

export function ValueCards() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage-share-image-en-Pg32UVzioeBGLytfzAdfi053guK9Ui.png"
                alt="Buy and sell custom products with Sticker Mule - showing stickers and custom t-shirt"
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
            {/* Floating donkey mascot */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 lg:-right-8 w-28 h-28"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proof-Qry9TMI12cHokSjGKokiQEwabHwx46.png"
                alt="Sticker Mule donkey mascot sticker with holographic glitter border"
                width={112}
                height={112}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              Why 350,000+ businesses choose us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              From design to delivery, we make custom printing ridiculously easy.
            </p>

            <div className="mt-10 space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-2xl ${value.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <value.icon className={`w-5 h-5 ${value.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wide image banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover-1-iEBpLsjWQPXUTbVQbF4VH4tXLvkXuD.webp"
            alt="Wide variety of custom die-cut stickers featuring artistic designs - shoes, error message, breakfast, and more"
            width={1400}
            height={400}
            className="w-full object-cover max-h-72"
          />
        </motion.div>
      </div>
    </section>
  )
}
