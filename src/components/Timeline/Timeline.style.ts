import styled from "styled-components";
import StyledTimelineItem, {
  StyledTime,
} from "../TimelineItem/TimelineItem.style";
import StyledTitle from "../Title/Title.style";

const StyledTimeline = styled.ul`
  & ${StyledTimelineItem} {
    &:nth-child(2n) {
      flex-direction: row-reverse;

      & ${StyledTitle} {
        text-align: right;
      }

      & ${StyledTime} {
        text-align: left;
      }
    }
  }
`;

export default StyledTimeline;
