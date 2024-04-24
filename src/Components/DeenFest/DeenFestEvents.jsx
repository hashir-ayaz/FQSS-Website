import React from "react";
import { day1Events, day2Events } from "../AllEvents";
import DeenFestEventCard from "./DeenFestEventCard";

function DeenFestEvents() {
  return (
    <div className="bg-black">
      <div className="grid w-full grid-cols-1 gap-4 px-4 mx-auto bg-black md:gap-1 md:w-4/5 md:grid-cols-3">
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

export default DeenFestEvents;
