import styled from "styled-components";

export const StyledProjectsBox = styled.div``;

StyledProjectsBox.displayName = "StyledProjectsBox";

const StyledProjectSection = styled.section`
  & ${StyledProjectsBox} {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

StyledProjectSection.displayName = "StyledProjectSection";

export default StyledProjectSection;
