import styled, { css } from "styled-components";
import StyledHeader from "../Header/Header.style";
import { breakpointDown } from "../../styles/abstracts/mixins";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  ${({ theme }) => {
    return css`
      ${breakpointDown(theme.breakpoints.xl)} {
        padding: 20px;
      }
      ${breakpointDown(theme.breakpoints.sm)} {
        padding: 10px;
      }
    `;
  }}
`;

const StyledApp = styled.div`
  & section {
    margin: 150px 0;
  }

  & ${StyledHeader} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
`;

export default StyledApp;
