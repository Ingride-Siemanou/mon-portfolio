import React from "react";
import ingridePhoto from "../images/ingride.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Ingride</h1>
        <h2>
          Développeuse web, étudiante et future chef de projet à la Normandie Web School
        </h2>
        <button className="engage-btn">Engagez-moi</button>
      </div>
      <div className="hero-right">
        <img 
          src={ingridePhoto} 
          alt="Ingride" 
          className="hero-photo" 
        />
      </div>
    </section>
  );
}

export default Hero;