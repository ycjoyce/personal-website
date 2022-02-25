import { Story } from "@storybook/react/types-6-0";
import Lightbox, { LightboxProps } from "./Lightbox";

export default {
  title: "Lightbox",
  component: Lightbox,
};

const Template: Story<LightboxProps> = (args) => <Lightbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: ["first", "second", "third"],
};
