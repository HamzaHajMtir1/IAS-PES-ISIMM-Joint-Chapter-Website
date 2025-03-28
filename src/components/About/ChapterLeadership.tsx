'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mohamed Rayen Said",
    role: "Chair",
    image: "/About/Team/RayenSaid.png",
    linkedin: "https://www.linkedin.com/in/mohamed-rayen-said-b55572258/",
    Facebook: "https://www.facebook.com/rayen.said.9047",
    portfolio: "#",
    whatsapp: "21629199476",
  },
  {
    name: "Anonyme",
    role: "Vice Chair",
    image: "/About/Team/anonyme.webp",
    linkedin: "#",
    Facebook: "https://github.com/HamzaHajMtir1",
    portfolio: "#",
    whatsapp: "#",
  },
  {
    name: "Anonyme",
    role: "Secretary",
    image: "/About/Team/anonyme.webp",
    linkedin: "#",
    Facebook: "#",
    whatsapp: "#",
  },
  {
    name: "Anonyme",
    role: "Treasurer",
    image: "/About/Team/anonyme.webp",
    linkedin: "#",
    Facebook: "#",
    whatsapp: "#",
  },
  {
    name: "Hamza Haj Mtir",
    role: "Web Master",
    image: "/About/Team/HamzaHajMtir.png",
    linkedin: "https://www.linkedin.com/in/hamza-haj-mtir-3345a8220/",
    Facebook: "https://www.facebook.com/profile.php?id=100009080517074",
    portfolio: "https://www.hamzahajmtir.tn/",
    whatsapp: "21624222310",
  },
];

export function ChapterLeadership() {
  return (
    <section className="bg-green-50 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-gray-900 font-bold mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-600">
              Exceptional Team
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-cover object-cover"
                loading="lazy"
                quality={100}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.Facebook}
                    target="_blank"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}