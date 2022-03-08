import React, { forwardRef, useRef } from "react";
import { Splide, SplideProps } from "@splidejs/react-splide";
import VideoSlideItem, {
  VideoSlideItemProps,
} from "../VideoSlideItem/VideoSlideItem";

export interface VideoSliderProps extends SplideProps {
  items: VideoSlideItemProps[];
}

const VideoSlider = forwardRef<Splide, VideoSliderProps>(
  ({ items, options }, ref) => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>(
      Array(items.length).fill(null)
    );

    const renderItems = (items: VideoSliderProps["items"]) => {
      return items.map((item, i) => {
        return (
          <VideoSlideItem
            {...item}
            key={item.id}
            ref={(e) => {
              if (e) {
                e.defaultMuted = true;
                e.muted = true;
              }
              videoRefs.current[i] = e;
            }}
          />
        );
      });
    };

    const handleMove = (_: any, index: number) => {
      videoRefs.current.forEach((ref) => {
        if (ref) {
          ref.pause();
          ref.currentTime = 0;
        }
      });
      videoRefs.current[index]?.play();
    };

    return (
      <Splide
        ref={ref}
        options={{
          ...options,
          destroy: true,
        }}
        onMove={handleMove}
        onDestroy={() => console.log("destroy video slider")}
      >
        {renderItems(items)}
      </Splide>
    );
  }
);

export default VideoSlider;
