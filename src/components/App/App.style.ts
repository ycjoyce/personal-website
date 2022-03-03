import styled from "styled-components";
import StyledHeader from "../Header/Header.style";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const StyledApp = styled.div`
  & section {
    &:not(:last-child) {
      margin-bottom: 200px;
    }
  }

  & ${StyledHeader} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
`;

export default StyledApp;
