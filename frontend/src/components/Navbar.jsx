import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2); // Mock cart count - in real app, this would come from state management

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/images/logo.png" alt="A-Mart Logo" className="h-8 w-auto" />
              <span className="ml-2 text-2xl font-bold text-green-600">A-Mart</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-green-600">
                Home
              </Link>
              <Link to="/products" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-green-600">
                Products
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-green-600">
                About
              </Link>
              <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-green-600">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link to="/trader/dashboard" className="text-gray-900 hover:text-green-600">
              Trader Dashboard
            </Link>
            <Link to="/farmer/dashboard" className="text-gray-900 hover:text-green-600">
              Farmer Dashboard
            </Link>
            <Link to="/cart" className="relative p-2 text-gray-900 hover:text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-green-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/trader/dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Trader Dashboard
            </Link>
            <Link
              to="/farmer/dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Farmer Dashboard
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
