import { Story } from "@storybook/react/types-6-0";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";

export default {
  title: "TimelineItem",
  component: TimelineItem,
};

const Template: Story<TimelineItemProps> = (args) => <TimelineItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: "2019-2020",
  title: "NTUA University",
  content: (
    <>
      <p>
        撰寫邏輯做表單驗證，包含信用卡資料、email 等，並以 React Portal
        渲染錯誤提示訊息。輸入卡號時每滿四碼自動跳轉到下一欄位，並判斷所輸入卡號的信用卡品牌。
      </p>
    </>
  ),
};
