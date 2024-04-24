import React, { useState } from "react";
import DeenFestHero from "./DeenFestHero";
import DeenFestAbout from "./DeenFestAbout";
import DeenFestTabs from "./DeenFestTabs";
import DeenFestEvents from "./DeenFestTimeLineTabs";

function DeenFest() {
  const [currentTab, setCurrentTab] = useState("day1");

  return (
    <div className="bg-black">
      <DeenFestHero title="What is Deen Fest?" />

      <DeenFestAbout />

      <DeenFestTabs setCurrentTab={setCurrentTab} />

      <DeenFestEvents currentTab={currentTab} />

      <DeenFestEvents />
    </div>
  );
}

export default DeenFest;
