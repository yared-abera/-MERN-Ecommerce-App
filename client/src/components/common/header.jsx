import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Scale, Search,User } from "lucide-react";

function Header() {
  return (
    <>
      {/* Top Notice Bar */}
      <header className=  "w-full  bg-gray-100 shadow-sm ">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-5 text-sm text-gray-700">
          <div>
            <p className='text-2xl font-bold'>
              Welcome to our Store,
              <span className="  text-yellow-700"> Biruk Computer and Accessories Store</span> — Home of Laptops
            </p>
            <p className="text-sm text-gray-600">
              📍 Location: Mozambique St, Mexico, Addis Ababa | 📞 Contact: +251-915-121-927| ✉️ brukshop@gmail.com
            </p>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
             <Link to="#" className="text-blue-600 hover:underline text-md">Track Order</Link>
             <Link to="#" className="flex text-blue-600 hover:underline text-md gap-1"><User size={18} /> Account</Link> 
          </div>
        </div>

        {/* Main Header */}
        <div className="w-full bg-white shadow-md px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-yellow-500">
            Biruk Store
          </Link>

          {/* Search Bar */}
          <div className="flex items-stretch border rounded-md overflow-hidden w-full md:w-1/2">
            <select className="bg-yellow-50 text-sm px-3 py-2 border-r outline-none">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Books</option>
            </select>
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow px-4 py-2 outline-none"
            />
            <button className="bg-yellow-500 text-white px-4 flex items-center justify-center">
              <Search size={18} />
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-6 text-gray-700 text-sm">
            <Link to="/wishlist" className="flex items-center gap-1 hover:text-yellow-600">
              <Heart size={20} />
              Wishlist
            </Link>
            <Link to="/compare" className="flex items-center gap-1 hover:text-yellow-600">
              <Scale size={20} />
              Compare
            </Link>
            <Link to="/cart" className="flex items-center gap-1 hover:text-yellow-600">
              <ShoppingCart size={20} />
              Cart
            </Link>
          </div>
        </div>
         
       <nav className="bg-yellow-400 shadow-md w-full">
      <div className="container mx-auto w-full px-2  py-3 flex justify-between items-center">
        <div className="w-1/4">
          
        </div>
        {/* Navigation Links */}
        <ul className="flex w-1/2 text-lg justify-around text-white font-medium text-sm">
          <li>
            <Link to="/" className="hover:underline hover:text-white/90">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:underline hover:text-white/90">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-white/90">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline hover:text-white/90">
              Contact
            </Link>
          </li>
        </ul>
        <div className="w-1/4 text-center text-white text-md">
          <p>Phone: +251-915-121-927</p>
        </div>
      </div>
    </nav>
         
      </header>
    </>
  );
}

export default Header;
