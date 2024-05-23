// App.js
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Last from "./components/Last";
import Certifications from "./components/Certifications";
import Profiles from "./components/Profiles";
import Services from "./components/Services";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Profiles />
      <Services />
      <Contact />
      <Last />
    </div>
  );
}
