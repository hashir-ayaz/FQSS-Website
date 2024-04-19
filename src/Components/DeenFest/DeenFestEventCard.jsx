import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const DeenFestEventCard = ({
  eventName,
  time,
  details,
  venue,
  day,
  speaker,
}) => {
  return (
    <Card className="mt-6 transition-transform duration-200 border border-white border-solid hover:-translate-y-1 bg-opacity-85 w-96 bg-golden-500">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 font-bold text-black md:text-2xl"
        >
          {eventName}
        </Typography>
        <Typography className=" md:text-xl">
          {!!day && (
            <>
              <span className="font-semibold text-black">Day:</span>{" "}
              <span className="text-white">{day}</span>
              <br />
            </>
          )}
          {!!time && (
            <>
              <span className="font-semibold text-black">Time:</span>{" "}
              <span className="text-white">{time}</span>
              <br />
            </>
          )}
          {!!venue && (
            <>
              <span className="font-semibold text-black">Venue:</span>{" "}
              <span className="text-white">{venue}</span>
              <br />
            </>
          )}
          {!!details && (
            <>
              <span className="font-semibold text-black">Details:</span>{" "}
              <span className="text-white">{details}</span>
              <br />
            </>
          )}
          {!!speaker && (
            <>
              <span className="font-semibold text-black">
                Speaker:{" "}
                <span className="font-normal text-white">{speaker}</span>
              </span>
              <br />
            </>
          )}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default DeenFestEventCard;
