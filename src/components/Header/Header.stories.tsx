import { ReactNode } from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Header",
  component: Header,
  args: {
    menuOpened: false,
  },
  decorators: [
    (story: () => ReactNode) => (
      <div style={{ background: "#000" }}>{story()}</div>
    ),
  ],
};

const Template: Story<HeaderProps> = (args) => {
  const [{ menuOpened }, updateArgs] = useArgs();
  const handleClick = () => {
    updateArgs({ menuOpened: !menuOpened });
  };
  return <Header {...args} onHamburgerClick={handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  menu: [
    { title: "First", onClick() {} },
    { title: "Second", onClick() {} },
    { title: "Third", onClick() {} },
  ],
};
