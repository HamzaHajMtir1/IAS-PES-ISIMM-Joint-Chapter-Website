"use client"
import { User, Calendar, MapPin } from "lucide-react"
import type { Activities } from "./ActivitiesListComponent"
import { motion } from "framer-motion"
import { useState } from "react"

interface ActivitiesGridProps {
  activities: Activities[]
}

export function ActivitiesGrid({ activities }: ActivitiesGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

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
          {activities.map((activity, index) => (
            <motion.article
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredId(activity.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-0 pb-0 pt-0 cursor-pointer border-2 border-green-600 h-[500px]"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.4 }}
                src={activity.imageUrl}
                alt={activity.subject}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/40" />

              {/* Single drawer that contains all content */}
              <motion.div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/80 z-10 rounded-b-2xl overflow-hidden"
                initial={{
                  height: "180px",
                }}
                animate={{
                  height: hoveredId === activity.id ? "100%" : "180px",
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Header content (always visible) */}
                  <div className="mb-4">
                    <div className="flex items-center gap-x-2 text-sm text-gray-300 mb-2">
                      <User className="h-5 w-5" />
                      <span className="text-white">{activity.name}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white">{activity.subject}</h3>
                  </div>

                  {/* Divider line */}
                  <div className="border-t border-gray-700 my-4 w-full"></div>

                  {/* Additional info */}
                  <div className="space-y-4 text-white">
                    <h4 className="text-lg font-semibold text-green-300">Activity Details</h4>

                    <p className="text-sm text-gray-300">
                      {activity.desc || "Join us for this exciting activity and expand your horizons!"}
                    </p>

                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-green-400" />
                        <span className="text-green-100">{activity.date || "Coming soon"}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-green-400" />
                        <span className="text-green-100">{activity.location || "TBA"}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#16a34a" }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md transition-colors w-full font-medium"
                      onClick={activity.link ? () => window.open(activity.link, "_blank") : undefined}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Visual indicator for hover state */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-green-500 z-20"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredId === activity.id ? 1 : 0,
                  transition: { duration: 0.3 },
                }}
                style={{ transformOrigin: "left" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

