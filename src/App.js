import React from "react";
import "./App.css";

// Composants
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Realisations from "./components/Realisations";
import Technologies from "./components/Technologies";
import Parcours from "./components/Parcours";
import ParcoursAcademique from "./components/ParcoursAcademique";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer"; // 👈 AJOUT

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* À propos */}
      <About />

      {/* Réalisations */}
      <Realisations />

      {/* Technologies */}
      <Technologies />

      {/* Parcours académique */}
      <ParcoursAcademique />

      {/* Parcours professionnel */}
      <Parcours />

      {/* Certifications */}
      <Certifications />

      {/* Footer / Contact */}
      <Footer />
    </>
  );
}

export default App;