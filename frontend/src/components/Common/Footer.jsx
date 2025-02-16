const Footer = () => {
    return (
      <footer className="bg-gray-100 p-6 text-center mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <h3 className="font-bold">NEWSLETTER</h3>
            <p>Sign Up</p>
          </div>
          <div>
            <h3 className="font-bold">EXPLORE</h3>
            <p>Buy</p>
            <p>Sell</p>
            <p>Products</p>
          </div>
          <div>
            <h3 className="font-bold">SUPPORT</h3>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>FAQs</p>
          </div>
          <div>
            <h3 className="font-bold">FOLLOW US</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          © 2025 YourCompany PVT. LTD. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  