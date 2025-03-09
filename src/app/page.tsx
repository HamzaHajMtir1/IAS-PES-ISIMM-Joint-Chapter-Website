'use client'
import Navbar from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutOurJointChapter } from "@/components/AboutOurJointChapter"
import { UpcomingEvents } from "@/components/UpcomingEvents"
import { ChapterLeadership } from "@/components/ChapterLeadership"
import { Resources } from "@/components/Resources"
import { Footer } from "@/components/Footer"
import Logos from "@/components/Logos"
import NewsLetter from "@/components/NewsLetter"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutOurJointChapter />
        <Logos />
        <UpcomingEvents />
        <ChapterLeadership />
        <Resources />
        <Testimonials />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  )
}

