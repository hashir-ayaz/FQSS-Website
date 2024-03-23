import React from "react";
import { Link } from "react-router-dom";
// import teamPhoto from "../assets/Images/teamPhoto.png"; // Example path, replace with actual
// import eventPhoto from "../assets/Images/eventPhoto.png"; // Example path, replace with actual
// import galleryPhoto1 from "../assets/Images/galleryPhoto1.png"; // Example path, replace with actual

const About = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      {/* About the Team Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          About the Team
        </h2>
        <p className="mb-6 text-gray-600">
          Our team is dedicated to promoting the understanding and practice of
          the teachings of the Quran and Sunnah. We are a diverse group of
          volunteers passionate about spreading knowledge and fostering a
          supportive community.
        </p>
        <img
          src={teamPhoto}
          alt="Our Team"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Past Events Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Past Events</h2>
        <p className="mb-6 text-gray-600">
          We have hosted a variety of events aimed at educating and engaging our
          community. These events range from lectures and seminars to social
          gatherings and charity drives.
        </p>
        <img
          src={eventPhoto}
          alt="Past Event"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Gallery Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Sample gallery item */}
          <img
            src={galleryPhoto1}
            alt="Gallery Item"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* Repeat for more gallery items */}
        </div>
      </section>

      {/* Navigation back to home or other pages */}
      <div className="mt-10 text-center">
        <Link
          to="/"
          className="px-6 py-2 text-sm font-semibold text-white transition duration-300 rounded-md bg-golden-500 hover:bg-golden-400"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default About;
