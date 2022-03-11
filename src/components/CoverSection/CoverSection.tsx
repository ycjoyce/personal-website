import React, { FC, useState, useRef, useEffect } from "react";
import Arrow from "../Arrow/Arrow";
import Blotter from "../Blotter/Blotter";
import Typed from "typed.js";
import StyledCoverSection, { StyledArrowBox } from "./CoverSection.style";
import { StyledBlotterBox } from "./CoverSection.style";
import StyledBlotter from "../Blotter/Blotter.style";
import theme from "../../styles/abstracts/theme";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import { motion } from "framer-motion";

export interface CoverSectionProps {
  strings: string[];
}

declare global {
  interface Window {
    Blotter: any;
  }
}

const CoverSection: FC<CoverSectionProps> = ({ strings }) => {
  // Blotter 字體的旋轉角度
  const [rotate, setRotate] = useState({ J: 0, o: 0, y: 0, c: 0, e: 0 });

  // Blotter 字體 append 的 DIV
  const elJ = useRef<HTMLDivElement>(null);
  const elO = useRef<HTMLDivElement>(null);
  const elY = useRef<HTMLDivElement>(null);
  const elC = useRef<HTMLDivElement>(null);
  const elE = useRef<HTMLDivElement>(null);

  // 要做 typed 特效的 element
  const typedEl = useRef<HTMLParagraphElement>(null);
  // Typed 的實例
  const typed = useRef<any>(null);

  /**
   * 計算 Blotter 字體的旋轉角度
   * @param el Blotter 字體 element
   * @param x 滑鼠的 x 座標
   * @param y 滑鼠的 y 座標
   * @returns
   */
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

  /**
   * 隨著滑鼠移動計算新的 Blotter 字體旋轉角度
   * @param e
   */
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

  useEffect(() => {
    // 處理 typed 字體特效
    if (!typedEl.current) {
      return;
    }

    const options = {
      strings,
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
      showCursor: false,
    };

    typed.current = new Typed(typedEl.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  const getAnimate = (
    delayCount: number,
    style: { [key: string]: [string, string] }
  ) => {
    return {
      animate: {
        opacity: [0, 1],
        ...style,
      },
      transition: {
        delay: 0.8 + delayCount * 0.3,
      },
    };
  };

  return (
    <StyledCoverSection onMouseMove={handleMouseMove}>
      <AnimatedBackground />

      <StyledBlotterBox>
        <StyledBlotter
          id="j-box"
          ref={elJ}
          style={{ top: "-50px", left: "0px" }}
          {...getAnimate(0, { left: ["-50px", "0px"] })}
        />
        <Blotter
          text="J"
          appendTo="j-box"
          fontSize={400}
          rotation={45}
        ></Blotter>

        <StyledBlotter
          id="o-box"
          ref={elO}
          style={{ top: "250px", left: "100px" }}
          {...getAnimate(1, { top: ["350px", "250px"] })}
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
          {...getAnimate(3, { left: ["400px", "300px"] })}
        />
        <Blotter
          text="y"
          appendTo="y-box"
          fontSize={90}
          rgbOffset={0.15}
          rotation={10}
        ></Blotter>

        <StyledBlotter
          id="c-box"
          ref={elC}
          style={{ top: "-200px", left: "200px" }}
          {...getAnimate(2, {
            top: ["-300px", "-200px"],
            left: ["300px", "200px"],
          })}
        />
        <Blotter
          text="c"
          appendTo="c-box"
          fontSize={400}
          rotation={120}
        ></Blotter>

        <StyledBlotter
          id="e-box"
          ref={elE}
          style={{ top: "350px", left: "400px" }}
          {...getAnimate(4, {
            top: ["450px", "350px"],
            left: ["500px", "400px"],
          })}
        />
        <Blotter
          text="e"
          appendTo="e-box"
          fontSize={100}
          rotation={45}
          rgbOffset={0.2}
        ></Blotter>

        <motion.p
          data-subtitle
          ref={typedEl}
          {...getAnimate(5, { x: ["100px", "0px"] })}
        ></motion.p>
      </StyledBlotterBox>

      <StyledArrowBox>
        <Arrow direction="bottom" color={theme.color.dark} length="80px" />
        <p>SCROLL</p>
      </StyledArrowBox>
    </StyledCoverSection>
  );
};

export default CoverSection;
