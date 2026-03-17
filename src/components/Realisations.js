import React, { useState } from "react";
import { FaCheckCircle, FaThumbsUp, FaRegSmile } from "react-icons/fa"; 
import portfolioReact from "../images/portfolio-react.png";
import ecommerceWP from "../images/ecommerce-wp.png";
import auditComm from "../images/audit-communication.png";
import graphisme from "../images/graphisme.png";

const projectsData = [
  {
    id: 1,
    title: "Portfolio React",
    category: "Développement web",
    image: portfolioReact,
    description: "Portfolio réalisé avec React pour présenter mes compétences.",
  },
  {
    id: 2,
    title: "Site e-commerce WordPress",
    category: "Développement web",
    image: ecommerceWP,
    description: "Site e-commerce réalisé sur WordPress avec Elementor.",
  },
  {
    id: 3,
    title: "Audit et stratégie de communication",
    category: "Stratégie & Communication",
    image: auditComm,
    description: "Analyse et recommandations pour améliorer la communication.",
  },
  {
    id: 4,
    title: "Affiches, logos et charte graphique",
    category: "Graphisme",
    image: graphisme,
    description: "Création de supports visuels et identité graphique.",
  },
];

const categories = ["Tous les projets", "Développement web", "Stratégie & Communication", "Graphisme"];

function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");

  const filteredProjects =
    selectedCategory === "Tous les projets"
      ? projectsData
      : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section className="realisations-section" id="realisations">
      <div className="realisations-intro">
        <h2>Mes Réalisations</h2>
        <p>
          En tant qu’étudiante et future cheffe de projet digital, j’ai eu l’opportunité
          de réaliser plusieurs projets à l’école et en auto-projets. Voici un aperçu de mon travail
          et de mes résultats.
        </p>
      </div>

      {/* Stats avec icônes */}
      <div className="realisations-stats">
        <div className="stat-block">
          <FaCheckCircle size={40} color="#e67e22" />
          <h3>4</h3>
          <p>Projets terminés</p>
        </div>
        <div className="stat-block">
          <FaThumbsUp size={40} color="#e67e22" />
          <h3>Plusieurs</h3>
          <p>Retours positifs</p>
        </div>
        <div className="stat-block">
          <FaRegSmile size={40} color="#e67e22" />
          <h3>++++</h3>
          <p>Encouragements reçus</p>
        </div>
      </div>

      {/* Boutons filtres */}
      <div className="projects-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projets filtrés */}
      <div className="projects-container">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Realisations;