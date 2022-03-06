import React, { FC, useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import Project, { ProjectProps } from "../Project/Project";
import Title from "../Title/Title";
import LightBox from "../Lightbox/Lightbox";
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

  const handleMainClick = () => {};

  const handleSubClick = (id: string) => {
    console.log("sub");
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
    console.log("close");
    setLightBoxItems([]);
  };

  return (
    <StyledProjectSection id="projects">
      {lightBoxItems.length > 0 && (
        <LightBox items={lightBoxItems} onClose={handleCloseLightBox} />
      )}

      <StyledProjectsBox>
        <Title primary>Projects</Title>
        <ProjectList
          options={{
            classes: {
              arrows: "splide__arrows primary-arrows",
            },
            type: "loop",
            autoplay: true,
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
            autoplay: true,
            pauseOnHover: true,
            pagination: false,
            padding: "1.5rem",
            breakpoints: {
              700: {
                perPage: 2,
              },
              500: {
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
