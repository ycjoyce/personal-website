import { ReactNode } from "react";
import { Story } from "@storybook/react/types-6-0";
import Arrow, { ArrowProps } from "./Arrow";

export default {
  title: "Arrow",
  component: Arrow,
  decorators: [
    (story: () => ReactNode) => (
      <div style={{ marginTop: "100px" }}>{story()}</div>
    ),
  ],
};

const Tempalte: Story<ArrowProps> = (args) => <Arrow {...args} />;

export const Default = Tempalte.bind({});
