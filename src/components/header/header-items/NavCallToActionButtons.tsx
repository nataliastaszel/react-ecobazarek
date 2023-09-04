import {
  UserIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const NavCallToActionButtons = () => {
  return (
    <div className="nav-element sm:ml-auto my-3 sm:my-0">
      <MagnifyingGlassIcon className="nav-icon" />
      <SparklesIcon className="nav-icon" />
      <UserIcon className="nav-icon" />
    </div>
  );
};

export default NavCallToActionButtons;
