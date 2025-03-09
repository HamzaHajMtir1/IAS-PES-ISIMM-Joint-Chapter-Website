'use client'
import { Button } from "@headlessui/react";
import { Mail, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function ContactUs() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const socialLinks = [
    { icon: "facebook", href: "https://facebook.com", color: "bg-blue-600" },
    { icon: "instagram", href: "https://instagram.com", color: "bg-pink-600" },
    { icon: "twitter", href: "https://twitter.com", color: "bg-blue-400" },
    { icon: "linkedin", href: "https://linkedin.com", color: "bg-blue-700" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % socialLinks.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-green-700">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: currentLogoIndex === index ? 1.2 : 1,
                        transition: { duration: 3 }
                      }}
                      whileHover={{ 
                        scale: 1.3,
                        transition: { duration: 3 }
                      }}
                    >
                      <Button className={`${social.color} hover:opacity-90 text-white px-4 py-2 rounded-full transition-all duration-300`}>
                        {/* ... existing social icons ... */}
                      </Button>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
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