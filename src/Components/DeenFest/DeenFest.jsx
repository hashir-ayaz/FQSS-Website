import React, { useState } from "react";
import DeenFestHero from "./DeenFestHero";
import DeenFestAbout from "./DeenFestAbout";
import DeenFestTabs from "./DeenFestTabs";
import DeenFestEvents from "./DeenFestEvents";
import DeenFestEventCard from "./DeenFestEventCard";
import { day1Events, day2Events } from "../AllEvents";

function DeenFest() {
  const [currentTab, setCurrentTab] = useState("day1");

  return (
    <div className="bg-black">
      <DeenFestHero title="What is Deen Fest?" />
      <DeenFestAbout />
      <DeenFestTabs setCurrentTab={setCurrentTab} />
      <DeenFestEvents currentTab={currentTab} />
      <div className="grid w-full grid-cols-1 gap-4 px-4 mx-auto md:gap-1 md:w-4/5 md:grid-cols-3">
        {day1Events.map((event, index) => (
          <DeenFestEventCard
            key={index}
            eventName={event.eventName}
            time={event.time}
            details={event.details}
            venue={event.venue}
            day={event.day}
            speaker={event.speaker}
            prizeMoney={event.prizeMoney}
          />
        ))}
        {day2Events.map((event, index) => (
          <DeenFestEventCard
            key={index}
            eventName={event.eventName}
            time={event.time}
            details={event.details}
            venue={event.venue}
            day={event.day}
            speaker={event.speaker}
            prizeMoney={event.prizeMoney}
          />
        ))}
      </div>
    </div>
  );
}

export default DeenFest;
