import React, { FC, ReactNode } from "react";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";

export interface LightboxProps {
  children: ReactNode[];
}

const Lightbox: FC<LightboxProps> = ({ children }) => (
  <Modal>
    <Slider>{children}</Slider>
  </Modal>
);

export default Lightbox;
