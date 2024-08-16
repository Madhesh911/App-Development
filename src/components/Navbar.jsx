// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userId = 1; // Assuming the user is logged in and their ID is 1

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold flex items-center">
          <img
            src="https://txt.1001fonts.net/img/txt/b3RmLjQwLmZmZmRmZC5VbVZ3WVdseUlFaDFZZy4z/kleptocracy-titling.rg-bold.webp"
            alt="Logo"
            className="h-8 mr-2"
          />
          <div className="relative inline-block">
            <svg
              className="h-6 w-6 animate-spin-slow text-black-300"
              xmlns="http://www.w3.org/2000/sv"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.428 15.341a7.963 7.963 0 01-1.67 2.204l1.449 1.449a10.012 10.012 0 002.199-2.908l-1.978-1.02zM12 2.006c-.177 0-.352.006-.528.018l.749 1.933c.259-.017.52-.027.779-.027 4.063 0 7.6 2.748 8.85 6.55l1.978-1.02A9.996 9.996 0 0012 2.006zm-5.204 2.19L5.327 4.244a7.978 7.978 0 012.204-1.67L6.51 1.47a10.024 10.024 0 00-2.908 2.198l1.194 1.194zM3.011 12c0-.26.01-.52.027-.779L1.105 10.95A9.925 9.925 0 001.003 12c0 4.063 2.748 7.6 6.55 8.85l1.02-1.978A7.988 7.988 0 013.011 12zM4.572 8.659a7.963 7.963 0 011.67-2.204L4.793 5.006a10.012 10.012 0 00-2.199 2.908l1.978 1.02zm10.013 9.145l-.749 1.933c.176.012.351.018.528.018 2.557 0 4.927-1.028 6.671-2.77l-1.449-1.449a7.978 7.978 0 01-2.204 1.67zm-9.008-1.488l-1.933.749c.533.846 1.194 1.632 1.97 2.351a9.994 9.994 0 002.908-1.978l-1.02-1.978a7.963 7.963 0 01-2.204 1.67z" />
            </svg>
          </div>
        </Link>
        <div className="hidden sm:flex space-x-4">
          <Link
            to="/"
            className="text-white px-3 py-2 relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            to="/login"
            className="text-white px-3 py-2 relative group"
          >
            Login
            <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            to="/register"
            className="text-white px-3 py-2 relative group"
          >
            Register
            <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            to={`/profile/${userId}`}
            className="text-white px-3 py-2 relative group"
          >
            <User className="inline-block w-5 h-5 mr-1" /> Profile
            <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white sm:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 transition-all duration-300"
            >
              Register
            </Link>
            <Link
              to={`/profile/${userId}`}
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 transition-all duration-300"
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
