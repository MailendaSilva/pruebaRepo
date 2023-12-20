import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" style={{ backgroundColor: 'black', color: 'white'  }}>
    <div className="container">
      <a className="navbar-brand" href="/">HAMBURGUESERIA</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">INICIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">MENU</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">QUIENES SOMOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">CONTACTO</a>
          </li>
          <li className="nav-item">
              <div className="nav-link active cart-container">
                <CartWidget />
              </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
}

export default NavBar;