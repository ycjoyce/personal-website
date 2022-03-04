import styled from "styled-components";

export const StyledModalBackground = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  opacity: 0.9;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90%;
  padding: 50px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
`;

const StyledModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1;
`;

export default StyledModal;
