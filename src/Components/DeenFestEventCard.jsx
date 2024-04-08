import React from "react";

// const DeenFestEventCard = ({ eventName, time, details, venue }) => {
//   return (
//     <div className="max-w-sm p-4 mx-auto my-4 overflow-hidden text-center bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold text-gray-800">{eventName}</h2>
//       <p className="text-gray-600">{time}</p>
//       <p className="my-2 text-sm text-gray-500">{details}</p>

//       <p className="text-gray-600">{venue}</p>
//     </div>
//   );
// };

// export default DeenFestEventCard;

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
