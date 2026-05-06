"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"

const products = [
  {
    name: "Die-Cut Stickers",
    description: "Custom shaped stickers cut to any shape",
    price: "From $29",
    badge: "Best Seller",
    colors: "from-primary via-orange-500 to-red-500",
    icon: "🎯",
  },
  {
    name: "Clear Stickers",
    description: "Transparent stickers for a clean look",
    price: "From $35",
    badge: null,
    colors: "from-accent via-cyan-400 to-blue-500",
    icon: "✨",
  },
  {
    name: "Holographic Stickers",
    description: "Eye-catching rainbow shine effect",
    price: "From $39",
    badge: "Popular",
    colors: "from-purple-500 via-pink-500 to-rose-500",
    icon: "🌈",
  },
  {
    name: "Custom Labels",
    description: "Professional labels for your products",
    price: "From $25",
    badge: null,
    colors: "from-green-500 via-emerald-500 to-teal-500",
    icon: "🏷️",
  },
  {
    name: "Magnets",
    description: "Durable magnetic prints",
    price: "From $45",
    badge: null,
    colors: "from-secondary via-slate-700 to-slate-900",
    icon: "🧲",
  },
  {
    name: "Buttons & Pins",
    description: "Wearable custom buttons",
    price: "From $19",
    badge: "New",
    colors: "from-amber-500 via-orange-500 to-red-500",
    icon: "🔘",
  },
]

export function BestSellers() {
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Best Sellers
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Our most popular products, loved by millions
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 font-semibold group self-start sm:self-auto">
            View All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300 sticker-peel"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-bold
                    ${product.badge === "Best Seller" ? "bg-primary text-primary-foreground" : ""}
                    ${product.badge === "Popular" ? "bg-purple-500 text-white" : ""}
                    ${product.badge === "New" ? "bg-accent text-foreground" : ""}
                  `}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Preview Button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>

              {/* Image Area */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${product.colors} relative overflow-hidden`}>
                {/* Sticker Preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ rotate: -5 }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    className="w-32 h-32 bg-white/90 backdrop-blur rounded-2xl shadow-2xl flex items-center justify-center text-5xl"
                  >
                    {product.icon}
                  </motion.div>
                </div>
                
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">
                    {product.price}
                  </span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">
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
