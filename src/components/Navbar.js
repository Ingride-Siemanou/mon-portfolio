import React, { useState } from "react";
import logoIs from "../images/logo_is.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <a href="#hero" className="logo">
        <img src={logoIs} alt="Logo" className="navbar-logo" />
      </a>

      {/* DESKTOP MENU */}
      <ul className="nav-links">
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#realisations">Mes réalisations</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#parcours">Parcours</a></li>
        <li><a href="#contact" className="contact-btn">Contact</a></li>
      </ul>

      {/* BURGER (MOBILE) */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#hero" onClick={closeMenu}>Accueil</a>
          <a href="#about" onClick={closeMenu}>À propos</a>
          <a href="#realisations" onClick={closeMenu}>Mes réalisations</a>
          <a href="#technologies" onClick={closeMenu}>Technologies</a>
          <a href="#parcours" onClick={closeMenu}>Parcours</a>

          <a href="#contact" onClick={closeMenu}>
            <button className="contact-btn">Contact</button>
          </a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;