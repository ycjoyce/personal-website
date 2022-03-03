import styled from "styled-components";

const markerWidth = 15;
const lineGap = 10;

export const StyledMarker = styled.div`
  width: ${markerWidth}px;
  height: ${markerWidth}px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};
  transition: background-color 0.3s;
  flex-shrink: 0;
  margin: 0 20px;
`;

export const StyledBox = styled.div`
  flex: 1;
`;

export const StyledTime = styled(StyledBox)`
  text-align: right;
`;

export const StyledIntro = styled(StyledBox)`
  margin: 0 0 30px 0;
  text-align: justify;
  color: ${({ theme }) => theme.color.secondary};

  & p {
    margin: 0;
  }

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledTimelineItem = styled.li`
  display: flex;
  align-items: flex-start;
  position: relative;

  &:hover {
    & ${StyledMarker} {
      background-color: #fff;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 3px;
    height: calc(100% - ${markerWidth + lineGap}px);
    position: absolute;
    background-color: #ccc;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${lineGap / 2}px;
  }
`;

export default StyledTimelineItem;
