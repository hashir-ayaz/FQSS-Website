import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 p-2 bg-black shadow-lg ">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center px-2 py-4">
                <img src={logo} alt="Logo" className="h-12 mr-2" />
                <span className="text-xl font-semibold text-gray-500 ">
                  FAST{" "}
                  <span className="text-golden-500">Quran and Sunnah </span>
                  Society
                </span>
              </Link>
            </div>

            <div className="items-center hidden space-x-1 md:flex">
              <Link
                to="/"
                className="px-2 py-4 font-semibold text-gray-500 hover:text-golden-500"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-golden-500"
              >
                About
              </Link>
              <Link
                to="/contactus"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-golden-500"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="items-center hidden space-x-3 md:flex">
            <Link to="/deenfest" className="bn29">
              Deen Fest
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-golden-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className=" mobile-menu">
          <ul>
            <li>
              <Link
                to="/"
                className="block px-2 py-4 text-sm font-semibold text-white hover:bg-golden-500"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block px-2 py-4 text-sm text-white transition duration-300 hover:bg-golden-500"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="block px-2 py-4 text-sm text-white transition duration-300 hover:bg-golden-900"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/deenfest"
                className="block px-2 py-4 text-sm text-white transition duration-300 hover:bg-golden-900"
                onClick={toggleMenu}
              >
                Deen Fest
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
