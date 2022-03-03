import React, { FC, ReactNode } from "react";
import Title from "../Title/Title";
import StyledTimelineItem, {
  StyledMarker,
  StyledIntro,
  StyledTime,
} from "./TimelineItem.style";

export interface TimelineItemProps {
  time: string;
  title: string;
  content: ReactNode;
}

const TimelineItem: FC<TimelineItemProps> = ({ time, title, content }) => (
  <StyledTimelineItem>
    <StyledTime>{time}</StyledTime>
    <StyledMarker></StyledMarker>
    <StyledIntro>
      <Title level={6} size={4}>
        {title}
      </Title>
      <div>{content}</div>
    </StyledIntro>
  </StyledTimelineItem>
);

export default TimelineItem;
