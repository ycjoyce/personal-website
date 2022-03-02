import React, { FC } from "react";
import Title from "../Title/Title";
import Parallax from "../Parallax/Parallax";
import theme from "../../styles/abstracts/theme";
import StyledAboutSection, {
  StyledImagesBox,
  StyledArticle,
} from "./AboutSection.style";

export interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = () => (
  <StyledAboutSection>
    <StyledImagesBox>
      <Parallax
        src="https://nationaltoday.com/wp-content/uploads/2020/07/Kitten-640x514.jpg"
        config={{
          scale: 1.5,
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        }}
      />
      <Parallax
        src="https://media-exp1.licdn.com/dms/image/C4E1BAQEu7nDBxY2KXw/company-background_10000/0/1556122971779?e=2159024400&v=beta&t=-oR_B0gCjXcLUObiGLx7lbA5KwVibKY5xIRsgE_n7b4"
        config={{
          scale: 1.5,
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        }}
      />
    </StyledImagesBox>

    <StyledArticle>
      <Title primary color={theme.color.dark}>
        About
      </Title>
      <p></p>
    </StyledArticle>
  </StyledAboutSection>
);

export default AboutSection;
