import styled, { css } from "styled-components";
import StyledHamburger from "../Hamburger/Hamburger.style";
import StyledMenu from "../Menu/Menu.style";
import { breakpointUp } from "../../styles/abstracts/mixins";

const headerHeight = 80;
const headerPadding = 20;
const contactWidth = 106;
const hamburgerHeight = 30;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0px ${headerPadding}px;
  padding-right: ${hamburgerHeight + headerPadding + 20}px;
  height: ${headerHeight}px;
  z-index: 5;
  box-shadow: 0 10px 10px #fff;
  transition: transform 0.3s, box-shadow 0.3s;

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.md)} {
        padding-right: ${headerPadding}px;
      }
    `;
  }}
`;

export const StyledHeaderBox = styled.div<{ hide: boolean; opened: boolean }>`
  position: relative;
  height: ${headerHeight}px;

  & ${StyledHamburger} {
    position: absolute;
    top: ${(headerHeight - hamburgerHeight) / 2}px;
    right: ${headerPadding}px;
    padding: 0;
    z-index: 15;
    transition: top 0.3s;
  }

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.md)} {
        & ${StyledHamburger} {
          display: none;
        }
      }
    `;
  }}

  ${({ theme, hide, opened }) => {
    if (hide) {
      return css`
        & ${StyledHeader} {
          transform: translateY(-100%);
          box-shadow: none;
          position: relative;
        }
        & ${StyledMenu} {
          z-index: 10;
        }
        & ${StyledHamburger} {
          top: ${!opened
            ? headerHeight * -1
            : (headerHeight - hamburgerHeight) / 2}px;
        }
        ${breakpointUp(theme.breakpoints.md)} {
          & ${StyledMenu} {
            top: -2rem;
            position: absolute;
          }
        }
      `;
    }
    return css`
      ${breakpointUp(theme.breakpoints.md)} {
        & ${StyledMenu} {
          position: absolute;
          right: ${contactWidth + headerPadding * 2}px;
          top: calc(${headerHeight / 2}px - 0.5rem);
          z-index: 2;
          transition: top 0.3s;
        }
      }
    `;
  }}
`;

export const StyledOperateBox = styled.div`
  display: flex;
  align-items: center;
`;

export default StyledHeader;
