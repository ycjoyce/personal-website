import React, { FC } from "react";
import theme from "../../styles/abstracts/theme";
import StyledTitle from "./Title.style";

export type FontSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
  level?: FontSize;
  size?: FontSize;
  color?: string;
  children: string;
  primary?: boolean;
}

const Title: FC<TitleProps> = ({
  level = 2,
  size = level,
  color = theme.color.black,
  children,
  primary = false,
}) => {
  return (
    <StyledTitle as={`h${level}`} primary={primary} size={size} color={color}>
      {children}
    </StyledTitle>
  );
};

export default Title;