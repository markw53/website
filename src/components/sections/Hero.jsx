import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block">Transform Your Ideas</span>
                <span className="block text-primary">Into Digital Reality</span>
              </motion.h1>
              
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We specialize in creating innovative digital solutions through web development,
                UI/UX design, mobile apps, and data analytics. Let's build something amazing together.
              </motion.p>

              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  to="/contact"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get Started
                </Button>
                <Button 
                  to="/services"
                  variant="outline"
                  size="lg"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Background */}
      <motion.div
        className="absolute right-0 top-0 h-full w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-full rounded-bl-[100px]" />
      </motion.div>
    </div>
  );
};

export default Hero;