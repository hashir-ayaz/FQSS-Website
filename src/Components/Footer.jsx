import React from "react";
import logo from "../assets/Images/logo.png"; // Assume you have a logo image
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-white bg-black p ">
      <div className="flex flex-wrap items-center justify-between max-w-6xl px-4 mx-auto ">
        {/* Logo Column */}
        <div className="flex flex-col items-center mb-6 font-bold md:items-start">
          <Link to="/">
            <p>FAST Quran and Sunnah Society</p>
            <img src={logo} alt="Logo" className="w-24 mb-4" />
          </Link>
        </div>

        {/* Useful Links Column */}
        <div className="mb-6 ">
          <h3 className="mb-4 text-lg font-bold">Useful Links</h3>
          <ul>
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/deenfest" className="hover:underline">
                Deen Fest
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="mb-6 ">
          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
          <ul>
            <li>Email: fqss@nu.edu.pk</li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                Become a Sponsor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
