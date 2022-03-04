import { Story } from "@storybook/react/types-6-0";
import Test from "./Test";

export default {
  title: "Test",
  component: Test,
};

const Template: Story = (args) => <Test />;

export const Default = Template.bind({});
