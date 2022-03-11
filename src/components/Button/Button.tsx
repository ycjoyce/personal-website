import React, { FC, ReactNode } from "react";
import { MotionProps } from "framer-motion";
import StyledButton from "./Button.style";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends MotionProps {
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
  ...props
}) => (
  <StyledButton
    color={color}
    outline={outline}
    size={size}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
