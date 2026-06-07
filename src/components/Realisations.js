import React, { useState } from "react";
import { FaCheckCircle, FaThumbsUp, FaRegSmile } from "react-icons/fa";

import portfolioReact from "../images/portfolio-react.png";
import ecommerceWP from "../images/ecommerce-wp.png";
import auditComm from "../images/audit-communication.png";
import graphisme from "../images/graphisme.png";

import styleWoof from "../images/stylewoof.png";
import mimimosaImg from "../images/mimimosa.png";
import rebeccaImg from "../images/rebecca.png";
import nutritionImg from "../images/nutrition.png";

const projectsData = [
  {
    id: 1,
    title: "Portfolio react (Projet en cours)",
    category: "Développement web",
    image: portfolioReact,
    description:
      "Portfolio réalisé avec react pour présenter mes compétences.",
    link: "/pdf/portfolio.pdf",
  },

  {
    id: 2,
    title: "Site e-commerce WordPress",
    category: "Développement web",
    image: ecommerceWP,
    description:
      "Site e-commerce réalisé sur WordPress avec Elementor.",
    link: "/pdf/ecommerce.pdf",
  },

  {
    id: 3,
    title: "Audit et stratégie de communication",
    category: "Stratégie & Communication",
    image: auditComm,
    description:
      "Analyse et recommandations pour améliorer la communication.",
    link: "/pdf/audit.pdf",
  },

  {
    id: 4,
    title: "Affiches, logos et charte graphique",
    category: "Graphisme",
    image: graphisme,
    description:
      "Création de supports visuels et identité graphique.",
    link: "/pdf/graphisme.pdf",
  },

  {
    id: 5,
    title: "Stratégie Style de Woof",
    category: "Stratégie & Communication",
    image: styleWoof,
    description:
      "Création d’une stratégie digitale et de communication.",
    link: "/pdf/stylewoof.pdf",
  },

  {
    id: 6,
    title: "Stratégie Mimimosa",
    category: "Stratégie & Communication",
    image: mimimosaImg,
    description:
      "Analyse et élaboration d’une stratégie digitale pour Mimimosa.",
    link: "/pdf/mimimosa.pdf",
  },

  {
    id: 7,
    title: "Analyse UX/UI - Rebecca Les Jolies Fleurs ",
    category: "Stratégie & Communication",
    image: rebeccaImg,
    description:
      "Analyse UX/UI et recommandations pour le site.",
    link: "/pdf/rebecca.pdf",
  },

  {
    id: 8,
    title: "Maquette Nutrition Sportive",
    category: "Graphisme",
    image: nutritionImg,
    description:
      "Création d’une maquette UX/UI pour une plateforme de nutrition sportive.",
    link: "https://www.figma.com/proto/q9u8XmFRdmp8Y40ODmOyoP/Sans-titre?node-id=21-2&p=f&t=Gx3TxS0OIFUbRXqJ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A2",
  },

  {
    id: 9,
    title: "Refonte site Wix - Rebecca les jolies fleurs ",
    category: "Développement web",
    image: rebeccaImg,
    description:
      "Refonte et amélioration UX/UI du site vitrine réalisé sur Wix pour une boutique de fleurs.",
    link: "https://rebeccajoliesfleurs.wixsite.com/website-1",
  },
];

const categories = [
  "Tous les projets",
  "Développement web",
  "Stratégie & Communication",
  "Graphisme",
];

function Realisations() {
  const [selectedCategory, setSelectedCategory] =
    useState("Tous les projets");

  const filteredProjects =
    selectedCategory === "Tous les projets"
      ? projectsData
      : projectsData.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <section className="realisations-section" id="realisations">

      {/* INTRO */}
      <div className="realisations-intro">
        <h2>Mes réalisations</h2>

        <p>
          En tant qu’étudiante et future cheffe de projet digital, j’ai eu
          l’opportunité de réaliser plusieurs projets à l’école et en auto-projets.
          Voici un aperçu de mon travail et de mes résultats.
        </p>
      </div>

      {/* STATS */}
      <div className="realisations-stats">

        <div className="stat-block">
          <FaCheckCircle size={40} color="#e67e22" />
          <h3>9</h3>
          <p>Projets terminés</p>
        </div>

        <div className="stat-block">
          <FaThumbsUp size={40} color="#e67e22" />
          <h3>+++</h3>
          <p>Retours positifs</p>
        </div>

        <div className="stat-block">
          <FaRegSmile size={40} color="#e67e22" />
          <h3>+++</h3>
          <p>Encouragements</p>
        </div>

      </div>

      {/* FILTRES */}
      <div className="projects-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJETS */}
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            key={project.id}
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}

export default Realisations;