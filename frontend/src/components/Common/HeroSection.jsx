import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">
      <div className="container h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Fresh From The
              <span className="text-gradient"> Farm</span>
              <br /> To Your Table
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Discover the finest locally sourced produce and farm products. 
              Supporting farmers, delivering quality.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">
                Shop Now
              </button>
              <button className="btn bg-white text-primary-color border-2 border-primary-color hover:bg-primary-color hover:text-white">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-8 mt-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary-color">1000+</h4>
                <p className="text-sm text-gray-600">Farmers</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary-color">5000+</h4>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary-color">98%</h4>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <img
              src="/images/hero-image.jpg"
              alt="Fresh farm products"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-color rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">100% Organic</p>
                  <p className="text-sm text-gray-600">Certified Products</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
    </section>
  );
};

export default HeroSection;