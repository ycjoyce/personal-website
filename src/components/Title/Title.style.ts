import styled, { css } from "styled-components";
import { FontSize } from "./Title";

const StyledTitle = styled.div<{
  primary?: boolean;
  size: FontSize;
  color: string;
}>`
  margin: 0;
  ${({ theme, size, primary = false, color }) => {
    const fontSize = primary ? 5 : parseFloat(theme.font[size]);
    return css`
      font-size: ${fontSize}rem;
      line-height: ${fontSize * 1.1}rem;
      color: ${color};
      font-style: ${primary ? "italic" : "normal"};
    `;
  }}
`;

export default StyledTitle;
