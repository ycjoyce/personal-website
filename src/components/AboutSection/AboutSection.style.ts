import styled from "styled-components";

const StyledAboutSection = styled.section`
  display: flex;
`;

export const StyledImagesBox = styled.div`
  flex: 1 1 auto;
  width: 0;
  position: relative;

  & .simpleParallax {
    display: inline-block;

    img {
      width: 100%;
    }
  }

  & .simpleParallax:first-child {
    width: 70%;
  }

  & .simpleParallax:last-child {
    width: 50%;
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledArticle = styled.article`
  flex: 0 0 300px;
  z-index: 2;
`;

export default StyledAboutSection;
