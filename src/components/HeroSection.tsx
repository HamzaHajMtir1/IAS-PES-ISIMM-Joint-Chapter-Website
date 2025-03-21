'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/activities#events');
  };
  return (
    <section
      id="home"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-600 to-green-50 dark:from-blue-950 dark:to-background"
      aria-labelledby="hero-heading"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 id="hero-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              IEEE Industry Applications Society & Power & Energy Society Joint Chapter
            </h1>
            <p className="text-gray-700 md:text-xl">
              Advancing the theory and practice of electrical engineering in industry, commerce, and power systems
              for the betterment of society.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button onClick={handleButtonClick} className="w-full md:w-auto">
                Upcoming Events
                <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto lg:ml-auto"
          >
            <Image
              src="/Home/Cover.webp"
              alt="IAS/PES Joint Chapter Cover"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}