import React, { FC, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ThumbnailSliderProps } from "../ThumbnailSlider/ThumbnailSlider";
import StyledModal, {
  StyledModalContent,
  StyledModalBackground,
} from "./LightBox.style";
import ThumbnailSlider from "../ThumbnailSlider/ThumbnailSlider";

export interface LightBoxProps extends ThumbnailSliderProps {
  root?: string;
  onClose?: () => void;
}

const LightBox: FC<LightBoxProps> = ({ root, onClose = () => {}, items }) => {
  const modalRoot = useRef(document.getElementById(root || "modal-root"));
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const rootElement = modalRoot.current;

    if (!rootElement) {
      return;
    }

    const element = el.current;
    rootElement.appendChild(element);

    return () => {
      rootElement?.removeChild(element);
    };
  }, []);

  const handleClickOutside = () => {
    onClose();
  };

  const modalComponent = (
    <StyledModal>
      <StyledModalBackground onClick={handleClickOutside} />
      <StyledModalContent>
        <ThumbnailSlider items={items} />
      </StyledModalContent>
    </StyledModal>
  );

  if (root) {
    return createPortal(modalComponent, el.current);
  }

  return modalComponent;
};

export default LightBox;
