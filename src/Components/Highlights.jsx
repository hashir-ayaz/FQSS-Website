import React from "react";
import EventCard from "./EventCard";
import { dummyEvents } from "../Components/DummyEvents";

function Highlights() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black opacity-90">
      <h1 className="mt-10 text-4xl font-bold text-white">Highlights</h1>
      <p className="mt-4 mb-10 text-white">
        Check out some of our recent events!
      </p>

      {/* Container to center the grid */}
      <div className="w-full max-w-6xl px-4">
        {/* Grid layout for cards */}
        <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {dummyEvents.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              presenter={event.presenter}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;