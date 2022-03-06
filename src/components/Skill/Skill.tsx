import React, { FC } from "react";
import StyledSkill from "./Skill.style";

export const SkillItem = {
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  bootstrap: "Bootstrap",
  styled: "Styled Component",
  rwd: "RWD",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  vue: "Vue",
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
  color?: string;
}

const Skill: FC<SkillProps> = ({ title, color = "transparent" }) => (
  <StyledSkill color={color}># {SkillItem[title]}</StyledSkill>
);

export default Skill;
