import React from "react";

// Logos (assurez-vous que tous les fichiers .webp sont dans src/images/)
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
import indesignLogo from "../images/indesign.webp"; // <-- import InDesign
import trelloLogo from "../images/trello.webp";
import lightroomLogo from "../images/lightroom.webp";
import githubLogo from "../images/github.webp";
import wordpressLogo from "../images/wordpress.webp";
import wixLogo from "../images/wix.webp";
import seoLogo from "../images/seo.webp";
import vscodeLogo from "../images/vscode.webp";
import adobeXdLogo from "../images/adobexd.webp";

const techs = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "PHP", logo: phpLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Photoshop", logo: photoshopLogo },
  { name: "Illustrator", logo: illustratorLogo },
  { name: "InDesign", logo: indesignLogo }, // <-- Ajout
  { name: "Trello", logo: trelloLogo },
  { name: "Lightroom", logo: lightroomLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Wix", logo: wixLogo },
  { name: "SEO", logo: seoLogo },
  { name: "VS Code", logo: vscodeLogo },
  { name: "Adobe XD", logo: adobeXdLogo },
];

function Technologies() {
  return (
    <section className="technologies-section" id="technologies">
      <h2>Technologies maîtrisées</h2>
      <div className="technologies-container">
        {techs.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <img src={tech.logo} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;