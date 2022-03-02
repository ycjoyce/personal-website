import { Story } from "@storybook/react/types-6-0";
import Project from "../Project/Project";
import ProjectList, { ProjectListProps } from "./ProjectList";

export default {
  title: "ProjectList",
  component: ProjectList,
};

const Template: Story<ProjectListProps> = (args) => <ProjectList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Project
      id="project1"
      year="2022"
      title="Project1"
      intro="這是第一個案件"
      cover="https://media-exp1.licdn.com/dms/image/C4E1BAQEu7nDBxY2KXw/company-background_10000/0/1556122971779?e=2159024400&v=beta&t=-oR_B0gCjXcLUObiGLx7lbA5KwVibKY5xIRsgE_n7b4"
      skills={["css", "express", "mongodb"]}
    />,
    <Project
      id="project2"
      year="2022"
      title="Project2"
      intro="這是第二個案件"
      cover="https://media-exp1.licdn.com/dms/image/C4E1BAQEu7nDBxY2KXw/company-background_10000/0/1556122971779?e=2159024400&v=beta&t=-oR_B0gCjXcLUObiGLx7lbA5KwVibKY5xIRsgE_n7b4"
      skills={["css", "express", "mongodb"]}
    />,
  ],
};
