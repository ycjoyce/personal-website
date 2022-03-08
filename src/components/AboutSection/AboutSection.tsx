import React, { FC } from "react";
import Title from "../Title/Title";
import Parallax from "../Parallax/Parallax";
import StyledAboutSection, {
  StyledImagesBox,
  StyledArticle,
} from "./AboutSection.style";

export interface AboutSectionProps {
  imageOne: string;
  imageTwo: string;
  content: string;
}

const AboutSection: FC<AboutSectionProps> = ({
  imageOne,
  imageTwo,
  content,
}) => {
  return (
    <StyledAboutSection id="about">
      <StyledImagesBox>
        <Parallax
          src={imageOne}
          config={{
            scale: 1.5,
            delay: 0.6,
            transition: "cubic-bezier(0,0,0,1)",
          }}
        />
        <Parallax
          src={imageTwo}
          config={{
            scale: 1.5,
            delay: 0.6,
            transition: "cubic-bezier(0,0,0,1)",
          }}
        />
      </StyledImagesBox>

      <StyledArticle>
        <Title level={2} primary>
          About
        </Title>
        {content.split("\n").map((e, i) => (
          <p key={`${e}${i}`}>{e}</p>
        ))}
      </StyledArticle>
    </StyledAboutSection>
  );
};

export default AboutSection;
