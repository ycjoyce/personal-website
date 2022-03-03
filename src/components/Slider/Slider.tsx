import React, { FC, ReactNode } from "react";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../../styles/splide-custom.css";

export interface SliderProps extends SplideProps {
  children: ReactNode[];
}

const Slider: FC<SliderProps> = ({ children, className = "", ...props }) => {
  const renderSlides = (contents: ReactNode[]) => {
    return contents.map((content, i) => {
      return <SplideSlide key={i}>{content}</SplideSlide>;
    });
  };

  return <Splide {...props}>{renderSlides(children)}</Splide>;
};

export default Slider;
