import React, { FC, useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import Project, { ProjectProps } from "../Project/Project";
import Title from "../Title/Title";
import LightBox from "../LightBox/LightBox";
import { Item } from "../VideoSlider/VideoSlider";

export interface ProjectSectionProps {
  main: ProjectProps[];
  sub: ProjectProps[];
}

const ProjectSection: FC<ProjectSectionProps> = ({ main, sub }) => {
  const [lightBoxItems, setLightBoxItems] = useState<Item[]>([]);

  const handleMainClick = () => {};

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
    console.log("close");
    setLightBoxItems([]);
  };

  return (
    <section>
      {lightBoxItems.length && (
        <LightBox items={lightBoxItems} onClose={handleCloseLightBox} />
      )}

      <div>
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
      </div>

      <div>
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
          }}
        >
          {renderProjects(false, sub)}
        </ProjectList>
      </div>
    </section>
  );
};

export default ProjectSection;
