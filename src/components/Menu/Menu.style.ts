import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import StyledArrow from "../Arrow/Arrow.style";
import { breakpointUp } from "../../styles/abstracts/mixins";

export const StyledMenuItem = styled(motion.li)`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & ${StyledArrow} {
    margin-left: 20px;
    opacity: 0;
    transition: opacity 0.1s, flex-grow 0.5s;
  }

  &:hover {
    font-style: italic;

    & ${StyledArrow} {
      opacity: 1;
      flex-grow: 1;
    }
  }

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.md)} {
        display: inline-block;
        position: relative;
        transition: color 0.3s;

        &:not(:last-child) {
          margin: 0 20px 0 0;
        }

        & ${StyledArrow} {
          display: none;
        }

        &:hover {
          font-style: normal;
          color: ${theme.color.emphasize};
          transform: scale(1.1);
        }
      }
    `;
  }}
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  color: #fff;
  font-size: ${({ theme }) => theme.font[1]};
  padding: 0;
  margin: 0 50px;

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.md)} {
        color: ${theme.color.primary};
        font-size: ${({ theme }) => theme.font[6]};
        margin: 0;
      }
    `;
  }}
`;

const StyledMenu = styled.div<{ opened: boolean }>`
  background-color: ${({ theme }) => theme.color.emphasize};
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(${({ opened }) => (opened ? "0" : "100%")});
  width: 60vw;
  min-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s;

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.md)} {
        background-color: transparent;
        position: static;
        width: auto;
        height: auto;
        display: inline-block;
        transform: translateX(0);
        min-width: unset;
      }
    `;
  }}
`;

export default StyledMenu;
