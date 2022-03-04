import React, { FC, useState } from "react";
import AboutSection from "../AboutSection/AboutSection";
import CoverSection from "../CoverSection/CoverSection";
import Header from "../Header/Header";
import ProjectsSection from "../ProjectSection/ProjectSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import StyledApp, { StyledWrapper } from "./App.style";

const App: FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpened((o) => !o);
  };

  return (
    <StyledApp>
      <Header menuOpened={menuOpened} onHamburgerClick={handleHamburgerClick} />
      <CoverSection />

      <StyledWrapper>
        <AboutSection />
        <ProjectsSection main={[]} sub={[]} />
        <ExperienceSection />
      </StyledWrapper>
    </StyledApp>
  );
};

export default App;
