import React from "react";
import "./App.css";

// Composants
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Realisations from "./components/Realisations";
import Projects from "./components/Projects"; // si tu l’utilises
import Technologies from "./components/Technologies"; // <-- ligne ajoutée

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Section À propos */}
      <About />

      {/* Section Réalisations */}
      <Realisations />

      {/* Section Technologies */}
      <Technologies />
    </>
  );
}

export default App;