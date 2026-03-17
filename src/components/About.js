import React from "react";
import aboutPhoto from "../images/about.jpeg"; // ta photo

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Photo à gauche */}
        <div className="about-left">
          <img src={aboutPhoto} alt="Ingride" />
        </div>

        {/* Texte à droite */}
        <div className="about-right">
          <h2>À propos de moi</h2>

          <p>
            Je suis Ingride, étudiante en développement web à la Normandie Web School.
            Passionnée par la création de sites et d'applications web, je développe
            des projets qui allient design, performance et expérience utilisateur.
          </p>

          <p>
            Mon objectif est de devenir cheffe de projet digital et de participer
            à la création de solutions numériques innovantes.
          </p>

          <button className="cv-btn">Télécharger mon CV</button>
        </div>

      </div>
    </section>
  );
}

export default About;