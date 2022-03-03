import { SplideProps } from "@splidejs/react-splide";
import React, { FC, ReactNode } from "react";
import useProgressBar from "../../hooks/useProgressBar";
import Slider from "../Slider/Slider";

export interface ProjectListProps {
  children: ReactNode[];
  options: SplideProps["options"];
  progress?: boolean;
}

const ProjectList: FC<ProjectListProps> = ({
  children,
  options,
  progress = false,
}) => {
  const { updateBar, Progress, maxYear, minYear } = useProgressBar(
    //@ts-ignore
    children.map((e) => e.props.year || new Date().getFullYear().toString())
  );

  const handlePagination = (splide: any, data: any) => {
    data.list.classList.add("splide__pagination--custom");
  };

  return (
    <>
      <Slider
        options={options}
        onMounted={updateBar}
        onMove={updateBar}
        onPaginationMounted={handlePagination}
      >
        {
          // @ts-ignore
          children.sort((a, b) => b.props.year - a.props.year)
        }
      </Slider>

      {progress && (
        <div className="my-slider-progress-box">
          <Progress />
          <div className="my-slider-progress-years">
            <span>{maxYear}</span>
            <span>{minYear}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectList;
