import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Satisfied Clients', value: '150+' },
  { label: 'Team Members', value: '20+' }
];

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About Our Company
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're a team of passionate developers, designers, and digital experts
              committed to delivering exceptional digital solutions. Our approach
              combines technical expertise with creative innovation to help businesses
              thrive in the digital age.
            </p>
            <div className="mt-8">
              <Button to="/about" size="lg">
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <dt className="text-3xl font-bold text-primary">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-gray-600">
                    {stat.label}
                  </dd>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;