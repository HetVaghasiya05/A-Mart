import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <header className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-xl font-bold">LOGO</div>
      <nav className="flex gap-6 text-lg">
        <a href="/sell">Sell</a>
        <a href="/buy">Buy</a>
        <a href="/all-products">All Products</a>
      </nav>
      <div className="flex gap-4">
        <FaSearch className="text-xl cursor-pointer" />
        <FaUser className="text-xl cursor-pointer" />
        <FaShoppingCart className="text-xl cursor-pointer" />
=======
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-color">A-Mart</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary-color transition-colors">
              Home
            </a>
            <a href="/products" className="text-gray-700 hover:text-primary-color transition-colors">
              Products
            </a>
            <a href="/farmers" className="text-gray-700 hover:text-primary-color transition-colors">
              Our Farmers
            </a>
            <a href="/about" className="text-gray-700 hover:text-primary-color transition-colors">
              About Us
            </a>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-primary-color text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="btn btn-primary">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-primary-color transition-colors">
                Home
              </a>
              <a href="/products" className="text-gray-700 hover:text-primary-color transition-colors">
                Products
              </a>
              <a href="/farmers" className="text-gray-700 hover:text-primary-color transition-colors">
                Our Farmers
              </a>
              <a href="/about" className="text-gray-700 hover:text-primary-color transition-colors">
                About Us
              </a>
              <button className="btn btn-primary w-full">
                Sign In
              </button>
            </nav>
          </motion.div>
        )}
>>>>>>> cc52f8c2e728f10db0b2c1c40f51790221d6acce
      </div>
    </motion.header>
  );
};

export default Header;
