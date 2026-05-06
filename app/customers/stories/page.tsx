"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Quote, TrendingUp, Users, Package, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  NikeLogo,
  GoogleLogo,
  NetflixLogo,
  GitHubLogo,
  MicrosoftLogo,
  DropboxLogo,
  LululemonLogo,
  FacebookLogo,
  BRAND_LOGOS,
  CAROUSEL_BRANDS,
  type BrandName,
} from "@/components/brand-logos"

const stats = [
  { value: "350K+", label: "Businesses served", icon: Users },
  { value: "100M+", label: "Products shipped", icon: Package },
  { value: "4.7★", label: "Average rating", icon: Star },
  { value: "98%", label: "On-time delivery", icon: TrendingUp },
]

// Brand-attributed stat showcase (inspired by Vercel/Jitter customer pages)
const brandStats = [
  {
    stat: "20 days",
    detail: "saved per quarter on merch production",
    brand: "Nike" as BrandName,
    accent: "#111111",
  },
  {
    stat: "200%",
    detail: "increase in swag engagement at conferences",
    brand: "Google" as BrandName,
    accent: "#4285F4",
  },
  {
    stat: "48hrs",
    detail: "sell-through on every limited drop",
    brand: "Netflix" as BrandName,
    accent: "#E50914",
  },
  {
    stat: "3×",
    detail: "more community UGC with sticker kits",
    brand: "GitHub" as BrandName,
    accent: "#24292E",
  },
]

const caseStudies = [
  {
    brand: "Nike",
    brandLogo: "Nike" as BrandName,
    category: "Global Sportswear",
    headline: "How Nike's design team ships unlimited swag in days, not weeks",
    stat: { value: "20 days", label: "Saved per quarter" },
    description:
      "Nike's in-house design team uses Sticker Mule to turn concepts into finished die-cut stickers and merch in under 72 hours. With free proofs and free shipping, their creative pipeline has never moved faster.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-qoGZTj5tVt9rBJH0E3PncprXpaSHlk.jpg",
    imageAlt: "Custom die-cut brand stickers including Nike-style sporty designs",
    tags: ["Die-Cut Stickers", "Merch", "Swag Kits"],
  },
  {
    brand: "Google",
    brandLogo: "Google" as BrandName,
    category: "Technology / Developer Events",
    headline: "Google Developer Advocates use Sticker Mule for every global event",
    stat: { value: "200%", label: "More swag engagement" },
    description:
      "The Google DevRel team ships thousands of custom sticker packs to developer summits and hackathons worldwide. Every pack ships with perfect color accuracy and zero bleed — first time, every time.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery_1-oG0vAOWCk2fKfHwsQBy0XR8crf9I4j.webp",
    imageAlt: "Colorful custom sticker packs from a major tech brand developer events",
    tags: ["Sticker Packs", "Developer Events", "Global Shipping"],
  },
  {
    brand: "Netflix",
    brandLogo: "Netflix" as BrandName,
    category: "Entertainment / Creator Programs",
    headline: "Netflix Creator Program merch kits sell out in under 48 hours",
    stat: { value: "48hrs", label: "Sell-through time" },
    description:
      "Netflix's creator program ships merch kits to thousands of top creators worldwide. Custom die-cut stickers and holographic labels make every unboxing a shareable moment — driving millions in organic reach.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-TkuADbbED2vDJ6cGUNJ4mja54qF4ev.jpg",
    imageAlt: "Premium custom holographic sticker kit for a streaming brand",
    tags: ["Holographic Stickers", "Creator Kits", "Influencer Merch"],
  },
  {
    brand: "GitHub",
    brandLogo: "GitHub" as BrandName,
    category: "Developer Platform",
    headline: "GitHub Universe — 100,000+ stickers shipped to developers every year",
    stat: { value: "100K+", label: "Stickers per event" },
    description:
      "GitHub has partnered with Sticker Mule for their annual Universe developer conference for 6+ years. Die-cut stickers, keychains, and patches have become the most sought-after swag in the developer community.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sm-keychains4-KHF95C6OZBSRs9yP3q6lslbDdE2tj4.jpg",
    imageAlt: "Developer-themed custom keychains and die-cut stickers",
    tags: ["Die-Cut Stickers", "Keychains", "Developer Swag"],
  },
  {
    brand: "Microsoft",
    brandLogo: "Microsoft" as BrandName,
    category: "Enterprise Software",
    headline: "Microsoft Build sticker kits prove print quality at enterprise scale",
    stat: { value: "50K+", label: "Kits per event" },
    description:
      "Microsoft's event marketing team relies on Sticker Mule for all major conferences — Build, Ignite, and Inspire. Enterprise-scale orders with consistent color accuracy, delivered on time, every time.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery_3-u2lJaQ8AaeMb6ANBnwQyKZrdZJrmpe.jpg",
    imageAlt: "Premium branded sticker sheets and custom merch packs for enterprise events",
    tags: ["Sticker Sheets", "Enterprise", "Event Merch"],
  },
  {
    brand: "lululemon",
    brandLogo: "lululemon" as BrandName,
    category: "Lifestyle / Wellness Brand",
    headline: "lululemon community ambassador kits arrive perfect, two days early",
    stat: { value: "2,000+", label: "Kits per campaign" },
    description:
      "lululemon's global ambassador program uses Sticker Mule to add premium die-cut stickers to every onboarding kit. Ambassadors in 30+ countries receive identical, flawless quality — creating a unified brand experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobileCover-shmHmwHxY23QuiBihePBtiv3VBJ2Gn.jpg",
    imageAlt: "Premium lifestyle brand custom sticker kit with clean die-cut packaging",
    tags: ["Die-Cut Stickers", "Ambassador Kits", "Global Shipping"],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 22 } },
}

export default function CustomerStoriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, var(--accent) 0%, transparent 45%)`
            }}
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 font-display">
                <Star className="w-3.5 h-3.5 fill-primary" />
                Customer Stories
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight text-balance">
                Real brands.{" "}
                <span className="text-primary">Real results.</span>
              </h1>
              <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-xl">
                From indie skate brands to Fortune 500 companies — see how 350,000+ businesses use Sticker Mule to grow, delight, and stick around.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="btn-press bg-primary hover:bg-primary-dark text-white font-bold font-display rounded-full px-8 py-6 text-base shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all group">
                  Start Your Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/customers/wall-of-love">
                  <Button variant="outline" className="btn-press border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold font-display">
                    Wall of Love
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Trusted-by logo strip ─────────────────────────── */}
        <section className="bg-background border-b border-border py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.22em] mb-10">
              Stickers trusted by teams at
            </p>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5 sm:gap-x-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {CAROUSEL_BRANDS.map((name, i) => {
                const Logo = BRAND_LOGOS[name]
                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
                    title={name}
                  >
                    <Logo className="h-7 w-auto max-w-[110px]" />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────── */}
        <section className="bg-card border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center lg:items-start gap-2"
                >
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-black text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand stat attribution grid ───────────────────── */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Impact at Scale</span>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground tracking-tight text-balance">
                The brands that trust us — and the numbers behind them.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {brandStats.map((item, i) => {
                const Logo = BRAND_LOGOS[item.brand]
                return (
                  <motion.div
                    key={item.brand}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 22 }}
                    className="bg-card rounded-3xl border border-border p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
                  >
                    <Logo className="h-8 w-auto max-w-[120px]" />
                    <div>
                      <div className="font-display text-4xl font-black text-foreground group-hover:text-primary transition-colors leading-none mb-2">
                        {item.stat}
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">{item.detail}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Case studies grid ─────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                Case Studies
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Dive deep into how leading brands use Sticker Mule to create lasting impact.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {caseStudies.map((study) => {
                const Logo = BRAND_LOGOS[study.brandLogo]
                return (
                  <motion.article
                    key={study.brand}
                    variants={item}
                    className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 sticker-peel flex flex-col"
                  >
                    {/* Image */}
                    <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                      <Image
                        src={study.image}
                        alt={study.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Stat pill */}
                      <div className="absolute top-4 right-4 bg-primary text-white rounded-2xl px-3 py-1.5 shadow-lg">
                        <div className="font-display text-lg font-black leading-none">{study.stat.value}</div>
                        <div className="text-[10px] font-medium opacity-90">{study.stat.label}</div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Brand logo */}
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Logo className="h-6 w-auto max-w-[100px] opacity-80" />
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {study.category}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-black text-foreground leading-snug group-hover:text-primary transition-colors mb-3">
                        {study.headline}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read full story</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Pull quote ────────────────────────────────────── */}
        <section className="bg-primary py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
            <blockquote className="font-display text-3xl lg:text-4xl font-black text-white leading-tight text-balance">
              &ldquo;Sticker Mule makes it stupid easy to produce high-quality merch that our community actually wants. The turnaround is unreal.&rdquo;
            </blockquote>
            <div className="mt-6 text-white/70 font-medium">
              — Emily R., Brand Manager · Nike Design Team
            </div>
          </div>
        </section>

        {/* ── CTA to Wall of Love ───────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="font-display text-4xl font-black text-foreground mb-4 text-balance">
                Want to see what real customers are saying?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Browse thousands of organic social posts and reviews on the Wall of Love.
              </p>
              <Link href="/customers/wall-of-love">
                <Button className="btn-press bg-primary hover:bg-primary-dark text-white font-bold font-display rounded-full px-10 py-6 text-base shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all group">
                  Visit the Wall of Love
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
