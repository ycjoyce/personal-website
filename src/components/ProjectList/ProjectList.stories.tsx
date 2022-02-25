import { Story } from "@storybook/react/types-6-0";
import ProjectList, { ProjectListProps } from "./ProjectList";

export default {
  title: "ProjectList",
  component: ProjectList,
};

const Template: Story<ProjectListProps> = (args) => <ProjectList {...args} />;

export const Default = Template.bind({});
