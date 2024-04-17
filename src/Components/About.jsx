import React from "react";
import team from "../assets/Images/team.jpg"; // Adjust path as necessary
import HalaqahImage from "../assets/Images/halaqah.jpg"; // Adjust path as necessary
import fqss from "../assets/Images/deenfestlogopalestine.png"; // Placeholder for missing import

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:flex-wrap">
      <div className="flex flex-col items-center justify-center w-full px-4 bg-golden-500 opacity-85 sm:flex-row sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
        <img
          src={team || fqss}
          alt="Team Photo"
          className="self-center max-w-xs my-10 sm:max-w-sm md:max-w-lg"
        />
        <div className="flex flex-col max-w-screen-xl px-10 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-black sm:text-4xl md:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="p-3 text-xl font-semibold text-white md:text-2xl">
            Deen Fest is a religious festival hosted by FQSS, Islamabad that
            aims to promote Islamic teachings and values among the youth.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-0 min-h-1/2 md:flex-wrap">
        <div className="flex flex-col items-center justify-center w-full px-4 pt-4 bg-black min-h-1/2 sm:flex-row sm:px-5 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
          <img
            src={HalaqahImage || fqss}
            alt="Halaqah Image"
            className="self-center max-w-xs my-10 sm:max-w-sm md:max-w-lg"
          />
          <div className="flex flex-col max-w-screen-xl px-10 mx-auto text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-golden-500 sm:text-4xl md:text-5xl lg:text-6xl">
              Our Mission
            </h1>
            <p className="p-3 text-xl font-semibold text-white md:text-2xl">
              Deen Fest is a religious festival hosted by FQSS, Islamabad that
              aims to promote Islamic teachings and values among the youth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
