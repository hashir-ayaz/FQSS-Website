import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const DeenFestEventCard = ({ eventName, time, details, venue }) => {
  return (
    <Card className="mt-6 w-96 bg-golden-500 bg-opacity-70">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-golden-400"
        >
          {eventName}
        </Typography>
        <Typography className="text-white">
          <span className="font-semibold">Time:</span> {time} <br></br>
          <span className="font-semibold">Venue:</span> {venue} <br></br>
          <span className="font-semibold">Details:</span> {details}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default DeenFestEventCard;
