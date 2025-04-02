import { Link } from "react-router-dom";
import { navRoutes } from "../../routes/routes";

export const NavLinksMobile = ({ onLinkClick }) => {
  return (
    <ul className="space-y-4">
      {navRoutes.map((route) => (
        <li key={route.path}>
          <Link
            to={route.path}
            className="hover:text-blue-600 transition-all duration-300 ease-in-out"
            onClick={onLinkClick}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
