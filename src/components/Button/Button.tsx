import React, { FC, ReactNode } from "react";
import StyledButton from "./Button.style";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  color?: string;
  outline?: boolean;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  color = "#fff",
  outline = false,
  size = "md",
  children,
  onClick = () => {},
}) => (
  <StyledButton color={color} outline={outline} size={size} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
