

import Home from "./1-home/home_Page.jsx";
import About from "./2-about/about_Page.jsx";
import CvModal from "./2-about/CV-modal.jsx";
import Skills from "./3-skills/skills_Page.jsx";

import Portfolio from "./4-portfolio/portfolio_Page.jsx";
import Contact from "./5-contact/contact_Page.jsx";
import Footer from "./6-footer/footer_Page.jsx";
import { useHomeAnimations } from "./hooks/useHomeAnimation.js";
import { useScrollAnimations } from "./hooks/useScrollAnimation.js";
import "./view.scss"
  //aqui solo se muestra la vista 1

export default function View({ boleano }) {
  useHomeAnimations();
  useScrollAnimations();

  return (
    <div className="ventana" id={boleano}>
      <div className="vista1">
        <Home />
      </div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <CvModal />
    </div>
  );
}
// ...existing code...
