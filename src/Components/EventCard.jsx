import React from "react";

const EventCard = ({ title, presenter, description, image }) => {
  return (
    <div className="flex flex-col h-full max-w-sm overflow-hidden transition-transform duration-300 rounded-lg shadow-xl bg-golden-500 hover:shadow-2xl hover:scale-105">
      <div className="flex-shrink-0">
        <img
          className="object-cover w-full h-48 rounded-t-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="flex-grow leading-relaxed text-gray-700">{description}</p>
        <div className="mt-4">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full">
            {presenter}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
