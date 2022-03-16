import styled from "styled-components";
import { colord } from "colord";

const StyledPill = styled.div<{ color: string }>`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ color, theme }) =>
    colord(color).isLight() ? theme.color.black : "#fff"};
  background-color: ${({ color, theme }) => color || theme.color.primary};
  padding: 3px 10px;
  border-radius: 20px;
  display: inline-block;
`;

StyledPill.displayName = "StyledPill";

export default StyledPill;
