import React, { FC } from "react";
import Title from "../Title/Title";
import Timeline from "../Timeline/Timeline";

export interface ExperienceSectionProps {}

const ExperienceSection: FC<ExperienceSectionProps> = () => {
  return (
    <section>
      <Title primary>Experience</Title>
      <Timeline
        items={[
          {
            time: "2020 - present",
            title: "智趣王數位科技股份有限公司",
            content: "",
          },
          {
            time: "2019 - 2020",
            title: "資策會 Web App 前端工程課程",
            content: "",
          },
          {
            time: "2017 - 2019",
            title: "雄獅旅行社股份有限公司",
            content: "",
          },
          {
            time: "2013 - 2017",
            title: "台灣藝術大學圖文傳播學系",
            content: "",
          },
        ]}
      />
    </section>
  );
};

export default ExperienceSection;
