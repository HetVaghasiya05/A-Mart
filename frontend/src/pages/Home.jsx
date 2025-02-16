import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video with Parallax */}
        <motion.div
          style={{ y: scrollY * 0.5 }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(0.8)' }}
          >
            <source src="/herosection.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight"
            >
              Farm Fresh,{" "}
              <span className="text-green-400">Trade Smart</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-200 mb-12 font-light"
            >
              Connecting farmers and traders for a sustainable future
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                to="/farmer/register"
                className="group relative px-8 py-4 bg-green-500 text-white rounded-full text-xl font-semibold overflow-hidden transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
              >
                <span className="relative z-10">Join as Farmer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
              <Link
                to="/trader/register"
                className="group relative px-8 py-4 bg-white text-green-600 rounded-full text-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/30"
              >
                <span className="relative z-10">Join as Trader</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section with 3D Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose A-Mart?</h2>
            <p className="text-2xl text-gray-400">Revolutionizing agricultural trade with technology</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grain-pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl font-bold mb-3">{stat.value}</div>
                <div className="text-xl opacity-90 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview with Hover Effects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Explore Categories</h2>
            <p className="text-2xl text-gray-600">Find the agricultural products you need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative h-[500px] overflow-hidden rounded-3xl"
              >
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-10">
                  <div className="text-left">
                    <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                    <Link
                      to={category.link}
                      className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                    >
                      Explore Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grain-pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-0 md:w-1/2"
            >
              <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Agricultural Trade?</h2>
              <p className="text-xl text-gray-400">Join thousands of farmers and traders who are already benefiting from A-Mart</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                Contact Sales
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 bg-green-500 text-white rounded-full text-xl font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                Browse Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Data
const features = [
  {
    title: "Direct Trading",
    description: "Connect directly with farmers and traders, eliminating middlemen and ensuring better prices for everyone",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "All products undergo rigorous quality checks to ensure the best agricultural produce for our traders",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    description: "Safe and secure payment gateway with instant settlement for peace of mind in every transaction",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10,000+", label: "Active Farmers" },
  { value: "5,000+", label: "Verified Traders" },
  { value: "₹100Cr+", label: "Monthly Volume" },
  { value: "1,000+", label: "Daily Deals" },
];

const categories = [
  {
    name: "Grains & Cereals",
    image: "/images/grains.jpg",
    link: "/products/grains",
  },
  {
    name: "Fresh Produce",
    image: "/images/produce.jpg",
    link: "/products/produce",
  },
  {
    name: "Seeds & Planting",
    image: "/images/seeds.jpg",
    link: "/products/seeds",
  },
];

export default Home;
