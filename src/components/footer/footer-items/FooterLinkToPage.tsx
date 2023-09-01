import { LiHTMLAttributes } from "react";
import { Link, To } from "react-router-dom";

interface LinkToPageProps extends LiHTMLAttributes<HTMLLIElement> {
  to: To;
}

const FooterLinkToPage = (props: LinkToPageProps) => {
  const { children, to, ...other } = props;
  return (
    <li className="px-4 list-none" {...other}>
      <Link className="text-white text-sm" to={to}>
        {children}
      </Link>
    </li>
  );
};

export default FooterLinkToPage;
