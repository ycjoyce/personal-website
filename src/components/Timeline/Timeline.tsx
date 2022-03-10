import React, { FC } from "react";
import { Variants } from "framer-motion";
import TimelineItem, { TimelineItemProps } from "../TimelineItem/TimelineItem";
import StyledTimeline from "./Timeline.style";

export interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  const itemVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const renderItems = (items: TimelineItemProps[]) => {
    return items.map((item) => (
      <TimelineItem
        {...item}
        key={item.title}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={itemVariants}
      />
    ));
  };

  return <StyledTimeline>{renderItems(items)}</StyledTimeline>;
};

export default Timeline;
