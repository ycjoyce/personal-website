import styled from "styled-components";
import StyledArrow from "../Arrow/Arrow.style";

export const StyledMenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
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
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  color: #fff;
  font-size: ${({ theme }) => theme.font[1]};
  padding: 0;
  margin: 0 50px;
`;

const StyledMenu = styled.div`
  background-color: ${({ theme }) => theme.color.emphasize};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default StyledMenu;
