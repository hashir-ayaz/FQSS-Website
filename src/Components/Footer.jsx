import React from "react";
import logo from "../assets/Images/logo.png"; // Assume you have a logo image

const Footer = () => {
  return (
    <footer className="w-full py-8 text-white bg-black bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between max-w-6xl px-4 mx-auto">
        {/* Logo Column */}
        <div className="flex flex-col items-center mb-6 md:items-start">
          <img src={logo} alt="Logo" className="w-24 mb-4" />
          <p>FAST Quran and Sunnah Society</p>
        </div>

        {/* Useful Links Column */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-bold">Useful Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>
              <a href="#" className="hover:underline">
                Contact Form
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
