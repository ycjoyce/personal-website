import { Story } from "@storybook/react/types-6-0";
import { v4 as uuidv4 } from "uuid";
import ThumbnailSlider, { ThumbnailSliderProps } from "./ThumbnailSlider";

export default {
  title: "ThumbnailSlider",
  component: ThumbnailSlider,
};

const Template: Story<ThumbnailSliderProps> = (args) => (
  <ThumbnailSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: uuidv4(),
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
    {
      id: uuidv4(),
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      preview: "https://source.unsplash.com/collection/190726/1600x900",
    },
    {
      id: uuidv4(),
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      preview: "https://source.unsplash.com/collection/190726/1600x900",
    },
    {
      id: uuidv4(),
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
  ],
};
