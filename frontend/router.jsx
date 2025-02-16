import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home";  // Change from HomePage to Home
import AllProducts from "/src/pages/AllProducts";  // Change from AllProductsPage to AllProducts
import Navbar from "/src/components/Common/Navbar";  // Update the correct path
import Footer from "/src/components/Common/Footer";  // Update the correct path

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<AllProducts />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
