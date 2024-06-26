import React from "react";
import logo from "../../assets/Images/deenfestlogo.png";
import { Link } from "react-router-dom";

function DeenFestHero({ title }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4 pt-0 bg-black sm:flex-row sm:px-5 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <img
        src={logo}
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
        <div className="">
          <Link
            to="/deen-fest-registration"
            className="inline-block w-40 px-4 py-2 mx-2 mt-4 text-white rounded-xl bg-golden-500 hover:bg-golden-400"
          >
            Register Now!
          </Link>
          <Link
            to="/deen-fest-events"
            className="inline-block w-40 px-4 py-2 mx-2 mt-4 text-white transition duration-300 ease-in-out border border-solid rounded-xl border-golden-500 hover:bg-golden-500"
          >
            View All Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeenFestHero;
