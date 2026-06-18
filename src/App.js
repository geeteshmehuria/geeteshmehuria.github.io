import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from "./utils/Themes.js";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Experience />
        <Projects setOpenModal={setOpenModal} />
        <Education />
        <Contact />
      </main>
      <Footer />
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </ThemeProvider>
  );
}

export default App;
