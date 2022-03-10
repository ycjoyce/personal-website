import { colord } from "colord";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { breakpointDown } from "../../styles/abstracts/mixins";
import StyledTitle from "../Title/Title.style";

const markerWidth = 15;
const lineGap = 10;
const mobileTimeWidth = 50;
const markerMargin = 20;

export const StyledMarker = styled.div`
  width: ${markerWidth}px;
  height: ${markerWidth}px;
  border-radius: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.primary};
  transition: background-color 0.3s;
  flex-shrink: 0;
  margin: 0 ${markerMargin}px;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    opacity: 0;
    border-radius: 100%;
    border: 2px solid
      ${({ theme }) => colord(theme.color.primary).alpha(0.5).toRgbString()};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s, width 0.5s, height 0.5s;
  }
`;

export const StyledBox = styled.div`
  flex: 1;
`;

export const StyledTime = styled(StyledBox)`
  text-align: right;

  ${({ theme }) => {
    return css`
      ${breakpointDown(theme.breakpoints.sm)} {
        text-align: left;
        flex: 0 0 ${mobileTimeWidth}px;
      }
    `;
  }}
`;

export const StyledIntro = styled(StyledBox)`
  margin: 0 0 30px 0;
  text-align: justify;
  color: ${({ theme }) => theme.color.secondary};

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  & ${StyledTitle} {
    /* background-color: ${({ theme }) => theme.color.emphasize};
    padding: 5px; */
  }
`;

export const StyledList = styled.ul`
  padding: 0;

  & li {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 5px;
    }

    &::before {
      content: "";
      width: 5px;
      height: 5px;
      background-color: ${({ theme }) => theme.color.emphasize};
      display: inline-block;
      margin-right: 10px;
      position: relative;
      top: calc(0.5rem - 2.5px);
      flex-shrink: 0;
      border-radius: 100%;
    }
  }
`;

const StyledTimelineItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 3px;
    height: calc(100% - ${markerWidth + lineGap}px);
    position: absolute;
    background-color: #ccc;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${lineGap / 2}px;
  }

  ${({ theme }) => {
    return css`
      &::after {
        ${breakpointDown(theme.breakpoints.sm)} {
          left: ${mobileTimeWidth + markerMargin + markerWidth / 2}px;
        }
      }
    `;
  }}

  &:hover {
    & ${StyledMarker} {
      background-color: ${({ theme }) => theme.color.primary};

      &::after {
        width: ${markerWidth + 5}px;
        height: ${markerWidth + 5}px;
        opacity: 1;
      }
    }
  }
`;

export default StyledTimelineItem;
