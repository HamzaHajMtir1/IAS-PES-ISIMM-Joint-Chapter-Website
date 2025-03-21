// Desc: About Us page component
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"
import { motion } from "framer-motion"

export default function WhatWeDo() {
    return (
    <section className="w-full py-12 bg-gray-50">
      <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
      <Card
        className="max-w-6xl md:px-6 mx-auto overflow-hidden rounded-2xl shadow-2xl p-6 transition-all duration-500 bg-white"
      >
          <CardHeader>
            <CardTitle><h3 className="text-4xl font-bold text-green-700 mb-4 drop-shadow-lg">What We Do</h3></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#00943a] text-center p-3 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-white cursor-pointer">
                <span className="text-white">INDUSTRIAL VISITS</span>
              </div>
              <div className="bg-[#00943a] text-center p-3 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-white cursor-pointer">
                <span className="text-white">PANEL DISCUSSIONS</span>
              </div>
              <div className="bg-[#00943a] text-center p-3 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-white cursor-pointer">
                <span className="text-white">WORKSHOPS/BOOTCAMPS</span>
              </div>
              <div className="bg-[#00943a] text-center p-3 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-white cursor-pointer">
                <span className="text-white">NETWORKING ACTIVITIES</span>
              </div>
            </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    )
  }
  
  