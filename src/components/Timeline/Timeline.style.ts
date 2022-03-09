import styled, { css } from "styled-components";
import StyledTimelineItem, {
  StyledTime,
  StyledList,
} from "../TimelineItem/TimelineItem.style";
import StyledTitle from "../Title/Title.style";
import { breakpointUp } from "../../styles/abstracts/mixins";

const StyledTimeline = styled.ul`
  padding: 0;
  margin: 0;

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.sm)} {
        & ${StyledTimelineItem} {
          &:nth-child(2n) {
            flex-direction: row-reverse;

            & ${StyledTitle} {
              text-align: right;
            }

            & ${StyledList} li {
              flex-direction: row-reverse;
              text-align: right;

              &::before {
                margin-right: 0;
                margin-left: 10px;
              }
            }

            & ${StyledTime} {
              text-align: left;
            }
          }
        }
      }
    `;
  }}
`;

export default StyledTimeline;
