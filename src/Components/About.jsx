// About.js
import React from "react";
import team from "../assets/Images/team.jpg"; // Adjust path as necessary
import HalaqahImage from "../assets/Images/halaqah.jpg"; // Adjust path as necessary
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-black opacity-90">
      <AboutCard
        imageSrc={HalaqahImage}
        title="About FQSS"
        description="Our History"
        text="We established our center in 1954, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AboutCard
        imageSrc={team}
        title="Our Team"
        description="Our History"
        text="We established our center in 1954, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default About;
