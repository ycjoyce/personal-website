import { Story } from "@storybook/react/types-6-0";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Header",
  component: Header,
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
