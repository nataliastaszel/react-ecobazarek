import NavLogo from "./header-items/NavLogo";
import NavPagesLinks from "./header-items/NavPagesLinks";
import NavCallToActionButtons from "./header-items/NavCallToActionButtons";
import "./header.css";

export const Header = () => {
  return (
    <header className="sticky top-0 w-screen bg-green shadow-3xl flex flex-col sm:flex-row z-20">
      <NavLogo />
      <NavPagesLinks />
      <NavCallToActionButtons />
    </header>
  );
};
