import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "normalize.css/normalize.css";
import theme from "./styles/abstracts/theme";
import App from "./components/App/App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
