import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useRef, useState,useEffect } from "react";

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
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/zapatillas"
              className="hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Zapatillas
            </Link>
          </li>
          <li>
            <Link
              to="/remeras"
              className="hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Remeras
            </Link>
          </li>
          <li>
            <Link
              to="/pantalones"
              className="hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Pantalones
            </Link>
          </li>
        </ul>
        {/* Menú de navegación ( Visible en escritorio ) */}

        {/* Barra de búsqueda ( Visible siempre, ajustada en movil ) */}
        <div className="hidden md:flex items-center space-x-2">
          <form action="/search" method="get" className="flex">
            <input
              type="search"
              name="q"
              placeholder="Buscar productos"
              className="p-2 rounded-l text-black"
            />
            <button
              type="submit"
              className="bg-gray-600 p-2 rounded-r hover:bg-gray-500"
            >
              🔍
            </button>
          </form>
        </div>
        {/* Barra de búsqueda */}

        {/* Iconos de usuario y carrito ( Visible en escritorio ) */}
        <div className="hidden md:flex items-center space-x-4 mr-2">
          <Link to="/usuario" className="hover:text-blue-600">
            <FaUser />
          </Link>
          <Link to="/carrito" className="hover:text-blue-600">
            <FaCartShopping />
          </Link>
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
        <div className="p-4 bg-amber-400 relative">
          {/* Botón para cerrar */}
          <button
            className="text-2xl mb-4 absolute right-2 cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          {/* Botón para cerrar */}

          {/* Menú de navegación */}
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-all duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/zapatillas"
                className="hover:text-blue-600 transition-all duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Zapatillas
              </Link>
            </li>
            <li>
              <Link
                to="/remeras"
                className="hover:text-blue-600 transition-all duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Remeras
              </Link>
            </li>
            <li>
              <Link
                to="/pantalones"
                className="hover:text-blue-600 transition-all duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Pantalones
              </Link>
            </li>
          </ul>
          {/* Menú de navegación */}

          {/* Iconos de usuario y carrito */}
          <div className="flex space-x-4 mt-6">
            <Link
              to="/usuario"
              className="hover:text-blue-600"
              onClick={toggleSidebar}
            >
              <FaUser />
            </Link>

            <Link
              to="/carrito"
              className="hover:text-blue-600"
              onClick={toggleSidebar}
            >
              <FaCartShopping />
            </Link>
          </div>
          {/* Iconos de usuario y carrito */}
        </div>
      </aside>
      {/* Sidebar (visible en móviles cuando isOpen es true) */}

      {/* Barra de búsqueda en móviles ( debajo del navbar ) */}
      <div className="md:hidden p-2 bg-white/65 border-b border-black fixed w-full top-16 z-10">
        <form action="/search" method="get" className="flex">
          <input
            type="search"
            name="q"
            placeholder="Buscar productos"
            className="p-2 rounded-l text-black w-full"
          />
          <button
            type="submit"
            className="bg-gray-600 p-2 rounded-r hover:bg-gray-500"
          >
            🔍
          </button>
        </form>
      </div>
      {/* Barra de búsqueda en móviles ( debajo del navbar ) */}
    </>
  );
};

export default NavBar;
