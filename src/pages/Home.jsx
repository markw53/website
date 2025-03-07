import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden"
    >
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;