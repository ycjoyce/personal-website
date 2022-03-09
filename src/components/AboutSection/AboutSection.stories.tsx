import { Story } from "@storybook/react/types-6-0";
import AboutSection, { AboutSectionProps } from "./AboutSection";

export default {
  title: "Sections/AboutSection",
  component: AboutSection,
};

const Template: Story<AboutSectionProps> = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Hello\nWorld",
  imageOne: require("../../images/about_background.jpg"),
  imageTwo: require("../../images/about_background.jpg"),
};
