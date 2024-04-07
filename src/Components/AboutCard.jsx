// AboutCard.js
import React from "react";

const AboutCard = ({ imageSrc, title, text, description }) => {
  return (
    <div className="flex max-w-4xl mx-auto overflow-hidden bg-white border-l-8 rounded-lg shadow-lg min-h- border-golden-500">
      <div className="w-1/2">
        <img src={imageSrc} alt={title} className="object-cover h-full" />
      </div>
      <div className="w-1/2 p-8">
        <h2 className="mb-4 text-3xl font-bold text-golden-600">{title}</h2>
        <div className="mb-8">
          <p className="text-sm text-gray-600">{description}</p>
          <p className="mt-2 text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
