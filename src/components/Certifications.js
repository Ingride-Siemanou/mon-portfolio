import React from "react";

import webLogo from "../images/web.jpg";
import sqlIntroLogo from "../images/sql-intro.jpg";
import sqlInterLogo from "../images/sql-inter.jpg";

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">

      <h2>Quelques certifications</h2>

      <p className="cert-text">
        Je suis passionnée par ma formation métier et je m'efforce constamment d'approfondir mes connaissances. Ces certifications sont le reflet de mon parcours d'apprentissage et de mon désir de me perfectionner.
      </p>

      <div className="cert-container">

        <div className="cert-card">
          <img src={webLogo} alt="Développement Web" />
          <h3>Développement Web</h3>
          <p>HTML, CSS, JavaScript</p>
        </div>

        <div className="cert-card">
          <img src={sqlIntroLogo} alt="SQL Introduction" />
          <h3>Introduction SQL</h3>
          <p>Les bases des bases de données</p>
        </div>

        <div className="cert-card">
          <img src={sqlInterLogo} alt="SQL Intermédiaire" />
          <h3>SQL Intermédiaire</h3>
          <p>Requêtes avancées et optimisation</p>
        </div>

      </div>

    </section>
  );
}

export default Certifications;