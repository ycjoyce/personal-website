import React, { FC } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Timeline, { TimelineProps } from "../Timeline/Timeline";
import StyledExperienceSection from "./ExperienceSection.style";

export interface ExperienceSectionProps {
  items: TimelineProps["items"];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <StyledExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>

      <Timeline items={items} />
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
