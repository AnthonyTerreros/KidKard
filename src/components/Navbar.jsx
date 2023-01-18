import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-grow">
      <ul className="flex flex-grow justify-end flex-wrap items-center">
        <li>
          <Link
            to="/acerca-del-producto"
            className="font-medium text-gray-600  px-5 py-3 flex items-center transition duration-150 ease-in-out"
          >
            <span>Acerca del Producto</span>
          </Link>
        </li>
        <li>
          <Link
            to="/beneficios"
            className="btn-sm text-black bg-lime-600 hover:text-white ml-3"
          >
            <span>Beneficios</span>
          </Link>
        </li>
        <li>
          <Link
            to="enviar-opinion"
            className="btn-sm text-black bg-lime-600 hover:text-white ml-3"
          >
            <span>Deja tu Opinion</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
