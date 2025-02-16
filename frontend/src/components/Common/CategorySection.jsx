const categories = [
    { name: "Fruits", image: "/assets/fruits.jpg" },
    { name: "Vegetables", image: "/assets/vegetables.jpg" },
    { name: "Crops", image: "/assets/crops.jpg" },
    { name: "Seeds", image: "/assets/seeds.jpg" },
  ];
  
  const CategorySection = () => {
    return (
      <div className="text-center my-10">
        <h2 className="text-xl font-bold mb-6">Find the Products by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {categories.map((cat, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-32 object-cover" />
              <div className="p-2 text-lg font-medium bg-green-200">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategorySection;
  