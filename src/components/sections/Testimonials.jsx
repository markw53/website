import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Working with this team was a game-changer for our business. Their expertise in web development and UI/UX design helped us create a platform that our users love.",
  },
  {
    name: "Michael Chen",
    role: "Founder, DataFlow",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The mobile app they developed for us exceeded our expectations. Their attention to detail and commitment to quality is outstanding.",
  },
  {
    name: "Emily Brown",
    role: "Marketing Director, InnovateCo",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "Their data analytics solutions provided us with valuable insights that helped drive our business decisions. Highly recommended!",
  },
];

const TestimonialCard = ({ name, role, image, content, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg relative"
    >
      <FaQuoteLeft className="text-primary/20 text-4xl absolute top-4 left-4" />
      <div className="pt-8">
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;