import React, { FC } from "react";
import theme from "../../styles/abstracts/theme";
import StyledArrow from "./Arrow.style";

export type Direction = "left" | "right" | "top" | "bottom";

export interface ArrowProps {
  direction?: Direction;
  length?: string;
  color?: string;
  animate?: boolean;
}

const Arrow: FC<ArrowProps> = ({
  direction = "left",
  length = "100px",
  color = theme.color.black,
  animate = false,
}) => (
  <StyledArrow
    animate={animate}
    direction={direction}
    length={length}
    color={color}
  />
);

export default Arrow;
