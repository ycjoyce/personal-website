import React, { FC, useState, useRef } from "react";
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
  const [rotate, setRotate] = useState({ J: 0, o: 0, y: 0, c: 0, e: 0 });

  const elJ = useRef<HTMLDivElement>(null);
  const elO = useRef<HTMLDivElement>(null);
  const elY = useRef<HTMLDivElement>(null);
  const elC = useRef<HTMLDivElement>(null);
  const elE = useRef<HTMLDivElement>(null);

  const getAngle = (el: HTMLDivElement, x: number, y: number) => {
    if (!el) {
      return 0;
    }
    const parent = el.offsetParent as HTMLDivElement;
    const position = {
      x: el.offsetLeft + el.offsetWidth / 2 + parent.offsetLeft,
      y: el.offsetTop + el.offsetHeight / 2 + parent.offsetTop,
    };
    const radian = Math.atan2(x - position.x, y - position.y);
    const angle = radian * (180 / Math.PI) + 90;
    return angle;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setRotate((r) => ({
      ...r,
      J: getAngle(elJ.current!, e.clientX, e.clientY),
      o: getAngle(elO.current!, e.clientX, e.clientY),
      y: getAngle(elY.current!, e.clientX, e.clientY),
      c: getAngle(elC.current!, e.clientX, e.clientY),
      e: getAngle(elE.current!, e.clientX, e.clientY),
    }));
  };

  return (
    <StyledCoverSection onMouseMove={handleMouseMove}>
      <StyledBlotterBox>
        <StyledBlotter
          id="j-box"
          ref={elJ}
          style={{ top: "-50px", left: "0px" }}
        />
        <Blotter
          text="J"
          appendTo="j-box"
          fontSize={400}
          rotation={rotate["J"]}
        ></Blotter>

        <StyledBlotter
          id="o-box"
          ref={elO}
          style={{ top: "250px", left: "100px" }}
        />
        <Blotter
          text="o"
          appendTo="o-box"
          fontSize={140}
          rotation={rotate["o"]}
        ></Blotter>

        <StyledBlotter
          id="y-box"
          ref={elY}
          style={{ top: "80px", left: "300px" }}
        />
        <Blotter
          text="y"
          appendTo="y-box"
          fontSize={90}
          rgbOffset={0.15}
          rotation={rotate["y"]}
        ></Blotter>

        <StyledBlotter
          id="c-box"
          ref={elC}
          style={{ top: "-200px", left: "200px" }}
        />
        <Blotter
          text="c"
          appendTo="c-box"
          fontSize={400}
          rotation={rotate["c"]}
        ></Blotter>

        <StyledBlotter
          id="e-box"
          ref={elE}
          style={{ top: "350px", left: "400px" }}
        />
        <Blotter
          text="e"
          appendTo="e-box"
          fontSize={100}
          rotation={rotate["e"]}
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
