import React from "react";

const DeenFestEventCard = ({ eventName, time, details, venue }) => {
  return (
    <div className="max-w-sm p-4 mx-auto my-4 overflow-hidden text-center bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">{eventName}</h2>
      <p className="text-gray-600">{time}</p>
      <p className="my-2 text-sm text-gray-500">{details}</p>

      <p className="text-gray-600">{venue}</p>
    </div>
  );
};

export default DeenFestEventCard;
