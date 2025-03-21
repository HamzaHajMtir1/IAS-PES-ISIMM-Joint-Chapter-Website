'use client'
import { Button } from "@headlessui/react";
import { Calendar, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { motion } from "framer-motion";

export function UpcomingEvents() {
  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-700">Upcoming Events</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us for our upcoming technical sessions, workshops, and networking events.
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-green-700">PES Day 2025 Celebration</CardTitle>
                <CardDescription>ISIMM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Join us in our PES Day celebration where you can find us at ISIMM to findout more about IEEE PES and our Chapter .
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="h-4 w-4" />
                  <span>April 22, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>2:00 PM - 4:00 PM</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-green-700">Workshop: Industrial IoT Applications</CardTitle>
                <CardDescription>Virtual</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A hands-on workshop exploring practical applications of IoT in industrial settings.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="h-4 w-4" />
                  <span>April, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM - 3:00 PM</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-green-700">Edge Tech Accelerator</CardTitle>
                <CardDescription>Virtual</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                This bootcamp explores edge computing technologies, enabling real-time data processing for fast and efficient systems.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="h-4 w-4" />
                  <span>May 20, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}