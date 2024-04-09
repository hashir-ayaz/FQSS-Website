import React from "react";

const AboutCard = ({ imageSrc, title, text }) => {
  return (
    // Use flex-col for mobile and switch to flex-row for larger screens
    <div className="flex flex-col max-w-4xl mx-auto overflow-hidden border-l-8 rounded-lg shadow-lg md:flex-row bg-golden-500 min-h- border-golden-600">
      {/* Adjust width to full on small screens and 1/2 on larger screens */}
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Adjust text container width similar to the image container */}
      <div className="w-full p-8 md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-black">{title}</h2>
        <div className="mb-8">
          <p className="mt-2 text-xl text-black">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
