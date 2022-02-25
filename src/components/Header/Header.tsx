import React, { FC } from "react";
import Button from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";
import StyledHeader from "./Header.style";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <StyledHeader>
    <div>logo</div>

    <div>
      <Button>resume</Button>
      <Hamburger />
    </div>
  </StyledHeader>
);

export default Header;
