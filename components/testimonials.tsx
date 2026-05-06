"use client"

import { motion } from "framer-motion"
import { Star, Quote, TrendingUp } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Pixel Art Co",
    content: "I started selling stickers as a side hustle and now make over $8K/month. The quality and turnaround time are unmatched.",
    avatar: "SC",
    earnings: "$8,200/mo",
    rating: 5,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Marcus Johnson",
    role: "Designer at Stripe",
    content: "We use Sticker Mule for all our conference swag. The AI design tools saved us hours of work. Simply the best.",
    avatar: "MJ",
    rating: 5,
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Etsy Top Seller",
    content: "Free shipping worldwide is a game changer. My customers love the quality and I love the profit margins!",
    avatar: "ER",
    earnings: "$12,500/mo",
    rating: 5,
    color: "from-primary to-orange-600",
  },
  {
    name: "David Kim",
    role: "Brand Manager, Notion",
    content: "The proofs are incredibly accurate. What we see is exactly what we get. No more guessing games with printers.",
    avatar: "DK",
    rating: 5,
    color: "from-accent to-cyan-600",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Seller Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Creators earning with Sticker Mule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of designers and businesses turning their creativity into profit.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-background rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-muted-foreground/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Earnings Badge */}
                {testimonial.earnings && (
                  <div className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.earnings}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "$50M+", label: "Paid to creators" },
            { value: "350K+", label: "Happy businesses" },
            { value: "4.7", label: "Star rating" },
            { value: "100M+", label: "Stickers shipped" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
