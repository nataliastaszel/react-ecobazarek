import logoIcon from "../../../assets/logo.png";

const NavLogo = () => {
  return (
    <div className="nav-element mr-auto">
      <img src={logoIcon} alt="logo" className="h-[42px] my-2" />
      <p className="text-white text-sm text-left">EcoBazarek</p>
    </div>
  );
};

export default NavLogo;
