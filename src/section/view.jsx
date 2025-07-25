import { useState, useContext,useEffect} from "react"
import { ContextGlobal } from "../App.jsx";
import Home from "./1-home/home_Page.jsx"
import {anim} from "./1-home/animacion.jsx"
import { homeAnimList } from "./page/homeAnimations.js";
import { scrollAnimList } from "./page/scrollAnimations.js";
import About from "./2-about/about_Page.jsx"
import CvModal from "./2-about/CV-modal.jsx"

import Skills from "./3-skills/skills_Page.jsx"
import Portfolio from "./4-portfolio/portfolio_Page.jsx";
import Contact from "./5-contact/contact_Page.jsx";
import Footer from "./6-footer/footer_Page.jsx"
import selectors from "./page/selectors.js";
import { setStyle } from "./page/styleHelpers.js";



export default function View({ boleano }) {


  const { borrarVentana } =
    useContext(ContextGlobal);

  //aqui solo se muestra la vista 1
  useEffect(() => {
    //console.log(borrarVentana);

 
    for (let i = 0; i < homeAnimList.length; i++) {
      const [selector, animation] = homeAnimList[i];
      anim(selector, animation);
    }



  }, []);

  //no borrar esto funciona correctamente
  useEffect(() => {
    //console.log(borrarVentana);
    function scrollVentana() {
    


      const animList = [
        // About section
        [
          ["#about > div.titulo > h3", "abajo 500ms ease-in forwards"],
          ["#about > div.titulo > p", "abajo 800ms forwards"],
          ["#about > div.about-container > div.container-left", "aparecer 400ms ease-in 500ms forwards"],
          ["#about > div.about-container > div.container-right > div.right-texto", "arriba 500ms ease-in forwards"],
          ["#about > div.about-container > div.container-right > a", "arriba 500ms ease-in 500ms forwards"],
        ],
        // About icons
        // Skills section
        [
          ["#skills > span > div.container-texto", "abajo 500ms ease-in forwards"],
          ["#skills > span", "aparecer 500ms ease forwards"],
          ["#skills > span > div.sol", "aparecer 500ms ease 500ms forwards"],
          ["#skills > span > div:nth-child(3)", "aparecer 500ms ease 800ms forwards"],
        ],
        // Portfolio section
        [
          ["#portfolio > h1", "abajo 500ms ease forwards"],
        ],
        // Contact section
        [
          ["#contact h1", "abajo 500ms ease forwards"],
          ["#contact h6", "abajo 500ms ease 300ms forwards"],
          ["#contact > div > div.contact-left > p", "aparecer 500ms ease forwards"],
          ["#contact > div > div.contact-left > div.email", "toRight 1200ms ease forwards"],
          ["#contact > div > div.contact-left > div.whatsapp", "toRight 1200ms ease 500ms forwards"],
          ["#contact > div > div.contact-right > p", "aparecer 500ms ease forwards"],
          ["#contact > div > div.contact-right > div.mail-input", "toIzq 1200ms ease forwards "],
          ["#contact > div > div.contact-right > div.textarea-input", "toIzq 1200ms ease 500ms forwards"],
          ["#contact > div > div.contact-right > div.botonEnviar", "arriba 500ms ease 1300ms forwards"],
        ],
        // Footer section
        [
          [".footer > p.footer-name", "aparecer 500ms ease forwards"],
        ],
      ].flat();

      animList.forEach(([selector, animation]) => {
        anim(selector, animation);
      });
    }
    function scrollVentana() {
      for (let i = 0; i < scrollAnimList.length; i++) {
        const [selector, animation] = scrollAnimList[i];
        anim(selector, animation);
      }
    }

    let intervalo;
    //console.log(borrarVentana)
    if (borrarVentana == true) {
      window.removeEventListener("scroll", scrollVentana);

      // Aplicar estilos por sección
      selectors.forEach((section, sectionIndex) => {
        section.forEach((selector, index) => {
          if (sectionIndex === 2 && index === 0) { // Home - right section, imageNasa
            setStyle(selector, { opacity: "1", animation: "none" });
          } else if (sectionIndex === 3 && index === 0) { // About section, titulo
            setStyle(selector, { opacity: "1", animation: "none !important" });
          } else {
            setStyle(selector);
          }
        });
      });

      //ESTO FUNCIONA!!! esto sirve para borrar y agregar
      /*
       const x = document.querySelector(".ventana")
        setInterval(() => {
          const caja = document.querySelector("#jaymePortfolio");
          x.remove();
          console.log("cambio")
          caja.appendChild(x)
  
          const bodyHeight = window.innerWidth
          console.log(bodyHeight)
        }, 3000);
  */

    } else if (borrarVentana == false) {
      window.addEventListener("scroll", scrollVentana);
      clearInterval(intervalo);

    }
    //si en este return del useEffect no funciona bien mi web, no quitar
    return () => {
      window.removeEventListener("scroll", scrollVentana);
      clearInterval(intervalo);
    };
  }, [borrarVentana]);



  //enbes de usar resize mejor es cada 3 segundos detectar si el body.clientHeight a cambiado
  return (
    <div className="ventana" id={boleano}>
      <div className="vista1">

        <Home></Home>

      </div>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
      <CvModal></CvModal>
    </div>
  );
}
