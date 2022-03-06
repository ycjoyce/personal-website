import React, { FC, useState, useRef } from "react";
import AboutSection from "../AboutSection/AboutSection";
import CoverSection from "../CoverSection/CoverSection";
import Header from "../Header/Header";
import ProjectsSection from "../ProjectSection/ProjectSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import StyledApp, { StyledWrapper } from "./App.style";
import { projects } from "../../data";

const App: FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerEl = useRef<HTMLElement>(null);

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

  return (
    <StyledApp>
      <Header
        ref={headerEl}
        menu={[
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
        ]}
        menuOpened={menuOpened}
        onHamburgerClick={handleHamburgerClick}
      />
      <CoverSection strings={["Front-end Developer", "Joyce Chen"]} />

      <StyledWrapper>
        <AboutSection
          content="Hello World\nJoyce"
          imageOne="https://nationaltoday.com/wp-content/uploads/2020/07/Kitten-640x514.jpg"
          imageTwo="https://media-exp1.licdn.com/dms/image/C4E1BAQEu7nDBxY2KXw/company-background_10000/0/1556122971779?e=2159024400&v=beta&t=-oR_B0gCjXcLUObiGLx7lbA5KwVibKY5xIRsgE_n7b4"
        />
        <ProjectsSection main={projects.main} sub={projects.sub} />
        <ExperienceSection
          items={[
            {
              time: "2020 - present",
              title: "智趣王數位科技股份有限公司",
              content: "",
            },
            {
              time: "2019 - 2020",
              title: "資策會 Web App 前端工程課程",
              content: "",
            },
            {
              time: "2017 - 2019",
              title: "雄獅旅行社股份有限公司",
              content: "",
            },
            {
              time: "2013 - 2017",
              title: "台灣藝術大學圖文傳播學系",
              content: "",
            },
          ]}
        />
      </StyledWrapper>
    </StyledApp>
  );
};

export default App;
