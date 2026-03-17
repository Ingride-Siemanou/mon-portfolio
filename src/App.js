import React from "react";
import "./App.css";

// Composants
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Realisations from "./components/Realisations";
import Projects from "./components/Projects"; // <-- IMPORTANT

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

    </>
  );
}

export default App;