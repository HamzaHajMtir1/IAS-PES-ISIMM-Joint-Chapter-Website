'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { motion } from "framer-motion"

export function AboutOurJointChapter() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-700">About us</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
              The<strong> IEEE Industry Applications Society</strong> advances electrical and electronic engineering in industrial and commercial environments, with a focus on automation, energy systems, smart manufacturing, and process industries. 
              Similarly, the<strong> IEEE Power & Energy Society</strong> drives progress in power engineering, emphasizing electric power generation, transmission, distribution, and sustainable energy solutions. 
              Building on these missions, the<strong> IEEE IAS PES ISIMM Chapter</strong> connects students with industry through hands-on learning experiences, technical events, and networking opportunities, fostering innovation and professional growth in industrial and power engineering fields.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <Image
                src="/IASPESISIMMlogo.webp"
                alt="IEEE IAS PES ISIMM Chapter Logo"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}