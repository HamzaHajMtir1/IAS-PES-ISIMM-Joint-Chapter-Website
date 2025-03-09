'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { motion } from "framer-motion"

export function AboutOurJointChapter() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-700">About Our Joint Chapter</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The IEEE IAS/PES Joint Chapter brings together professionals in the fields of industrial applications
              and power & energy systems.
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-8 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg rounded-lg transition-all duration-500 hover:scale-105 hover:bg-green-100 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-green-700">Industry Applications Society (IAS)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/About/ias.png"
                    alt="IAS Logo"
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-700">
                  The vision of the IEEE Industry Applications Society is the advancement of the theory and practice
                  of electrical and electronic engineering in the development, design, manufacture and application of
                  electrical systems, apparatus, devices and controls to the processes and equipment of industry and
                  commerce; the promotion of safe, reliable and economical installations; industry leadership in
                  energy conservation and environmental health and safety issues; the creation of voluntary
                  engineering standards and recommended practices; and the professional development of its membership.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white shadow-lg rounded-lg transition-all duration-500 hover:scale-105 hover:bg-green-100 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-green-700">Power & Energy Society (PES)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/About/pes.png"
                    alt="PES Logo"
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-700">
                  The IEEE Power & Energy Society is a worldwide, non-profit association of more than 26,000
                  individuals engaged in the electric power energy industry. Our mission is to be the leading provider
                  of scientific information on electric power and energy for the betterment of society and the
                  preferred professional development source for our members. The scope of the Society embraces
                  research, development, planning, design, construction, maintenance, installation and operation of
                  equipment, structures, materials and power systems.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}