import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TickerBanner } from "@/components/ticker-banner"
import { LogoCarousel } from "@/components/logo-carousel"
import { ProductCategories } from "@/components/product-categories"
import { ValueCards } from "@/components/value-cards"
import { BestSellers } from "@/components/best-sellers"
import { Testimonials } from "@/components/testimonials"
import { WhySection } from "@/components/why-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Neubrutalist ticker tape — anchors every product category */}
      <TickerBanner />
      <LogoCarousel />
      {/* Full product catalogue bento grid with all 7 product families */}
      <ProductCategories />
      <ValueCards />
      {/* Neubrutalist divider before best sellers */}
      <div className="nb-divider" aria-hidden="true" />
      <BestSellers />
      <Testimonials />
      <WhySection />
      <CTASection />
      <Footer />
    </main>
  )
}
