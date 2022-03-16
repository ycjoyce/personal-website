import React, { FC, useCallback, useMemo, useState } from "react";
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

  const renderProjects = useCallback(
    (isMain: boolean, items: ProjectProps[]) => {
      const handleMainClick = (id: string) => {
        setLightBoxItems(main.find((item) => item.id === id)?.more || []);
      };

      const handleSubClick = (id: string) => {
        setLightBoxItems(sub.find((item) => item.id === id)?.more || []);
      };

      return items.map((item) => (
        <Project
          {...item}
          key={item.id}
          primary={isMain}
          onClick={isMain ? handleMainClick : handleSubClick}
        />
      ));
    },
    [main, sub]
  );

  const handleCloseLightBox = () => {
    setLightBoxItems([]);
  };

  const PrimaryProjects = useMemo(
    () => renderProjects(true, main),
    [main, renderProjects]
  );

  const SubProjects = useMemo(
    () => renderProjects(false, sub),
    [sub, renderProjects]
  );

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
          {PrimaryProjects}
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
          {SubProjects}
        </ProjectList>
      </StyledProjectsBox>
    </StyledProjectSection>
  );
};

export default ProjectSection;
