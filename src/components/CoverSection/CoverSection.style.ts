import styled from "styled-components";
import StyledBlotter from "../Blotter/Blotter.style";
import StyledArrow from "../Arrow/Arrow.style";

export const StyledArrowBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.font.small};

  & ${StyledArrow} {
    left: 50%;
  }
`;

const StyledCoverSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  & ${StyledArrowBox} {
    position: absolute;
    bottom: 20px;
    left: 50%;
  }
`;

export const StyledBlotterBox = styled.div`
  position: relative;
  height: 500px;
  width: 450px;
  margin: 0 auto;

  ${StyledBlotter} {
    position: absolute;
  }

  & [data-subtitle] {
    position: absolute;
    top: 50%;
    right: 0%;
    font-size: ${({ theme }) => theme.font[3]};
    font-style: italic;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & .typed-cursor {
    position: absolute;
    top: calc(50% + 2rem);
    right: -1rem;
  }
`;

export default StyledCoverSection;
