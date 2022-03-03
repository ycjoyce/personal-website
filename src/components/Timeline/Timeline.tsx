import React, { FC } from "react";
import TimelineItem, { TimelineItemProps } from "../TimelineItem/TimelineItem";
import StyledTimeline from "./Timeline.style";

export interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  const renderItems = (items: TimelineItemProps[]) => {
    return items.map((item) => <TimelineItem {...item} key={item.title} />);
  };

  return <StyledTimeline>{renderItems(items)}</StyledTimeline>;
};

export default Timeline;
