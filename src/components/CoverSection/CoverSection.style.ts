import styled, { css, keyframes } from "styled-components";
import StyledBlotter from "../Blotter/Blotter.style";
import StyledArrow from "../Arrow/Arrow.style";
import StyledBackground from "../AnimatedBackground/AnimatedBackground.style";
import { breakpointDown } from "../../styles/abstracts/mixins";

const arrowAnimation = keyframes`
  from {
    transform: rotate(180deg) translateY(0);
  }
  to {
    transform: rotate(180deg) translateY(-10px);
  }
`;

export const StyledArrowBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.font.small};

  & ${StyledArrow} {
    left: 50%;
    animation: ${arrowAnimation} 0.5s linear infinite alternate;
  }
`;

const StyledCoverSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  & ${StyledArrowBox} {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  & ${StyledBackground} {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

export const StyledBlotterBox = styled.div`
  position: relative;
  height: 500px;
  width: 450px;
  margin: 0 auto;

  ${({ theme }) => {
    return css`
      ${breakpointDown(theme.breakpoints.sm)} {
        width: 100%;
        overflow: hidden;
      }
    `;
  }}

  ${StyledBlotter} {
    position: absolute;
  }

  & [data-subtitle] {
    position: absolute;
    top: 50%;
    right: 0%;
    font-size: ${({ theme }) => theme.font[1]};
    line-height: ${({ theme }) => theme.font[1]};
    font-style: italic;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & .typed-cursor {
    position: absolute;
    top: calc(50% + 2rem);
    right: -1rem;
  }
`;

export default StyledCoverSection;
