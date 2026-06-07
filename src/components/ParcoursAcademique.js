import React from "react";

// Logos académiques (formats différents)
import ispLogo from "../images/isp.webp";
import csbLogo from "../images/csb.jpg";
import nwsLogo from "../images/nws.png";

function ParcoursAcademique() {
  return (
    <section className="academique-section" id="academique">

      <h2>Parcours académique</h2>

      <p className="academique-text">
        Voici les établissements où j’ai construit mes bases académiques avant mon parcours dans le digital.
      </p>

      <div className="academique-container">

        {/* ISP */}
        <div className="acad-card">
          <img src={ispLogo} alt="ISP" />
          
        </div>

        {/* CSB */}
        <div className="acad-card">
          <img src={csbLogo} alt="CSB" />
        </div>

        {/* NWS */}
        <div className="acad-card">
          <img src={nwsLogo} alt="NWS" />
        </div>

      </div>
    </section>
  );
}

export default ParcoursAcademique;