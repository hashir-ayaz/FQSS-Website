import React from "react";
import DeenFestTimeLine from "./DeenFestTimeLine";
import { day1Events, day2Events } from "../AllEvents";

function DeenFestEvents({ currentTab }) {
  return (
    <div className="p-4">
      {currentTab === "day1" && <DeenFestTimeLine eventData={day1Events} />}
      {currentTab === "day2" && <DeenFestTimeLine eventData={day2Events} />}
    </div>
  );
}

export default DeenFestEvents;
