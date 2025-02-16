<<<<<<< HEAD
// import { Link } from "react-router-dom";
// import Footer from "../components/Common/Footer";
// import Navbar from "../components/Common/Navbar";
=======
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
>>>>>>> cc52f8c2e728f10db0b2c1c40f51790221d6acce

const categories = [
  {
    name: "Grains & Cereals",
    products: [
      {
        id: 1,
        name: "Premium Wheat",
        price: 299.99,
        quantity: "per quintal",
        image: "https://example.com/wheat.jpg",
        rating: 4.8,
        reviews: 128
      },
      {
        id: 2,
        name: "Organic Rice",
        price: 399.99,
        quantity: "per quintal",
        image: "https://example.com/rice.jpg",
        rating: 4.6,
        reviews: 95
      },
      {
        id: 3,
        name: "Yellow Corn",
        price: 249.99,
        quantity: "per quintal",
        image: "https://example.com/corn.jpg",
        rating: 4.9,
        reviews: 76
      },
      {
        id: 4,
        name: "Pearl Millet",
        price: 199.99,
        quantity: "per quintal",
        image: "https://example.com/millet.jpg",
        rating: 4.7,
        reviews: 183
      }
    ]
  },
  {
    name: "Fresh Produce",
    products: [
      {
        id: 5,
        name: "Fresh Tomatoes",
        price: 25.99,
        quantity: "per kg",
        image: "https://example.com/tomatoes.jpg",
        rating: 4.5,
        reviews: 92
      },
      {
        id: 6,
        name: "Green Vegetables Bundle",
        price: 35.99,
        quantity: "per kg",
        image: "https://example.com/vegetables.jpg",
        rating: 4.4,
        reviews: 67
      },
      {
        id: 7,
        name: "Premium Potatoes",
        price: 15.99,
        quantity: "per kg",
        image: "https://example.com/potatoes.jpg",
        rating: 4.8,
        reviews: 154
      },
      {
        id: 8,
        name: "Fresh Onions",
        price: 20.99,
        quantity: "per kg",
        image: "https://example.com/onions.jpg",
        rating: 4.9,
        reviews: 88
      }
    ]
  },
  {
    name: "Seeds & Planting",
    products: [
      {
        id: 9,
        name: "High-Yield Wheat Seeds",
        price: 899.99,
        quantity: "per quintal",
        image: "https://example.com/wheat-seeds.jpg",
        rating: 4.7,
        reviews: 203
      },
      {
        id: 10,
        name: "Organic Cotton Seeds",
        price: 799.99,
        quantity: "per quintal",
        image: "https://example.com/cotton-seeds.jpg",
        rating: 4.6,
        reviews: 167
      },
      {
        id: 11,
        name: "Premium Rice Seeds",
        price: 999.99,
        quantity: "per quintal",
        image: "https://example.com/rice-seeds.jpg",
        rating: 4.8,
        reviews: 142
      },
      {
        id: 12,
        name: "Vegetable Seeds Mix",
        price: 299.99,
        quantity: "per kg",
        image: "https://example.com/vegetable-seeds.jpg",
        rating: 4.5,
        reviews: 178
      }
    ]
  }
];

const AllProducts = () => {
  return (
<<<<<<< HEAD
    <div>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-xl font-semibold my-4">All Products</h1>
        {categories.map((category) => (
          <div key={category.name} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((item) => (
                <div key={item.name} className="border p-2 rounded-lg shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-center mt-2 font-medium">{item.name}</p>
                </div>
=======
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Agricultural Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              High-quality farm products directly from farmers
            </motion.p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <Link to={`/products/${product.id}`}>
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-2xl font-bold text-indigo-600">
                          ₹{product.price}
                        </p>
                        <span className="text-sm text-gray-600">
                          {product.quantity}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
>>>>>>> cc52f8c2e728f10db0b2c1c40f51790221d6acce
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
