import React, { ReactNode, forwardRef } from "react";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../../styles/splide-custom.css";

export interface SliderProps extends SplideProps {
  children: ReactNode[];
}

const Slider = forwardRef<Splide, SliderProps>(
  ({ children, ...props }, ref) => {
    const renderSlides = (contents: ReactNode[]) => {
      return contents.map((content, i) => {
        return <SplideSlide key={i}>{content}</SplideSlide>;
      });
    };

    return (
      <Splide ref={ref} {...props}>
        {renderSlides(children)}
      </Splide>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
