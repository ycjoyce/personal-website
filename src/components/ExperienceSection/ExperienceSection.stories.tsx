import { Story } from "@storybook/react/types-6-0";
import ExperienceSection, { ExperienceSectionProps } from "./ExperienceSection";

export default {
  title: "Sections/ExperienceSection",
  component: ExperienceSection,
};

const Template: Story<ExperienceSectionProps> = (args) => (
  <ExperienceSection {...args} />
);

export const Default = Template.bind({});
