import { Story } from "@storybook/react/types-6-0";
import CoverSection, { CoverSectionProps } from "./CoverSection";

export default {
  title: "Sections/CoverSection",
  component: CoverSection,
};

const Template: Story<CoverSectionProps> = (args) => {
  return (
    <CoverSection {...args} strings={["First sentence", "Second sentence"]} />
  );
};

export const Default = Template.bind({});
