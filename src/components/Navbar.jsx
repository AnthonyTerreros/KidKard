import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-grow">
      <ul className="flex flex-grow justify-end flex-wrap items-center">
        <li>
          <Link className="btn-sm text-gray-900 ml-3">
            <span>Acerca del Producto</span>
          </Link>
        </li>
        <li>
          <Link className="btn-sm text-gray-900 ml-3">
            <span>Beneficios</span>
          </Link>
        </li>
        <li>
          <Link className="btn-sm text-gray-900 ml-3">
            <span>Deja tu Opinion</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
