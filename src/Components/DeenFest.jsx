import React, { useState } from "react";
import logo from "../assets/Images/deenfestlogo.png";
import { Link } from "react-router-dom";
import DeenFestTimeLine from "./DeenFestTimeLine";
import { day1Events, day2Events } from "./Day1Events";
import { Button, ButtonGroup } from "@mui/material";
import DeenFestEventCard from "./DeenFestEventCard";

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
        <h1 className="mb-4 text-4xl font-extrabold text-golden-500 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="p-3 text-xl font-semibold text-white md:text-2xl">
          Deen Fest is a religious festival hosted by FQSS, Islamabad that aims
          to promote Islamic teachings and values among the youth.
        </p>
        <Link
          to="/deen-fest-registration"
          className="inline-block w-40 px-4 py-2 mx-auto mt-4 text-white rounded-xl bg-golden-500 hover:bg-golden-400"
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
        <div className="flex flex-col items-center mx-auto text-center text-white max-w-7xl">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl text-golden-500">
            About Deen Fest
          </h2>
          <p className="mb-8 font-semibold max-w-screen md:text-2xl">
            Deen Fest is a religious festival that aims to promote Islamic
            teachings and values among the youth. It provides a platform for
            students to learn about the Quran and Sunnah in a fun and engaging
            way. The theme for Deen Fest is showing our solidarity for Palestine
          </p>
        </div>
      </div>
    </div>
  );
}

function DeenFest() {
  const [currentTab, setCurrentTab] = useState("day1");

  const changeTab = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="bg-black">
      <DeenFestHero title="What is Deen Fest?" />
      <DeenFestAbout />
      <div className="flex items-center justify-center">
        <ButtonGroup variant="outlined">
          <Button onClick={() => changeTab("day1")}>Day 1</Button>
          <Button onClick={() => changeTab("day2")}>Day 2</Button>
        </ButtonGroup>
      </div>
      <div className="p-4">
        {currentTab === "day1" && <DeenFestTimeLine eventData={day1Events} />}
        {currentTab === "day2" && <DeenFestTimeLine eventData={day2Events} />}
      </div>

      <div className="justify-center mx-auto md:max-w-4/5 ">
        {/*section for the events we have*/}
        <h2 className="mb-4 text-2xl font-bold text-center md:text-4xl text-golden-500">
          Events
        </h2>
        <p className="px-5 mb-4 font-bold text-center text-white text-l md:text-2xl">
          Take a look at the exciting events we have planned for you!
        </p>
        <div className="grid w-full grid-cols-1 gap-4 px-4 mx-auto md:gap-1 md:w-4/5 md:grid-cols-3">
          {day1Events.map((event, index) => (
            <DeenFestEventCard
              key={index}
              eventName={event.eventName}
              time={event.time}
              details={event.details}
              venue={event.venue}
            />
          ))}
          {day2Events.map((event, index) => (
            <DeenFestEventCard
              key={index}
              eventName={event.eventName}
              time={event.time}
              details={event.details}
              venue={event.venue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeenFest;
