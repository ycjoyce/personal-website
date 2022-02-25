import { Story } from "@storybook/react/types-6-0";
import Slider, { SliderProps } from "./Slider";

export default {
  title: "Slider",
  component: Slider,
};

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: {
    type: "loop",
    drag: "free",
    perPage: 2,
    rewind: true,
    gap: "1rem",
    height: "300px",
    focus: "center",
    autoWidth: true,
  },
  children: [
    <img
      src="https://www.collinsdictionary.com/images/full/kitten_101801980.jpg"
      alt=""
    />,
    <img
      src="https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/bringing-new-kitten-home.jpg"
      alt=""
    />,
    <img
      src="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png"
      alt=""
    />,
  ],
};
