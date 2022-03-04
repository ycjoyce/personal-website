import React, { FC, useRef, useEffect, useMemo } from "react";
import { Splide } from "@splidejs/react-splide";
import { Item } from "../VideoSlider/VideoSlider";
import VideoSlider from "../VideoSlider/VideoSlider";
import Slider from "../Slider/Slider";

export interface ThumbnailSliderProps {
  main: {
    items: Item[];
  };
  thumbs: {
    items: { id: string; preview: string }[];
  };
}

const ThumbnailSlider: FC<ThumbnailSliderProps> = ({ main, thumbs }) => {
  const mainRef = useRef<Splide>(null);
  const thumbnailRef = useRef<Splide>(null);

  useEffect(() => {
    if (
      mainRef.current &&
      thumbnailRef.current &&
      thumbnailRef.current.splide
    ) {
      mainRef.current.sync(thumbnailRef.current.splide);
    }
  }, []);

  const renderImages = (
    type: keyof ThumbnailSliderProps,
    items:
      | ThumbnailSliderProps["main"]["items"]
      | ThumbnailSliderProps["thumbs"]["items"]
  ) => {
    return items.map(({ preview, id }, i) => (
      <img src={preview} alt="" key={id} />
    ));
  };

  const mainOptions = useMemo(
    () => ({
      type: "loop",
      perPage: 1,
      perMove: 1,
      pagination: false,
      height: "50vh",
      classes: {
        arrows: "splide__arrows primary-arrows",
      },
      video: {
        autoplay: true,
        mute: true,
      },
    }),
    []
  );

  const thumbsOptions = useMemo(
    () => ({
      type: "slide",
      rewind: true,
      gap: "1rem",
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      isNavigation: true,
      classes: {
        arrows: "splide__arrows secondary-arrows",
      },
    }),
    []
  );

  return (
    <div>
      {main.items.find((e) => e.video) ? (
        <VideoSlider ref={mainRef} options={mainOptions} items={main.items} />
      ) : (
        <Slider ref={mainRef} options={mainOptions}>
          {renderImages("main", main.items)}
        </Slider>
      )}

      <Slider ref={thumbnailRef} options={thumbsOptions}>
        {renderImages("thumbs", thumbs.items)}
      </Slider>
    </div>
  );
};

export default ThumbnailSlider;
