import styled from "styled-components";
import StyledButton from "../Button/Button.style";
import StyledHamburger from "../Hamburger/Hamburger.style";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to bottom, #fff, transparent);
  padding: 20px;
  z-index: 5;
`;

export const StyledOperateBox = styled.div`
  display: flex;
  align-items: center;

  & ${StyledButton} {
    margin-right: 20px;
  }

  & ${StyledHamburger} {
    padding: 0;
    z-index: 5;
  }
`;

export default StyledHeader;
