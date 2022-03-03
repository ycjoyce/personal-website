import styled, { css } from "styled-components";
import { colord } from "colord";
import StyledSkill from "../Skill/Skill.style";
import StyledTitle from "../Title/Title.style";
import StyledButton from "../Button/Button.style";

interface StyledProjectProps {
  "data-year": string;
  primary: boolean;
  more: boolean;
  onClick: (id: string) => void;
}

export const StyledViewMore = styled.div`
  font-size: ${({ theme }) => theme.font["6"]};
`;

export const StyledImageBox = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 0;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 100%;
    transition: filter 0.5s;
  }
`;

export const StyledIntroBox = styled.div`
  flex: 0 0 400px;

  & > * {
    margin-bottom: 20px;
  }

  & ${StyledButton} {
    margin-top: 30px;
    margin-left: auto;
    display: block;
  }
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

export const StyledYear = styled.div``;

const StyledProject = styled.div<StyledProjectProps>`
  position: relative;

  ${({ primary, more, theme }) => {
    if (primary) {
      return css`
        & {
          display: flex;
          background-color: ${theme.color.primary};
          color: #fff;
          padding: 0 50px;
          height: 500px;
          align-items: center;
          margin-top: 2rem;
        }

        & ${StyledTitle} {
          color: #fff;
          border-bottom: 2px solid #fff;
          padding-bottom: 5px;
        }

        & ${StyledYear} {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 4rem;
          background: -webkit-linear-gradient(
            ${({ theme }) => theme.color.primary} 50%,
            #fff 50% 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateY(-50%);
        }

        & ${StyledIntroBox} {
          flex: 0 1 auto;
        }

        & ${StyledImageBox} {
          flex: 0 0 60%;
          height: 50%;
          background-color: #fff;
          overflow: visible;
          margin-right: 30px;
          display: flex;
          align-items: flex-end;

          & img {
            width: 80%;
            display: block;
            margin-left: auto;
            position: relative;
            top: 5px;
            right: -10px;
          }

          ${more &&
          `&:hover {
             
            }`}
        }

        & ${StyledViewMore} {
        }
      `;
    }

    return css`
      & {
        box-shadow: 0 0 10px ${({ theme }) => theme.color.light};
        transition: box-shadow 0.3s;
      }

      &:hover {
        box-shadow: 0 0 15px ${({ theme }) => theme.color.light};

        ${more &&
        `
          &:hover {
            & ${StyledViewMore} {
              opacity: 1;
            }
          }
        `}
      }

      & ${StyledIntroBox} {
        padding: 20px;
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
          width: 100%;
          padding: 0 20px;
          text-align: center;
        }

        & ${StyledYear} {
          font-size: 1rem;
          position: absolute;
          top: 25px;
          left: 20px;
          vertical-align: middle;
          color: #fff;

          &::after {
            content: "";
            width: 0;
            height: 0;
            display: inline-block;
            background: transparent;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid #fff;
            border-right: 5px solid transparent;
            position: relative;
            top: -2px;
            margin-left: 10px;
          }
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
          transition: opacity 0.3s;
        }
      }
    `;
  }}
`;

export default StyledProject;
