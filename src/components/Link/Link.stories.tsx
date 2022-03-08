import { Story } from "@storybook/react/types-6-0";
import Link, { LinkProps } from "./Link";

export default {
  title: "Link",
  component: Link,
};

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "https://google.com",
  label: "test",
};
