import React from "react";
import logo from "../assets/Images/deenfestlogo.png";
import { Link } from "react-router-dom";
import TimeLine from "./TimeLine";

function DeenFestHero({ title }) {
  // Ensure you are passing 'logo' as a prop or importing it
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4 pt-0 bg-black sm:flex-row sm:px-5 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <img
        src={logo}
        alt="DeenFest Logo"
        className="self-center max-w-xs mb-10 sm:max-w-sm md:max-w-md"
      />
      <div className="flex flex-col max-w-screen-xl px-10 mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-golden-500 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-xl text-white">
          Deen Fest is a religious festival that aims to promote Islamic
          teachings and values among the youth.
        </p>
        <Link
          to="/deen-fest-registration"
          className="inline-block px-4 py-2 mt-4 text-white rounded-xl bg-golden-500"
        >
          Register Now!
        </Link>
      </div>
    </div>
  );
}

function DeenFestAbout() {
  return (
    <div>
      <div className="px-4 py-8 bg-black">
        <div className="mx-auto text-center text-white max-w-7xl">
          <h2 className="mb-4 text-2xl font-bold">About Deen Fest</h2>
          <p className="mb-8">
            Deen Fest is a religious festival that aims to promote Islamic
            teachings and values among the youth. It provides a platform for
            students to learn about the Quran and Sunnah in a fun and engaging
            way.
          </p>
          <h3 className="text-xl font-semibold">Objectives</h3>
          <ul className="text-left list-disc list-inside">
            <li>Spread awareness about Islamic teachings</li>
            <li>Promote Islamic values and ethics</li>
            <li>Encourage students to follow the Quran and Sunnah</li>
            <li>Provide a platform for students to showcase their talents</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DeenFest() {
  return (
    <div>
      <DeenFestHero title="What is Deen Fest?" />
      {/* <img src={decoration}></img> */}
      <DeenFestAbout />
      <TimeLine />
    </div>
  );
}

export default DeenFest;
