import React, { FC } from "react";
import Arrow from "../Arrow/Arrow";
import StyledMenu, { StyledMenuList, StyledMenuItem } from "./Menu.style";

export interface MenuItem {
  title: string;
  onClick(title: string): void;
}

export interface MenuProps {
  opened?: boolean;
  items: MenuItem[];
}

const Menu: FC<MenuProps> = ({ opened = false, items }) => {
  const renderItems = (items: MenuProps["items"]) => {
    return items.map(({ title, onClick }) => (
      <StyledMenuItem key={title} onClick={() => onClick(title)}>
        {title}
        <Arrow direction="right" color="#fff" length={"50px"} />
      </StyledMenuItem>
    ));
  };

  return (
    <StyledMenu opened={opened}>
      <StyledMenuList>{renderItems(items)}</StyledMenuList>
    </StyledMenu>
  );
};

export default Menu;
