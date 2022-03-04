import { Story } from "@storybook/react/types-6-0";
import { v4 as uuidv4 } from "uuid";
import VideoSlideItem, { VideoSlideItemProps } from "./VideoSlideItem";

export default {
  title: "VideoSlideItem",
  component: VideoSlideItem,
};

const Template: Story<VideoSlideItemProps> = (args) => (
  <VideoSlideItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: uuidv4(),
  video:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  preview: "https://picsum.photos/200/300",
};

export const Image = Template.bind({});
Image.args = {
  id: uuidv4(),
  preview: "https://picsum.photos/200/300",
};
