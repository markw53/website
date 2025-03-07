import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaChartBar, FaCheck } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
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
    icon: <FaPalette className="w-8 h-8" />,
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
    icon: <FaMobile className="w-8 h-8" />,
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
    icon: <FaChartBar className="w-8 h-8" />,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const ServiceSection = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      variants={itemVariants}
      className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${!isEven && 'lg:order-2'}`}>
            <div style={{ color: 'var(--color-primary)' }} className="mb-4">
              {service.icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{service.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <FaCheck className="text-primary mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Learn More
            </motion.button>
          </div>

          <div className={`${!isEven && 'lg:order-1'}`}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technologies We Use:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {service.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white px-4 py-2 rounded-lg text-center shadow-sm"
                  >
                    {tech}
                  </motion.div>
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
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

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.title} service={service} index={index} />
      ))}

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;