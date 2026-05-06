"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { createClickSound, createSuccessSound } from "@/lib/sounds"

const footerLinks = {
  Products: [
    { name: "Die-Cut Stickers", href: "#" },
    { name: "Clear Stickers", href: "#" },
    { name: "Holographic Stickers", href: "#" },
    { name: "Glitter Stickers", href: "#" },
    { name: "Labels", href: "#" },
    { name: "Magnets", href: "#" },
    { name: "Buttons", href: "#" },
    { name: "T-Shirts", href: "#" },
  ],
  Tools: [
    { name: "Design Studio", href: "#" },
    { name: "AI Background Remover", href: "#" },
    { name: "Vector Redraw", href: "#" },
    { name: "Image Upscaler", href: "#" },
    { name: "Templates", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Affiliate Program", href: "#" },
  ],
  Support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Size Guide", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const playClick = createClickSound()
  const playSuccess = createSuccessSound()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      playSuccess()
    }
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-white">
                Get design tips + 10% off
              </h3>
              <p className="mt-2 text-white/60">
                Join our newsletter for exclusive deals and creative inspiration.
              </p>
            </div>
            <div>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-4 rounded-full"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">You&apos;re subscribed! Check your inbox for 10% off.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-6"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 group flex-shrink-0"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6" onClick={playClick}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0x0-fOSuIzvRbVTx2fyKOVbSri4NPny82y.png"
                alt="Sticker Mule"
                width={44}
                height={44}
                className="rounded-xl"
              />
              <span className="font-bold text-xl text-white">
                sticker<span className="text-primary">mule</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Custom stickers &amp; merch that kicks ass. Free shipping worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  onClick={playClick}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                      onClick={playClick}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} Sticker Mule. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                <Link key={item} href="#" className="text-white/30 hover:text-white transition-colors" onClick={playClick}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
