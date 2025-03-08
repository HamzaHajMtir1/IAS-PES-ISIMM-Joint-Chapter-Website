import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-300 to-green-100 py-20 pt-60">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Support, Educate, Empower</h1>
          <p className="text-xl text-green-700 mb-8">Join the We Care and connect with specialized doctors, access valuable resources, and find hope in your cancer journey.</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/Home/Cover.png"
            alt="Cancer support illustration"
            width={1000}
            height={1000}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}