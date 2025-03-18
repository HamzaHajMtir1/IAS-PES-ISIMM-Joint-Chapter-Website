'use client'
import { Button } from "@headlessui/react";
import { BookOpen, Users, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { motion } from "framer-motion";

export function Resources() {
  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-700">Resources</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Access valuable resources from our joint chapter and parent societies.
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <BookOpen className="h-5 w-5" />
                  Technical Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Access journals, magazines, and conference proceedings from IEEE IAS and PES.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
                  Explore Publications
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Users className="h-5 w-5" />
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Learn about the benefits of joining IEEE and our societies.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
                  View Benefits
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Calendar className="h-5 w-5" />
                  Past Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Access recordings and materials from our previous events and workshops.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">
                  View Archive
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}