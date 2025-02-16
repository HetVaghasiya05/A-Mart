import Image2 from "../../assets/Img2.jpg";
import Image3 from "../../assets/Img3.jpg";
import { Link } from "react-router-dom";

const CategoryCollectionSection = () => {
  return <section className="py-16 px-4 lg:px-0">
    <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Category-1.1 */}
        <div className="relative flex-1">
            <img 
            src={Image2} 
            alt="Category-1.1"
            className="w-full h-[700px] object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2x font-bold text-gray-900 mb-3">
                Category-1.1
            </h2>
            <Link to="/collections/all?category-1"
            className="text-gray-900 underline"
            >
                Shop Now
            </Link>
            </div>
        </div>

            {/* Category-2.1 */}
                <div className="relative flex-1">
            <img 
            src={Image3} 
            alt="Category-2.1"
            className="w-full h-[700px] object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2x font-bold text-gray-900 mb-3">
                Category-2.1
            </h2>
            <Link to="/collections/all?category-2"
            className="text-gray-900 underline"
            >
                Shop Now
            </Link>
            </div>
        </div>
    </div>
  </section>
    
  
};

export default CategoryCollectionSection;