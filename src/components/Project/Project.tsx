import React, { FC } from "react";
import Button from "../Button/Button";
import Skill, { SkillProps } from "../Skill/Skill";
import Title from "../Title/Title";
import { Item } from "../VideoSlider/VideoSlider";
import StyledProject, {
  StyledImageBox,
  StyledIntroBox,
  StyledParagraph,
  StyledSkillBox,
  StyledViewMore,
  StyledYear,
} from "./Project.style";

export interface ProjectProps {
  id: string;
  year: string;
  title: string;
  intro: string;
  cover: string;
  skills: SkillProps["title"][];
  more?: Item[];
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
    return skills.map((skill) => (
      <Skill
        title={skill}
        color={primary ? "rgba(255,255,255,0.7)" : "#eee"}
        key={skill}
      />
    ));
  };

  const handleClick = () => {
    onClick(id);
  };

  return (
    <StyledProject
      data-year={year}
      more={!!more}
      primary={primary}
      onClick={handleClick}
    >
      {primary && <StyledYear>{year}</StyledYear>}

      <StyledImageBox>
        <img src={cover} alt={title} />

        {!primary && (
          <>
            <StyledYear>{year}</StyledYear>
            <Title level={3} size={3}>
              {title}
            </Title>
            {more && <StyledViewMore>View More</StyledViewMore>}
          </>
        )}
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

        {primary && more && (
          <Button color="#fff" outline>
            View More
          </Button>
        )}
      </StyledIntroBox>
    </StyledProject>
  );
};

export default Project;
