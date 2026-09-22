import React from "react";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiResend,
  SiGit,
  SiVercel,
} from "react-icons/si";

// Logos déjà présents dans ton portfolio
import htmlLogo from "../images/html.webp";
import cssLogo from "../images/css.webp";
import jsLogo from "../images/javascript.webp";
import reactLogo from "../images/react.webp";
import phpLogo from "../images/php.webp";
import nodejsLogo from "../images/nodejs.webp";
import mysqlLogo from "../images/mysql.webp";
import figmaLogo from "../images/figma.webp";
import canvaLogo from "../images/canva.webp";
import photoshopLogo from "../images/photoshop.webp";
import illustratorLogo from "../images/illustrator.webp";
import indesignLogo from "../images/indesign.webp";
import trelloLogo from "../images/trello.webp";
import lightroomLogo from "../images/lightroom.webp";
import githubLogo from "../images/github.webp";
import wordpressLogo from "../images/wordpress.webp";
import wixLogo from "../images/wix.webp";
import seoLogo from "../images/seo.webp";
import vscodeLogo from "../images/vscode.webp";
import adobeXdLogo from "../images/adobexd.webp";

// Technologies et logiciels classés par domaine
const categories = [
  {
    title: "Langages",
    technologies: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", logo: phpLogo },
      { name: "SQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Front-end",
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Back-end",
    technologies: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Next.js – Routes API", icon: SiNextdotjs },
    ],
  },
  {
    title: "Bases de données",
    technologies: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Neon", icon: SiPostgresql },
    ],
  },
  {
    title: "Accès à la base de données",
    technologies: [
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    title: "Envoi d’e-mails",
    technologies: [
      { name: "Resend", icon: SiResend },
    ],
  },
  {
    title: "Gestion du code et développement",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", logo: githubLogo },
      { name: "Visual Studio Code", logo: vscodeLogo },
    ],
  },
  {
    title: "Hébergement et déploiement",
    technologies: [
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    title: "Design et création graphique",
    technologies: [
      { name: "Figma", logo: figmaLogo },
      { name: "Canva", logo: canvaLogo },
      { name: "Photoshop", logo: photoshopLogo },
      { name: "Illustrator", logo: illustratorLogo },
      { name: "InDesign", logo: indesignLogo },
      { name: "Lightroom", logo: lightroomLogo },
      { name: "Adobe XD", logo: adobeXdLogo },
    ],
  },
  {
    title: "CMS, gestion de projet et référencement",
    technologies: [
      { name: "WordPress", logo: wordpressLogo },
      { name: "Wix", logo: wixLogo },
      { name: "Trello", logo: trelloLogo },
      { name: "SEO", logo: seoLogo },
    ],
  },
];

function Technologies() {
  return (
    <section className="technologies-section" id="technologies">
      <h2>Technologies et logiciels maîtrisés</h2>

      {categories.map((category) => (
        <div className="technology-category" key={category.title}>
          <h3>{category.title}</h3>

          <div className="technologies-container">
            {category.technologies.map((tech) => (
              <div className="tech-card" key={tech.name}>
                {tech.logo ? (
                  <img src={tech.logo} alt={tech.name} />
                ) : (
                  <tech.icon
                    className="tech-icon"
                    aria-label={tech.name}
                  />
                )}

                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Technologies;