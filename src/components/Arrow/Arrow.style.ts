import styled from "styled-components";
import { Direction } from "./Arrow";

interface StyledArrowProps {
  direction: Direction;
  length: string;
  color: string;
}

const StyledArrow = styled.div<StyledArrowProps>`
  width: ${({ length }) => length};
  height: 0;
  border-top: 1px solid ${({ color }) => color};
  position: relative;
  transform: ${({ direction }) => {
    const degreeMap = {
      left: "rotate(0deg)",
      right: "rotateY(180deg)",
      top: "rotate(90deg)",
      bottom: "rotate(-90deg)",
    };
    return degreeMap[direction];
  }};

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 0;
    border-top: 1px solid ${({ color }) => color};
    transform: rotate(-45deg);
    position: absolute;
    top: -5px;
    left: 0;
  }
`;

export default StyledArrow;
