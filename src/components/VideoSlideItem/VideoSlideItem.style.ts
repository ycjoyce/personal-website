import styled, { css } from "styled-components";

const StyledVideoSlideItem = styled.div<{ video: boolean }>`
  position: relative;

  & video {
    width: 100%;
    height: 100%;
  }

  ${({ video }) =>
    video &&
    css`
      & img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
      }
    `}
`;

export default StyledVideoSlideItem;
