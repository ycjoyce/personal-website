import React, { forwardRef } from "react";
import theme from "../../styles/abstracts/theme";
import Button from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";
import StyledHeader, { StyledOperateBox } from "./Header.style";
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

    return (
      <StyledHeader ref={ref} hide={hide}>
        <Blotter text="Jc" fontSize={40}></Blotter>

        <StyledOperateBox>
          <Menu items={menu} opened={menuOpened} />

          <Button
            outline
            size="sm"
            color={theme.color.primary}
            onClick={handleContact}
          >
            Contact Me
          </Button>

          <Hamburger
            opened={menuOpened}
            color={menuOpened ? "#fff" : theme.color.emphasize}
            onClick={onHamburgerClick}
          />
        </StyledOperateBox>
      </StyledHeader>
    );
  }
);

export default Header;
