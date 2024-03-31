import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { day1Events } from "./Day1Events";

export default function DeenFestTimeline() {
  return (
    <Timeline className="text-white bg-black" position="alternate">
      {day1Events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent className="text-white">
            {event.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index !== day1Events.length - 1 && <TimelineConnector />}{" "}
            {/* No connector after the last item */}
          </TimelineSeparator>
          <TimelineContent>
            <h3>{event.event}</h3>
            <p>{event.details}</p>
            <p>{event.venue}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
