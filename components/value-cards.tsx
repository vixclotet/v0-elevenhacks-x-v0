"use client"

import { motion } from "framer-motion"
import { Sparkles, Clock, Truck, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Design in seconds with AI",
    description: "Our AI-powered studio removes backgrounds, upscales images, and creates vectors instantly.",
    color: "from-primary to-orange-600",
  },
  {
    icon: Clock,
    title: "Real proofs in minutes",
    description: "Get free, high-quality proofs of your design before you commit. No surprises.",
    color: "from-accent to-cyan-600",
  },
  {
    icon: Truck,
    title: "Free worldwide shipping",
    description: "Every order ships free. Yes, everywhere. No minimum order required.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Pro selling tools",
    description: "Turn your designs into a business with our marketplace and seller dashboard.",
    color: "from-purple-500 to-violet-600",
  },
]

export function ValueCards() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why 350,000+ businesses choose us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From design to delivery, we make custom printing ridiculously easy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-background rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
