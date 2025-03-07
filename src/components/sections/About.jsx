import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

const values = [
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Client-Focused',
    description: 'We put our clients first, ensuring their needs and goals drive every decision.',
  },
  {
    icon: <FaLightbulb className="w-6 h-6" />,
    title: 'Innovation',
    description: 'We stay at the forefront of technology to deliver cutting-edge solutions.',
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake.',
  },
  {
    icon: <FaHeart className="w-6 h-6" />,
    title: 'Passion',
    description: 'We are passionate about creating solutions that make a difference.',
  },
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate developers, designers, and digital experts
              committed to delivering exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div style={{ color: 'var(--color-primary)' }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the people who make it all happen
            </p>
          </motion.div>
          
          {/* Add team members here */}
        </div>
      </section>
    </div>
  );
};

export default About;