import React, { FC } from "react";
import { SplitColorChannelText } from "react-text-fun";

export interface BlotterProps {
  text: string;
  id?: string;
  appendTo?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  fill?: string;
  fontStyle?: string;
  lineHeight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  rotation?: number;
  rgbOffset?: number;
  addBlur?: boolean;
  addNoise?: boolean;
  style?: { [key: string]: string };
}

const Blotter: FC<BlotterProps> = (props) => {
  return (
    <SplitColorChannelText
      fontSize={120}
      rotation={45}
      rgbOffset={0.1}
      addBlur={true}
      addNoise={true}
      fontFamily="'EB Garamond', serif"
      {...props}
    />
  );
};

export default Blotter;
