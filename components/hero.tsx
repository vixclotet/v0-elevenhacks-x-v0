"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star, Truck, Zap, FileCheck } from "lucide-react"

const trustLogos = [
  "GitHub", "Spotify", "Nike", "Coca-Cola", "Airbnb", "Stripe", "Slack", "Dropbox"
]

const features = [
  { icon: Truck, text: "Free worldwide shipping" },
  { icon: FileCheck, text: "Free proofs" },
  { icon: Zap, text: "Ships in days" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        
        {/* Floating stickers */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-2xl hidden lg:block"
          style={{ transform: "rotate(-12deg)" }}
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-64 right-[8%] w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl shadow-xl hidden lg:block"
          style={{ transform: "rotate(8deg)" }}
        />
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-48 left-[10%] w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-xl hidden lg:block"
          style={{ transform: "rotate(-5deg)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Custom stickers & merch that{" "}
              <span className="text-primary">actually kick ass</span>
            </h1>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group"
              >
                Start Designing Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-semibold text-lg px-8 py-6 rounded-full border-2"
              >
                Shop Products
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                Get Free Samples
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main sticker showcase */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Stacked stickers effect */}
                  <div className="absolute -top-4 -left-4 w-64 h-64 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl transform rotate-6 shadow-2xl" />
                  <div className="absolute -top-2 -left-2 w-64 h-64 bg-gradient-to-br from-accent to-accent/80 rounded-3xl transform rotate-3 shadow-xl" />
                  <div className="relative w-64 h-64 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="text-center text-primary-foreground">
                      <div className="text-6xl font-bold mb-2">M</div>
                      <div className="text-sm font-semibold opacity-90">YOUR LOGO HERE</div>
                    </div>
                    {/* Glossy effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/4 bg-card rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Proof Ready</div>
                    <div className="text-xs text-muted-foreground">in 4 minutes</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-1/4 bg-card rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Free Shipping</div>
                    <div className="text-xs text-muted-foreground">Worldwide</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 lg:mt-32"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by 350,000+ businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-muted-foreground/50 font-bold text-lg hover:text-muted-foreground transition-colors cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
