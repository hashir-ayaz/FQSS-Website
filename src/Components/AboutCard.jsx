import React from "react";
import fqss from "../assets/Images/deenfestlogopalestine.png";

function AboutCard({ title, image, backgroundColor }) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen px-4 pt-0 ${backgroundColor} sm:flex-row sm:px-5 md:px-12 lg:px-24 xl:px-36 2xl:px-48`}
    >
      <img
        src={image || fqss}
        alt="DeenFest Logo"
        className="self-center max-w-xs mb-10 sm:max-w-sm md:max-w-2xl"
      />
      <div className="flex flex-col max-w-screen-xl px-10 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-golden-500 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="p-3 text-xl font-semibold text-white md:text-2xl">
          Deen Fest is a religious festival hosted by FQSS, Islamabad that aims
          to promote Islamic teachings and values among the youth.
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
