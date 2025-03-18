'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { motion } from "framer-motion"

export function AboutOurJointChapter() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
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
              The vision of the IEEE Industry Applications Society is the advancement of the theory and
              practice of electrical and electronic engineering in the development, design, manufacture 
              and application of electrical systems, apparatus, devices and controls to the processes and 
              equipment of industry and commerce; the promotion of safe, reliable and economical installations;
              industry leadership in energy conservation and environmental health and safety issues; 
              the creation of voluntary engineering standards and recommended practices; and the professional 
              development of its membership.
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
                alt="IEEE Industry Applications Society"
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