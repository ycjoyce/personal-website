import { useRef } from "react";

const useProgressBar = (years: number[]) => {
  const bar = useRef<HTMLDivElement>(null);

  const updateBar = (splide: any) => {
    if (!bar.current) {
      return;
    }
    const end = splide.Components.Controller.getEnd() + 1;
    bar.current.style.width = String((100 * (splide.index + 1)) / end) + "%";
  };

  const Progress = () => (
    <div className="my-slider-progress">
      <div className="my-slider-progress-bar" ref={bar}></div>
    </div>
  );

  const maxYear = Math.max(...years);
  const minYear = Math.min(...years);

  return { updateBar, Progress, maxYear, minYear };
};

export default useProgressBar;
