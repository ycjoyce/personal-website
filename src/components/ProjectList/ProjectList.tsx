import React, { FC, ReactNode } from "react";
import Slider from "../Slider/Slider";

export interface ProjectListProps {
  children: ReactNode[];
}

const ProjectList: FC<ProjectListProps> = ({ children }) => {
  return <Slider>{children}</Slider>;
};

export default ProjectList;
