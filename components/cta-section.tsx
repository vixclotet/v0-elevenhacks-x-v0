"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 rounded-[2.5rem] p-8 lg:p-16 overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          {/* Floating sticker elements */}
          <motion.div
            animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 right-10 w-20 h-20 bg-primary rounded-2xl opacity-60 hidden lg:block"
            style={{ transform: "rotate(-15deg)" }}
          />
          <motion.div
            animate={{ rotate: [0, -5, 0], y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 right-32 w-14 h-14 bg-accent rounded-xl opacity-40 hidden lg:block"
            style={{ transform: "rotate(10deg)" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Start designing for free
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Ready to create something{" "}
              <span className="text-primary">awesome</span>?
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto text-pretty">
              Join 350,000+ businesses creating custom stickers and merch. 
              Free proofs, free shipping, and ridiculously fast turnaround.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group"
              >
                Start Designing Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Get Free Samples
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-sm">
              <span>✓ No credit card required</span>
              <span>✓ Free proofs</span>
              <span>✓ Free worldwide shipping</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
