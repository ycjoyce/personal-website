import React, { FC } from "react";
import TimelineItem, { TimelineItemProps } from "../TimelineItem/TimelineItem";
import StyledTimeline from "./Timeline.style";

export interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  const renderItems = (items: TimelineItemProps[]) => {
    return items.map((item, i) => (
      <TimelineItem
        {...item}
        key={item.title}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: i * 0.3,
            },
          },
        }}
      />
    ));
  };

  return <StyledTimeline>{renderItems(items)}</StyledTimeline>;
};

export default Timeline;
