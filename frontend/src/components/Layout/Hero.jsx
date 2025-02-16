import heroImg from "../../assets/Img1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return <section className="relative">
    <img 
    src={heroImg} 
    alt="AgriMart" 
    className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover" 
    />
    <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-black p-6">
            <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-10">
                Agricultural Produce
            </h1>
            <p className="text-sm text-white tracking-tighter md:text-lg mb-6">
                Explore the varied range of agricultural goods with the facility of logistics 
            </p>
            <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg -mb-60">
                Shop Now
            </Link>
        </div>
    </div>
  </section>;   
};

export default Hero

// 1:36:23