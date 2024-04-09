// About.js
import React from "react";
import team from "../assets/Images/team.jpg"; // Adjust path as necessary
import HalaqahImage from "../assets/Images/halaqah.jpg"; // Adjust path as necessary
import AboutCard from "./AboutCard";

const About = () => {
  return (
    // Using flex-col for mobile and flex-row with wrapping for larger screens
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-black md:flex-wrap opacity-90">
      <AboutCard
        imageSrc={HalaqahImage}
        title="About FQSS"
        text="The Fast Quran and Sunnah Society (FQSS) at FAST Islamabad is dedicated to helping students balance their studies with their Islamic faith. We offer a nurturing environment that combines educational and spiritual growth, hosting events with esteemed Islamic speakers to enrich our community's knowledge and practice of Islam. FQSS is where academic excellence meets profound religious engagement, empowering students to excel in both."
      />
      <AboutCard
        imageSrc={team}
        title="Our Team"
        text="At the Fast Quran and Sunnah Society (FQSS), our structure comprises dedicated teams each focusing on a unique aspect of our mission. The Operations team ensures seamless event management, while the Media team captures and shares our activities, fostering engagement. Our Content Writing team enriches our community's knowledge with insightful Islamic articles. The Outreach team broadens our impact, connecting us with wider communities. Finally, the Halaqah team deepens our spiritual understanding through study circles on the Quran and Sunnah. Together, these teams propel FQSS towards fulfilling its vision of harmonizing academic and spiritual growth."
      />
    </div>
  );
};

export default About;
