"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Sparkles, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClickSound } from "@/lib/sounds"
import { useMotion } from "@/components/motion-provider"

const products = [
  { name: "Die-Cut Stickers", href: "#", description: "Custom shaped stickers" },
  { name: "Clear Stickers", href: "#", description: "Transparent backgrounds" },
  { name: "Kiss-Cut Stickers", href: "#", description: "Easy to peel sheets" },
  { name: "Holographic Stickers", href: "#", description: "Eye-catching rainbow shine" },
  { name: "Glitter Stickers", href: "#", description: "Sparkle & shine finish" },
  { name: "Labels & Packaging", href: "#", description: "Brand your products" },
  { name: "Magnets", href: "#", description: "Magnetic prints" },
  { name: "Buttons & Pins", href: "#", description: "Wearable merch" },
  { name: "T-Shirts", href: "#", description: "Custom apparel" },
]

const customerLinks = [
  {
    name: "Customer Stories",
    href: "/customers/stories",
    description: "Case studies from 350K+ businesses worldwide",
    icon: "📖",
  },
  {
    name: "Wall of Love",
    href: "/customers/wall-of-love",
    description: "Real reviews and social media love from our community",
    icon: "❤️",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [customersOpen, setCustomersOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { reduceMotion, toggleReduceMotion } = useMotion()
  const playClick = createClickSound()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-card/85 backdrop-blur-xl border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={playClick}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0x0-fOSuIzvRbVTx2fyKOVbSri4NPny82y.png"
              alt="Sticker Mule"
              width={40}
              height={40}
              className="rounded-xl object-cover transition-transform group-hover:scale-105"
            />
            <span className="font-display font-black text-xl text-foreground hidden sm:block tracking-tight">
              sticker<span className="text-primary">mule</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-colors rounded-lg hover:bg-muted">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 bg-card rounded-2xl shadow-2xl border border-border p-4 mt-2"
                  >
                    <div className="grid gap-1">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-muted transition-colors group/item"
                          onClick={playClick}
                        >
                          <span className="font-medium text-foreground group-hover/item:text-primary transition-colors text-sm">
                            {product.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {product.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link href="#" className="flex items-center gap-2 text-primary font-medium hover:underline text-sm" onClick={playClick}>
                        <Sparkles className="w-4 h-4" />
                        View all products
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Customers dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCustomersOpen(true)}
              onMouseLeave={() => setCustomersOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-colors rounded-lg hover:bg-muted">
                Customers
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${customersOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {customersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-72 bg-card rounded-2xl shadow-2xl border border-border p-3 mt-2"
                  >
                    {customerLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex flex-col p-3 rounded-xl hover:bg-muted transition-colors group/item"
                        onClick={playClick}
                      >
                        <span className="font-medium text-foreground group-hover/item:text-primary transition-colors text-sm">
                          {link.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                          {link.description}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Studio", "Start Selling"].map((item) => (
              <Link
                key={item}
                href="#"
                className="px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-colors rounded-lg hover:bg-muted"
                onClick={playClick}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="px-4 py-2 text-primary hover:text-primary/80 font-bold transition-colors rounded-lg hover:bg-primary/5"
              onClick={playClick}
            >
              Deals
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className={`hidden md:flex relative transition-all duration-300 ${searchFocused ? "w-64" : "w-44"}`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-0 focus:bg-card focus:ring-2 focus:ring-primary/20 rounded-full text-sm"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Reduce motion toggle */}
            <button
              onClick={toggleReduceMotion}
              title={reduceMotion ? "Enable animations" : "Reduce motion"}
              className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={reduceMotion ? "Enable animations" : "Reduce motion"}
            >
              {reduceMotion ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            <Button variant="ghost" size="icon" className="btn-press relative" onClick={playClick}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="btn-press hidden sm:flex" onClick={playClick}>
              <User className="w-5 h-5" />
            </Button>

            <Button
              className="btn-press hidden md:flex bg-primary hover:bg-primary-dark text-primary-foreground font-bold font-display rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
              onClick={playClick}
            >
              Design Now
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="btn-press lg:hidden"
              onClick={() => { setIsOpen(!isOpen); playClick() }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-10 bg-muted/50 border-0 rounded-full" />
              </div>
              <div className="space-y-1">
                {["Products", "Studio", "Start Selling"].map((item) => (
                  <Link key={item} href="#" className="block py-3 px-2 font-medium text-foreground border-b border-border rounded-lg hover:bg-muted transition-colors" onClick={playClick}>
                    {item}
                  </Link>
                ))}
                <div className="border-b border-border">
                  <p className="px-2 pt-3 pb-1 text-xs font-bold text-muted-foreground uppercase tracking-widest">Customers</p>
                  {customerLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="block py-2 px-4 font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors text-sm" onClick={playClick}>
                      {link.name}
                    </Link>
                  ))}
                </div>
                <Link href="#" className="block py-3 px-2 font-bold text-primary border-b border-border rounded-lg hover:bg-primary/5 transition-colors" onClick={playClick}>
                  Deals
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <Button className="flex-1 btn-press bg-primary hover:bg-primary-dark text-primary-foreground font-bold font-display rounded-full mr-2" onClick={playClick}>
                  Start Designing Free
                </Button>
                <button
                  onClick={toggleReduceMotion}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex-shrink-0"
                  aria-label={reduceMotion ? "Enable animations" : "Reduce motion"}
                >
                  {reduceMotion ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
