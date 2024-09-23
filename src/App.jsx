/*quitar el click derecho
a los links de write me y wame usar navigate de react
cuando haya un resize quitar las animaciones de todo   
poner varias ventanas fixed para que no pueda inspeccionar
cada un segundo que se cree una ventana div fixed en cualquier lado y que luego de un segundo
se elimine asi sera mas dificil que lo borren 

desde el back convertir los archivos del servidor en base64 enviarlos por json y en 
el front convertirlos en blobs esto para poder enviar muchos archivos en un solo endpoint
*/
//en 621 esta todo de aparecer y desaparecer
import "./portafolio.scss";
import { addListener, launch } from "devtools-detector";
import { useEffect, useRef, useState, useContext, createContext } from "react";

import Header from "./header.jsx"
import Home from "./sections/1-home.jsx"
import About from "./sections/2-about.jsx"
import Skills from "./sections/3-skills.jsx"
import Portfolio from "./sections/4-portfolio.jsx"
import Contact from "./sections/5-contact.jsx"

function anim(elemento, estilo) {
  const ele = document.querySelector(elemento);
  // console.log(ele);
  const altura = window.innerHeight;
  const posicion = ele.getBoundingClientRect().top;
  // console.log(`posicion: ${posicion}, alturaWindow: ${altura}`);
  if (posicion < altura / 1.2) {
    ele.style.animation = estilo;
  }
}




//"./src/imgPortafolio/linux.png"
/*https://www.vectorlogo.zone/logos/mysql/mysql-official.svg
mysql*/



function Footer() {
  return (
    <div className="footer">
      <p className="footer-name">Jayme Ln</p>
      <div className="footer-list">
        <div>
          <a href="https://github.com/pskey35" target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
            </svg>
          </a>
          <div>github</div>
        </div>
        <div>
          <div>
            <a
              href="https://www.linkedin.com/in/jayme-ln-7597a6268/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="20px"
                height="20px"
                fill="white"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
              </svg>
            </a>
          </div>
          <div>linkedin</div>
        </div>
        <div>
          <div>
            <a href="https://wa.me/51906090587" target="_blank">
              <svg
                version="1.1"
                fill="white"
                width="18px"
                height="18px"
                viewBox="0 0 90 90"
              >
                <g>
                  <path
                    id="WhatsApp"
                    d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522
		c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982
		c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537
		c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938
		c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537
		c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333
		c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882
		c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977
		c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344
		c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223
		C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"
                  ></path>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
          <div>whatsapp</div>
        </div>
      </div>
      <p className="copyright">
        <span style={{ color: "gray" }}>© 2023 All rights reserved. By</span>
        <a
          target="_blank"
          style={{ color: "white", textDecoration: "none", marginLeft: "3px" }}
          href="https://github.com/pskey35"
        >
          Jayme Ln
        </a>
      </p>
      <ul className="footer-circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/*foot es el position fixed que tapara todo(ya no usare esto porque el usuario no puede interactuar con mi web)*/}
    </div>
  );
}



function CvModal() {
  const { cvOpen, setCvOpen } = useContext(ContextGlobal);

  const clickPrint = () => {
    console.log(window);
  };

  const clickExitDesk = () => {
    //ocultamos el scroll
    document.body.style.cssText = "overflow:auto";
    const cv_contentElement = document.querySelector(".cv-content");
    //hace la animacion y una ves animado se borra
    cv_contentElement.style.cssText = "animation:exitCV 100ms ease forwards";

    const animFunction = (event) => {
      const cv_caja = document.querySelector(".cv-caja");

      cv_caja.style.cssText = "opacity:0;visibility:hidden";

      event.target.removeEventListener("animationend", animFunction);
    };

    cv_contentElement.addEventListener("animationend", animFunction);
  };

  return (
    <div className="cv-caja">
      <div className="cv-content">
        <div className="image">
          <img src="myCV.png"></img>
          <div className="front-image">
            <img src="myCV.png"></img>
          </div>
          <div>salir</div>
        </div>
        <div className="exit-desk" onClick={clickExitDesk}>
          <svg width="60%" stroke="white" height="60%" viewBox="0 0 24 24">
            <path
              d="M7.68473 7.33186C8.07526 6.94134 8.07526 6.30817 7.68473 5.91765C7.29421 5.52712 6.66105 5.52712 6.27052 5.91765L1.60492 10.5832C0.823873 11.3643 0.823872 12.6306 1.60492 13.4117L6.27336 18.0801C6.66388 18.4706 7.29705 18.4706 7.68757 18.0801C8.0781 17.6896 8.0781 17.0564 7.68757 16.6659L4.02154 12.9998L22 12.9998C22.5523 12.9998 23 12.5521 23 11.9998C23 11.4476 22.5523 10.9998 22 10.9998L4.01675 10.9998L7.68473 7.33186Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="botones">
          <div className="print" onClick={clickPrint}>
            <svg
              viewBox="0 -2 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>print</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g id="Page-1">
                <g
                  id="Icon-Set"
                  sketch:type="MSLayerGroup"
                  transform="translate(-100.000000, -205.000000)"
                  fill="white"
                >
                  <path
                    d="M130,226 C130,227.104 129.104,228 128,228 L125.858,228 C125.413,226.278 123.862,225 122,225 L110,225 C108.138,225 106.587,226.278 106.142,228 L104,228 C102.896,228 102,227.104 102,226 L102,224 C102,222.896 102.896,222 104,222 L128,222 C129.104,222 130,222.896 130,224 L130,226 L130,226 Z M122,231 L110,231 C108.896,231 108,230.104 108,229 C108,227.896 108.896,227 110,227 L122,227 C123.104,227 124,227.896 124,229 C124,230.104 123.104,231 122,231 L122,231 Z M108,209 C108,207.896 108.896,207 110,207 L122,207 C123.104,207 124,207.896 124,209 L124,220 L108,220 L108,209 L108,209 Z M128,220 L126,220 L126,209 C126,206.791 124.209,205 122,205 L110,205 C107.791,205 106,206.791 106,209 L106,220 L104,220 C101.791,220 100,221.791 100,224 L100,226 C100,228.209 101.791,230 104,230 L106.142,230 C106.587,231.723 108.138,233 110,233 L122,233 C123.862,233 125.413,231.723 125.858,230 L128,230 C130.209,230 132,228.209 132,226 L132,224 C132,221.791 130.209,220 128,220 L128,220 Z"
                    id="print"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <a className="download" href="jaymeCV.pdf" download="jaymeCV.pdf">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="30px"
              height="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="white"
              />
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="white"
              />
            </svg>
            <span>Download</span>
          </a>
        </div>

        <div className="exit-mbl" onClick={clickExitDesk}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{ fill: "#f7f7f7" }}
              d="M7.68473 7.33186C8.07526 6.94134 8.07526 6.30817 7.68473 5.91765C7.29421 5.52712 6.66105 5.52712 6.27052 5.91765L1.60492 10.5832C0.823873 11.3643 0.823872 12.6306 1.60492 13.4117L6.27336 18.0801C6.66388 18.4706 7.29705 18.4706 7.68757 18.0801C8.0781 17.6896 8.0781 17.0564 7.68757 16.6659L4.02154 12.9998L22 12.9998C22.5523 12.9998 23 12.5521 23 11.9998C23 11.4476 22.5523 10.9998 22 10.9998L4.01675 10.9998L7.68473 7.33186Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
        <a className="btnDownload-mbl" href="/jaymeCV.pdf" download="jaymeCV.pdf">
          <span>Download CV</span>
          <svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="white"
              ></path>
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="white"
              ></path>
            </svg>
          </svg>
        </a>
      </div>
    </div>
  );
}

export function Ventana({ boleano }) {
  //aqui se activa si se da click en el icono y se muestra el menu
  const [menu, setMenu] = useState(false);

  const { borrarVentana, setBorrarVentana, cvOpen, setCvOpen } =
    useContext(ContextGlobal);

  const funcionMenu = () => {
    setMenu(!menu);
  };

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
      anim("#portfolio > div > div:nth-child(5)","aparecer 500ms ease 1000ms forwards")


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


      portfolioTitulo.style = "opacity:1";
      caja1.style = "opacity:1";
      caja2.style = "opacity:1";
      caja3.style = "opacity:1";
      caja4.style = "opacity:1";
      caja5.style = "opacity:1"

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
        <Header apareceFooter={funcionMenu}></Header>
        <Home></Home>
        <div className="ondas">
          <img
            style={{ width: "100%", display: "block" }}
            className="img-waza"
          ></img>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
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

export const ContextGlobal = createContext();

function BlockContainer() {
  return <div className="what_are_you_doing"></div>;
}

export default function App() {
  //aqui lo que hize fue que cuando detecte que el clientHeight a cambiado se hara ese borrado de ventana para que
  //no puedan inspeccionar

  //si borrar ventana es true entonces en el componente Ventana hara que se borre y se agregue
  //en true se mantiene el evento scroll en false se elimina el evento scroll del window
  const [borrarVentana, setBorrarVentana] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  //esto es para el modal del cv
  const [cvOpen, setCvOpen] = useState(false);

  const value = {
    borrarVentana,
    setBorrarVentana,
    openMenu,
    setOpenMenu,
    cvOpen,
    setCvOpen,
  };

  //-------activo esto y se activa la seguridad en mi web--------

  const [showBlockContainer, setShowBlockContainer] = useState(false);

  useEffect(() => {
    //aqui si existe un valor en sessionStorage bota un string y si no hay bota un null.
    //null se considera un valor falso cuando se evalua en contexto boleano.entonces !null es true
    if (!sessionStorage.getItem("mbl")) {
      //este if se corre si no hay nada en el sessionStorage osea si es la primera vez que visita la web

      //-------en sessionStorage se guardaran si es Mobile(boleano) y las imagenes en base64 para luego convertirlos en Blob Url--------
      const userAgent = navigator.userAgent;

      //esto de aqui abajo si es true es telefono y si  es false es porque es PC
      const isMobile = /(iPhone|iPad|Android|Windows Phone)/i.test(userAgent);

      //mbl = mobile
      sessionStorage.setItem("mbl", isMobile); //true si es mobile, False si es computadora

      sessionStorage.setItem("wdt", window.innerWidth); //esto guardara la anchura del window
      setInterval(() => {
        // console.log(window.innerWidth, sessionStorage.getItem("wdt"))
        if (window.innerWidth.toString() !== sessionStorage.getItem("wdt")) {
          setBorrarVentana(true);
        } else {
          setBorrarVentana(false);
        }
      }, 5000);
    } else {
      setInterval(() => {
        // console.log(window.innerWidth, sessionStorage.getItem("wdt"))
        if (window.innerWidth.toString() !== sessionStorage.getItem("wdt")) {
          setBorrarVentana(true);
        } else {
          setBorrarVentana(false);
        }
      }, 5000);
    }



    //tenemos que capturar el userAgent del usuario y luego calcular el window.innerHeight
    //lo guardamos en session storage y luego calculamos si




    //esto de aca verifica cada 3 segundos si hubo un cambio de pantalla
    //si es asi es porque seguro a abierto la consola de chrome devs



    //esto detecta si se abre el devtools--- mira la linea de codigo 618
    addListener((isOpen) => {
      setShowBlockContainer(isOpen);
    
    });
    //launch();

   
  // 
    //esto desactiva el click derecho del mouse
    document.addEventListener("contextmenu", function (event) {
      //lo desactivare de momento
      // event.preventDefault();
    });

  }, []);

  //no puedo aplicar lo de la ventana "div.foot" tapando toda la pantalla no se pueden dar click en input ni en botones
  //de momento solo generar blobsURLs

  return (
    <ContextGlobal.Provider value={value}>
      <div id="jaymePortfolio">
        <Ventana></Ventana>
        {showBlockContainer ? <BlockContainer></BlockContainer> : ""}
      </div>
    </ContextGlobal.Provider>
  );
}
