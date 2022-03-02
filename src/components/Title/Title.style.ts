import styled, { css } from "styled-components";
import { FontSize } from "./Title";

const StyledTitle = styled.div<{
  primary?: boolean;
  size: FontSize;
  color: string;
}>`
  margin: 0;
  font-size: ${({ theme, size, primary = false }) =>
    primary ? "5rem" : theme.font[size]};
  color: ${({ color }) => color};
  ${({ primary = false }) => {
    if (primary) {
      return css`
        font-style: italic;
      `;
    }
    return "";
  }}
`;

export default StyledTitle;
