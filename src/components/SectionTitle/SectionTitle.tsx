import React, { FC } from "react";
import Title, { TitleProps } from "../Title/Title";

export interface SectionTitleProps {
  children: TitleProps["children"];
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
  <Title
    level={2}
    primary
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    variants={{
      offscreen: { x: "-50px" },
      onscreen: {
        x: "0px",
        transition: {
          duration: 0.8,
        },
      },
    }}
  >
    {children}
  </Title>
);

export default SectionTitle;
