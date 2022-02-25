import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import Hamburger, { HamburgerProps } from "./Hamburger";

export default {
  title: "Hamburger",
  component: Hamburger,
  args: {
    opened: false,
  },
};

const Tempalte: Story<HamburgerProps> = (args) => {
  const [{ opened }, updateArgs] = useArgs();
  const handleOpened = () => {
    updateArgs({ opened: !opened });
  };
  return <Hamburger {...args} onClick={handleOpened} />;
};

export const Default = Tempalte.bind({});
