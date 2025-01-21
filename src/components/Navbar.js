import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
           {" "}
      <Link to="/" className="navbar__link">
                Inicio      {" "}
      </Link>
           {" "}
      <Link to="/cart" className="navbar__link">
                Carrito      {" "}
      </Link>
           {" "}
      <Link to="/orders" className="navbar__link">
        Pedidos
      </Link>
           {" "}
      <Link to="/returns" className="navbar__link">
                Devoluciones      {" "}
      </Link>
         {" "}
    </nav>
  );
}

export default Navbar;
