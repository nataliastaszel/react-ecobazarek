import { LiHTMLAttributes } from "react";
import { NavLink, To } from "react-router-dom";

interface LinkToPageProps extends LiHTMLAttributes<HTMLLIElement> {
  to: To;
}

const NavLinkToPage = (props: LinkToPageProps) => {
  const { children, to, ...other } = props;
  return (
    <li className="px-4 list-none" {...other}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavLinkToPage;
