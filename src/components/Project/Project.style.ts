import styled, { css } from "styled-components";
import { colord } from "colord";
import StyledSkill from "../Skill/Skill.style";
import StyledTitle from "../Title/Title.style";
import StyledLink from "../Link/Link.style";
import { breakpointDown, breakpointUp } from "../../styles/abstracts/mixins";
import StyledButton from "../Button/Button.style";

interface StyledProjectProps {
  "data-year": string;
  "data-primary": boolean;
  "data-more": boolean;
}

const subViewMoreHeight = 40;

// 外部連結容器
export const StyledLinksBox = styled.div`
  margin: -5px;

  & ${StyledLink} {
    margin: 5px;
  }
`;

StyledLinksBox.displayName = "StyledProjectLinksBox";

// 標題容器
export const StyledTitleBox = styled.div`
  text-align: center;
  & p {
    font-size: ${({ theme }) => theme.font[6]};
    margin: 0;
    margin-top: 5px;
    color: #fff;
  }

  [data-primary="false"] & {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
`;

StyledTitleBox.displayName = "StyledProjectTitleBox";

// 查看更多按鈕
export const StyledViewMore = styled.div`
  font-size: ${({ theme }) => theme.font["6"]};

  [data-primary="false"] & {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: ${subViewMoreHeight * 2}px;
    height: ${subViewMoreHeight}px;
    background: ${({ theme }) => theme.color.primary};
    color: #fff;
    border-radius: ${subViewMoreHeight * 2}px ${subViewMoreHeight * 2}px 0 0;
    line-height: ${subViewMoreHeight}px;
    text-align: center;
    opacity: 0;
    z-index: 3;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.small};
    transition: opacity 0.3s, background 0.3s, color 0.5s;

    ${({ theme }) => {
      return css`
        ${breakpointDown(theme.breakpoints.md)} {
          opacity: 1;
        }
        ${breakpointUp(theme.breakpoints.sm)} {
          &:hover {
            background: #fff;
            color: ${theme.color.primary};
          }
        }
      `;
    }}
  }

  [data-primary="false"][data-more="true"]:hover & {
    opacity: 1;
  }
`;

StyledViewMore.displayName = "StyledProjectViewMore";

// 圖片容器
export const StyledImageBox = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 0;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 圖片容器中的 img */
  & img {
    width: 100%;
    transition: filter 0.5s;
  }

  [data-primary="true"] & {
    flex: 0 0 60%;
    height: 50%;
    background-color: #fff;
    overflow: visible;
    margin-right: 30px;
    display: flex;
    align-items: flex-end;
    margin-top: 5%;

    ${({ theme }) => {
      return css`
        ${breakpointDown(theme.breakpoints.lg)} {
          flex: 0 0 40%;
        }

        ${breakpointDown(theme.breakpoints.md)} {
          /* height: 0; */
          width: 100%;
          margin: 0 0 30px 0;
        }
      `;
    }}

    & img {
      width: 80%;
      display: block;
      margin-left: auto;
      position: relative;
      top: 5px;
      right: -10px;

      ${({ theme }) => {
        return css`
          ${breakpointDown(theme.breakpoints.lg)} {
            width: 100%;
          }

          ${breakpointDown(theme.breakpoints.md)} {
            max-width: 300px;
            max-height: 100%;
            margin: 0;
          }
        `;
      }}
    }
  }

  [data-primary="false"]:hover & {
    &::after {
      width: calc(100% - 40px);
    }
  }

  [data-primary="false"] & {
    position: relative;

    /* 圖片容器遮罩開始 */
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) =>
        colord(theme.color.black).alpha(0.5).toRgbString()};
    }
    /* 圖片容器遮罩結束 */

    /* 圖片容器裝飾開始 */
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 0;
      height: calc(100% - 40px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transition: width 0.3s;

      ${({ theme }) => {
        return css`
          ${breakpointDown(theme.breakpoints.md)} {
            width: calc(100% - 40px);
          }
        `;
      }}
    /* 圖片容器裝飾結束 */
  }

  
`;

StyledImageBox.displayName = "StyledProjectImageBox";

// 文字內容容器
export const StyledIntroBox = styled.div`
  flex: 0 0 400px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  /* 主要案件的查看更多按鈕 */
  & ${StyledButton} {
    margin-left: auto;
    margin-top: 20px;
    display: block;
  }

  [data-primary="true"] & {
    flex: 0 1 auto;
  }

  [data-primary="false"] & {
    padding: 20px;
  }
`;

StyledIntroBox.displayName = "StyledProjectIntroBox";

// 文字章節
export const StyledParagraph = styled.p`
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

StyledParagraph.displayName = "StyledProjectParagraph";

// 技能容器
export const StyledSkillBox = styled.div`
  margin: -5px;

  & ${StyledSkill} {
    margin: 5px;
  }
`;

StyledSkillBox.displayName = "StyledProjectSkillBox";

// 年份
export const StyledYear = styled.div`
  [data-primary="true"] & {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 4rem;
    line-height: 4rem;
    background: -webkit-linear-gradient(
      ${({ theme }) => theme.color.primary} 50%,
      #fff 50% 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateY(-50%);
  }

  [data-primary="false"] & {
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
      transition: transform 0.3s;
    }
  }

  [data-primary="false"]:hover & {
    ${({ theme }) => {
      return css`
        ${breakpointUp(theme.breakpoints.sm)} {
          &::after {
            transform: translateX(10px);
          }
        }
      `;
    }}
  }
`;

StyledYear.displayName = "StyledProjectYear";

// 副標題
export const StyledSubtitle = styled.p`
  [data-primary="true"] & {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    color: ${({ theme }) => theme.color.primary};
    padding: 5px 10px;

    ${({ theme }) => {
      return css`
        ${breakpointDown(theme.breakpoints.md)} {
          top: -8px;
        }
      `;
    }}
  }
`;

StyledSubtitle.displayName = "StyledProjectSubtitle";

// 主要元件
const StyledProject = styled.div<StyledProjectProps>`
  position: relative;

  & ${StyledTitle} {
    color: #fff;
  }

  /* 為 primary */
  &[data-primary="true"] {
    display: flex;
    background-color: ${({ theme }) => theme.color.primary};
    color: #fff;
    padding: 50px;
    height: 500px;
    align-items: center;
    margin-top: 2rem;

    ${({ theme }) => {
      return css`
        ${breakpointDown(theme.breakpoints.md)} {
          flex-direction: column;
          height: auto;
        }
      `;
    }}

    & ${StyledTitle} {
      border-bottom: 2px solid #fff;
      padding-bottom: 5px;
    }
  }

  /* 不為 primary */
  &[data-primary="false"] {
    box-shadow: 0 0 10px ${({ theme }) => theme.color.light};
    transition: transform 0.3s, box-shadow 0.3s;

    ${({ theme }) => {
      return css`
        ${breakpointUp(theme.breakpoints.sm)} {
          &:hover {
            box-shadow: 0 10px 10px ${theme.color.light};
            transform: translateY(-10px);
          }
        }
      `;
    }}
  }
`;

StyledProject.displayName = "StyledProject";

export default StyledProject;
