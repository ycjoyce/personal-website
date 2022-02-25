import { Story } from "@storybook/react/types-6-0";
import Title, { TitleProps } from "./Title";

export default {
  title: "Title",
  component: Title,
};

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Title",
};
