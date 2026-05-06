"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { createClickSound, createSuccessSound } from "@/lib/sounds"
import { PlayMeButton } from "@/components/play-me-button"

export function CTASection() {
  const playClick = createClickSound()
  const playSuccess = createSuccessSound()

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-[2.5rem] overflow-hidden"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-web-Stickermule_-_169-gTixLqx96t4pDbrTvsn0Wo7KA1aTOQ.webp"
              alt=""
              fill
              className="object-cover opacity-20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
          </div>

          {/* Floating mascot sticker */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-40 h-40 hidden lg:block"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proof-Qry9TMI12cHokSjGKokiQEwabHwx46.png"
              alt="Sticker Mule mascot glitter sticker"
              width={160}
              height={160}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating glitter sticker collection */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [3, -3, 3] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-8 top-6 w-28 hidden xl:block opacity-80"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9721811975cc03bfefa60845915416ee-Zq4dmRYknauhP18saygyznVC70IbEf.jpg"
              alt="Glitter sticker collection thumbnail"
              width={112}
              height={112}
              className="w-full h-auto rounded-2xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 py-16 px-8 lg:px-20 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Start designing for free
            </motion.div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tight text-balance">
              Ready to create something{" "}
              <span className="underline decoration-white/40 decoration-wavy underline-offset-4">
                awesome
              </span>
              ?
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-lg text-pretty leading-relaxed">
              Join 350,000+ businesses creating custom stickers and merch.
              Free proofs, free shipping, and ridiculously fast turnaround.
            </p>
            <div className="mt-4">
              <PlayMeButton
                text="Ready to create something awesome? Join over 350,000 businesses creating custom stickers and merch with Sticker Mule. Free proofs, free shipping, and ridiculously fast turnaround. Start designing for free today — no credit card required."
                label="Hear this offer"
                variant="pill"
                className="bg-white/20 text-white hover:bg-white/30 border-white/30"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
              <Button
                size="lg"
                className="btn-press bg-white text-primary hover:bg-white/90 font-display font-black text-base px-8 py-6 rounded-full shadow-xl transition-all hover:scale-105 group"
                onClick={playSuccess}
              >
                Start Designing Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="btn-press bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-full transition-all"
                onClick={playClick}
              >
                Get Free Samples
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-white/60 text-sm">
              <span>No credit card required</span>
              <span aria-hidden="true">&bull;</span>
              <span>Free proofs</span>
              <span aria-hidden="true">&bull;</span>
              <span>Free worldwide shipping</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
