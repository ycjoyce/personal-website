import React, { FC } from "react";
import { Parallax } from "react-scroll-parallax";
import Title from "../Title/Title";
import Timeline, { TimelineProps } from "../Timeline/Timeline";
import StyledExperienceSection from "./ExperienceSection.style";

export interface ExperienceSectionProps {
  items: TimelineProps["items"];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <StyledExperienceSection id="experience">
      <Parallax speed={5} opacity={["20px", "0px"]}>
        <Title level={2} primary>
          Experience
        </Title>
      </Parallax>

      <Timeline items={items} />
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
