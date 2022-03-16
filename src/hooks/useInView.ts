const getThreshold = (steps: number) => {
  const threshold: number[] = [];

  for (let i = 1; i <= steps; i++) {
    threshold.push(i / steps);
  }

  return threshold;
};

const isInView = (
  el: HTMLElement,
  callback: IntersectionObserverCallback,
  steps = 10
) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: getThreshold(steps),
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(el);
};

export default isInView;
