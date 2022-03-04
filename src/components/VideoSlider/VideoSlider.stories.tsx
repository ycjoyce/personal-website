import { Story } from "@storybook/react/types-6-0";
import { v4 as uuidv4 } from "uuid";
import VideoSlider, { VideoSliderProps } from "./VideoSlider";

export default {
  title: "VideoSlider",
  component: VideoSlider,
};

const Template: Story<VideoSliderProps> = (args) => <VideoSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: uuidv4(),
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
    {
      id: uuidv4(),
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
    {
      id: uuidv4(),
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
    {
      id: uuidv4(),
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
    {
      id: uuidv4(),
      preview: "https://source.unsplash.com/collection/190727/1600x900",
    },
  ],
};
