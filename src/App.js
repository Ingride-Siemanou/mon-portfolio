import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Realisations from "./components/Realisations";
import Technologies from "./components/Technologies";
import Parcours from "./components/Parcours";
import ParcoursAcademique from "./components/ParcoursAcademique";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Realisations />

      <Technologies />

      <ParcoursAcademique />

      <Parcours />

      <Certifications />

      <Footer />
    </>
  );
}

export default App;