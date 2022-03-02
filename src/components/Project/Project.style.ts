import styled, { css } from "styled-components";
import { colord } from "colord";
import StyledSkill from "../Skill/Skill.style";
import StyledTitle from "../Title/Title.style";

interface StyledProjectProps {
  "data-year": string;
  primary: boolean;
  more: boolean;
  onClick: (id: string) => void;
}

export const StyledImageBox = styled.div<{ more: boolean; primary: boolean }>`
  position: relative;
  overflow: hidden;

  & img {
    width: 100%;
    transition: filter 0.5s;
  }

  ${({ more, primary }) => {
    if (more && primary) {
      return css`
        &:hover {
          border: 3px solid red;
          & ${StyledViewMore} {
            top: 50%;
          }
          & img {
            filter: blur(5px);
          }
        }
      `;
    }
    return css`
      &:hover {
        border: 3px solid blue;
        & ${StyledViewMore} {
          opacity: 1;
        }
        & img {
          filter: blur(15px);
        }
      }
    `;
  }}
`;

export const StyledIntroBox = styled.div`
  flex: 0 0 400px;

  & > * {
    margin-bottom: 20px;
  }
`;

export const StyledViewMore = styled.div``;

const StyledProject = styled.div<StyledProjectProps>`
  border: 1px solid red;

  ${({ primary, theme }) => {
    if (primary) {
      return css`
        display: flex;

        & ${StyledImageBox} {
          flex-grow: 1;
          flex-shrink: 1;
          margin-right: 30px;
        }

        & ${StyledViewMore} {
          width: 100px;
          height: 100px;
          background-color: ${theme.color.emphasize};
          border-radius: 100%;
          text-align: center;
          line-height: 100px;
          position: absolute;
          left: 50%;
          top: 150%;
          transform: translate(-50%, -50%);
          transition: top 0.5s;
        }
      `;
    }

    return css`
      & ${StyledIntroBox} {
        padding: 30px;
      }

      & ${StyledImageBox} {
        position: relative;
        filter: brightness(0.9);

        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          background-color: ${colord(theme.color.black)
            .alpha(0.3)
            .toRgbString()};
        }

        &::after {
          content: "";
          position: absolute;
          display: block;
          width: calc(100% - 40px);
          height: calc(100% - 40px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
        }

        & ${StyledTitle} {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
        }

        & ${StyledViewMore} {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 50px;
          background: #fff;
          border-radius: 100px 100px 0 0;
          line-height: 50px;
          text-align: center;
          opacity: 0;
        }
      }
    `;
  }}
`;

export const StyledParagraph = styled.p`
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledSkillBox = styled.div`
  margin: -5px;

  & ${StyledSkill} {
    margin: 5px;
  }
`;

export default StyledProject;
