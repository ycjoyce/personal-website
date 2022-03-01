import React, { FC, useState, useEffect } from "react";
import Title from "../Title/Title";
import Arrow from "../Arrow/Arrow";
import Blotter from "../Blotter/Blotter";
import StyledCoverSection from "./CoverSection.style";
import { StyledBlotterBox } from "./CoverSection.style";
import StyledBlotter from "../Blotter/Blotter.style";

export interface CoverSectionProps {}

declare global {
  interface Window {
    Blotter: any;
  }
}

const CoverSection: FC<CoverSectionProps> = () => {
  const [rotate, setRotate] = useState(45);

  const handleMouseMove = (e: React.MouseEvent) => {
    setRotate(Math.abs(e.clientX - e.clientY) % 360);
  };

  return (
    <StyledCoverSection onMouseMove={handleMouseMove}>
      <StyledBlotterBox>
        <StyledBlotter id="j-box" style={{ top: "-50px", left: "0px" }} />
        <Blotter
          text="J"
          appendTo="j-box"
          fontSize={400}
          rotation={rotate}
        ></Blotter>

        <StyledBlotter id="o-box" style={{ top: "250px", left: "100px" }} />
        <Blotter
          text="o"
          appendTo="o-box"
          fontSize={140}
          rotation={rotate}
        ></Blotter>

        <StyledBlotter id="y-box" style={{ top: "80px", left: "300px" }} />
        <Blotter
          text="y"
          appendTo="y-box"
          fontSize={90}
          rgbOffset={0.15}
          rotation={rotate}
        ></Blotter>

        <StyledBlotter id="c-box" style={{ top: "-200px", left: "200px" }} />
        <Blotter
          text="c"
          appendTo="c-box"
          fontSize={400}
          rotation={rotate}
        ></Blotter>

        <StyledBlotter id="e-box" style={{ top: "350px", left: "400px" }} />
        <Blotter
          text="e"
          appendTo="e-box"
          fontSize={100}
          rotation={rotate}
          rgbOffset={0.2}
        ></Blotter>

        <p data-subtitle>Front-end Developer</p>
      </StyledBlotterBox>

      <div>
        <Arrow direction="bottom" />
      </div>
    </StyledCoverSection>
  );
};

export default CoverSection;
