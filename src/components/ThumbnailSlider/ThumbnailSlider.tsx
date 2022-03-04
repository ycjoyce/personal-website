import React, { FC, useRef, useEffect, useMemo } from "react";
import { Splide } from "@splidejs/react-splide";
import { Item } from "../VideoSlider/VideoSlider";
import VideoSlider from "../VideoSlider/VideoSlider";
import Slider from "../Slider/Slider";

export interface ThumbnailSliderProps {
  items: Item[];
}

const ThumbnailSlider: FC<ThumbnailSliderProps> = ({ items }) => {
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

  const renderImages = (items: ThumbnailSliderProps["items"]) => {
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
      destroy: true,
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
      destroy: true,
    }),
    []
  );

  useEffect(() => {
    const mainEl = mainRef.current;
    const thumbEl = thumbnailRef.current;

    return () => {
      // mainEl?.splide?.destroy();
      // thumbEl?.splide?.destroy();
      console.log("銷毀thumbnailslider");
    };
  }, []);

  return (
    <div>
      {items.find((e) => e.video) ? (
        <VideoSlider
          ref={mainRef}
          options={mainOptions}
          items={items}
          onDestroy={() => console.log("destroy main video slider")}
        />
      ) : (
        <Slider
          ref={mainRef}
          options={mainOptions}
          onDestroy={() => console.log("destroy main image slider")}
        >
          {renderImages(items)}
        </Slider>
      )}

      <Slider
        ref={thumbnailRef}
        options={thumbsOptions}
        onDestroy={() => console.log("destroy sub image slider")}
      >
        {renderImages(items)}
      </Slider>
    </div>
  );
};

export default ThumbnailSlider;
