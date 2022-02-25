import React, { FC } from "react";
import Title from "../Title/Title";
import Arrow from "../Arrow/Arrow";
import StyledCoverSection from "./CoverSection.style";

export interface CoverSectionProps {}

const CoverSection: FC<CoverSectionProps> = () => {
  return (
    <StyledCoverSection as="section">
      <div>
        <Title level={1} size={1} color="#fff">
          Joyce Chen
        </Title>
        <p>Front-end Developer</p>
      </div>
      <div>
        <Arrow direction="bottom" />
      </div>
    </StyledCoverSection>
  );
};

export default CoverSection;
