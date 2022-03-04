import { Story } from "@storybook/react/types-6-0";
import { v4 as uuidv4 } from "uuid";
import LightBox, { LightBoxProps } from "./LightBox";

export default {
  title: "LightBox",
  component: LightBox,
};

const Template: Story<LightBoxProps> = (args) => <LightBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: uuidv4(),
      video: "youtube",
      src: "https://www.youtube.com/watch?v=cdz__ojQOuU",
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
    {
      id: uuidv4(),
      video: "vimeo",
      src: "https://vimeo.com/215334213",
      preview: "https://source.unsplash.com/collection/190726/1600x900",
    },
    {
      id: uuidv4(),
      video: "html-video",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      preview: "https://source.unsplash.com/collection/190726/1600x900",
    },
    {
      id: uuidv4(),
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
  ],
};
