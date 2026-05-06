import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoCarousel } from "@/components/logo-carousel"
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
      <LogoCarousel />
      <ValueCards />
      <BestSellers />
      <Testimonials />
      <WhySection />
      <CTASection />
      <Footer />
    </main>
  )
}
