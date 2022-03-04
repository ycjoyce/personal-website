import React, { FC, useRef, useEffect } from "react";
import { Splide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";

const Test: FC = () => {
  const ref = useRef<Splide>(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("@@@");
      // ref.current?.splide?.destroy();
      console.log(ref.current?.splide);
    }, 1000);
  }, []);

  return (
    <div>
      <Splide
        ref={ref}
        Extensions={{ Video }}
        onMoved={() => console.log("moved")}
        onDestroy={() => console.log("destroy test")}
      >
        <li
          className="splide__slide"
          data-splide-html-video="https://www.youtube.com/watch?v=cdz__ojQOuU"
        >
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt=""
          />
        </li>
        <li
          className="splide__slide"
          data-splide-html-video="https://www.youtube.com/watch?v=cdz__ojQOuU"
        >
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt=""
          />
        </li>
        <li
          className="splide__slide"
          data-splide-html-video="https://www.youtube.com/watch?v=cdz__ojQOuU"
        >
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt=""
          />
        </li>
        <li
          className="splide__slide"
          data-splide-html-video="https://www.youtube.com/watch?v=cdz__ojQOuU"
        >
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt=""
          />
        </li>
        <li
          className="splide__slide"
          data-splide-html-video="https://www.youtube.com/watch?v=cdz__ojQOuU"
        >
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt=""
          />
        </li>
      </Splide>
    </div>
  );
};

export default Test;
