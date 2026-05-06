"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Quote, TrendingUp, Users, Package, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const stats = [
  { value: "350K+", label: "Businesses served", icon: Users },
  { value: "100M+", label: "Products shipped", icon: Package },
  { value: "4.7★", label: "Average rating", icon: Star },
  { value: "98%", label: "On-time delivery", icon: TrendingUp },
]

// Official logos from the provided carousel image
const featuredLogos = [
  {
    name: "lululemon",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lululemon_Athletica_logo.svg/512px-Lululemon_Athletica_logo.svg.png",
    dark: false,
  },
  {
    name: "Nike",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/512px-Logo_NIKE.svg.png",
    dark: true,
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    dark: false,
  },
  {
    name: "Dropbox",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dropbox_Logo_dropbox.svg/512px-Dropbox_Logo_dropbox.svg.png",
    dark: false,
  },
  {
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
    dark: false,
  },
  {
    name: "Facebook",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/512px-Facebook_Logo_%282019%29.png",
    dark: false,
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    dark: false,
  },
  {
    name: "GitHub",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/512px-GitHub_Invertocat_Logo.svg.png",
    dark: true,
  },
]

const caseStudies = [
  {
    brand: "ShelterLuv",
    category: "Animal Welfare Tech",
    headline: "How ShelterLuv used custom stickers to grow their shelter network by 200%",
    stat: { value: "200%", label: "Network growth" },
    description:
      "ShelterLuv powers over 1,200 animal shelters across the US. They turned to Sticker Mule for custom die-cut stickers to ship with every new shelter onboarding kit, boosting brand recognition and community loyalty.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-qoGZTj5tVt9rBJH0E3PncprXpaSHlk.jpg",
    imageAlt: "ShelterLuv branded dog stickers including Shelterluv mascot, pilot puppy, and Downtown Threads designs",
    tags: ["Die-Cut Stickers", "Non-Profit", "Brand Kits"],
    logo: "ShelterLuv",
  },
  {
    brand: "Hope College",
    category: "Higher Education",
    headline: "Hope College ships Class of 2024 sticker packs to 3,400 incoming freshmen every year",
    stat: { value: "3,400", label: "Packs per year" },
    description:
      "The Holland, Michigan campus uses Sticker Mule for their annual orientation kits. Custom die-cut and rounded-corner stickers are now a beloved tradition — students trade and collect them for all four years.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery_3-u2lJaQ8AaeMb6ANBnwQyKZrdZJrmpe.jpg",
    imageAlt: "Hope College Class of 2024 sticker packs and Maritime College anchor sticker on a wooden desk",
    tags: ["Custom Sticker Packs", "Education", "Events"],
    logo: "Hope College",
  },
  {
    brand: "Ohio State University",
    category: "Major University Athletics",
    headline: "Big Ten champion — and 50,000 stickers to match the energy of every game day",
    stat: { value: "50K+", label: "Stickers per season" },
    description:
      "Ohio State Athletics partnered with Sticker Mule to produce licensed die-cut stickers for every home game. The stickers became an instant hit at the student store and online shop, selling out in hours.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-1-Zzx25kiQlliEghXzFE2y71QYkRuMZu.jpg",
    imageAlt: "University stickers including Ohio State, LSU, Montreat College, and Harvard Robotics Club",
    tags: ["Die-Cut Stickers", "Retail", "Sports"],
    logo: "Ohio State",
  },
  {
    brand: "Blind Tiger Coffee",
    category: "Independent Coffee Brand",
    headline: "Blind Tiger grew their subscription box by 140% after adding Sticker Mule packs",
    stat: { value: "140%", label: "Subscription growth" },
    description:
      "Seattle's Blind Tiger Coffee added custom die-cut sticker packs to every subscription box. Open rates on their unboxing videos skyrocketed, and their community grew exponentially with each shipment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery_1-oG0vAOWCk2fKfHwsQBy0XR8crf9I4j.webp",
    imageAlt: "Blind Tiger triangular sticker, Normal People Are So Weird sticker, and colorful character sticker packs",
    tags: ["Sticker Packs", "Retail", "Subscription Box"],
    logo: "Blind Tiger",
  },
  {
    brand: "Local Food Brands",
    category: "Food & Beverage",
    headline: "Custom die-cut stickers that make food brands look like a million dollars",
    stat: { value: "4.9★", label: "Customer rating" },
    description:
      "From taco trucks to burger joints, food brands use Sticker Mule's die-cut printing to create stickers that match their vibrant brand identities — perfect for packaging, windows, and takeout bags.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Die-Cut-Sticker-Printing-J6pKDHsfCLrArV8LLnRJoluFqjamt0.webp",
    imageAlt: "Custom die-cut stickers with dog, rainbow logo, thank you circle, burrito, sticker text, and burger designs",
    tags: ["Die-Cut Stickers", "Food & Bev", "Packaging"],
    logo: "Food Brands",
  },
  {
    brand: "Skate & Annoy",
    category: "Independent Skate Brand",
    headline: "Sticker Mule keychains doubled Skate & Annoy's merch revenue in one quarter",
    stat: { value: "2x", label: "Merch revenue" },
    description:
      "Indie skate brand Skate and Annoy added Sticker Mule acrylic keychains to their online shop and sold out within 48 hours. The protective film and print quality exceeded every expectation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sm-keychains4-KHF95C6OZBSRs9yP3q6lslbDdE2tj4.jpg",
    imageAlt: "Sticker Mule keychain featuring a monkey skateboarding with Skate and Annoy text, shown with protective film instruction card",
    tags: ["Keychains", "Merch", "Retail"],
    logo: "Skate & Annoy",
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

        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
          <div
            className="absolute inset-0 opacity-10"
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
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Customer Stories
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight text-balance">
                Real brands. Real{" "}
                <span className="text-primary">results.</span>
              </h1>
              <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-xl">
                From indie skate brands to Big Ten universities — see how 350,000+ businesses use Sticker Mule to grow, delight, and stick around.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="btn-press bg-primary hover:bg-primary-dark text-white font-bold rounded-full px-8 py-6 text-base shadow-xl shadow-primary/30">
                  Start Your Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link href="/customers/wall-of-love">
                  <Button variant="outline" className="btn-press border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
                    Wall of Love
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trusted-by logo strip */}
        <section className="bg-background border-b border-border py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-8">
              Stickers used by teams at
            </p>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {featuredLogos.map((logo, i) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default"
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`h-7 w-auto max-w-[110px] object-contain ${logo.dark ? "dark:invert" : ""}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-card border-b border-border py-10">
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

        {/* Case studies grid */}
        <section className="py-20 lg:py-32">
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
                Dive into how leading brands use Sticker Mule to create impact.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {caseStudies.map((study) => (
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
                    {/* Stat overlay */}
                    <div className="absolute top-4 right-4 bg-primary text-white rounded-2xl px-3 py-1.5 shadow-lg">
                      <div className="font-display text-lg font-black leading-none">{study.stat.value}</div>
                      <div className="text-[10px] font-medium opacity-90">{study.stat.label}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
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
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-primary py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
            <blockquote className="font-display text-3xl lg:text-4xl font-black text-white leading-tight text-balance">
              "Sticker Mule makes it stupid easy to produce high-quality merch that our community actually wants. The turnaround is unreal."
            </blockquote>
            <div className="mt-6 text-white/70 font-medium">— Emily R., Brand Manager at ShelterLuv</div>
          </div>
        </section>

        {/* CTA to Wall of Love */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-black text-foreground mb-4">
                Want to see what real customers are saying?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Browse thousands of organic social media posts and reviews from our community on the Wall of Love.
              </p>
              <Link href="/customers/wall-of-love">
                <Button className="btn-press bg-primary hover:bg-primary-dark text-white font-bold rounded-full px-10 py-6 text-base shadow-xl shadow-primary/30">
                  Visit the Wall of Love
                  <ArrowRight className="w-5 h-5 ml-2" />
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
