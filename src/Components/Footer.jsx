import React from "react";
import logo from "../assets/Images/logo.png"; // Assume you have a logo image
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-white bg-black">
      <div className="flex flex-col items-center justify-between max-w-6xl px-4 mx-auto md:flex-row">
        {/* Logo Column */}
        <div className="flex flex-col items-center mb-6 font-bold md:items-start md:w-1/3">
          <Link to="/">
            <p className="text-center md:text-left">
              FAST Quran and Sunnah Society
            </p>
            <img src={logo} alt="Logo" className="w-24 mt-2" />
          </Link>
        </div>

        {/* Useful Links Column */}
        <div className="flex flex-col items-center mb-6 md:items-start md:w-1/3">
          <h3 className="mb-4 text-lg font-bold text-center md:text-left">
            Useful Links
          </h3>
          <ul className="text-center md:text-left">
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
        <div className="flex flex-col items-center mb-6 md:items-start md:w-1/3">
          <h3 className="mb-4 text-lg font-bold text-center md:text-left">
            Contact Us
          </h3>
          <ul className="text-center md:text-left">
            <li>Email: fqss.isb@nu.edu.pk</li>
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
