import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { colord } from "colord";
import { ButtonProps } from "./Button";
import { breakpointUp } from "../../styles/abstracts/mixins";

const StyledButton = styled(motion.button)<ButtonProps>`
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

  ${({ theme, color = "#fff" }) => {
    return css`
      ${breakpointUp(theme.breakpoints.sm)} {
        &:hover {
          background-color: ${color};
          color: ${colord(color).isLight() ? theme.color.black : "#fff"};
          box-shadow: inset 0 0 0 ${colord(color!).alpha(0.5).toRgbString()},
            0 0 1.5em ${colord(color!).alpha(0.7).toRgbString()};
        }
      }
    `;
  }}
`;

StyledButton.displayName = "StyledButton";

export default StyledButton;
