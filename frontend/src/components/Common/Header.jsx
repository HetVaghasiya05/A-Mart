import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
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
      </div>
    </header>
  );
};

export default Header;
