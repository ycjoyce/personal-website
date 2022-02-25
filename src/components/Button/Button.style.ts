import styled from "styled-components";
import { ButtonProps } from "./Button";

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid ${({ color }) => color};
  background-color: ${({ outline, color }) =>
    outline ? "transparent" : color};
  color: ${({ outline, color }) => (outline ? color : "#fff")};
  padding: 5px 10px;
  cursor: pointer;
  font-size: ${({ size, theme }) => {
    if (size === "sm") {
      return theme.font["small"];
    }
    if (size === "md") {
      return theme.font[6];
    }
    return theme.font[4];
  }};
`;

export default StyledButton;
