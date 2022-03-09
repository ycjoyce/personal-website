import { Story } from "@storybook/react/types-6-0";
import ExperienceSection, { ExperienceSectionProps } from "./ExperienceSection";

export default {
  title: "Sections/ExperienceSection",
  component: ExperienceSection,
};

const Template: Story<ExperienceSectionProps> = (args) => (
  <ExperienceSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      time: "2020 - present",
      title: "智趣王數位科技股份有限公司",
      content:
        "獨立負責所有前端相關工作\n前端介面優化，增進使用者體驗及無障礙設計\n善用打包與語法檢查工具以提升開發效率及程式碼品質\n與後端工程師協作",
    },
    {
      time: "2019 - 2020",
      title: "資策會 Web App 前端工程課程",
      content:
        "學習網頁版面切版、程式撰寫及資料庫串接，以使用者體驗的思維設計網頁操作及互動流程\n獲選個人專題最佳網站，並擔任團體專題組長與 6 名組員協同開發",
    },
    {
      time: "2017 - 2019",
      title: "雄獅旅行社股份有限公司",
      content:
        "旅遊專案主題包裝之創意發想與設計\n量身訂做企業戶旅遊提案企畫書與提案簡報\n擅於溝通、規劃及整合，多次參與執行千人以上大規模專案",
    },
    {
      time: "2013 - 2017",
      title: "台灣藝術大學圖文傳播學系",
      content:
        "學習設計、印刷、攝影、出版，並活用於作品的製作\n多次設計作品得獎經歷\n擔任論文發表會總召，擅於統籌整合",
    },
  ],
};
