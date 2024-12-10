import { useState, useContext,useEffect} from "react"
import { ContextGlobal } from "../App.jsx";
import Home from "./1-home/home.jsx"
import {anim} from "./1-home/animacion.jsx"
import About from "./2-about/about.jsx"
import CvModal from "./2-about/CV-modal.jsx"

import Skills from "./3-skills/skills.jsx"
import Portfolio from "./4-portfolio/portfolio.jsx";
import Contact from "./5-contact/contact";
import Footer from "./6-footer/footer.jsx"



export default function View({ boleano }) {
  //aqui se activa si se da click en el icono y se muestra el menu
  const [menu, setMenu] = useState(false);

  const { borrarVentana, setBorrarVentana, cvOpen, setCvOpen } =
    useContext(ContextGlobal);

  //aqui solo se muestra la vista 1
  useEffect(() => {
    //console.log(borrarVentana);
    anim(".header", "abajo 400ms ease-in forwards");
    anim(".right-texto > .texto-nombre", "abajo .5s ease-in forwards");
    anim(
      "#home > div.left > div:nth-child(1)",
      "toRight 500ms ease-in forwards"
    );
    anim(
      "#home > div.left > div:nth-child(2)",
      "toRight 500ms ease-in 200ms forwards"
    );
    anim(
      "#home > div.left > div:nth-child(3)",
      "toRight 500ms ease-in 400ms forwards"
    );
    anim(
      "#home > div.right > div.right-texto > div.texto-dev",
      "abajo 500ms ease-in 400ms forwards"
    );
    anim(
      "#home > div.right > div.right-texto > p.texto-dev2",
      "abajo 500ms ease-in 800ms forwards"
    );
    anim(
      "#home > div.right > div.right-texto > a ",
      "aparecer 400ms ease-in 900ms forwards"
    );



  }, []);

  //no borrar esto funciona correctamente
  useEffect(() => {
    //console.log(borrarVentana);
    function scrollVentana() {
      //console.log(borrarVentana);
      // console.log("scroll")
      anim("#about > div.titulo > h3", "abajo 500ms ease-in forwards");
      anim("#about > div.titulo > p", "abajo 800ms forwards");
      anim(
        "#about > div.about-container > div.container-left",
        "aparecer 400ms ease-in 500ms forwards"
      );
      anim(
        "#about > div.about-container > div.container-right > div.iconos > div:nth-child(1)",
        "abajo 500ms ease-in 200ms forwards"
      );
      anim(
        "#about > div.about-container > div.container-right > div.iconos > div:nth-child(2)",
        "abajo 500ms ease-in forwards"
      );
      anim(
        "#about > div.about-container > div.container-right > div.iconos > div:nth-child(3)",
        "abajo 500ms ease-in 200ms forwards"
      );
      anim(
        "#about > div.about-container > div.container-right > div.right-texto",
        "arriba 500ms ease-in forwards"
      );
      anim(
        "#about > div.about-container > div.container-right > a",
        "arriba 500ms ease-in 500ms forwards"
      );
      anim(
        "#skills > span > div.container-texto",
        "abajo 500ms ease-in forwards"
      );
      anim("#skills > span", "aparecer 500ms ease forwards");
      anim("#skills > span > div.sol", "aparecer 500ms ease 500ms forwards");
      anim(
        "#skills > span > div:nth-child(3)",
        "aparecer 500ms ease 800ms forwards"
      );
      anim("#portfolio > h1", "abajo 500ms ease forwards");
      anim(
        "#portfolio > div > div:nth-child(1)",
        "aparecer 500ms ease 200ms forwards"
      );
      anim(
        "#portfolio > div > div:nth-child(2)",
        "aparecer 500ms ease 400ms forwards"
      );
      anim(
        "#portfolio > div > div:nth-child(3)",
        "aparecer 500ms ease 600ms forwards"
      );
      anim(
        "#portfolio > div > div:nth-child(4)",
        "aparecer 500ms ease 800ms forwards"
      );
      anim("#portfolio > div > div:nth-child(5)", "aparecer 500ms ease 1000ms forwards")


      anim("#contact h1", "abajo 500ms ease forwards");
      anim("#contact h6", "abajo 500ms ease 300ms forwards");
      anim(
        "#contact > div > div.contact-left > p",
        "aparecer 500ms ease forwards"
      );
      anim(
        "#contact > div > div.contact-left > div.email",
        "toRight 1200ms ease forwards"
      );
      anim(
        "#contact > div > div.contact-left > div.whatsapp",
        "toRight 1200ms ease 500ms forwards"
      );
      anim(
        "#contact > div > div.contact-right > p",
        "aparecer 500ms ease forwards"
      );
      anim(
        "#contact > div > div.contact-right > div.mail-input",
        "toIzq 1200ms ease forwards "
      );
      anim(
        "#contact > div > div.contact-right > div.textarea-input",
        "toIzq 1200ms ease 500ms forwards"
      );
      anim(
        "#contact > div > div.contact-right > div.botonEnviar",
        "arriba 500ms ease 1300ms forwards"
      );
      anim(".footer > p.footer-name", "aparecer 500ms ease forwards");
      anim(
        ".footer > div > div:nth-child(1)",
        "arriba 500ms ease 300ms forwards"
      );
      anim(
        ".footer > div > div:nth-child(2)",
        "arriba 500ms ease 600ms forwards"
      );
      anim(
        ".footer > div > div:nth-child(3)",
        "arriba 500ms ease 800ms forwards"
      );
    }

    let intervalo;
    //console.log(borrarVentana)
    if (borrarVentana == true) {
      window.removeEventListener("scroll", scrollVentana);
      const header = document.querySelector(".header");
      header.style = "opacity:1";

      //----------------Vista 1------------------
      const gitIcon = document.querySelector(
        "#home > div.left > div:nth-child(1)"
      );
      const linkeIcon = document.querySelector(
        "#home > div.left > div:nth-child(2)"
      );
      const wasapIcon = document.querySelector(
        "#home > div.left > div:nth-child(3)"
      );

      gitIcon.style = "opacity:1";
      linkeIcon.style = "opacity:1";
      wasapIcon.style = "opacity:1";

      const imageNasa = document.querySelector(
        "#home > div.right > div.right-image"
      );
      const jaymeLn = document.querySelector(
        "#home > div.right > div.right-texto > p.texto-nombre"
      );

      const textoDev = document.querySelector(
        "#home > div.right > div.right-texto > div"

      );

      const textoBoton = document.querySelector(".texto-boton")
      const saludoTexto = document.querySelector(
        "#home > div.right > div.right-texto > p.texto-dev2"
      );
      const boton = document.querySelector(
        "#home > div.right > div.right-texto > a > div"
      );
      textoBoton.style.opacity = "1"

      imageNasa.style = "opacity:1;animation:none;";
      jaymeLn.style = "opacity:1";
      textoDev.style = "opacity:1";
      saludoTexto.style = "opacity:1";
      boton.style = "opacity:1";

      //----------------About----------------
      const titulo = document.querySelector("#about > div.titulo > h3");
      const textoIntroduction = document.querySelector(
        "#about > div.titulo > p"
      );
      const image = document.querySelector(
        "#about > div.about-container > div.container-left"
      );

      const experienceCaja = document.querySelector(
        "#about > div.about-container > div.container-right > div.iconos > div:nth-child(1)"
      );
      const completedCaja = document.querySelector(
        "#about > div.about-container > div.container-right > div.iconos > div:nth-child(2)"
      );
      const supportCaja = document.querySelector(
        "#about > div.about-container > div.container-right > div.iconos > div:nth-child(3)"
      );
      const rightTexto = document.querySelector(
        "#about > div.about-container > div.container-right > div.right-texto"
      );
      const cvBoton = document.querySelector(
        "#about > div.about-container > div.container-right > a"
      );

      titulo.style = "opacity:1;animation:none !important";
      textoIntroduction.style = "opacity:1";
      image.style = "opacity:1";
      experienceCaja.style = "opacity:1";
      completedCaja.style = "opacity:1";
      supportCaja.style = "opacity:1";
      rightTexto.style = "opacity:1";
      cvBoton.style = "opacity:1";

      //----------------skills------------------
      const skillsTitulo = document.querySelector(
        "#skills > span > div.container-texto"
      );
      const sol = document.querySelector("#skills > span > div.sol");
      const imagenesItems = document.querySelector(
        "#skills > span > div.circulo"
      );

      skillsTitulo.style = "opacity:1";
      sol.style = "opacity:1";
      imagenesItems.style = "opacity:1";

      //-------------------portfolio---------------

      const portfolioTitulo = document.querySelector("#portfolio > h1");
      const caja1 = document.querySelector(
        "#portfolio > div > div:nth-child(1)"
      );
      const caja2 = document.querySelector(
        "#portfolio > div > div:nth-child(2)"
      );
      const caja3 = document.querySelector(
        "#portfolio > div > div:nth-child(3)"
      );
      const caja4 = document.querySelector(
        "#portfolio > div > div:nth-child(4)"
      );
      const caja5 = document.querySelector(
        "#portfolio > div > div:nth-child(5)"
      );
      const caja6 = document.querySelector(
        "#portfolio > div > div:nth-child(5)"
      );

      portfolioTitulo.style = "opacity:1";
      caja1.style = "opacity:1";
      caja2.style = "opacity:1";
      caja3.style = "opacity:1";
      caja4.style = "opacity:1";
      caja5.style = "opacity:1"
      caja6.style = "opacity:1"


      //----------------Contact me----------------------
      const contactTitulo = document.querySelector("#contact > h1");
      const getTexto = document.querySelector("#contact > h6");
      const talkTexto = document.querySelector(
        "#contact > div > div.contact-left > p"
      );
      const emailContainer = document.querySelector(
        "#contact > div > div.contact-left > div.email"
      );
      const wasapContainer = document.querySelector(
        "#contact > div > div.contact-left > div.whatsapp"
      );

      const writeTexto = document.querySelector(
        "#contact > div > div.contact-right > p"
      );
      const inputMail = document.querySelector(
        "#contact > div > div.contact-right > div.mail-input"
      );
      const inputMessage = document.querySelector(
        "#contact > div > div.contact-right > div.textarea-input"
      );
      const botonSend = document.querySelector(
        "#contact > div > div.contact-right > div.botonEnviar"
      );

      contactTitulo.style = "opacity:1";
      getTexto.style = "opacity:1";
      talkTexto.style = "opacity:1";
      emailContainer.style = "opacity:1";
      emailContainer.style = "opacity:1";
      wasapContainer.style = "opacity:1";
      writeTexto.style = "opacity:1";
      inputMail.style = "opacity:1";
      inputMessage.style = "opacity:1";
      botonSend.style = "opacity:1";

      //-----------------Footer------------------------

      const jaymeTexto = document.querySelector(
        "#jaymePortfolio > div > div.footer > p.footer-name"
      );
      const footerGitIcon = document.querySelector(
        "#jaymePortfolio > div > div.footer > div > div:nth-child(1)"
      );
      const footerLinkeIcon = document.querySelector(
        "#jaymePortfolio > div > div.footer > div > div:nth-child(2)"
      );
      const footerWasapIcon = document.querySelector(
        "#jaymePortfolio > div > div.footer > div > div:nth-child(3)"
      );

      jaymeTexto.style = "opacity:1";
      footerGitIcon.style = "opacity:1";
      footerLinkeIcon.style = "opacity:1";
      footerWasapIcon.style = "opacity:1";





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

  useEffect(() => {

    async function fetchData() {
      //si existe en sessionStorage las imagenes, no hacer el fetch
      //eso lo hago luego ya,ahora NO
      //https://back-portfolio-xi.vercel.app/assets
      const data = await fetch(`${import.meta.env.VITE_API}/assets`);
      const bo = await data.json();
      //console.log(data)
      const b64 = `data:image/svg+xml;base64,${bo.ondas}`;

      const fetchBlob = await fetch(b64);
      const dataBlob = await fetchBlob.blob();
      const createUrl = URL.createObjectURL(dataBlob);

      const imgBlob = document.querySelector(".img-waza");
      imgBlob.src = createUrl;
    }

    fetchData();
  }, []);

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
