import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
import { UserCartIcons } from "./UserCarIcons";
import { NavLinksMobile } from "./NavLinksMobile";

const NavBar = () => {
  // Estado para manejar el sidebar en movil
  const [isOpen, setIsOpen] = useState(false);

  // Referencia al aside para detectar click fuera
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el sidebar si se hace click fuera
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // useEffect para agregar y limpiar el evento click
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpieza del evento al desmontar el componente o cambiar isOpen
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-white/65 p-2 text-black flex items-center justify-between border-b border-black relative">
        {/* Logo */}
        <div className="flex-shrink-0 ml-2">
          <Link to="/">
            <img src={logo} alt="Logo de la marca" className="h-14 w-auto" />
          </Link>
        </div>
        {/* Logo */}

        {/* Menú de navegación ( Visible en escritorio ) */}
        <NavLinks />
        {/* Menú de navegación ( Visible en escritorio ) */}

        {/* Barra de búsqueda ( Visible siempre, ajustada en movil ) */}
        <SearchBar className="hidden md:flex items-center space-x-2" />
        {/* Barra de búsqueda */}

        {/* Iconos de usuario y carrito ( Visible en escritorio ) */}
        <div className="hidden md:flex items-center space-x-4 mr-2">
          <UserCartIcons />
        </div>
        {/* Iconos de usuario y carrito */}

        {/* Botón hamburguesa ( Visible en movil ) */}
        <button
          className={`md:hidden text-2xl cursor-pointer transition-transform duration-300 ease-in-out absolute right-3 ${
            isOpen ? "scale-0" : "scale-100"
          }`}
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Botón hamburguesa ( Visible en movil ) */}
      </nav>

      {/* Sidebar (visible en móviles cuando isOpen es true) */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white/95 border-l border-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 md:hidden`}
      >
        <div className="p-4 bg-amber-400 h-full flex flex-col relative">
          {/* Botón para cerrar */}
          <button
            className="text-2xl mb-4 absolute right-2 cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          {/* Botón para cerrar */}

          {/* Menú de navegación */}
          <NavLinksMobile onLinkClick={toggleSidebar} />
          {/* Menú de navegación */}

          {/* Iconos de usuario y carrito */}
          <UserCartIcons onIconClick={toggleSidebar} className="mt-6" />
          {/* Iconos de usuario y carrito */}
        </div>
      </aside>
      {/* Sidebar (visible en móviles cuando isOpen es true) */}

      {/* Barra de búsqueda en móviles ( debajo del navbar ) */}
      <SearchBar className="md:hidden p-2 bg-white/65 border-b border-black fixed w-full top-16 z-10" />
      {/* Barra de búsqueda en móviles ( debajo del navbar ) */}
    </>
  );
};

export default NavBar;
