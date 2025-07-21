import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Scale, Search } from "lucide-react";

function Header() {
  return (
    <>
      {/* Top Notice Bar */}
      <header className="bg-yellow-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-2 text-sm text-gray-700">
          <div>
            <p>
              Welcome to our Store,
              <span className="font-semibold text-yellow-700"> Bruk Computer and Accessories</span> — Home of Laptops
            </p>
            <p className="text-xs text-gray-600">
              📍 Location: Addis Ababa, Meskel Square | 📞 Contact: +251-911-234567 | ✉️ brukshop@gmail.com
            </p>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="#" className="text-blue-600 hover:underline">Track Order</Link>
            <Link to="#" className="text-blue-600 hover:underline">Account</Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="w-full bg-white shadow-md px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-yellow-500">
            MyShop
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
      </header>
    </>
  );
}

export default Header;
