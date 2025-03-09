'use client'
import { motion } from "framer-motion"

export function HeaderAbout() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="top-0 z-50 border-b border-green-200 bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <div className="container mx-auto px-4 py-4">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl font-bold text-green-800"
            whileHover={{ scale: 1.05 }}
          >
            About US
          </motion.h1>
          <motion.p 
            className="mt-1 text-sm sm:text-base text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover Our Joint Chapter
          </motion.p>
        </motion.div>
      </div>
    </motion.header>
  )
}