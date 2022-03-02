import styled, { keyframes, css } from "styled-components";
import { Direction } from "./Arrow";

interface StyledArrowProps {
  direction: Direction;
  length: string;
  color: string;
  animate?: boolean;
}

const lengthKeyframes = (l: string, d: Direction) => keyframes`
  to {
    ${d === "left" || d === "right" ? "width" : "height"}: 10px;
  }
  from {
    ${d === "left" || d === "right" ? "width" : "height"}: ${l};
  }
`;

const StyledArrow = styled.div<StyledArrowProps>`
  ${({ animate = false, length, direction }) => {
    if (animate) {
      return css`
        animation: ${lengthKeyframes(length, direction)} 1s
          cubic-bezier(0.1, -0.6, 0.2, 0) infinite alternate;
      `;
    }
    return "";
  }}

  border-${({ direction }) => {
    return direction === "left" || direction === "right" ? "top" : "right";
  }}: 1px solid ${({ color }) => color};
  position: relative;

  width: ${({ length, direction }) => {
    return direction === "left" || direction === "right" ? length : 0;
  }};

  height: ${({ length, direction }) => {
    return direction === "left" || direction === "right" ? 0 : length;
  }};

  transform: ${({ direction }) => {
    const degreeMap = {
      left: "rotate(0deg)",
      right: "rotateY(180deg)",
      top: "rotate(0deg)",
      bottom: "rotate(180deg)",
    };
    return degreeMap[direction];
  }};

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 0;
    border-top: 1px solid ${({ color }) => color};
    transform: rotate(
      ${({ direction }) =>
        direction === "left" || direction === "right" ? "-45" : "45"}deg
    );
    position: absolute;
    left: -1px;
    top: ${({ direction }) =>
      direction === "left" || direction === "right" ? "-5px" : "2px"};
  }
`;

export default StyledArrow;
