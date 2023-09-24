import {
  UserIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import NavLinkToPage from "./NavLinkToPage";

const NavCallToActionButtons = () => {
  return (
    <div className="nav-element sm:ml-auto my-3 sm:my-0">
      <MagnifyingGlassIcon className="nav-icon" />
      <SparklesIcon className="nav-icon" />
      <NavLinkToPage to={"/profile"}>
        <UserIcon className="nav-icon ml-0 mr-3" />
      </NavLinkToPage>
    </div>
  );
};

export default NavCallToActionButtons;
