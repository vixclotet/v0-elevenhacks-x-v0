"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Star, ArrowRight, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Official brand logos from the provided carousel image
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

type Platform = "twitter" | "instagram" | "facebook" | "trustpilot"

const PlatformIcon = ({ platform }: { platform: Platform }) => {
  if (platform === "twitter") return <Twitter className="w-4 h-4 text-sky-500" />
  if (platform === "instagram") return <Instagram className="w-4 h-4 text-pink-500" />
  if (platform === "facebook") return <Facebook className="w-4 h-4 text-blue-600" />
  return <Star className="w-4 h-4 text-green-500" />
}

const platformLabel: Record<Platform, string> = {
  twitter: "Twitter / X",
  instagram: "Instagram",
  facebook: "Facebook",
  trustpilot: "Trustpilot",
}

const reviews: {
  id: number
  name: string
  handle: string
  company: string
  companyLogo: string
  avatar: string
  platform: Platform
  stars: number
  text: string
  image?: string
  date: string
  verified: boolean
}[] = [
  {
    id: 1,
    name: "Emily Rodriguez",
    handle: "@emilydesigns",
    company: "Nike",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/512px-Logo_NIKE.svg.png",
    avatar: "/avatars/avatar-1.jpg",
    platform: "twitter" as Platform,
    stars: 5,
    text: "Just got our swag order from @stickermule for the Nike design team and I am OBSESSED. Die-cut perfection. The colors are so vibrant and they arrived in literally 4 days. The whole team is losing their minds over these. 10/10.",
    date: "May 2, 2025",
    verified: true,
  },
  {
    id: 2,
    name: "Marcus Webb",
    handle: "@marcuswebb",
    company: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    avatar: "/avatars/avatar-2.jpg",
    platform: "instagram" as Platform,
    stars: 5,
    text: "Ordered sticker packs for the Google Developer Advocates team swag boxes and the quality is unreal. Every sticker is cut to perfection with zero bleed. Sticker Mule is our official go-to printer now.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery_1-oG0vAOWCk2fKfHwsQBy0XR8crf9I4j.webp",
    date: "April 28, 2025",
    verified: true,
  },
  {
    id: 3,
    name: "Priya Nair",
    handle: "@priya.creates",
    company: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    avatar: "/avatars/avatar-3.jpg",
    platform: "trustpilot" as Platform,
    stars: 5,
    text: "The free proof process saved our Microsoft Surface launch team so much stress. The designer caught a resolution issue before print. Best customer service I have experienced with any print company. Sticker sheets came out stunning.",
    date: "April 22, 2025",
    verified: true,
  },
  {
    id: 4,
    name: "Jake Thornton",
    handle: "@jakethorntonco",
    company: "Dropbox",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dropbox_Logo_dropbox.svg/512px-Dropbox_Logo_dropbox.svg.png",
    avatar: "/avatars/avatar-4.jpg",
    platform: "twitter" as Platform,
    stars: 5,
    text: "Ordered holographic stickers for Dropbox's conference swag bags and they were the talk of every booth. Everyone kept asking where we got them. @stickermule is unmatched for conference merch. Already placed the next order.",
    date: "April 19, 2025",
    verified: false,
  },
  {
    id: 5,
    name: "Sofia Delgado",
    handle: "@sofiacrafts",
    company: "Netflix",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
    avatar: "/avatars/avatar-5.jpg",
    platform: "instagram" as Platform,
    stars: 5,
    text: "Custom sticker packs for the Netflix Creator Program merch kits have been an absolute game changer. Influencers love the quality and I love the fast turnaround. Have already reordered 3 times this month!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-TkuADbbED2vDJ6cGUNJ4mja54qF4ev.jpg",
    date: "April 15, 2025",
    verified: true,
  },
  {
    id: 6,
    name: "Devon Clark",
    handle: "@devonclarkart",
    company: "GitHub",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/512px-GitHub_Invertocat_Logo.svg.png",
    avatar: "/avatars/avatar-6.jpg",
    platform: "facebook" as Platform,
    stars: 5,
    text: "The GitHub Universe conference stickers came out breathtaking. Nothing comes close to Sticker Mule's holographic and glitter options. Packaging was perfect and delivery was faster than expected. This is our third year using them.",
    date: "April 10, 2025",
    verified: true,
  },
  {
    id: 7,
    name: "Helen Park",
    handle: "@helenparkcreative",
    company: "lululemon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lululemon_Athletica_logo.svg/512px-Lululemon_Athletica_logo.svg.png",
    avatar: "/avatars/avatar-7.jpg",
    platform: "trustpilot" as Platform,
    stars: 5,
    text: "Ordered 2,000 die-cut stickers for lululemon's community ambassador kits. They arrived two days early, every single one was perfect, and the ambassadors absolutely loved them. Will 100% use Sticker Mule for all future campaigns.",
    date: "April 7, 2025",
    verified: true,
  },
  {
    id: 8,
    name: "Alex Morse",
    handle: "@alexmorseskates",
    company: "Facebook",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/512px-Facebook_Logo_%282019%29.png",
    avatar: "/avatars/avatar-8.jpg",
    platform: "twitter" as Platform,
    stars: 5,
    text: "Sticker Mule's keychains for the Meta Developers merch store sold out in 48 hours. The protective film kept every piece scratch-free all the way to customers worldwide. Already running a second batch.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sm-keychains4-KHF95C6OZBSRs9yP3q6lslbDdE2tj4.jpg",
    date: "April 3, 2025",
    verified: false,
  },
  {
    id: 9,
    name: "Emily Rodriguez",
    handle: "@emilydesigns",
    company: "Nike",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/512px-Logo_NIKE.svg.png",
    avatar: "/avatars/avatar-1.jpg",
    platform: "instagram" as Platform,
    stars: 5,
    text: "The sticker sheets for our Nike Run Club collabs look EXACTLY like my design files. Color accuracy is insane. My followers keep asking where we print — @stickermule every single time, no question.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery_2-m5bQhJlNHq8nNDxtEXnix8QSIZKZto.webp",
    date: "March 29, 2025",
    verified: true,
  },
  {
    id: 10,
    name: "Marcus Webb",
    handle: "@marcuswebb",
    company: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    avatar: "/avatars/avatar-2.jpg",
    platform: "trustpilot" as Platform,
    stars: 5,
    text: "Ordered custom sticker packs for 5 different Google product launches this quarter and every single one was flawless. Sticker Mule is basically our internal secret weapon. Every PM keeps coming back asking for more.",
    date: "March 25, 2025",
    verified: true,
  },
  {
    id: 11,
    name: "Priya Nair",
    handle: "@priya.creates",
    company: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    avatar: "/avatars/avatar-3.jpg",
    platform: "twitter" as Platform,
    stars: 5,
    text: "The custom stickers I designed for Microsoft Build came out PERFECT. Sticker Mule print quality is in a league of its own. Free worldwide shipping is just the cherry on top. Recommending to every design lead I know.",
    date: "March 20, 2025",
    verified: false,
  },
  {
    id: 12,
    name: "Devon Clark",
    handle: "@devonclarkart",
    company: "GitHub",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/512px-GitHub_Invertocat_Logo.svg.png",
    avatar: "/avatars/avatar-6.jpg",
    platform: "instagram" as Platform,
    stars: 5,
    text: "This is our 12th GitHub Constellation order with Sticker Mule and they just keep getting better. Consistent quality, amazing support, fastest shipping in the business. The only printer we trust for event merch.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobileCover-shmHmwHxY23QuiBihePBtiv3VBJ2Gn.jpg",
    date: "March 15, 2025",
    verified: true,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 22 } },
}

// Split reviews into 3 columns for masonry effect
const col1 = reviews.filter((_, i) => i % 3 === 0)
const col2 = reviews.filter((_, i) => i % 3 === 1)
const col3 = reviews.filter((_, i) => i % 3 === 2)

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <motion.div
      variants={item}
      className="bg-card rounded-3xl border border-border p-5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
            <Image
              src={review.avatar}
              alt={review.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-sm text-foreground">{review.name}</span>
              {review.verified && (
                <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0" aria-label="Verified">
                  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-white fill-current"><path d="M4.16 6.77L2 4.61l.71-.71 1.45 1.45 3.13-3.14.71.71z"/></svg>
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-muted-foreground">{review.handle}</span>
              {review.companyLogo && (
                <img
                  src={review.companyLogo}
                  alt={review.company}
                  className="h-3.5 w-auto max-w-[56px] object-contain grayscale opacity-60"
                  title={review.company}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground flex-shrink-0">
          <PlatformIcon platform={review.platform} />
          <span className="text-xs hidden sm:inline">{platformLabel[review.platform]}</span>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-foreground/80 leading-relaxed">{review.text}</p>

      {/* Optional image */}
      {review.image && (
        <div className="mt-4 rounded-2xl overflow-hidden aspect-video relative">
          <Image
            src={review.image}
            alt="Sticker photo shared by customer"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Date */}
      <div className="mt-4 text-xs text-muted-foreground">{review.date}</div>
    </motion.div>
  )
}

export default function WallOfLovePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary py-24 lg:py-28">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 40%, var(--primary) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, var(--accent) 0%, transparent 45%)`
            }}
            aria-hidden="true"
          />
          {/* Floating sticker accents */}
          <div className="absolute right-12 top-12 opacity-20 rotate-12 pointer-events-none hidden lg:block" aria-hidden="true">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_1080xN.4309153325_4a74-XV2wMRtBxCZaBwBTnnqIAQBTglmwzV.jpg"
              alt=""
              width={160}
              height={160}
              className="rounded-2xl"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4 fill-primary" />
                Wall of Love
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight text-balance">
                Our customers{" "}
                <span className="text-primary">say it best.</span>
              </h1>
              <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-lg">
                Thousands of businesses, creators, and designers share their Sticker Mule love every day. Here&apos;s a taste of what they&apos;re saying.
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex -space-x-3">
                  {["/avatars/avatar-1.jpg", "/avatars/avatar-2.jpg", "/avatars/avatar-3.jpg", "/avatars/avatar-4.jpg"].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary ring-0">
                      <Image src={src} alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
                <div className="text-white/70 text-sm">
                  <span className="font-bold text-white">350,000+</span> happy customers worldwide
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="bg-card border-b border-border sticky top-[64px] lg:top-[80px] z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-none">
              {["All", "Twitter / X", "Instagram", "Facebook", "Trustpilot"].map((filter) => (
                <button
                  key={filter}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === "All"
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* "Reviewers from" brand logo strip */}
        <section className="bg-card border-b border-border py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-8">
              Reviews from teams at
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                  className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-default"
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

        {/* Masonry grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mb-14">
              {[
                { value: "4.9/5", label: "Average rating on Trustpilot" },
                { value: "12K+", label: "Five-star reviews" },
                { value: "350K+", label: "Businesses served" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-display text-4xl font-black text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* 3-column masonry */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
            >
              <div className="flex flex-col gap-5">
                {col1.map((r) => <ReviewCard key={r.id} review={r} />)}
              </div>
              <div className="flex flex-col gap-5 md:mt-8">
                {col2.map((r) => <ReviewCard key={r.id} review={r} />)}
              </div>
              <div className="flex flex-col gap-5 lg:mt-16 hidden lg:flex">
                {col3.map((r) => <ReviewCard key={r.id} review={r} />)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-4 text-balance">
                Join 350,000+ happy customers
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Start your first order today and see why people can&apos;t stop talking about us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-press bg-white text-primary hover:bg-white/90 font-black rounded-full px-10 py-6 text-base shadow-xl">
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/customers/stories">
                  <Button variant="outline" className="btn-press border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-6 text-base font-semibold">
                    Read Customer Stories
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
