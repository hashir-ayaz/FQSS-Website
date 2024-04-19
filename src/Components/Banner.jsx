// Banner.js
import React from "react";
import backgroundImage from "../assets/Images/Banner.jpg"; // Replace with the path to your background image
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="flex items-center justify-between px-12 py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "white",
      }}
    >
      <div>
        <h1 className="text-4xl font-bold">Deen Fest by FQSS</h1>
        <p className="mt-2">
          Deen Fest is going to be one of our flagship event this year. For more
          information, <Link to={"/deenfest"}>click here</Link>
        </p>
      </div>
      <div className="text-right">
        <h2 className="text-2xl font-semibold drop-shadow-sm">
          REGISTRATION DEADLINE
        </h2>
        <p className="text-lg drop-shadow-md">28th April 2024</p>
      </div>
    </div>
  );
};

export default Banner;
