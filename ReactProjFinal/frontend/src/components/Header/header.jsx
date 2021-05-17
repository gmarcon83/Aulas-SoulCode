import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark py-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            CRUD
          </Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-3">
            <li className="nav-item">
              <Link to="/usuarios" className="nav-link">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/clientes" className="nav-link">
                Clientes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default header;
