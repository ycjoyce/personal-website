import React, { FC } from "react";
import StyledLink from "./Link.style";

export interface LinkProps {
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
}) => {
  const icons = {
    link: "fa fa-link",
    github: "fab fa-github",
  };

  return (
    <StyledLink href={url} target={target} color={color} icon={icon}>
      <i className={icons[icon]}></i>
      {label}
    </StyledLink>
  );
};

export default Link;
