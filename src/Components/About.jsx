import React from "react";
import team from "../assets/Images/team.jpg"; // Adjust path as necessary
import HalaqahImage from "../assets/Images/halaqah.jpg"; // Adjust path as necessary
import fqss from "../assets/Images/deenfestlogopalestine.png"; // Placeholder for missing import

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:flex-wrap">
      <div className="flex flex-col items-center justify-center w-full px-4 bg-black sm:flex-row sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
        <img
          src={team || fqss}
          alt="Team Photo"
          className="self-center max-w-xs my-10 sm:max-w-sm md:max-w-lg"
        />
        <div className="flex flex-col max-w-screen-xl px-1 mx-auto text-center md:px-10">
          <h1 className="mb-4 text-4xl font-extrabold text-golden-500 sm:text-4xl md:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="pb-6 text-xl font-semibold text-justify text-white justify-text md:text-2xl">
            The Fast Quran and Sunnah Society (FQSS) is a dedicated religious
            society at FAST Islamabad, focused on assisting students in
            harmonizing their educational pursuits with their Islamic faith.
            Recognizing the challenges that students often face in balancing
            their academic responsibilities with their religious duties, FQSS
            provides a supportive community where both aspects can thrive in
            tandem. The society frequently invites esteemed speakers and guests
            to engage with the student body through talks and educational
            sessions. These events are designed to inspire, educate, and
            motivate students, fostering a deep connection with Islamic
            teachings while excelling academically. Through its activities, FQSS
            plays a pivotal role in nurturing a well-rounded and spiritually
            enriched student environment.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-6 p-0 min-h-1/2 ">
        <div className="flex flex-col items-center justify-center w-full px-4 pt-4 bg-black min-h-1/2 sm:flex-row sm:px-5 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
          <img
            src={HalaqahImage || fqss}
            alt="Halaqah Image"
            className="self-center max-w-xs my-10 sm:max-w-sm md:max-w-lg"
          />
          <div className="flex flex-col max-w-screen-xl px-1 pt-5 mx-auto text-center md:px-10">
            <h1 className="mb-4 text-4xl font-extrabold text-golden-500 sm:text-4xl md:text-5xl lg:text-6xl">
              Our Mission
            </h1>
            <p className="pb-6 text-xl font-semibold text-justify text-white justify-text md:text-2xl">
              The mission of the Fast Quran and Sunnah Society (FQSS) at FAST
              Islamabad is to support and empower students in seamlessly
              integrating their Islamic faith with academic pursuits. We strive
              to provide a vibrant platform where students can deepen their
              religious knowledge, engage in meaningful discussions, and develop
              holistically through regular educational and inspirational
              sessions with esteemed speakers. Our goal is to foster a
              well-rounded, spiritually enriched community that excels both
              academically and spiritually..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
