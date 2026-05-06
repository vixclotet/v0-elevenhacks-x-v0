"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star, Truck, FileCheck, Zap } from "lucide-react"
import { createClickSound } from "@/lib/sounds"
import { useMotion } from "@/components/motion-provider"

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

const floatingStickers = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-Stickermule_-_169-7xiYAkBhNMtrw4w9YO35xFK7Z4TBsi.webp",
    alt: "Sticker Mule brand on orange background with cute taco die-cut stickers",
    float: { y: [0, -8, 0], rotate: [-6, -4, -6] },
    floatDuration: 4,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proof-Qry9TMI12cHokSjGKokiQEwabHwx46.png",
    alt: "Sticker Mule holographic donkey mascot sticker with glitter border",
    float: { y: [0, -12, 0], rotate: [-5, 5, -5] },
    floatDuration: 5,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Die-Cut-Sticker-Printing-J6pKDHsfCLrArV8LLnRJoluFqjamt0.webp",
    alt: "Custom die-cut sticker samples including dog, logo, thank you, burger and burrito stickers",
    float: { y: [0, -6, 0], rotate: [3, 5, 3] },
    floatDuration: 6,
  },
]

export function Hero() {
  const { reduceMotion } = useMotion()
  const playClick = createClickSound()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax: hero bg elements move up slower than scroll
  const bgY = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -80])
  const imgY = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -40])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden bg-background"
    >
      {/* Parallax ambient background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 50% at 15% 55%, oklch(0.62 0.24 30 / 0.10) 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 85% 20%, oklch(0.75 0.15 200 / 0.08) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 70% 80%, oklch(0.87 0.09 165 / 0.07) 0%, transparent 50%)
            `,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Content ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 fill-primary" />
              4.7/5 from 350k+ verified reviews
            </motion.div>

            {/* Headline — Satoshi Black */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-black text-foreground leading-[1.0] tracking-tight text-balance">
              Custom{" "}
              <span className="text-primary">stickers</span>
              {" "}&amp; merch{" "}
              <span className="relative inline-block">
                <em className="not-italic text-primary">that kick ass.</em>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
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
              Fast, easy, and affordable custom printing. Trusted by 350,000+ businesses worldwide — with free shipping on every order.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6"
            >
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm"
                >
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
                className="btn-press bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-base px-8 py-6 rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all group"
                onClick={playClick}
              >
                Start Designing Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-press font-semibold text-base px-8 py-6 rounded-full border-2 hover:bg-primary/5 transition-all"
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
                  <div className="font-display text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Content — real product images ──────── */}
          <motion.div
            style={{ y: imgY }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main hero image */}
              <motion.div
                animate={reduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl holo-shine"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_1x-Yjddh7IW92UvnWIwuSSHuP5FqFaoJ8.jpg"
                  alt="Sticker Mule custom stickers spilling from a box — die-cut stickers, magnets, and custom merch"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                  priority
                />
              </motion.div>

              {/* Floating taco brand card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-6 lg:-left-12 w-52 rounded-2xl overflow-hidden border-4 border-card shadow-2xl cursor-pointer sticker-peel"
              >
                <motion.div
                  animate={reduceMotion ? {} : { y: floatingStickers[0].float.y, rotate: floatingStickers[0].float.rotate }}
                  transition={{ duration: floatingStickers[0].floatDuration, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={floatingStickers[0].src}
                    alt={floatingStickers[0].alt}
                    width={260}
                    height={146}
                    className="w-full object-cover aspect-video"
                  />
                </motion.div>
              </motion.div>

              {/* Floating holographic mascot sticker */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-6 -right-4 lg:-right-10 w-24 h-24 hover-wiggle"
              >
                <motion.div
                  animate={reduceMotion ? {} : { y: floatingStickers[1].float.y, rotate: floatingStickers[1].float.rotate }}
                  transition={{ duration: floatingStickers[1].floatDuration, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={floatingStickers[1].src}
                    alt={floatingStickers[1].alt}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>

              {/* Floating die-cut samples card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: 4 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-16 -right-6 lg:-right-10 w-36 rounded-2xl overflow-hidden border-4 border-card shadow-2xl cursor-pointer sticker-peel"
              >
                <motion.div
                  animate={reduceMotion ? {} : { y: floatingStickers[2].float.y, rotate: floatingStickers[2].float.rotate }}
                  transition={{ duration: floatingStickers[2].floatDuration, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={floatingStickers[2].src}
                    alt={floatingStickers[2].alt}
                    width={180}
                    height={180}
                    className="w-full object-cover aspect-square"
                  />
                </motion.div>
              </motion.div>

              {/* Proof-ready badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute top-1/2 -right-4 lg:-right-8 -translate-y-1/2 bg-card rounded-2xl shadow-xl p-3 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Proof Ready</div>
                    <div className="text-xs text-muted-foreground">in under 4 hrs</div>
                  </div>
                </div>
              </motion.div>

              {/* Free shipping badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 left-8 bg-primary text-primary-foreground rounded-2xl shadow-xl px-4 py-2"
              >
                <div className="text-sm font-bold">Free Worldwide Shipping</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
