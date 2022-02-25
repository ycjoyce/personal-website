import { Story } from "@storybook/react/types-6-0";
import Project, { ProjectProps } from "./Project";

export default {
  title: "Project",
  component: Project,
};

const Template: Story<ProjectProps> = (args) => <Project {...args} />;

const defaultArgs: ProjectProps = {
  id: "test1",
  year: "2022",
  title: "Project 1",
  intro: "這是 Project 1",
  cover: "",
  skills: ["html", "css", "javascript"],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const More = Template.bind({});
More.args = {
  ...defaultArgs,
  more: true,
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  ...defaultArgs,
  onClick(id) {
    console.log(id);
  },
};
