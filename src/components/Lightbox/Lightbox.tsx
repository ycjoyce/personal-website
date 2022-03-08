import React, { FC, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ThumbnailSliderProps } from "../ThumbnailSlider/ThumbnailSlider";
import StyledModal, {
  StyledModalBackground,
  StyledModalContent,
  StyledCloseButton,
} from "./Lightbox.style";
import ThumbnailSlider from "../ThumbnailSlider/ThumbnailSlider";

export interface LightboxProps extends ThumbnailSliderProps {
  root?: string;
  onClose?: () => void;
}

const Lightbox: FC<LightboxProps> = ({ root, onClose = () => {}, items }) => {
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
        <StyledCloseButton onClick={onClose}>
          <i className="fa fa-times"></i>
        </StyledCloseButton>
        <ThumbnailSlider items={items} />
      </StyledModalContent>
    </StyledModal>
  );

  if (root) {
    return createPortal(modalComponent, el.current);
  }

  return modalComponent;
};

export default Lightbox;
