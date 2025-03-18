"use client";

import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext";
import { AboutOurJointChapter } from "@/components/AboutOurJointChapter";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const { setIsLoading } = useLoading();
  
  useEffect(() => {
    // Show loading when page starts loading
    setIsLoading(true);
    
    // Hide loading when everything is loaded
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
    
    // Fallback to hide loading after a timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    
    return () => {
      clearTimeout(timeout);
      setIsLoading(false);
    };
  }, [setIsLoading]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutOurJointChapter />
        <Logos />
        <Testimonials />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  )
}

