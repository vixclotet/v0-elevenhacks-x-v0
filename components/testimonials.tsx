"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote, TrendingUp } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Pixel Art Co",
    content: "I started selling stickers as a side hustle and now make over $8K/month. The quality and turnaround time are unmatched.",
    initials: "SC",
    earnings: "$8,200/mo",
    rating: 5,
    avatarColor: "from-pink-500 to-rose-500",
  },
  {
    name: "Marcus Johnson",
    role: "Designer at Stripe",
    content: "We use Sticker Mule for all our conference swag. The AI design tools saved us hours of work. Simply the best.",
    initials: "MJ",
    rating: 5,
    avatarColor: "from-purple-500 to-violet-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Etsy Top Seller",
    content: "Free shipping worldwide is a game changer. My customers love the quality and I love the profit margins!",
    initials: "ER",
    earnings: "$12,500/mo",
    rating: 5,
    avatarColor: "from-primary to-orange-600",
  },
  {
    name: "David Kim",
    role: "Brand Manager, Notion",
    content: "The proofs are incredibly accurate. What we see is exactly what we get. No more guessing games with printers.",
    initials: "DK",
    rating: 5,
    avatarColor: "from-cyan-500 to-blue-500",
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
          <h2 className="text-3xl lg:text-4xl font-black text-foreground">
            Creators earning with Sticker Mule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of designers and businesses turning their creativity into profit.
          </p>
        </motion.div>

        {/* Two column layout: testimonials + glitter stickers image */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Testimonials */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-background rounded-3xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <Quote className="absolute top-5 right-5 w-7 h-7 text-muted-foreground/20" />

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-5">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>

                  {testimonial.earnings && (
                    <div className="bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-bold flex-shrink-0">
                      {testimonial.earnings}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: product images */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobileCover-shmHmwHxY23QuiBihePBtiv3VBJ2Gn.jpg"
                alt="Glitter stickers collection on orange background - You are worth everything, vintage looks good on you, and astronaut mule stickers"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9721811975cc03bfefa60845915416ee-Zq4dmRYknauhP18saygyznVC70IbEf.jpg"
                alt="Glitter sticker video thumbnail showing hand holding a holographic unicorn sticker"
                width={600}
                height={340}
                className="w-full object-cover"
              />
            </motion.div>
          </div>
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
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
