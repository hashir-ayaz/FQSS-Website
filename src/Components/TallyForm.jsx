import React, { useEffect } from "react";

const TallyForm = () => {
  useEffect(() => {
    // Dynamically load the Tally script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);

    // Optional: Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Ensure the Tally.loadEmbeds function is called once the script is loaded
    const checkTally = setInterval(() => {
      if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
        window.Tally.loadEmbeds();
        clearInterval(checkTally);
      }
    }, 100);

    return () => clearInterval(checkTally);
  }, []);

  return (
    <div className="flex-1 bg-white ">
      <iframe
        data-tally-src="https://tally.so/embed/wzqr5g?transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        style={{
          width: "100%",
          height: "471px",
          border: "none",
          marginHeight: "0",
          marginWidth: "0",
        }}
        title="Deen Fest Event Registration"
      ></iframe>
    </div>
  );
};

export default TallyForm;
