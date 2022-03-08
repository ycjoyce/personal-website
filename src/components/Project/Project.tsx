import React, { FC } from "react";
import Button from "../Button/Button";
import Skill, { SkillProps } from "../Skill/Skill";
import Title from "../Title/Title";
import { VideoSlideItemProps } from "../VideoSlideItem/VideoSlideItem";
import Link, { LinkProps } from "../Link/Link";
import StyledProject, {
  StyledImageBox,
  StyledIntroBox,
  StyledParagraph,
  StyledSkillBox,
  StyledViewMore,
  StyledYear,
  StyledLinksBox,
  StyledTitleBox,
  StyledSubtitle,
} from "./Project.style";
import theme from "../../styles/abstracts/theme";

export interface ProjectProps {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  intro: string;
  cover: string;
  skills: SkillProps["title"][];
  more?: VideoSlideItemProps[]; // sub projects lightbox 內容
  links?: LinkProps[]; // 相關連結
  primary?: boolean;
  onClick?: (id: string) => void;
}

const Project: FC<ProjectProps> = ({
  id,
  year,
  title,
  subtitle = "",
  intro,
  cover,
  skills,
  more = [],
  links = [],
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

  const renderLinks = (items: LinkProps[]) => {
    return items.map((item) => (
      <Link
        {...item}
        color={primary ? "#fff" : theme.color.primary}
        key={item.url}
      />
    ));
  };

  return (
    <StyledProject data-year={year} more={more.length > 0} primary={primary}>
      {primary && <StyledSubtitle>{subtitle}</StyledSubtitle>}

      {primary && <StyledYear>{year}</StyledYear>}

      <StyledImageBox>
        <img src={cover} alt={title} />

        {!primary && (
          <>
            <StyledYear>{year}</StyledYear>

            <StyledTitleBox>
              <Title level={3} size={5}>
                {title}
              </Title>
              {subtitle && <p>{subtitle}</p>}
            </StyledTitleBox>

            {more.length > 0 && (
              <StyledViewMore onClick={handleClick}>View More</StyledViewMore>
            )}
          </>
        )}
      </StyledImageBox>

      <StyledIntroBox>
        {primary && (
          <>
            <Title level={3} size={3}>
              {title}
            </Title>
          </>
        )}

        <StyledLinksBox>
          {links.length > 0 && renderLinks(links)}
        </StyledLinksBox>

        <div>
          {intro.split("\n").map((e, i) => (
            <StyledParagraph key={`${i}${e}`}>{e}</StyledParagraph>
          ))}
        </div>

        <StyledSkillBox>{renderSkills(skills)}</StyledSkillBox>

        {primary && more.length > 0 && (
          <Button color="#fff" outline onClick={handleClick}>
            View More
          </Button>
        )}
      </StyledIntroBox>
    </StyledProject>
  );
};

export default Project;
