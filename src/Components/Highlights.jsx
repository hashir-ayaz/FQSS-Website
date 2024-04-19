import React from "react";
import EventCard from "./EventCard";
import { highlightEvents } from "./highlightEvents";

function Highlights() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black ">
      <h1 className="mt-10 text-4xl font-bold text-golden-500">Highlights</h1>
      <p className="mt-4 mb-10 text-white">
        Check out some of our recent events!
      </p>

      {/* Container to center the grid */}
      <div className="w-full max-w-6xl px-4 ">
        {/* Grid layout for cards */}
        <div className="grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {highlightEvents.map((event, index) => (
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
