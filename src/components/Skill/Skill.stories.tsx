import { Story } from "@storybook/react/types-6-0";
import Skill, { SkillProps } from "./Skill";

export default {
  title: "Skill",
  component: Skill,
};

const Template: Story<SkillProps> = (args) => <Skill {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "html",
};
