import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaChartBar, FaCheck } from 'react-icons/fa';
import Button from '../components/common/Button';

const services = [
  {
    icon: <FaCode className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development",
      "Progressive Web Apps",
      "Performance Optimization"
    ],
    technologies: ["React", "Node.js", "Python", "PHP", "MongoDB", "MySQL"]
  },
  {
    icon: <FaPalette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"]
  },
  {
    icon: <FaMobile className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "App Store Optimization",
      "Mobile UI/UX",
      "App Maintenance"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"]
  },
  {
    icon: <FaChartBar className="h-8 w-8" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights.",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Predictive Analytics",
      "Custom Dashboards",
      "Data Mining",
      "Reporting Systems"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "TensorFlow", "Pandas"]
  }
];

const ServiceSection = ({ service, index }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
            <div className="text-primary mb-4">{service.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{service.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <FaCheck className="text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button to="/contact" size="lg">Get Started</Button>
          </div>

          <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technologies We Use:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {service.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="bg-white px-4 py-2 rounded-lg text-center shadow-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your needs. We combine technical
              expertise with creative innovation to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.title} service={service} index={index} />
      ))}

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help bring your ideas to life.
            </p>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;