import React, { FC, ReactNode } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export interface SliderProps {
  options?: any;
  children: ReactNode[];
}

const Slider: FC<SliderProps> = ({ children, ...props }) => {
  const renderSlides = (contents: ReactNode[]) => {
    return contents.map((content) => <SplideSlide>{content}</SplideSlide>);
  };

  return <Splide {...props}>{renderSlides(children)}</Splide>;
};

export default Slider;
