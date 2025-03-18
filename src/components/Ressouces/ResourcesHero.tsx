'use client'

import { motion } from 'framer-motion'
import { BookOpen, Download, FileText } from 'lucide-react'

export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-100 mb-20 py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 800">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0" stroke="rgba(0, 128, 0, 0.3)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-green-800"
            >
              IEEE IAS / PES <span className="text-green-600">Resources</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 md:text-xl max-w-[600px]"
            >
              Access a comprehensive collection of educational materials, technical papers, and industry resources to enhance your knowledge and skills.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <a href="#technical-papers" className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition-colors">
                <FileText className="mr-2 h-5 w-5" />
                Technical Papers
              </a>
              <a href="#resources" className="inline-flex items-center justify-center rounded-md border border-green-600 px-6 py-3 text-green-600 font-medium hover:bg-green-50 transition-colors">
                <BookOpen className="mr-2 h-5 w-5" />
                All Resources
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-green-200 to-green-400 p-2 shadow-2xl">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="grid grid-cols-2 gap-4 p-6">
                  {[
                    { icon: FileText, label: "Technical Papers", count: "50+" },
                    { icon: BookOpen, label: "Educational Materials", count: "30+" },
                    { icon: Download, label: "Downloadable Resources", count: "25+" },
                    { icon: FileText, label: "IEEE Standards", count: "15+" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex flex-col items-center justify-center rounded-lg bg-white/90 p-4 text-center shadow-lg"
                    >
                      <item.icon className="h-8 w-8 text-green-600 mb-2" />
                      <p className="text-xl font-bold text-green-800">{item.count}</p>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-green-300 blur-2xl" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-green-400 blur-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}