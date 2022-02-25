import styled from "styled-components";

const StyledPill = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.font.small};
  color: #fff;
  background-color: ${({ color, theme }) => color || theme.color.primary};
  padding: 3px 10px;
  border-radius: 20px;
  display: inline-block;
`;

export default StyledPill;
