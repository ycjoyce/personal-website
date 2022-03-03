import { Story } from "@storybook/react/types-6-0";
import ProjectSection, { ProjectSectionProps } from "./ProjectSection";

export default {
  title: "Sections/ProjectSection",
  component: ProjectSection,
};

const Template: Story<ProjectSectionProps> = (args) => (
  <ProjectSection {...args} />
);

export const Default = Template.bind({});
