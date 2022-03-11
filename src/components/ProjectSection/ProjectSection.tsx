import React, { FC, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectList from "../ProjectList/ProjectList";
import Project, { ProjectProps } from "../Project/Project";
import Title from "../Title/Title";
import Lightbox from "../SliderLightbox/SliderLightbox";
import { VideoSlideItemProps } from "../VideoSlideItem/VideoSlideItem";
import StyledProjectSection, {
  StyledProjectsBox,
} from "./ProjectSection.style";

export interface ProjectSectionProps {
  main: ProjectProps[];
  sub: ProjectProps[];
}

const ProjectSection: FC<ProjectSectionProps> = ({ main, sub }) => {
  const [lightBoxItems, setLightBoxItems] = useState<VideoSlideItemProps[]>([]);

  const handleMainClick = (id: string) => {
    setLightBoxItems(main.find((item) => item.id === id)?.more || []);
  };

  const handleSubClick = (id: string) => {
    setLightBoxItems(sub.find((item) => item.id === id)?.more || []);
  };

  const renderProjects = (main: boolean, items: ProjectProps[]) => {
    return items.map((item) => (
      <Project
        {...item}
        key={item.id}
        primary={main}
        onClick={main ? handleMainClick : handleSubClick}
      />
    ));
  };

  const handleCloseLightBox = () => {
    setLightBoxItems([]);
  };

  return (
    <StyledProjectSection id="projects">
      {lightBoxItems.length > 0 && (
        <Lightbox items={lightBoxItems} onClose={handleCloseLightBox} />
      )}

      <StyledProjectsBox>
        <SectionTitle>Projects</SectionTitle>

        <ProjectList
          options={{
            classes: {
              arrows: "splide__arrows primary-arrows",
            },
            type: "loop",
            autoplay: true,
            speed: 1000,
            pauseOnHover: true,
            pagination: true,
          }}
        >
          {renderProjects(true, main)}
        </ProjectList>
      </StyledProjectsBox>

      <StyledProjectsBox>
        <Title level={2}>More Projects</Title>

        <ProjectList
          progress
          options={{
            classes: {
              arrows: "splide__arrows secondary-arrows",
            },
            perPage: 3,
            perMove: 1,
            rewind: true,
            rewindSpeed: 1000,
            gap: "2rem",
            // autoplay: true,
            pauseOnHover: true,
            pagination: false,
            padding: "1.5rem",
            breakpoints: {
              950: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          {renderProjects(false, sub)}
        </ProjectList>
      </StyledProjectsBox>
    </StyledProjectSection>
  );
};

export default ProjectSection;
