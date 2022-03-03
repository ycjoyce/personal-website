import React, { FC } from "react";

export interface MenuProps {
  items: { title: string; onClick(): void }[];
}

const Menu: FC<MenuProps> = ({ items }) => {
  const renderItems = (items: MenuProps["items"]) => {
    return items.map(({ title, onClick }) => (
      <li key={title} onClick={onClick}>
        {title}
      </li>
    ));
  };

  return (
    <div>
      <ul>{renderItems(items)}</ul>
    </div>
  );
};

export default Menu;
