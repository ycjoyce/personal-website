import styled, { css } from "styled-components";
import StyledHamburger from "../Hamburger/Hamburger.style";
import StyledMenu, { StyledMenuList } from "../Menu/Menu.style";
import { breakpointUp } from "../../styles/abstracts/mixins";

const headerHeight = 80;
const headerPadding = 20;

export const StyledOperateBox = styled.div`
  display: flex;
  align-items: center;

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

const StyledHeader = styled.header<{ hide: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-image: linear-gradient(to bottom, #fff, transparent); */
  background-color: #fff;
  padding: 0px ${headerPadding}px;
  height: ${headerHeight}px;
  z-index: 5;
  box-shadow: 0 10px 10px #fff;
  transition: transform 0.3s, box-shadow 0.3s;

  ${({ theme, hide }) => {
    if (hide) {
      return css`
        ${breakpointUp(theme.breakpoints.md)} {
          transform: translateY(-100%);
          box-shadow: none;
        }
      `;
    }
    return "";
  }}
`;

export default StyledHeader;
