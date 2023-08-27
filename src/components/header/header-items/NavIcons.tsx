import {
  MagnifyingGlassIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const NavIcons: React.FunctionComponent = () => {
  return (
    <div className="nav-element ml-auto">
      <MagnifyingGlassIcon className="nav-icon" />
      <SparklesIcon className="nav-icon" />
      <UserIcon className="nav-icon" />
    </div>
  );
};

export default NavIcons;
