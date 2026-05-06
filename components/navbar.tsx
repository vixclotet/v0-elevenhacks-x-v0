"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const products = [
  { name: "Die-Cut Stickers", href: "#", description: "Custom shaped stickers" },
  { name: "Clear Stickers", href: "#", description: "Transparent backgrounds" },
  { name: "Kiss-Cut Stickers", href: "#", description: "Easy to peel sheets" },
  { name: "Holographic Stickers", href: "#", description: "Eye-catching shine" },
  { name: "Labels & Packaging", href: "#", description: "Brand your products" },
  { name: "Magnets", href: "#", description: "Magnetic prints" },
  { name: "Buttons & Pins", href: "#", description: "Wearable merch" },
  { name: "T-Shirts", href: "#", description: "Custom apparel" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <motion.div 
                whileHover={{ rotate: -10 }}
                className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
              >
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </motion.div>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:block">
              Sticker Mule
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-colors">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 bg-card rounded-2xl shadow-2xl border border-border p-4 mt-2"
                  >
                    <div className="grid gap-1">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-muted transition-colors group"
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {product.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link 
                        href="#"
                        className="flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        <Sparkles className="w-4 h-4" />
                        View all products
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="#" 
              className="px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Studio
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Start Selling
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Deals
            </Link>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className={`hidden md:flex relative transition-all duration-300 ${searchFocused ? "w-72" : "w-48"}`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-0 focus:bg-card focus:ring-2 focus:ring-primary/20 rounded-full"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
              Design Now
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
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
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..."
                  className="pl-10 bg-muted/50 border-0 rounded-full"
                />
              </div>
              
              <div className="space-y-2">
                <Link href="#" className="block py-3 font-medium text-foreground border-b border-border">
                  Products
                </Link>
                <Link href="#" className="block py-3 font-medium text-foreground border-b border-border">
                  Studio
                </Link>
                <Link href="#" className="block py-3 font-medium text-foreground border-b border-border">
                  Start Selling
                </Link>
                <Link href="#" className="block py-3 font-semibold text-primary border-b border-border">
                  Deals
                </Link>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
                Start Designing Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
