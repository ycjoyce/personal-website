import styled from "styled-components";
import { FontSize } from "./Title";

const StyledTitle = styled.div<{ size: FontSize; color: string }>`
  font-size: ${({ theme, size }) => theme.font[size]};
  color: ${({ color }) => color};
`;

export default StyledTitle;
