import React, { FC } from "react";
import Title from "../Title/Title";
import Timeline, { TimelineProps } from "../Timeline/Timeline";

export interface ExperienceSectionProps {
  items: TimelineProps["items"];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <section id="experience">
      <Title primary>Experience</Title>
      <Timeline items={items} />
    </section>
  );
};

export default ExperienceSection;
