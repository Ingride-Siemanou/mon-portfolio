import React from "react";
import logoIs from "../images/logo_is.png";

function Navbar() {
  return (
    <nav className="navbar">

      <img src={logoIs} alt="Logo IS" className="navbar-logo" />

      <ul className="nav-links">
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#parcours">Parcours</a></li>
      </ul>

      <button className="contact-btn">Contact</button>

    </nav>
  );
}

export default Navbar;