import { Story } from "@storybook/react/types-6-0";
import CoverSection, { CoverSectionProps } from "./CoverSection";

export default {
  title: "Section/CoverSection",
  component: CoverSection,
};

const Template: Story<CoverSectionProps> = (args) => <CoverSection {...args} />;

export const Default = Template.bind({});
