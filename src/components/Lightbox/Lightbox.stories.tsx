import { Story } from "@storybook/react/types-6-0";
import { v4 as uuidv4 } from "uuid";
import Lightbox, { LightboxProps } from "./Lightbox";

export default {
  title: "Lightbox",
  component: Lightbox,
};

const Template: Story<LightboxProps> = (args) => <Lightbox {...args} />;

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
