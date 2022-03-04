import React, { forwardRef } from "react";
import { Splide, SplideProps } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

export interface Item {
  id: string;
  video?: "youtube" | "vimeo" | "html-video";
  src?: string; // 影片來源
  preview: string; // 預覽圖片來源
}

export interface VideoSliderProps extends SplideProps {
  items: Item[];
}

const VideoSlider = forwardRef<Splide, VideoSliderProps>(
  ({ items, options }, ref) => {
    const renderItems = (items: VideoSliderProps["items"]) => {
      return items.map((item) => {
        const properties: { [key: string]: string } = {
          className: "splide__slide",
          key: item.id,
        };
        if (item.video && item.src) {
          properties[`data-splide-${item.video}`] = item.src;
        }
        const component = (
          <li {...properties}>
            <img src={item.preview} alt="" />
          </li>
        );

        return component;
      });
    };

    return (
      <Splide
        ref={ref}
        options={{
          video: {
            autoplay: true,
            mute: true,
          },
          ...options,
        }}
        Extensions={{ Video }}
      >
        {renderItems(items)}
      </Splide>
    );
  }
);

export default VideoSlider;
