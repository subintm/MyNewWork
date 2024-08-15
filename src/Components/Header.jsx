import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <nav className="fixed bg-blue-600 text-white shadow-md w-full">
        <button >d</button>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Section: Logo and Search Bar */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-yellow-400">My</span>Shop
          </div>
          {/* Search Bar */}
          {/* <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full py-2 px-4 rounded outline-none text-black border border-gray-300"
            />
          </div> */}
        </div>
        {/* Right Section: Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to={'/'} className="text-sm cursor-pointer bg-transparent border-none text-white transition-colors duration-200 hover:text-yellow-400">
            Home
          </Link>
          <Link to="/login" className="text-sm cursor-pointer bg-transparent border-none text-white transition-colors duration-200 hover:text-yellow-400">
            Login
          </Link>
          <Link to="/cart" className="flex items-center cursor-pointer bg-transparent border-none text-white transition-colors duration-200 hover:text-yellow-400">
            <span className="ml-2">Cart ({cartCount})</span>
          </Link>
          <button className="flex text-sm items-center cursor-pointer bg-transparent border-none text-white transition-colors duration-200 hover:text-yellow-400">
            <span className="ml-2">Wishlist</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
