'use client'
import Navbar from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutOurJointChapter } from "@/components/AboutOurJointChapter"
import { UpcomingEvents } from "@/components/UpcomingEvents"
import { ChapterLeadership } from "@/components/ChapterLeadership"
import { Resources } from "@/components/Resources"
import { ContactUs } from "@/components/ContactUs"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutOurJointChapter />
        <UpcomingEvents />
        <ChapterLeadership />
        <Resources />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

