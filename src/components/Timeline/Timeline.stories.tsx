import { Story } from "@storybook/react/types-6-0";
import Timeline, { TimelineProps } from "./Timeline";

export default {
  title: "Timeline",
  component: Timeline,
};

const Template: Story<TimelineProps> = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      time: "2018",
      title: "First",
      content: (
        <>
          <p>
            撰寫邏輯做表單驗證，包含信用卡資料、email 等，並以 React Portal
            渲染錯誤提示訊息。輸入卡號時每滿四碼自動跳轉到下一欄位，並判斷所輸入卡號的信用卡品牌。
          </p>
        </>
      ),
    },
    {
      time: "2015",
      title: "Second",
      content: (
        <>
          <p>
            撰寫邏輯做表單驗證，包含信用卡資料、email 等，並以 React Portal
            渲染錯誤提示訊息。輸入卡號時每滿四碼自動跳轉到下一欄位，並判斷所輸入卡號的信用卡品牌。
          </p>
        </>
      ),
    },
    {
      time: "2020",
      title: "Third",
      content: (
        <>
          <p>
            撰寫邏輯做表單驗證，包含信用卡資料、email 等，並以 React Portal
            渲染錯誤提示訊息。輸入卡號時每滿四碼自動跳轉到下一欄位，並判斷所輸入卡號的信用卡品牌。
          </p>
        </>
      ),
    },
  ],
};
