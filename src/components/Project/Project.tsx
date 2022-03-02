import React, { FC } from "react";
import Skill, { SkillProps } from "../Skill/Skill";
import Title from "../Title/Title";
import StyledProject, {
  StyledImageBox,
  StyledIntroBox,
  StyledParagraph,
  StyledSkillBox,
  StyledViewMore,
} from "./Project.style";

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
    <StyledProject
      data-year={year}
      more={more}
      primary={primary}
      onClick={handleClick}
    >
      <StyledImageBox more={more} primary={primary}>
        <img src={cover} alt={title} />

        {!primary && (
          <Title level={3} size={3}>
            {title}
          </Title>
        )}

        {more && <StyledViewMore>View More</StyledViewMore>}
      </StyledImageBox>

      <StyledIntroBox>
        {primary && (
          <Title level={3} size={3}>
            {title}
          </Title>
        )}

        <div>
          {intro.split("\n").map((e, i) => (
            <StyledParagraph key={`${i}${e}`}>{e}</StyledParagraph>
          ))}
        </div>

        <StyledSkillBox>{renderSkills(skills)}</StyledSkillBox>
      </StyledIntroBox>
    </StyledProject>
  );
};

export default Project;
