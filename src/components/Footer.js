import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <h2>Echangeons Ensemble !</h2>

      <p className="footer-text">
        Je suis ouverte aux discussions et aux collaborations,
        n'hésitez pas à me contacter via mes différents profils en ligne.
      </p>

      <div className="footer-icons">
        <a href="mailto:ingridsiemanou@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/christiane-ingride-djamou-siemanou-885939393/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Ingride-Siemanou"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="tel:+33607322607">
          <FaPhone />
        </a>
      </div>

      <p className="footer-copy">
        © 2026 — Portfolio d’Ingride
      </p>
    </footer>
  );
}

export default Footer;