import React, { FC } from "react";
import StyledSkill from "./Skill.style";

export const SkillItem = {
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  styled: "Styled Component",
  javascript: "JavaScript",
  react: "React",
  vue: "Vue",
  typescript: "TypeScript",
  webpack: "Webpack",
  gulp: "Gulp",
  nodejs: "Node.js",
  express: "Express",
  mongodb: "MongoDB",
  mongoose: "Mongoose",
  mysql: "MySQL",
  php: "PHP",
};

export interface SkillProps {
  title: keyof typeof SkillItem;
}

const Skill: FC<SkillProps> = ({ title }) => (
  <StyledSkill color=""># {SkillItem[title]}</StyledSkill>
);

export default Skill;
