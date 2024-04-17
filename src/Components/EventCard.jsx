import React from "react";

const EventCard = ({ title, presenter, description, image }) => {
  return (
    <div className="flex flex-col h-full max-w-sm overflow-hidden transition-transform duration-200 rounded shadow-lg bg-golden-500 bg-opacity-90 hover:-translate-y-1">
      {" "}
      {/* Ensure cards grow to full height */}
      <div className="flex-shrink-0">
        {" "}
        {/* Prevent the image from stretching */}
        <img
          className="object-cover w-full h-48"
          src={image}
          alt={title}
        />{" "}
        {/* Fixed height for images */}
      </div>
      <div className="flex flex-col flex-grow p-6">
        {" "}
        {/* Flex container for content */}
        <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
        <p className="flex-grow text-black">{description}</p>{" "}
        {/* Flex-grow to push the footer down */}
        <div className="mt-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 bg-white rounded-full">
            {presenter}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
