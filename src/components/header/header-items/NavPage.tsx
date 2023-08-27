import { LiHTMLAttributes } from "react";
import { NavLink, To } from "react-router-dom";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  to: To;
}

const NavPage: React.FunctionComponent<Props> = ({children, to, ...other}) => {
  return (
    <li className="px-4" {...other}>
      <NavLink className="text-white text-sm hover:text-[#FCFE7F]" to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavPage;
