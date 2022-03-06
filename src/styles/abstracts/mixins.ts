export const breakpointUp = (breakpoint: string) => {
  return `@media all and (min-width: ${breakpoint})`;
};

export const breakpointDown = (breakpoint: string) => {
  return `@media all and (max-width: ${breakpoint})`;
};
