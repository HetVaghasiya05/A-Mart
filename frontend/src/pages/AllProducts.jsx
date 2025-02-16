// import { Link } from "react-router-dom";
// import Footer from "../components/Common/Footer";
// import Navbar from "../components/Common/Navbar";

const categories = [
  { name: "Fruits", image: "/images/fruits.jpg" },
  { name: "Vegetables", image: "/images/vegetables.jpg" },
  { name: "Crops", image: "/images/crops.jpg" },
  { name: "Seeds", image: "/images/seeds.jpg" },
];

const AllProducts = () => {
  return (
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
