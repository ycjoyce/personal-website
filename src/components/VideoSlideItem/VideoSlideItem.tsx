import React, { forwardRef } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import StyledVideoSlideItem from "./VideoSlideItem.style";

export interface VideoSlideItemProps {
  id: string;
  video?: string; // 影片來源
  preview: string; // 預覽圖片來源
}

const VideoSlideItem = forwardRef<HTMLVideoElement, VideoSlideItemProps>(
  ({ id, video, preview }, ref) => {
    return (
      <SplideSlide>
        <StyledVideoSlideItem video={!!video}>
          {video ? (
            <video
              data-id={id}
              ref={ref}
              src={video}
              poster={preview}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <img src={preview} alt="" />
          )}
        </StyledVideoSlideItem>
      </SplideSlide>
    );
  }
);

export default VideoSlideItem;
