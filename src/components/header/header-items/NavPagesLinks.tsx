import React from "react";
import NavPage from "./NavPage";

const NavPagesLinks: React.FunctionComponent = () => {
  return (
    <div className="nav-element">
      <NavPage to="/">Home</NavPage>
      <NavPage to="/about-us">O nas</NavPage>
      <NavPage to="/products">Produkty</NavPage>
      <NavPage to="/contact">Kontakt</NavPage>
    </div>
  );
};

export default NavPagesLinks;