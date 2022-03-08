import styled, { css } from "styled-components";
import StyledButton from "../Button/Button.style";
import StyledHamburger from "../Hamburger/Hamburger.style";
import StyledMenu, { StyledMenuList } from "../Menu/Menu.style";
import { breakpointUp } from "../../styles/abstracts/mixins";

const StyledHeader = styled.header<{ hide: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-image: linear-gradient(to bottom, #fff, transparent); */
  background-color: #fff;
  padding: 10px 20px;
  z-index: 5;
  box-shadow: 0 10px 10px #fff;
  transition: transform 0.3s, box-shadow 0.3s;

  ${({ hide }) => {
    if (hide) {
      return css`
        transform: translateY(-100%);
        box-shadow: none;
      `;
    }
    return "";
  }}
`;

export const StyledOperateBox = styled.div`
  display: flex;
  align-items: center;

  /* & ${StyledButton} {
    margin-right: 20px;
  } */

  & ${StyledHamburger} {
    padding: 0;
    z-index: 5;
    margin-left: 20px;
  }

  & ${StyledMenu} {
    z-index: 5;
  }

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.md)} {
        & ${StyledHamburger} {
          display: none;
        }

        & ${StyledMenuList} {
          margin-right: 20px;
        }
      }
    `;
  }}
`;

export default StyledHeader;
