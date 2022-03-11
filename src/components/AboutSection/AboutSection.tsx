import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
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
        <SectionTitle>About</SectionTitle>

        {content.split("\n").map((e, i) => (
          <motion.p
            key={`${e}${i}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: "all" }}
            variants={{
              offscreen: {
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: i * 0.2,
                },
              },
            }}
          >
            {e}
          </motion.p>
        ))}
      </StyledArticle>
    </StyledAboutSection>
  );
};

export default AboutSection;
