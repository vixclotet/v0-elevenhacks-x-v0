"use client"

import { motion } from "framer-motion"
import { 
  FileCheck, 
  HeadphonesIcon, 
  Leaf, 
  Zap, 
  Shield, 
  Palette,
  RefreshCw,
  Award
} from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "Free proofs & artwork help",
    description: "Our design team reviews every order and sends you a free proof before printing.",
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
    description: "Not happy? We&apos;ll reprint your order or give you a full refund. No questions.",
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
    description: "Premium materials and printing technology for stickers that last.",
  },
]

export function WhySection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/5 via-transparent to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why Sticker Mule?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We obsess over the details so you don&apos;t have to. Here&apos;s what makes us different.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group text-center lg:text-left"
            >
              {/* Icon */}
              <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
