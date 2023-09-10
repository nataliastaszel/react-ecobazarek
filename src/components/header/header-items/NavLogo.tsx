import logoIcon from "../../../assets/logo.png";

const NavLogo = () => {
  return (
    <div className="nav-element sm:mr-auto">
      <img
        src={logoIcon}
        alt="logo"
        className="h-[42px] mt-1 sm:mt-0 sm:my-2"
      />
      <p className="text-white text-sm sm:text-left mt-4 sm:mt-0">EcoBazarek</p>
    </div>
  );
};

export default NavLogo;
