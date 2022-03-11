import React, { FC } from "react";
import { motion, MotionProps } from "framer-motion";
import theme from "../../styles/abstracts/theme";
import StyledHamburger from "./Hamburger.style";
import "../../styles/lib/hamburgers.min.css";

export interface HamburgerProps extends MotionProps {
  color?: string;
  opened?: boolean;
  onClick?: () => void;
}

const Hamburger: FC<HamburgerProps> = ({
  color = theme.color.black,
  opened = false,
  onClick = () => {},
  ...props
}) => (
  <StyledHamburger
    as={motion.button}
    className={`hamburger hamburger--squeeze ${opened ? "is-active" : ""}`}
    color={color}
    onClick={onClick}
    {...props}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </StyledHamburger>
);

export default Hamburger;
