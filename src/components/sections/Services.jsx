import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaChartBar } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    features: ["React", "Node.js", "Responsive Design", "SEO Optimization"]
  },
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    features: ["iOS", "Android", "React Native", "Flutter"]
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights.",
    features: ["Data Visualization", "Business Intelligence", "Predictive Analytics", "Reporting"]
  }
];

const ServiceCard = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div style={{ color: 'var(--color-primary)' }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <span className="mr-2" style={{ color: 'var(--color-primary)' }}>•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;