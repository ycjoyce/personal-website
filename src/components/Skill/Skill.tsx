import React, { FC } from "react";
import { motion, MotionProps } from "framer-motion";
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

export interface SkillProps extends MotionProps {
  title: keyof typeof SkillItem;
  color?: string;
}

const Skill: FC<SkillProps> = ({ title, color = "transparent", ...props }) => (
  <StyledSkill as={motion.div} color={color} {...props}>
    # {SkillItem[title]}
  </StyledSkill>
);

export default Skill;
