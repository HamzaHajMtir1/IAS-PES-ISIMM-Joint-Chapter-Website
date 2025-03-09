'use client'
import { User, Calendar } from "lucide-react"
import { Activities } from "./ActivitiesListComponent";
import { motion } from "framer-motion"

interface ActivitiesGridProps {
  activities: Activities[];
}

export function ActivitiesGrid({ activities }: ActivitiesGridProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-bg-green-50 py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {activities.map((activities, index) => (
            <motion.article
              key={activities.subject}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 cursor-pointer border-2 border-green-600"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.4 }}
                src={activities.imageUrl}
                alt={activities.subject}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
              >
                <div className="flex items-center gap-x-2">
                  <Calendar className="h-5 w-5" />
                  <time dateTime={activities.date}>{activities.date}</time>
                </div>
                <div className="flex items-center gap-x-2 ml-4">
                  <User className="h-5 w-5" />
                  <span>{activities.name}</span>
                </div>
              </motion.div>
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="mt-3 text-lg font-semibold leading-6 text-white"
              >
                <a href="#">
                  <span className="absolute inset-0" />
                  {activities.subject}
                </a>
              </motion.h3>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}