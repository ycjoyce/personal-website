import React, { FC } from "react";
import StyledBackground from "./AnimatedBackground.style";
import "../../styles/lib/animated-background.css";

const AnimatedBackground: FC = () => (
  <StyledBackground className="background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </StyledBackground>
);

export default AnimatedBackground;
