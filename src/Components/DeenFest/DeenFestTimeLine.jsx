import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "../../assets/Styles/App.css";

// Update the function signature to use props correctly.
export default function DeenFestTimeline({ eventData }) {
  return (
    <Timeline
      className="mx-6 text-white bg-black md:mx-40 fontStyle"
      position="alternate"
    >
      {eventData.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent className="text-white ">
            {event.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index !== eventData.length - 1 && <TimelineConnector />}{" "}
            {/* No connector after the last item */}
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-lg text-golden-400">{event.eventName}</h3>
            <p>{event.details}</p>
            <p className="text-golden-400">{event.venue}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
