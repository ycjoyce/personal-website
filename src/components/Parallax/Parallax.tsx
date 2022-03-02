import React, { FC, useEffect, useRef } from "react";
import simpleParallax, { IParallaxSettings } from "simple-parallax-js";

export interface ParallaxProps {
  src: string;
  alt?: string;
  config?: IParallaxSettings;
}

const Parallax: FC<ParallaxProps> = ({ src, alt = "", config = {} }) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const instance = new simpleParallax(ref.current, { ...config });

    return () => {
      instance.destroy();
    };
  }, [config]);

  return <img ref={ref} src={src} alt={alt} />;
};

export default Parallax;
