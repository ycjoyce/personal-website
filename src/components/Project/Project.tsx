import React, { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import isInView from "../../hooks/useInView";

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
  const ref = useRef<HTMLImageElement>(null);
  const [imgSrc, setImgSrc] = useState<string>("https://fakeimg.pl/350x200");

  useEffect(() => {
    if (ref.current) {
      isInView(ref.current, (entries, observer) => {
        entries.forEach((e) => {
          if (e.intersectionRatio > 0 && e.isIntersecting) {
            if (imgSrc !== ref.current?.dataset.src) {
              setImgSrc(ref.current?.dataset.src || "");
              observer.disconnect();
            }
          }
        });
      });
    }
  }, [imgSrc]);

  const renderSkills = (skills: SkillProps["title"][]) => {
    return skills.map((skill, i) => (
      <Skill
        title={skill}
        color={primary ? "rgba(255,255,255,0.7)" : "#eee"}
        key={skill}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "all" }}
        variants={{
          offscreen: {
            opacity: 0,
            y: 10,
          },
          onscreen: {
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.3,
              ease: "easeOut",
            },
          },
        }}
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

  const ParagrahBox = () => (
    <div>
      {intro.split("\n").map((e, i) => (
        <StyledParagraph key={`${i}${e}`}>{e}</StyledParagraph>
      ))}
    </div>
  );

  const PrimaryProject = () => (
    <StyledProject
      data-year={year}
      data-more={more.length > 0}
      data-primary={primary}
    >
      <StyledSubtitle
        as={motion.p}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "all" }}
        variants={{
          offscreen: {
            scale: 0,
          },
          onscreen: {
            scale: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
      >
        {subtitle}
      </StyledSubtitle>

      <StyledYear>{year}</StyledYear>

      <StyledImageBox>
        <img src={cover} alt={title} />
      </StyledImageBox>

      <StyledIntroBox>
        <Title level={3} size={3}>
          {title}
        </Title>

        <StyledLinksBox>
          {links.length > 0 && renderLinks(links)}
        </StyledLinksBox>

        <ParagrahBox />

        <StyledSkillBox>{renderSkills(skills)}</StyledSkillBox>

        {more.length > 0 && (
          <Button color="#fff" outline onClick={handleClick}>
            View More
          </Button>
        )}
      </StyledIntroBox>
    </StyledProject>
  );

  const DefaultProject = () => (
    <StyledProject
      data-year={year}
      data-more={more.length > 0}
      data-primary={primary}
    >
      <StyledImageBox>
        <img ref={ref} src={imgSrc} data-src={cover} alt={title} />

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
      </StyledImageBox>

      <StyledIntroBox>
        <StyledLinksBox>
          {links.length > 0 && renderLinks(links)}
        </StyledLinksBox>

        <ParagrahBox />

        <StyledSkillBox>{renderSkills(skills)}</StyledSkillBox>
      </StyledIntroBox>
    </StyledProject>
  );

  return primary ? <PrimaryProject /> : <DefaultProject />;
};

export default Project;
