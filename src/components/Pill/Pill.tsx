import React, { FC } from "react";
import theme from "../../styles/abstracts/theme";
import StyledPill from "./Pill.style";

export interface PillProps {
  color?: string;
  children: string;
}

const Pill: FC<PillProps> = ({ color = theme.color.primary, children }) => (
  <StyledPill color={color}>{children}</StyledPill>
);

export default Pill;
