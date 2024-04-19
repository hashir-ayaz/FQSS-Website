import React from "react";
import SponsorForm from "./SponsorForm";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-black lg:py-3 lg:px-20">
        {/* Increased padding on larger screens for better spacing and centered content vertically and horizontally */}
        <div className="text-white max-w-7xl">
          {/* Removed mx-auto and md:text-center to allow text to align naturally which is generally more visually appealing on large screens */}
          <h2 className="mb-4 text-3xl font-extrabold text-golden-500 lg:text-5xl">
            {/* Increased font size on large screens for better visibility */}
            Feel free to contact us!
          </h2>
          <div className="flex flex-col space-y-4 md:justify-center md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12">
            {/* Increased spacing between columns on large screens */}
            <div>
              <h3 className="text-xl font-semibold text-golden-500 lg:text-2xl">
                {/* Increased font size on large screens for headers */}
                ADDRESS
              </h3>
              <p>FAST NUCES Islamabad,</p>
              <p>AK Brohi Road, H11</p>
            </div>
            <a href="https://www.instagram.com/fqss_isb/">
              <div>
                <h3 className="text-xl font-semibold text-golden-500 lg:text-2xl">
                  Socials
                </h3>
                {/* Added Instagram link */}
                <p>Instagram</p>
              </div>
            </a>

            <div>
              <h3 className="text-xl font-semibold text-golden-500 lg:text-2xl">
                EMAIL
              </h3>
              <p>deenfest24@gmail.com</p>
            </div>
          </div>
        </div>
        {/* SponsorForm component with appropriate margins for alignment */}
        <div className="w-full max-w-xl px-4 py-8 mx-auto mt-8 lg:mt-10 lg:max-w-2xl">
          {/* Increased max-width and adjusted margins on large screens for a better form presentation */}
          <SponsorForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
