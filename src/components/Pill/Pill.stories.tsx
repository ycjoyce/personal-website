import { Story } from "@storybook/react/types-6-0";
import Pill, { PillProps } from "./Pill";

export default {
  title: "Pill",
  component: Pill,
};

const Template: Story<PillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "test",
};
