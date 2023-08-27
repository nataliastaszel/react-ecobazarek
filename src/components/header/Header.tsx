import React from "react";
import NavLogo from "./header-items/NavLogo";
import NavItem from "./header-items/NavPagesLinks";
import NavIcons from "./header-items/NavIcons";
import "./header.css";

export const Header: React.FunctionComponent = () => {
  return (
    <header className="h-[64px] bg-[#46AA42]">
      <ul className="flex flex-row">
        <NavLogo />
        <NavItem />
        <NavIcons />
      </ul>
    </header>
  );
};


