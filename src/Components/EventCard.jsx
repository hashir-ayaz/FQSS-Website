// EventCard.js
import React from "react";

//fake image from api
let fakeImage = "https://via.placeholder.com/300";

const EventCard = ({ image, title, presenter, description }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img className="w-full" src={fakeImage} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-golden-600">{title}</div>
        <p className="text-base text-golden-700">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-gray-200 rounded-full text-golden-700">
          {presenter}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
