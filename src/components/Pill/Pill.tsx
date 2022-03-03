import React, { FC } from "react";
import StyledPill from "./Pill.style";

export interface PillProps {
  color?: string;
  children: string;
}

const Pill: FC<PillProps> = ({ color = "transparent", children }) => (
  <StyledPill color={color}>{children}</StyledPill>
);

export default Pill;
