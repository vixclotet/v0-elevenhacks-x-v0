"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star, Truck, FileCheck, Zap } from "lucide-react"
import { createClickSound } from "@/lib/sounds"

const features = [
  { icon: Truck, text: "Free worldwide shipping" },
  { icon: FileCheck, text: "Free proofs" },
  { icon: Zap, text: "Ships in 4 days" },
]

const stats = [
  { value: "350K+", label: "Happy businesses" },
  { value: "100M+", label: "Stickers shipped" },
  { value: "4.7★", label: "Average rating" },
]

export function Hero() {
  const playClick = createClickSound()

  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden bg-background">
      {/* Subtle bg texture */}
      <div className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.62 0.24 30 / 0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, oklch(0.75 0.15 200 / 0.06) 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 fill-primary" />
              4.7/5 from 350k+ reviews
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] text-balance">
              Custom stickers{" "}
              <span className="relative inline-block">
                <span className="text-primary">&amp; merch</span>
              </span>
              {" "}that actually{" "}
              <span className="relative">
                <span className="text-primary italic">kick ass</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/30 rounded-full origin-left"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Fast, easy, and affordable custom printing. Trusted by 350,000+ businesses worldwide.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6"
            >
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all group hover:scale-105"
                onClick={playClick}
              >
                Start Designing Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold text-base px-8 py-6 rounded-full border-2 hover:bg-primary/5 transition-all"
                onClick={playClick}
              >
                Get Free Samples
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Real Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main hero image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_1x-Yjddh7IW92UvnWIwuSSHuP5FqFaoJ8.jpg"
                alt="Sticker Mule custom stickers in a box - showcasing die-cut stickers, magnets, and custom merch"
                width={600}
                height={450}
                className="w-full object-cover"
                priority
              />
            </motion.div>

            {/* Floating secondary image - taco stickers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 w-44 h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-card cursor-pointer"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-Stickermule_-_169-gTixLqx96t4pDbrTvsn0Wo7KA1aTOQ.webp"
                alt="Custom taco die-cut stickers on orange background"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating badge - Proof Ready */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-4 -right-4 lg:-right-8 bg-card rounded-2xl shadow-xl p-3 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Proof Ready</div>
                  <div className="text-xs text-muted-foreground">in 4 minutes</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge - Free Shipping */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -top-4 left-8 bg-primary text-primary-foreground rounded-2xl shadow-xl px-4 py-2"
            >
              <div className="text-sm font-bold">Free Worldwide Shipping</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
