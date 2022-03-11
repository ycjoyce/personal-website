import React, { FC } from "react";
import { motion, MotionProps } from "framer-motion";
import StyledLink from "./Link.style";

export interface LinkProps extends MotionProps {
  icon?: "github" | "link";
  url: string;
  label: string;
  color?: string;
  target?: string;
}

const Link: FC<LinkProps> = ({
  icon = "link",
  url,
  label,
  color = "#fff",
  target = "_blank",
  ...props
}) => {
  const icons = {
    link: "fa fa-link",
    github: "fab fa-github",
  };

  return (
    <StyledLink
      as={motion.a}
      href={url}
      target={target}
      color={color}
      icon={icon}
      {...props}
    >
      <i className={icons[icon]}></i>
      {label}
    </StyledLink>
  );
};

export default Link;
