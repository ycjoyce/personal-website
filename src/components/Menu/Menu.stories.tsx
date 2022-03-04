import { Story } from "@storybook/react/types-6-0";
import Menu, { MenuProps } from "./Menu";

export default {
  title: "Menu",
  component: Menu,
};

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: "About", onClick() {} },
    { title: "Projects", onClick() {} },
    { title: "Experience", onClick() {} },
  ],
};
