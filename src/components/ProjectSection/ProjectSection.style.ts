import styled from "styled-components";

export const StyledProjectsBox = styled.div``;

const StyledProjectSection = styled.section`
  & ${StyledProjectsBox} {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export default StyledProjectSection;
