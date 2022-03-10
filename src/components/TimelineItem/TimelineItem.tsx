import React, { FC } from "react";
import { MotionProps } from "framer-motion";
import Title from "../Title/Title";
import StyledTimelineItem, {
  StyledMarker,
  StyledIntro,
  StyledTime,
  StyledList,
} from "./TimelineItem.style";

export interface TimelineItemProps extends MotionProps {
  time: string;
  title: string;
  content: string;
}

const TimelineItem: FC<TimelineItemProps> = ({
  time,
  title,
  content,
  ...props
}) => (
  <StyledTimelineItem {...props}>
    <StyledTime>{time}</StyledTime>

    <StyledMarker></StyledMarker>

    <StyledIntro>
      <Title level={6} size={4}>
        {title}
      </Title>

      <StyledList>
        {content.split("\n").map((e) => (
          <li key={e}>{e}</li>
        ))}
      </StyledList>
    </StyledIntro>
  </StyledTimelineItem>
);

export default TimelineItem;
