import NavLinkToPage from "./NavLinkToPage";

const NavPagesLinks = () => {
  return (
    <div className="nav-element">
      <NavLinkToPage to="/">Home</NavLinkToPage>
      <NavLinkToPage to="/about-us">O nas</NavLinkToPage>
      <NavLinkToPage to="/products">Produkty</NavLinkToPage>
      <NavLinkToPage to="/contact">Kontakt</NavLinkToPage>
    </div>
  );
};

export default NavPagesLinks;
