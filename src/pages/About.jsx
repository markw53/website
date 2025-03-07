import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

const values = [
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: 'Client-Focused',
    description: 'We put our clients first, ensuring their needs and goals drive every decision.',
  },
  {
    icon: <FaLightbulb className="h-6 w-6" />,
    title: 'Innovation',
    description: 'We stay at the forefront of technology to deliver cutting-edge solutions.',
  },
  {
    icon: <FaRocket className="h-6 w-6" />,
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake.',
  },
  {
    icon: <FaHeart className="h-6 w-6" />,
    title: 'Passion',
    description: 'We are passionate about creating solutions that make a difference.',
  },
];

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];

const About = () => {
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
              About Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate developers, designers, and digital experts
              committed to delivering exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2015, we started with a simple mission: to help businesses
                succeed in the digital age. Since then, we've grown into a full-service
                digital solutions provider, working with clients across various industries.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our team combines technical expertise with creative innovation to
                deliver solutions that not only meet but exceed our clients' expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-10"></div>
              <img
                src="/path-to-your-image.jpg"
                alt="Our team"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the people who make it all happen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;