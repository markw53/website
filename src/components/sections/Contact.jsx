import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    content: "+1 (123) 456-7890",
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    content: "contact@yourcompany.com",
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Address",
    content: "123 Business Street, City, State 12345",
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: "Hours",
    content: "Mon-Fri: 9AM - 5PM",
  },
];

// Custom Input Component
const Input = ({ label, type = 'text', name, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-all"
      style={{ 
        '--tw-ring-color': 'var(--color-primary)',
        '--tw-ring-opacity': '0.2'
      }}
    />
  </div>
);

// Custom TextArea Component
const TextArea = ({ label, name, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows="4"
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-all"
      style={{ 
        '--tw-ring-color': 'var(--color-primary)',
        '--tw-ring-opacity': '0.2'
      }}
    />
  </div>
);

// Contact Info Card Component
const ContactCard = ({ icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-lg shadow-lg flex items-start"
  >
    <div 
      className="flex items-center justify-center w-12 h-12 rounded-md"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="text-white">{icon}</div>
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

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
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-lg p-8"
          >
            <div className="space-y-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <TextArea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {submitStatus === 'success' && (
                <div className="text-green-600">Message sent successfully!</div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600">Error sending message. Please try again.</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-md text-white font-medium transition-all"
                style={{ 
                  backgroundColor: isSubmitting ? 'var(--color-secondary)' : 'var(--color-primary)',
                  opacity: isSubmitting ? '0.7' : '1',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;