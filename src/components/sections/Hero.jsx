import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Ideas</span>
                <span className="block" style={{ color: 'var(--color-primary)' }}>
                  Into Digital Reality
                </span>
              </h1>
              
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We specialize in creating innovative digital solutions through web development,
                UI/UX design, mobile apps, and data analytics.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 rounded-md text-white text-base font-medium transition-colors"
                    style={{ 
                      backgroundColor: 'var(--color-primary)',
                      '&:hover': { backgroundColor: 'var(--color-secondary)' }
                    }}
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/services"
                    className="w-full flex items-center justify-center px-8 py-3 rounded-md border text-base font-medium transition-colors"
                    style={{ 
                      color: 'var(--color-primary)',
                      borderColor: 'var(--color-primary)',
                      '&:hover': { backgroundColor: 'rgba(37, 99, 235, 0.1)' }
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <div className="h-full rounded-bl-[100px]" style={{ 
          background: 'linear-gradient(to bottom right, rgba(37, 99, 235, 0.1), rgba(30, 64, 175, 0.1))'
        }}></div>
      </div>
    </div>
  );
};

export default Hero;