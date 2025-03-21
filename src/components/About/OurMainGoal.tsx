'use client'
import React from 'react';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const goals = [
  {
    icon: <Target className="w-12 h-12 text-green-600" />,
    title: "Mission-Driven Excellence",
    description: "Committed to delivering innovative solutions that transform businesses and enhance user experiences through cutting-edge technology."
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: "Customer-Centric Approach",
    description: "Putting our clients first by understanding their unique needs and providing tailored solutions that exceed expectations."
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-green-600" />,
    title: "Innovation Leadership",
    description: "Staying at the forefront of technological advancement to bring creative and efficient solutions to complex challenges."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    title: "Sustainable Growth",
    description: "Building lasting partnerships and fostering continuous improvement to achieve sustainable growth for our clients and team."
  }
];

const OurMainGoal = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-green-700 mb-4 drop-shadow-lg">Our Main Goals</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving innovation and excellence through clear objectives and unwavering commitment to quality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <motion.div 
                className="bg-white p-8 h-full border border-gray-100 rounded-xl
                          transition-all duration-300 z-10 relative
                          hover:bg-gradient-to-br hover:from-green-500 hover:to-white"
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="mb-6 p-3 bg-green-50 rounded-full"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {goal.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-green-700 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {goal.title}
                  </motion.h3>
                  <p className="text-gray-600">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMainGoal;