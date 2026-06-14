import React from "react";

import rljfLogo from "../images/rljf.jpeg";
import sicLogo from "../images/sic.png";
import nwsLogo from "../images/nws.png";

function Parcours() {
  return (
    <section className="parcours-section" id="parcours">
      <div className="parcours-header">
        <h2>Mon parcours professionnel</h2>

        <p>
          Mon parcours professionnel reflète mon engagement pour l’innovation,
          la créativité et le développement digital. Chaque étape m’a permis
          d’acquérir de nouvelles compétences et de renforcer ma capacité à
          gérer des projets variés dans le domaine du web et de la communication.
        </p>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <span className="timeline-date">Avril 2026 – Juin 2026</span>

          <div className="timeline-content">
            <div className="company">
              <img src={rljfLogo} alt="RLJF" className="company-logo" />

              <h3>
                STAGE – REFONTE DE SITE WEB (WIX)
                <br />
                Rebecca Les Jolies Fleurs
              </h3>
            </div>

            <p className="context">
              Future cheffe de projet digital, je combine développement web,
              design et gestion de projets pour créer des expériences numériques
              utiles et modernes.
            </p>

            <ul>
              <li>Réalisation de la refonte d’un site web via Wix</li>
              <li>Mise à jour du design et de l’ergonomie du site</li>
              <li>
                Mise en place d’une boutique en ligne
                (gestion des produits, visuels, prix)
              </li>
              <li>
                Conception de l’interface utilisateur
                (cartes, boutons, navigation)
              </li>
              <li>
                Intégration de fonctionnalités :
                formulaire de devis, avis clients, barre de recherche
              </li>
              <li>
                Amélioration du parcours utilisateur et
                de l’expérience client
              </li>
            </ul>

            <p className="tools">
              <strong>Outils :</strong> Wix, Figma, Google Analytics, SEO
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-date">2025 – 2026</span>

          <div className="timeline-content">
            <div className="company">
              <img src={nwsLogo} alt="NWS" className="company-logo" />

              <h3>
                PROJETS ACADÉMIQUES –
                <br />
                NORMANDIE WEB SCHOOL
              </h3>
            </div>

            <p className="context">
              Étudiante à la Normandie Web School, je réalise des maquettes
              UX/UI et développe des projets web complets allant de la
              conception à la mise en ligne.
            </p>

            <ul>
              <li>Création de sites web avec React et WordPress</li>
              <li>Développement d’un portfolio web avec React.js et Node.js</li>
              <li>Création de maquettes UX/UI</li>
              <li>Création d’un site e-commerce responsive</li>
              <li>Stratégie de communication digitale</li>
              <li>Création d’identité visuelle pour Petfy</li>
              <li>Conception d’affiche événementielle pour The Monster Fest</li>
            </ul>

            <p className="tools">
              <strong>Outils :</strong> React, WordPress, Figma, Canva,
              Photoshop, SEO, Node.js, Illustrator, Wix, HTML, CSS
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-date">Juin 2025 – Août 2025</span>

          <div className="timeline-content">
            <div className="company">
              <h3>
                STAGE – SOCIÉTÉ DE GAZ
                <br />
                (SODISCO SARL)
              </h3>
            </div>

            <p className="context">
              Stage réalisé au sein de SODISCO SARL, axé sur la refonte de site
              web et l’amélioration des outils de gestion et de communication interne.
            </p>

            <ul>
              <li>
                Refonte du site WordPress et intégration de nouveaux contenus
              </li>
              <li>
                Création de tableaux de bord Excel pour le suivi des commandes
                et livraisons
              </li>
              <li>
                Réalisation de supports de communication internes
                (affiches, présentations)
              </li>
              <li>
                Amélioration de l’expérience utilisateur et organisation des données
              </li>
            </ul>

            <p className="tools">
              <strong>Outils :</strong> HTML, PHP, CSS, JavaScript, Excel,
              MySQL, SEO, Canva, Photoshop, Figma, Trello
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-date">Août 2024 – Octobre 2024</span>

          <div className="timeline-content">
            <div className="company">
              <img src={sicLogo} alt="SIC" className="company-logo" />

              <h3>
                STAGE – SOCIÉTÉ IMMOBILIÈRE
                <br />
                DU CAMEROUN
              </h3>
            </div>

            <p className="context">
              Stage orienté développement web, conception et gestion de bases
              de données pour une application de suivi des assurances maladie.
            </p>

            <ul>
              <li>
                Développement d’une application web de suivi des assurances maladie
              </li>
              <li>
                Analyse des besoins, conception et mise en production
              </li>
              <li>Modélisation de la base de données avec MERISE</li>
              <li>Développement avec PHP, MySQL, HTML, CSS</li>
              <li>
                Création d’une interface utilisateur fluide et responsive
              </li>
              <li>Tests et assistance aux utilisateurs</li>
            </ul>

            <p className="tools">
              <strong>Outils :</strong> PHP, MySQL, HTML, CSS, MERISE
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Parcours;