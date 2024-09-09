import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Containers/home/index";
import About from "./Containers/about/index";
import Resume from "./Containers/resume/index";
import Skills from "./Containers/skills/index";
import Portfolio from "./Containers/porfolio/index";
import Contact from "./Containers/Contact/index";
import Navbar from "./Components/Navbar/index";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./App.css";
import particles from "./utils.js/particles";
import ProjectPage from "./Containers/ProjectPage/ProjectPage";
const App = () => {
  const location = useLocation();

  const particlesLoaded = async (container) => {
    console.log("Particles loaded:", container);
  };
  const handleInit = async (main) => {
    await loadSlim(main);
  };
  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <Particles
          id="particles"
          options={particles}
          loaded={particlesLoaded}
          init={handleInit}
        />
      )}
      <Navbar />
      <div className="app__main-page">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />{" "}
        </Routes>
      </div>
    </div>
  );
};

export default App;
