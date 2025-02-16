import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    name: 'Fresh Vegetables',
    image: '/images/vegetables.jpg',
    count: '150+ Items',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 2,
    name: 'Organic Fruits',
    image: '/images/fruits.jpg',
    count: '100+ Items',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 3,
    name: 'Dairy Products',
    image: '/images/dairy.jpg',
    count: '80+ Items',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 4,
    name: 'Farm Fresh Eggs',
    image: '/images/eggs.jpg',
    count: '30+ Items',
    color: 'from-yellow-500 to-yellow-600',
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Explore Our <span className="text-gradient">Categories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover our wide range of farm-fresh products, carefully sourced from local farmers
            to bring you the best quality and taste.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-80 transition-opacity group-hover:opacity-90`}></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count}</p>
                  <div className="mt-4 transform translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Products
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn btn-primary">
            View All Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;