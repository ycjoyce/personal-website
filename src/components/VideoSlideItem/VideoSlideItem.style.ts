import styled, { css } from "styled-components";

const StyledVideoSlideItem = styled.div<{ video: boolean }>`
  position: relative;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  & video {
    width: 100%;
    height: 100%;
  }

  & img {
    max-width: 100%;
    max-height: 100%;
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
