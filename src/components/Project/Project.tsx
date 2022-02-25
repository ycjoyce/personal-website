import React, { FC } from "react";
import Skill, { SkillProps } from "../Skill/Skill";
import Title from "../Title/Title";
import StyledProject from "./Project.style";

export interface ProjectProps {
  id: string;
  year: string;
  title: string;
  intro: string;
  cover: string;
  skills: SkillProps["title"][];
  more?: boolean;
  primary?: boolean;
  onClick?: (id: string) => void;
}

const Project: FC<ProjectProps> = ({
  id,
  year,
  title,
  intro,
  cover,
  skills,
  more = false,
  primary = false,
  onClick = () => {},
}) => {
  const renderSkills = (skills: SkillProps["title"][]) => {
    return skills.map((skill) => <Skill title={skill} key={skill} />);
  };

  const handleClick = () => {
    onClick(id);
  };

  return (
    <StyledProject data-year={year} primary={primary} onClick={handleClick}>
      <div>
        <img src={cover} alt={title} />

        {more && <div>View More</div>}
      </div>

      <div>
        <Title level={3} size={5}>
          {title}
        </Title>
        <p>{intro}</p>
        {renderSkills(skills)}
      </div>
    </StyledProject>
  );
};

export default Project;
