import React, { FC } from "react";
import Title from "../Title/Title";
import Parallax from "../Parallax/Parallax";
// import { Parallax as ScrollParallax } from "react-scroll-parallax";
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
          speed={-20}
          style={{
            display: "inline-block",
            width: "70%",
          }}
        />
        <Parallax
          src={imageTwo}
          speed={-10}
          expanded={false}
          style={{
            display: "inline-block",
            width: "30%",
            position: "absolute",
            right: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            height: "80%",
          }}
        />
      </StyledImagesBox>

      <StyledArticle>
        {/* <ScrollParallax speed={2} translateX={["20px", "0px"]}> */}
        <Title level={2} primary>
          About
        </Title>
        {/* </ScrollParallax> */}
        {content.split("\n").map((e, i) => (
          <p key={`${e}${i}`}>{e}</p>
        ))}
      </StyledArticle>
    </StyledAboutSection>
  );
};

export default AboutSection;
