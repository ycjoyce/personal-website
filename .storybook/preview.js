import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";
import theme from "../src/styles/abstracts/theme";
import "normalize.css/normalize.css";
import "../src/styles/all.css";

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>{story()}</ParallaxProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
