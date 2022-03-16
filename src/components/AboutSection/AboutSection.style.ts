import styled, { css } from "styled-components";
import { breakpointDown } from "../../styles/abstracts/mixins";

const StyledAboutSection = styled.section`
  display: flex;
  align-items: center;

  ${({ theme }) => {
    return css`
      ${breakpointDown(theme.breakpoints.md)} {
        flex-direction: column;
      }
    `;
  }}
`;

StyledAboutSection.displayName = "StyledAboutSection";

export const StyledImagesBox = styled.div`
  flex: 1 1 auto;
  width: 0;
  height: 400px;
  position: relative;
  /*display: flex;*/

  /*& .parallax {
    display: inline-block;

    img {
      width: 100%;
    }
  }*/

  /*& .parallax:first-child {
    width: 70%;
  }

  & .parallax:last-child {
    width: 30%;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }*/

  ${({ theme }) => {
    return css`
      ${breakpointDown(theme.breakpoints.md)} {
        width: 100%;
        height: 300px;

        & .parallax:last-child {
          width: 40% !important;
          right: 0 !important;
        }
      }
    `;
  }}
`;

StyledImagesBox.displayName = "StyledAboutSectionImagesBox";

export const StyledArticle = styled.article`
  flex: 0 0 400px;
  z-index: 2;

  ${({ theme }) => {
    return css`
      ${breakpointDown(theme.breakpoints.md)} {
        flex: 0 0 auto;
        width: 100%;
      }
    `;
  }}
`;

StyledArticle.displayName = "StyledAboutSectionArticle";

export default StyledAboutSection;
