import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const UserCarIcons = ({ onIconClick, className = "" }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <Link to="/usuario" className="hover:text-blue-600" onClick={onIconClick}>
        <FaUser />
      </Link>
      <Link to="/carrito" className="hover:text-blue-600" onClick={onIconClick}>
        <FaCartShopping />
      </Link>
    </div>
  );
};
