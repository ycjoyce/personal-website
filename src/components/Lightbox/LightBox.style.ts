import styled from "styled-components";

export const StyledModalBackground = styled.div`
  background-color: #000;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledCloseButton = styled.button`
  background: ${({ theme }) => theme.color.primary};
  border: none;
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const StyledModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90%;
  transform: translate(-50%, -50%);

  & ${StyledCloseButton} {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 2;
  }
`;

const StyledModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 100;
`;

export default StyledModal;
