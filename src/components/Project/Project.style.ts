import styled from "styled-components";

interface StyledProjectProps {
  "data-year": string;
  primary: boolean;
  onClick: (id: string) => void;
}

const StyledProject = styled.div<StyledProjectProps>``;

export default StyledProject;
