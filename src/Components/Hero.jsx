import React from "react";
import quran from "../assets/Images/quran.jpg";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-[-10]">
      <div
        className="relative w-full h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${quran})` }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center px-4">
          <img src={logo} className="mt-[-80px] w-40"></img>
          <h1 className="mb-4 text-4xl font-bold text-center text-white lg:text-6xl">
            FAST Quran and Sunnah Society
          </h1>
          <h2 className="text-xl text-center text-white lg:text-3xl">
            Enlightning one soul at a time, starting with our own ✨
          </h2>
          <Link
            to={"/deen-fest-registration"}
            className="relative z-10 px-10 py-2 mt-5 text-lg text-white transition duration-300 ease-in-out bg-transparent border-2 rounded-full shadow-md outline-none cursor-pointer border-golden-500 hover:bg-yellow-500 hover:text-black"
          >
            Register for Deen Fest now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
