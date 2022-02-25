import React, { FC } from "react";
import theme from "../../styles/abstracts/theme";
import StyledHamburger from "./Hamburger.style";
import "../../styles/lib/hamburgers.min.css";

export interface HamburgerProps {
  color?: string;
  opened?: boolean;
  onClick?: () => void;
}

const Hamburger: FC<HamburgerProps> = ({
  color = theme.color.black,
  opened = false,
  onClick = () => {},
}) => (
  <StyledHamburger
    className={`hamburger hamburger--squeeze ${opened ? "is-active" : ""}`}
    color={color}
    onClick={onClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </StyledHamburger>
);

export default Hamburger;
