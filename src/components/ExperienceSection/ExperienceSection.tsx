import React, { FC } from "react";
import Title from "../Title/Title";
import Timeline, { TimelineProps } from "../Timeline/Timeline";
import StyledExperienceSection from "./ExperienceSection.style";

export interface ExperienceSectionProps {
  items: TimelineProps["items"];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <StyledExperienceSection id="experience">
      <Title level={2} primary>
        Experience
      </Title>
      <Timeline items={items} />
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
