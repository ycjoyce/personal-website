import styled from "styled-components";
import StyledBlotter from "../Blotter/Blotter.style";

const StyledCoverSection = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  display: flex;
  align-items: center;
`;

export const StyledBlotterBox = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  margin: 0 auto;

  ${StyledBlotter} {
    position: absolute;
  }

  & [data-subtitle] {
    font-size: ${({ theme }) => theme.font[3]};
    font-family: "Open Sans Condensed", sans-serif;
    position: absolute;
    top: 50%;
    right: 0%;
    color: #ddd;
    font-style: italic;
  }
`;

export default StyledCoverSection;
