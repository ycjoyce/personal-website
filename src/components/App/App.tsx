import React, { FC } from "react";
import AboutSection from "../AboutSection/AboutSection";
import CoverSection from "../CoverSection/CoverSection";
import Header from "../Header/Header";
import ProjectsSection from "../ProjectSection/ProjectSection";

const App: FC = () => (
  <div>
    <Header />
    <CoverSection />
    <AboutSection />
    <ProjectsSection />
  </div>
);

export default App;
