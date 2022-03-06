import React, { FC, useRef, useEffect, useMemo, Fragment } from "react";
import { Splide } from "@splidejs/react-splide";
import { VideoSlideItemProps } from "../VideoSlideItem/VideoSlideItem";
import VideoSlider from "../VideoSlider/VideoSlider";
import Slider from "../Slider/Slider";
import Pill from "../Pill/Pill";

export interface ThumbnailSliderProps {
  items: VideoSlideItemProps[];
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
    return items.map(({ preview, id, video }, i) => (
      <Fragment key={id}>
        {video && <Pill color="rgba(255, 255, 255, 0.8)">video</Pill>}
        <img src={preview} alt="" />
      </Fragment>
    ));
  };

  const mainOptions = useMemo(
    () => ({
      type: "loop",
      perPage: 1,
      perMove: 1,
      pagination: false,
      height: "50vh",
      arrows: false,
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
        arrows: "splide__arrows secondary-arrows thumb-arrows",
      },
      padding: "2rem",
      destroy: true,
    }),
    []
  );

  return (
    <div>
      {items.find((e) => e.video) ? (
        <VideoSlider ref={mainRef} options={mainOptions} items={items} />
      ) : (
        <Slider ref={mainRef} options={mainOptions}>
          {renderImages(items)}
        </Slider>
      )}

      <Slider ref={thumbnailRef} options={thumbsOptions}>
        {renderImages(items)}
      </Slider>
    </div>
  );
};

export default ThumbnailSlider;
