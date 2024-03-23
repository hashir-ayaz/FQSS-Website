import React, { useState, useEffect } from "react";

const EventCard = ({ title, presenter, description }) => {
  // Initialize state within the component
  const [fakeImage, setFakeImage] = useState("https://via.placeholder.com/300");

  // Use `useEffect` inside the component to fetch the image
  useEffect(() => {
    fetch("https://source.unsplash.com/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.url; // The URL of the random image
      })
      .then((imageUrl) => {
        setFakeImage(imageUrl); // Update state with the new image URL
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  }, []); // Empty dependency array means this effect will only run once after the initial render

  return (
    <div className="flex flex-col h-full max-w-sm overflow-hidden rounded shadow-lg border-golden-500">
      {" "}
      {/* Ensure cards grow to full height */}
      <div className="flex-shrink-0">
        {" "}
        {/* Prevent the image from stretching */}
        <img
          className="object-cover w-full h-48"
          src={fakeImage}
          alt={title}
        />{" "}
        {/* Fixed height for images */}
      </div>
      <div className="flex flex-col flex-grow p-6">
        {" "}
        {/* Flex container for content */}
        <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
        <p className="flex-grow text-gray-600">{description}</p>{" "}
        {/* Flex-grow to push the footer down */}
        <div className="mt-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-full">
            {presenter}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
