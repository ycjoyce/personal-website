import { Story } from "@storybook/react/types-6-0";
import Project, { ProjectProps } from "./Project";

export default {
  title: "Project",
  component: Project,
};

const Template: Story<ProjectProps> = (args) => <Project {...args} />;

const defaultArgs: ProjectProps = {
  id: "test1",
  year: "2022",
  title: "模擬付款流程網站",
  intro:
    "撰寫邏輯做表單驗證，包含信用卡資料、email 等，並以 React Portal 渲染錯誤提示訊息。輸入卡號時每滿四碼自動跳轉到下一欄位，並判斷所輸入卡號的信用卡品牌。",
  cover:
    "https://media-exp1.licdn.com/dms/image/C4E1BAQEu7nDBxY2KXw/company-background_10000/0/1556122971779?e=2159024400&v=beta&t=-oR_B0gCjXcLUObiGLx7lbA5KwVibKY5xIRsgE_n7b4",
  skills: ["html", "css", "javascript", "express", "mongodb", "react", "scss"],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const More = Template.bind({});
More.args = {
  ...defaultArgs,
  more: [],
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  primary: true,
  cover: require("../../images/mac.png"),
};

export const PrimaryMore = Template.bind({});
PrimaryMore.args = {
  ...defaultArgs,
  primary: true,
  more: [],
};
