import React, { FC, useState, useRef, useMemo } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import AboutSection from "../AboutSection/AboutSection";
import CoverSection from "../CoverSection/CoverSection";
import Header from "../Header/Header";
import ProjectsSection from "../ProjectSection/ProjectSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import StyledApp, { StyledWrapper } from "./App.style";
import { about, cover, experience, projects } from "../../data";

const App: FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerEl = useRef<HTMLElement>(null);
  const { direction } = useScrollDirection();

  const handleHamburgerClick = () => {
    setMenuOpened((o) => !o);
  };

  const handleMenuClick = (section: "about" | "projects" | "experience") => {
    const sectionBox = document
      .getElementById(section)
      ?.getBoundingClientRect();
    const headerHeight = headerEl.current?.clientHeight || 0;
    document.documentElement.scrollTop =
      (sectionBox?.top || 0) + window.pageYOffset - headerHeight - 30;
    setMenuOpened(false);
  };

  const headerItems = useMemo(
    () => [
      {
        title: "About",
        onClick() {
          handleMenuClick("about");
        },
      },
      {
        title: "Projects",
        onClick() {
          handleMenuClick("projects");
        },
      },
      {
        title: "Experience",
        onClick() {
          handleMenuClick("experience");
        },
      },
    ],
    []
  );

  const ProjectsComponent = useMemo(
    () => <ProjectsSection {...projects} />,
    []
  );

  return (
    <StyledApp>
      <Header
        ref={headerEl}
        hide={direction === "down"}
        menu={headerItems}
        menuOpened={menuOpened}
        onHamburgerClick={handleHamburgerClick}
      />

      <CoverSection {...cover} />

      <StyledWrapper>
        <AboutSection {...about} />
        {ProjectsComponent}
        <ExperienceSection {...experience} />
      </StyledWrapper>
    </StyledApp>
  );
};

export default App;
