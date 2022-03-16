import styled, { css } from "styled-components";
import { breakpointUp } from "../../styles/abstracts/mixins";
import { LinkProps } from "./Link";

const StyledLink = styled.a<{ color: string; icon: LinkProps["icon"] }>`
  color: ${({ color }) => color};
  text-decoration: none;
  vertical-align: middle;
  transition: filter 0.3s;
  position: relative;

  & i {
    display: inline-block;
    margin-right: 5px;
  }

  &::after {
    content: "";
    width: 0;
    height: 1px;
    background-color: ${({ color }) => color};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    transition: width 0.3s;
  }

  ${({ theme }) => {
    return css`
      ${breakpointUp(theme.breakpoints.sm)} {
        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
    `;
  }}
`;

StyledLink.displayName = "StyledLink";

export default StyledLink;
