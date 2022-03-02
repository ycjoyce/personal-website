import React, { FC } from "react";
import theme from "../../styles/abstracts/theme";
import Button from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";
import StyledHeader, { StyledOperateBox } from "./Header.style";
import Blotter from "../Blotter/Blotter";

export interface HeaderProps {
  menuOpened?: boolean;
  onHamburgerClick?: () => void;
}

const Header: FC<HeaderProps> = ({
  menuOpened = false,
  onHamburgerClick = () => {},
}) => {
  return (
    <StyledHeader>
      <Blotter text="Jc" fontSize={40}></Blotter>

      <StyledOperateBox>
        {/* <Button outline size="sm">
          resume
        </Button> */}
        <Hamburger
          opened={menuOpened}
          color={theme.color.emphasize}
          onClick={onHamburgerClick}
        />
      </StyledOperateBox>
    </StyledHeader>
  );
};

export default Header;
