import styled from "styled-components";
import { colord } from "colord";
import { ButtonProps } from "./Button";

const StyledButton = styled.button<ButtonProps>`
  letter-spacing: 0.1rem;
  border: 2px solid ${({ color }) => color};
  background-color: ${({ outline, color }) =>
    outline ? "transparent" : color};
  color: ${({ outline, color, theme }) => {
    if (outline) {
      return color;
    }
    if (colord(color!).isLight()) {
      return theme.color.black;
    }
    return "#fff";
  }};
  padding: 8px 20px;
  cursor: pointer;
  box-shadow: inset 0 0 0.5em
      ${({ color }) => colord(color!).alpha(0.5).toRgbString()},
    0 0 0.5em ${({ color }) => colord(color!).alpha(0.5).toRgbString()};
  font-size: ${({ size, theme }) => {
    if (size === "sm") {
      return theme.font["small"];
    }
    if (size === "md") {
      return theme.font[6];
    }
    return theme.font[4];
  }};
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ color }) => color};
    color: ${({ color = "#fff", theme }) =>
      colord(color).isLight() ? theme.color.black : "#fff"};
    box-shadow: inset 0 0 0
        ${({ color }) => colord(color!).alpha(0.5).toRgbString()},
      0 0 1.5em ${({ color }) => colord(color!).alpha(0.7).toRgbString()};
  }
`;

export default StyledButton;
