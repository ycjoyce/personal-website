import { Story } from "@storybook/react/types-6-0";
import AboutSection, { AboutSectionProps } from "./AboutSection";

export default {
  title: "AboutSection",
  component: AboutSection,
};

const Template: Story<AboutSectionProps> = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
