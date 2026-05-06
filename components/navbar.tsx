"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search, ShoppingCart, User, Menu, X,
  ChevronDown, Sparkles, Pause, Play,
  BookOpen, Heart, Volume2, VolumeX,
  Mic, MicOff, SlidersHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { createClickSound } from "@/lib/sounds"
import { useMotion } from "@/components/motion-provider"
import { useAudio } from "@/components/audio-provider"

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
    Icon: BookOpen,
  },
  {
    name: "Wall of Love",
    href: "/customers/wall-of-love",
    description: "Real reviews and social media love from our community",
    Icon: Heart,
  },
]

const WELCOME_TEXT =
  "Welcome to Sticker Mule! Custom stickers, labels, and merch with free worldwide shipping. Over 350,000 businesses trust us for lightning-fast, high-quality printing. Start designing for free today!"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [customersOpen, setCustomersOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [voicePanelOpen, setVoicePanelOpen] = useState(false)
  const voicePanelRef = useRef<HTMLDivElement>(null)

  const { reduceMotion, toggleReduceMotion } = useMotion()
  const { voiceEnabled, toggleVoice, volume, setVolume, speak, speaking, stop } = useAudio()
  const playClick = createClickSound()

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // No auto-play on voice enable — user must explicitly click a Play button

  // Close voice panel on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (voicePanelRef.current && !voicePanelRef.current.contains(e.target as Node)) {
        setVoicePanelOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
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
            {/* Products dropdown */}
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
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group/item"
                        onClick={playClick}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                          <link.Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="block font-medium text-foreground group-hover/item:text-primary transition-colors text-sm">
                            {link.name}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {link.description}
                          </span>
                        </div>
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
          <div className="flex items-center gap-1.5">
            {/* Search */}
            <div className={`hidden md:flex relative transition-all duration-300 ${searchFocused ? "w-56" : "w-40"}`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search products..."
                className="pl-9 bg-muted/50 border-0 focus:bg-card focus:ring-2 focus:ring-primary/20 rounded-full text-sm h-9"
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

            {/* ── Voice controls ──────────────────────────── */}
            <div className="relative hidden sm:block" ref={voicePanelRef}>
              {/* Voice toggle button */}
              <button
                onClick={() => {
                  playClick()
                  if (!voiceEnabled) {
                    toggleVoice()
                  } else {
                    setVoicePanelOpen((o) => !o)
                  }
                }}
                title={voiceEnabled ? "Voice settings" : "Enable voice"}
                aria-label={voiceEnabled ? "Voice settings" : "Enable voice"}
                className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  voiceEnabled
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {voiceEnabled ? (
                  speaking ? (
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      <Volume2 className="w-4 h-4" />
                    </motion.span>
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
                {/* Speaking pulse ring */}
                {speaking && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </button>

              {/* Voice settings popover */}
              <AnimatePresence>
                {voicePanelOpen && voiceEnabled && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-72 bg-card rounded-2xl shadow-2xl border border-border p-5 z-50"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                          <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="font-semibold text-sm text-foreground">Voice Settings</span>
                      </div>
                      <button
                        onClick={() => { toggleVoice(); setVoicePanelOpen(false); stop() }}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors px-2 py-1 rounded-lg hover:bg-destructive/10"
                      >
                        <MicOff className="w-3 h-3" />
                        Disable
                      </button>
                    </div>

                    {/* Status */}
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-xl mb-4 text-xs font-medium ${
                      speaking
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <motion.div
                        className={`w-2 h-2 rounded-full ${speaking ? "bg-primary" : "bg-muted-foreground/40"}`}
                        animate={speaking ? { scale: [1, 1.4, 1] } : {}}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                      {speaking ? "Speaking..." : "Ready"}
                    </div>

                    {/* Volume slider */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground flex items-center gap-1.5">
                          <Volume2 className="w-3.5 h-3.5 text-muted-foreground" />
                          Volume
                        </span>
                        <span className="text-muted-foreground font-mono">{Math.round(volume * 100)}%</span>
                      </div>
                      <Slider
                        min={0}
                        max={1}
                        step={0.01}
                        value={[volume]}
                        onValueChange={([v]) => setVolume(v)}
                        className="w-full"
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs rounded-xl h-8"
                        onClick={() => speak(WELCOME_TEXT)}
                        disabled={speaking}
                      >
                        <Mic className="w-3 h-3 mr-1.5" />
                        Play Welcome
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs rounded-xl h-8"
                        onClick={stop}
                        disabled={!speaking}
                      >
                        <VolumeX className="w-3 h-3 mr-1.5" />
                        Stop
                      </Button>
                    </div>

                    <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                      Powered by ElevenLabs AI voice. Product descriptions and announcements are read aloud when enabled.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* ── End voice controls ───────────────────────── */}

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
                <div className="border-b border-border pb-2">
                  <p className="px-2 pt-3 pb-1 text-xs font-bold text-muted-foreground uppercase tracking-widest">Customers</p>
                  {customerLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="flex items-center gap-2 py-2 px-4 font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors text-sm" onClick={playClick}>
                      <link.Icon className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                      {link.name}
                    </Link>
                  ))}
                </div>
                <Link href="#" className="block py-3 px-2 font-bold text-primary border-b border-border rounded-lg hover:bg-primary/5 transition-colors" onClick={playClick}>
                  Deals
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Button className="flex-1 btn-press bg-primary hover:bg-primary-dark text-primary-foreground font-bold font-display rounded-full" onClick={playClick}>
                  Start Designing Free
                </Button>
                <button
                  onClick={toggleReduceMotion}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex-shrink-0"
                  aria-label={reduceMotion ? "Enable animations" : "Reduce motion"}
                >
                  {reduceMotion ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
                {/* Mobile voice toggle */}
                <button
                  onClick={() => { toggleVoice(); playClick() }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                    voiceEnabled ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                  }`}
                  aria-label={voiceEnabled ? "Disable voice" : "Enable voice"}
                >
                  {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
