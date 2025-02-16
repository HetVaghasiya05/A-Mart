import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About A-Mart</h1>
          <p className="text-xl text-gray-600 mb-12">Your Premier Shopping Destination</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2024, A-Mart has grown from a small local store to a leading
              online marketplace. We're dedicated to providing our customers with the
              best shopping experience possible, offering a wide range of high-quality
              products at competitive prices.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At A-Mart, we strive to revolutionize online shopping by combining
              cutting-edge technology with exceptional customer service. Our goal is
              to make premium products accessible to everyone while maintaining the
              highest standards of quality and reliability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Quality Products", value: "10,000+", description: "Premium items" },
            { title: "Happy Customers", value: "50,000+", description: "Satisfied shoppers" },
            { title: "Fast Delivery", value: "24/7", description: "Express shipping" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</h3>
              <p className="text-xl font-semibold text-gray-900 mb-1">{stat.title}</p>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
