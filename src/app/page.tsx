import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"

export default function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}