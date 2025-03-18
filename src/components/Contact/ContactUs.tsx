'use client'
import { Button } from "@headlessui/react";
import { Mail, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export function ContactUs() {
  const socialButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50 flex justify-center">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-700">Contact Us</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get in touch with our chapter leadership or connect with us on social media.
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <Card className="flex flex-col flex-1 bg-green-100 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-green-700">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <Mail className="h-5 w-5 text-gray-700" />
                  <p>iaspes@ieee-nss.org</p>
                </motion.div>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <MapPin className="h-5 w-5 text-gray-700" />
                  <p>IEEE NSS Office, 123 Engineering Avenue</p>
                </motion.div>
                <div className="flex gap-4 mt-6">
                  {[0, 1].map((index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={socialButtonVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                    >
                      {index === 0 && (
                        <a href="https://www.facebook.com/profile.php?id=61561012416766" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            <span className="sr-only">Facebook</span>
                          </Button>
                        </a>
                      )}
                      {index === 1 && (
                        <a href="https://www.instagram.com/ieee_ias_pes_isimm_sbjc/" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                            <span className="sr-only">Instagram</span>
                          </Button>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <Card className="flex flex-col flex-1 bg-green-100 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-green-700">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full cursor-pointer">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}