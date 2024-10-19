import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const DeenFestEventCard = ({
  eventName,
  time,
  details,
  venue,
  day,
  speaker,
  prizeMoney,
  image,
}) => {
  return (
    <Card className="flex flex-col h-full max-w-sm overflow-hidden transition-transform duration-300 rounded-lg shadow-xl bg-gradient-to-r from-yellow-400 to-orange-400 hover:shadow-2xl hover:scale-105">
      {/* Image Section */}
      {/* <div className="flex-shrink-0">
        <img
          className="object-cover w-full h-48 rounded-t-lg"
          src={image}
          alt={eventName}
        />
      </div> */}

      {/* Card Body */}
      <CardBody className="flex flex-col flex-grow p-6">
        {/* Event Name */}
        <Typography
          variant="h3"
          className="mb-2 text-2xl font-bold text-gray-900"
        >
          {eventName}
        </Typography>

        {/* Event Details */}
        <Typography className="flex-grow space-y-2 leading-relaxed text-gray-700">
          {!!day && (
            <div>
              <span className="font-semibold text-black">Day:</span>{" "}
              <span className="text-gray-700">{day}</span>
            </div>
          )}
          {!!time && (
            <div>
              <span className="font-semibold text-black">Time:</span>{" "}
              <span className="text-gray-700">{time}</span>
            </div>
          )}
          {!!venue && (
            <div>
              <span className="font-semibold text-black">Venue:</span>{" "}
              <span className="text-gray-700">{venue}</span>
            </div>
          )}
          {!!details && (
            <div>
              <span className="font-semibold text-black">Details:</span>{" "}
              <span className="text-gray-700">{details}</span>
            </div>
          )}
        </Typography>

        {/* Speaker Info */}
        {!!speaker && (
          <div className="mt-4">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full">
              Speaker: {speaker}
            </span>
          </div>
        )}

        {/* Prize Money Section */}
        {!!prizeMoney && (
          <div className="mt-4">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-full">
              Prize: {prizeMoney}
            </span>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default DeenFestEventCard;
