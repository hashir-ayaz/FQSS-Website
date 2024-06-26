// CardText.js
import React from "react";

const CardText = ({ heading, text }) => {
  return (
    <div className="w-3/5 p-4">
      <h3 className="text-lg font-semibold">{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CardText;
