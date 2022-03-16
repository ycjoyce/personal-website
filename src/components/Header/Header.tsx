import React, { forwardRef, useMemo } from "react";
import theme from "../../styles/abstracts/theme";
import Button from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";
import StyledHeader, {
  StyledOperateBox,
  StyledHeaderBox,
} from "./Header.style";
import Blotter from "../Blotter/Blotter";
import Menu, { MenuItem } from "../Menu/Menu";

export interface HeaderProps {
  hide?: boolean;
  menu: MenuItem[];
  menuOpened?: boolean;
  onHamburgerClick?: () => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    { hide = false, menu, menuOpened = false, onHamburgerClick = () => {} },
    ref
  ) => {
    const handleContact = () => {
      const recipient = "yeechiajoyce@gmail.com";
      window.location.href = `mailto:${recipient}`;
    };

    const getAnimate = (delay: number) => {
      return {
        animate: {
          opacity: [0, 1],
          y: [-10, 0],
        },
        transition: {
          duration: 0.3,
          delay,
        },
      };
    };

    const buttonAnimate = useMemo(() => getAnimate(0.8), []);

    const hamburgerAnimate = useMemo(() => getAnimate(1), []);

    const Icon = useMemo(() => <Blotter text="Jc" fontSize={40}></Blotter>, []);

    return (
      <StyledHeaderBox hide={hide} opened={menuOpened}>
        <StyledHeader ref={ref}>
          {Icon}

          <StyledOperateBox>
            <Button
              outline
              size="sm"
              color={theme.color.primary}
              onClick={handleContact}
              {...buttonAnimate}
            >
              Contact Me
            </Button>
          </StyledOperateBox>
        </StyledHeader>

        <Hamburger
          opened={menuOpened}
          color={menuOpened ? "#fff" : theme.color.emphasize}
          onClick={onHamburgerClick}
          {...hamburgerAnimate}
        />

        <Menu items={menu} opened={menuOpened} />
      </StyledHeaderBox>
    );
  }
);

export default Header;
