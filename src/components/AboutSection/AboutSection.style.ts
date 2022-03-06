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

  ${({ theme }) => {
    return css`
      ${breakpointDown(theme.breakpoints.md)} {
        width: 100%;

        & .simpleParallax:last-child {
          right: 0;
        }
      }
    `;
  }}
`;

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

export default StyledAboutSection;
