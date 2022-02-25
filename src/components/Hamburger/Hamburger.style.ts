import styled from "styled-components";
import { HamburgerProps } from "./Hamburger";

const StyledHamburger = styled.button<HamburgerProps>`
  & .hamburger-inner,
  & .hamburger-inner::before,
  & .hamburger-inner::after,
  &.is-active .hamburger-inner,
  &.is-active .hamburger-inner::before,
  &.is-active .hamburger-inner::after {
    background-color: ${({ color }) => color};
  }
`;

export default StyledHamburger;
