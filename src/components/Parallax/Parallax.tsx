import React, { FC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export interface ParallaxProps {
  src: string;
  speed?: number;
  expanded?: boolean;
  style?: { [key: string]: string };
}

const Parallax: FC<ParallaxProps> = ({
  src,
  speed = -20,
  style,
  expanded = true,
}) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: src,
          speed,
          expanded,
        },
      ]}
      style={{ height: "100%", ...style }}
      className="parallax"
    />
  );
};

export default Parallax;
