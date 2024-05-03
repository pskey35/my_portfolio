/*quitar el click derecho
a los links de write me y wame usar navigate de react
cuando haya un resize quitar las animaciones de todo   
poner varias ventanas fixed para que no pueda inspeccionar
cada un segundo que se cree una ventana div fixed en cualquier lado y que luego de un segundo
se elimine asi sera mas dificil que lo borren 

desde el back convertir los archivos del servidor en base64 enviarlos por json y en 
el front convertirlos en blobs esto para poder enviar muchos archivos en un solo endpoint
*/
import "./portafolio.scss";
import { addListener, launch } from "devtools-detector";

import { useEffect, useRef, useState, useContext, createContext } from "react";
/*tagcloud sirve para hacer una esfera 3d rotando*/
import TagCloud from "TagCloud";
import perfil from "../public/perfil.png";

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

function Header({ apareceFooter }) {
  //aqui falta arreglar el LI para poner el textshadow

  const { openMenu, setOpenMenu } = useContext(ContextGlobal);

  const clickBotonMenu = () => {
    setOpenMenu(!openMenu);

    /*setOpenMenu((prevState) => {
      if (prevState == false) {
        return !prevState;
      } else {
        return !prevState;
      }
    });*/
  };

  useEffect(() => {
    const span1 = document.querySelector(
      ".botonHeader > .botonReal span:nth-child(1)"
    );
    const span2 = document.querySelector(
      ".botonHeader > .botonReal span:nth-child(2)"
    );
    const span3 = document.querySelector(
      ".botonHeader > .botonReal span:nth-child(3)"
    );

    if (openMenu == false) {
      //esta cerrando el menu
      //si es true animacion para arriba en el menu sus items circulares

      span1.style.cssText =
        "top:calc(100% - 22px);box-shadow:rgb(185 185 185) 0px 0px 10px 4px;";

      span2.style.cssText =
        "top:calc(0% - 11px);box-shadow: rgb(185 185 185) 0px 0px 10px 4px;";
      span3.style.cssText =
        "top:calc(100% - 22px);box-shadow:rgb(185 185 185) 0px 0px 10px 4px;";

      setTimeout(() => {
        const itemMenu1 = document.querySelector(
          "#jaymePortfolio > div > div.vista1 > div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(1) > a > span"
        );
        const itemMenu2 = document.querySelector(
          "#jaymePortfolio > div > div.vista1 > div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(2) > a > span"
        );
        const itemMenu3 = document.querySelector(
          "#jaymePortfolio > div > div.vista1 > div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(3) > a > span"
        );

        const itemMenu4 = document.querySelector(
          "#jaymePortfolio > div > div.vista1 > div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(4) > a > span"
        );

        const itemMenu5 = document.querySelector(
          "#jaymePortfolio > div > div.vista1 > div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(5) > a > span"
        );

        itemMenu1.style.cssText =
          "animation:fade-li 900ms cubic-bezier(.39,.11,.18,1.51) forwards reverse";

        itemMenu2.style.cssText =
          "animation:fade-li 900ms 180ms cubic-bezier(.39,.11,.18,1.51) forwards";

        itemMenu3.style.cssText =
          "animation:fade-li 900ms 300ms cubic-bezier(.39,.11,.18,1.51) forwards";

        itemMenu4.style.cssText =
          "animation:fade-li 900ms 500ms cubic-bezier(.39,.11,.18,1.51) forwards";

        itemMenu5.style.cssText =
          "animation:fade-li 900ms 500ms cubic-bezier(.39,.11,.18,1.51) forwards";
      }, 0);
    } else {
      //aqui abre el menu
      //si es false entonces mostramos animacion para abajo
      //      background:#018aff;

      span1.style.cssText =
        "top:calc(0% - 11px);background:white;background:rgb(142 203 255);box-shadow: 0px 0px 10px 4px rgb(1 126 255)";
      span2.style.cssText =
        "top:calc(100% - 22px);background:white;background:rgb(142 203 255);box-shadow: 0px 0px 10px 4px rgb(1 126 255)";
      span3.style.cssText =
        "top:calc(0% - 11px);background:white;background:rgb(142 203 255);box-shadow: 0px 0px 10px 4px rgb(1 126 255)";

      //esto de abajo son los iconos del menu
      setTimeout(() => {
        const menuCenter = document.querySelector(".menu-center");

        const animDuration = 30;
        for (let i = 0; i < menuCenter.children.length; i++) {
          //obtenemos cada icono para aplicarle animacion
          let itemIcon = document.querySelector(
            `div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(${
              i + 1
            }) > a > span`
          );

          const differences = animDuration * i;
          itemIcon.style.cssText = `animation:fade-li ${
            900 + differences
          }ms  ${differences}ms cubic-bezier(.39,.11,.18,1.51) forwards`;

          //aqui le aplicaremos animacion a la etiqueta P del icono

          const itemMenu1_p = document.querySelector(
            `div.botonHeader > div.headerMenu > ul > li:nth-child(${
              i + 1
            }) > a > p`
          );

          itemMenu1_p.style.cssText = `animation:fade-li ${
            900 + differences
          }ms ${differences}ms cubic-bezier(.39,.11,.18,1.51) forwards`;
        }

        /*
        itemMenu1.style.cssText =
          "animation:fade-li 900ms cubic-bezier(.39,.11,.18,1.51) forwards";
*/

        //esto son las etiquestas P
        /*const itemMenu1_p = document.querySelector(
          "div.botonHeader > div.headerMenu > ul > li:nth-child(1) > a > p"
        );

        itemMenu1_p.style.cssText =
          "animation:fade-li 1300ms cubic-bezier(.39,.11,.18,1.51) forwards";
        */
      }, 0);
    }
  }, [openMenu]);

  const clickScrollInto = (place, event) => {
    const element_a = document.querySelector(`#${place}`);
    element_a.click();
    //no usare esto tengo algunos problemas
    /*const elementCoordenadas = document.querySelector(`${place}`).getBoundingClientRect()


    console.log(elementCoordenadas)
    window.scrollTo({
      top: elementCoordenadas.top,
      behavior: "smooth",
    });*/
  };

  const clickRedirect = () => {};
  return (
    <div className="header">
      <div className="patoContainer">
        <img src={perfil} alt="error" className="pato"></img>
      </div>
      <div className="nav">
        <ul>
          <li onClick={(event) => clickScrollInto("home-a", event)}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="estate"
              >
                <path
                  fill="lightgray"
                  d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
                ></path>
              </svg>
            </span>
            <a href="#home" id="home-a">
              Home
            </a>
          </li>
          <li onClick={(event) => clickScrollInto("about-a", event)}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="user"
              >
                <path
                  fill="lightgray"
                  d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
                ></path>
              </svg>
            </span>
            <a href="#about" id="about-a">
              About
            </a>
          </li>
          <li onClick={(event) => clickScrollInto("skills-a", event)}>
            <span>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="lightgray"
                  d="M458.949 16.902c-21.23 45.511-62.196 13.713-94.89 12.604-92.464-.8-95.254 47.352-141.296 77.017-9.189-10.02-23.774-16.38-46.738-15.117-15.928.876-30.343 6.34-40.974 15.895-12.34 10.738-21.335 25.549-21.942 39.84 21.03-5.316 41.304-4.385 45.871 5.46 11.508 24.813-21.37 15.961-44.745 23.397-1.248.396-2.472.81-3.684 1.225-2.757 7.733-6.024 15.131-6.024 20.482 0 16.945 13.686 6.16 19.648 20.88.85 2.099 3.778 8.625 12.238 16.833 1.367 1.328 46-35.114 47.487-33.9-14.835 31.6-38.787 42.74-41.127 43.975-21.237 11.202-46.726 20.42-55.691 38.13l-.522-.168s-27.58 65.425-33.509 97.908c.575 16.747 25.672 12.545 25.672 12.545l39.527-11.785 4.686 16.94 119.482-150.627c-26.122-15.67-18.045-38.588-21.927-58.778 13.787-22.475 21.9-34.062 14.597-56.68 7.122-7.318 16.216-14.785 26.61-16.779 21.267-4.08 60.016 16.198 80.997 16.47 27.78.362 42.716-14.296 54.352-31.905-10.666 3.502-14.712 3.5-8.703-15.065-14.177 5.175-23.315 22.6-48.998 18.526-23.87-3.787-60.077-11.021-80.065-4.354 33.926-17.423 60.548-35.253 96.777-39.463 42.453 3.026 80.56 32.916 102.89-17.031zM340.169 153.78l-39.003 49.065 16.54 11.713 39.008-49.067zm-205.509 1.657c-5.303 0-10.607 1.195-10.607 3.584 2.163 2.943 9.788 5.337 13.459 5.42 5.858 0 7.755-.644 7.755-5.42 0-2.389-5.304-3.584-10.607-3.584zm140.864 47.156l-11.702 14.172L312.9 250.85l11.701-14.172zm-4.423 35.984L100.574 453.551s-10.247 8.425-.05 16.773c10.47 8.57 18.622-3.654 18.622-3.654L289.67 251.695zm18.932 41.914s-20.687 26.845-31.22 40.12c-42.147 53.119-125.718 156.698-127.942 158.156l.068 16.332H240.24l15.365-115.264 44.661 9.677s17.915 1.914 17.186-13.823c-4.626-21.768-19.228-74.864-27.42-95.198zm-22.714 48.874l8.746 21.61-14.493-3.73z"
                />
              </svg>
            </span>
            <a href="#skills" id="skills-a">
              Skills
            </a>
          </li>
          <li onClick={(event) => clickScrollInto("portfolio-a", event)}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="bag-alt"
              >
                <path
                  fill="lightgray"
                  d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.71,21.71,0,0,0,8,1.53A21.75,21.75,0,0,0,20,13Zm0-7.69a19.89,19.89,0,0,1-16,0V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
                ></path>
              </svg>
            </span>
            <a href="#portfolio" id="portfolio-a">
              Portfolio
            </a>
          </li>
          <li onClick={(event) => clickScrollInto("contact-a", event)}>
            <span>
              <svg
                fill="lightgray"
                height="25px"
                width="25px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="message"
              >
                <path
                  fill="#undefined"
                  d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
                ></path>
              </svg>
            </span>
            <a href="#contact" id="contact-a">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="botonHeader">
        <div className="botonReal" onClick={clickBotonMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {openMenu ? <HeaderMenu></HeaderMenu> : ""}
      </div>
    </div>
  );
}

function Home() {
  const goTo = (numPosicion) => {
    if (numPosicion == 1) {
      const a = document.querySelector(
        "#home > div.left > div:nth-child(1) > a"
      );
      a.click();
    } else if (numPosicion == 2) {
      const a = document.querySelector(
        "#home > div.left > div:nth-child(2) > a"
      );
      a.click();
    } else if (numPosicion == 3) {
      const a = document.querySelector(
        "#home > div.left > div:nth-child(3) > a"
      );
      a.click();
    }
  };
  return (
    <div className="home" id="home">
      <div className="left">
        <div onClick={() => goTo(1)}>
          <a href="https://github.com/pskey35" target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
            </svg>
          </a>
        </div>
        <div onClick={() => goTo(2)}>
          <a
            href="https://www.linkedin.com/in/jayme-ln-7597a6268/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
              fill="white"
            >
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
            </svg>
          </a>
        </div>
        <div onClick={() => goTo(3)}>
          <a href="https://wa.me/51906090587" target="_blank">
            <svg
              version="1.1"
              fill="white"
              width="28px"
              height="28px"
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
                />
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
      </div>
      <div className="right">
        <div className="right-texto">
          <p className="texto-nombre">
            <span>Jayme Ln</span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home__hand"
            >
              <path
                d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                fill="#EBA352"
              ></path>
              <path
                d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                fill="#EBA352"
              ></path>
              <path
                d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                fill="#EBA352"
              ></path>
              <path
                d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                fill="#EBA352"
              ></path>
              <path
                d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                fill="#EBA352"
              ></path>
            </svg>
          </p>
          <div className="texto-dev">
            <span className="linea"></span>
            <span className="front">Full-stack Developer</span>
          </div>
          <p className="texto-dev2">
            hey there! im jayme Ln, a beginner full-stack developer
          </p>
          <a href="#about">
            <div className="texto-boton">
              <span className="more">know more</span>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"></path>
                  <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"></path>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="right-image"></div>
      </div>
    </div>
  );
}

function About() {
  const { cvOpen, setCvOpen } = useContext(ContextGlobal);

  //esto abre el modal del CV
  const clickMyCv = () => {
    //ocultamos el scroll
    document.body.style.cssText = "overflow:hidden";
    const cv_caja = document.querySelector(".cv-caja");

    const cv_contentElement = document.querySelector(".cv-content");

    //primero tenemos que terminar la animacion y luego desaparecemos la caja

    cv_caja.style.cssText = "visibility:visible;opacity:1";
    cv_contentElement.style.cssText = "animation:fadeCV 50ms linear forwards";
    /*cv_contentElement.addEventListener("animationend", () => {
      cv_caja.style.cssText = "visibility:visible";
    });*/
  };

  useEffect(() => {
    const tituloElement = document.querySelector(".about");
    const patoContainer = document.querySelector(".patoContainer");

    const observador = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            patoContainer.style.cssText = "animation:goUp 140ms ease forwards";
          } else {
            //no entiendo porque  no funciona
            patoContainer.style.cssText = "opacity:1";
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observador.observe(tituloElement);
  }, []);

  return (
    <div className="about" id="about">
      <div className="titulo">
        <h3>About me</h3>
        <p>my introduction</p>
      </div>
      <div className="about-container">
        <div className="container-left">
          <div className="about-image">
            {/*   <div className="prueba">
            #######
            </div>*/}

            {<img src="/perfil.jpg" alt="" />}
          </div>
          <div className="me">
            <p>Jayme Ln</p>
            <p>Full stack Developer</p>
          </div>
        </div>
        <div className="container-right">
          <div className="iconos">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="award-alt"
                fill="white"
                width="25px"
                height="25px"
              >
                <path
                  fill="#undefined"
                  d="M12,1A7,7,0,0,0,7,12.89V22a1,1,0,0,0,1.45.89L12,21.12l3.55,1.77A1,1,0,0,0,16,23a1,1,0,0,0,.53-.15A1,1,0,0,0,17,22V12.89A7,7,0,0,0,12,1Zm3,19.38-2.55-1.27a1,1,0,0,0-.9,0L9,20.38V14.32a7,7,0,0,0,2,.6V16a1,1,0,0,0,2,0V14.92a7,7,0,0,0,2-.6ZM12,13a5,5,0,1,1,5-5A5,5,0,0,1,12,13Z"
                />
              </svg>
              <p style={{ color: "white" }}>Experience</p>
              <p style={{ color: "gray", fontSize: "14px" }}>not yet</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="briefcase-alt"
                fill="white"
                height="25px"
                widht="25px"
              >
                <path
                  fill="#undefined"
                  d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
                />
              </svg>
              <p style={{ color: "white" }}>Completed</p>
              <p style={{ color: "gray", fontSize: "14px" }}>some few</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="18px"
                height="18px"
                fill="white"
              >
                <path d="M 36.875 -0.03125 C 32.851563 0.0820313 27.898438 0.722656 25.09375 3.53125 L 24.40625 4.1875 C 19.851563 8.773438 19.886719 15.988281 24.46875 20.59375 L 29.46875 25.59375 C 31.691406 27.824219 34.609375 29.0625 37.6875 29.0625 C 40.730469 29.0625 43.617188 27.824219 45.8125 25.625 L 46.46875 24.96875 C 49.957031 21.484375 49.988281 14.289063 50 11.21875 C 50.003906 10.679688 49.882813 10.257813 49.59375 9.96875 C 49.359375 9.734375 49.023438 9.625 48.6875 9.625 C 48.152344 9.625 47.738281 9.9375 47.53125 10.125 L 41.03125 16.65625 C 40.894531 16.679688 40.578125 16.71875 39.96875 16.71875 C 37.78125 16.71875 34.726563 16.292969 33.96875 15.96875 C 33.464844 14.867188 33.074219 10.042969 33.40625 9.03125 C 34.421875 8.015625 39.960938 2.445313 40 2.40625 C 40.175781 2.207031 40.75 1.515625 40.40625 0.75 C 40.273438 0.457031 39.914063 -0.0273438 38.96875 -0.03125 L 38.53125 -0.03125 C 38.003906 -0.03125 37.449219 -0.046875 36.875 -0.03125 Z M 21.375 19.9375 L 2.3125 37.28125 C 0.292969 39.304688 -1.496094 43.9375 2.3125 47.75 C 4.066406 49.503906 5.902344 49.96875 7.375 49.96875 C 7.753906 49.96875 8.085938 49.925781 8.40625 49.875 C 10.3125 49.589844 11.902344 48.601563 12.78125 47.71875 L 30.09375 28.65625 L 28.5 27.4375 L 22.59375 21.53125 Z" />
              </svg>
              <p style={{ color: "white" }}>Support</p>
              <p
                style={{
                  color: "gray",
                  fontSize: "14px",
                }}
              >
                i'm the carry
              </p>
            </div>
          </div>
          <div className="right-texto">
            i am full stack developer. intersted in design web development and
            learning new technologies. with de goal of being o creative
            developer viewCV
          </div>
          <a className="cv" onClick={clickMyCv}>
            <div className="right-boton">
              <span className="botonDownload">view CV</span>
              <svg
                fill="white"
                style={{
                  position: "absolute",
                  zIndex: "10",
                  top: "0px",
                  bottom: "0px",
                  margin: "auto",
                }}
                width="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
//"./src/imgPortafolio/linux.png"
/*https://www.vectorlogo.zone/logos/mysql/mysql-official.svg
mysql*/
function Skills() {
  useEffect(() => {
    const container = ".container";
    const text = ["", "", "", "", "", "", "", "", "", "", ""];

    const options = {
      radius: 200,
      maxSpeed: "slow",
      initSpeed: "slow",
      keep: true,
      containerClass: "circulo",
      itemClass: "items",
    };

    TagCloud(container, text, options);

    const span1 = document.querySelector(".circulo .items:nth-child(1)");
    span1.style.backgroundImage = "";
  }, []);
  return (
    <div className="skills" id="skills">
      <div className="estr"></div>
      <div className="estr2"></div>
      <div className="estr3"></div>
      <span className="container">
        <div className="container-texto">Skills</div>
        <div className="sol"></div>
      </span>
    </div>
  );
}

function Portfolio() {
  /*
  useEffect(() => {
    const hijo = document.querySelector(".portfolio").children;
    const width = hijo[1].clientWidth;
    const height = hijo[1].clientHeight;
    //esto es para la rotacion de las cards de mis proyectos
    for (let i = 0; i < hijo.length; i++) {
      hijo[i].addEventListener("mousemove", (event) => {
        const { layerX, layerY } = event;
        const yRotation = ((layerX - width / 2) / width) * 30;

        const xRotation = ((layerY - height / 2) / height) * 20;
        if (xRotation < -30 || xRotation > 30) {
          const string = `perspective(1000px)
          rotateX(${15}deg)
          rotateY(${yRotation}deg)
          scale3d(1,1,1)`;
          hijo[i].style.transform = string;
        } else {
          const string = `perspective(1000px)
          rotateX(${xRotation}deg)
          rotateY(${yRotation}deg)
          scale3d(1,1,1)`;
          hijo[i].style.transform = string;
        }
      });

      hijo[i].addEventListener("mouseout", (e) => {
        const string = "perspective(none)";
        hijo[i].style.transform = string;
      });
    }
  }, []);
*/

  const hoverEffect = (event) => {
    for (const card of document.getElementsByClassName("caja")) {
      const rect = card.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio" onMouseMove={hoverEffect}>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              <a
                href="https://ecommerce-nine-psi-92.vercel.app/"
                target="_blank"
              >
                <img
                  src="./restaurant.PNG"
                  alt="error"
                  style={{ objectPosition: "right" }}
                />
              </a>
            </div>
            <div className="caja-titulo">
              <div>Ecommerce</div>
              <a href="https://github.com/pskey35/ecommerce" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                </svg>
              </a>
            </div>
            <div className="caja-texto">
              esto es un ecommerce para un restaurant en donde se muestra los
              productos a vender en este caso platillos de un restaurant.Los
              usuarios podrán seleccionar sus platillos favoritos y agregarlos
              al carrito con facilidad
              <p style={{ color: "gray", marginTop: "10px" }}>
                para esta aplicacion he usado vite como entorno de desarrollo
              </p>
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              <a
                href="https://youtube-clone-ruddy-iota.vercel.app/"
                target="_blank"
              >
                <img
                  src="./youtube.PNG"
                  alt="error"
                  style={{ objectPosition: "left" }}
                />
              </a>
            </div>
            <div className="caja-titulo">
              <div>Youtube Clone</div>
              <a href="https://github.com/pskey35/youtubeClone" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                </svg>
              </a>
            </div>
            <div className="caja-texto">
              Es una plataforma increíble que te permitirá disfrutar de tus
              videos favoritos, descubrir contenido nuevo y conectarte con una
              comunidad apasionada de creadores. Es una opción perfecta si
              buscas una experiencia sencilla y directa para ver tus videos
              favoritos y descubrir nuevo contenido.
              <p style={{ color: "gray", marginTop: "10px" }}>
                esta aplicacion es un clon de youtube hecha en react js
              </p>
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              <a href="https://calculadora-steel-zeta.vercel.app/">
                <img src="./calculadora.PNG" alt="error" />
              </a>
            </div>
            <div className="caja-titulo">
              <div>Calculadora</div>
              <a href="https://github.com/pskey35/calculadora" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                </svg>
              </a>
            </div>
            <div className="caja-texto">
              Esta calculadora ha sido creada desde cero utilizando únicamente
              JavaScript, lo que demuestra mi habilidad para trabajar con este
              lenguaje de programación fundamental. Mi proyecto de calculadora
              ofrece una interfaz intuitiva y fácil de usar. Los usuarios podrán
              realizar operaciones matemáticas básicas, como sumar, restar,
              multiplicar y dividir, con solo unos pocos clicks
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              {/*<img src="/assets/html5.webp" alt="error" />*/}
              <a href="https://hacker-simulator.vercel.app/" target="_blank">
                <img
                  src="./dog.PNG"
                  alt="error"
                  style={{ objectPosition: "left" }}
                ></img>
              </a>
            </div>
            <div className="caja-titulo">
              <div>Hacker simulator</div>
              <a
                href="https://github.com/pskey35/hacker-simulator"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                </svg>
              </a>
            </div>
            <div className="caja-texto">
              Esta web simula la experiencia de ser un hacker real, donde cada
              letra que se escribe ejecuta comandos como si estuvieras en una
              terminal. En esta web, los usuarios podrán sumergirse en el
              emocionante mundo de la piratería informática de manera segura y
              legal. La interfaz ha sido diseñada para simular una terminal de
              línea de comandos, con un estilo retro y elementos visuales que
              evocan la atmósfera de un entorno hacker
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const input1 = useRef();
  const input2 = useRef();
  //esto sirve para contar clicks hechos en el boton "enviar"
  //const [contador,setContador] = useState({document.cookie.valor})
  const objetoCookies = () => {
    const cook = document.cookie;
    //aqui tiene que ser si o si con el espacio "; "
    const array = cook.split("; ");
    const cookObject = {};
    for (let i = 0; i < array.length; i++) {
      const separador = array[i].split("=");
      const key = separador[0];
      const valor = separador[1];
      cookObject[key] = valor;
    }

    return cookObject;
  };

  const cook = objetoCookies();
  //aqui verificamos si existe la cookie conteo
  //si existe que inicie con su valor guardado sino con el valor 0
  const [cont, setCont] = useState(
    cook.conteo !== undefined ? parseInt(cook.conteo) : 0
  );
  //console.log(cont);
  // console.log("-------arriba---------");

  //esto de aqui es el load del boton "enviando..."
  const [load, setLoad] = useState(false);

  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState("normal");
  //boleanoAlerta si es true se muestra un mensaje de que ya tiene 3 mensajes enviados
  const [boleanoAlerta, setBoleanoAlerta] = useState(false);

  //en alerta se le pone el tiempo "espera 5 horas para volver a enviar mensajes"
  const [alerta, setAlerta] = useState("");

  const ErrorEnvio = () => {
    return (
      <>
        <svg
          fill="red"
          viewBox="0 0 16 16"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00016 1.8335C4.59441 1.8335 1.8335 4.59441 1.8335 8.00016C1.8335 11.4059 4.59441 14.1668 8.00016 14.1668C11.4059 14.1668 14.1668 11.4059 14.1668 8.00016C14.1668 4.59441 11.4059 1.8335 8.00016 1.8335ZM0.833496 8.00016C0.833496 4.04212 4.04212 0.833496 8.00016 0.833496C11.9582 0.833496 15.1668 4.04212 15.1668 8.00016C15.1668 11.9582 11.9582 15.1668 8.00016 15.1668C4.04212 15.1668 0.833496 11.9582 0.833496 8.00016ZM8.00016 4.16683C8.27631 4.16683 8.50016 4.39069 8.50016 4.66683V8.00016C8.50016 8.27631 8.27631 8.50016 8.00016 8.50016C7.72402 8.50016 7.50016 8.27631 7.50016 8.00016V4.66683C7.50016 4.39069 7.72402 4.16683 8.00016 4.16683ZM8.00016 10.0002C8.2763 10.0002 8.50016 10.224 8.50016 10.5002L8.50016 10.5835C8.50017 10.8596 8.27631 11.0835 8.00017 11.0835C7.72403 11.0835 7.50017 10.8596 7.50016 10.5835L7.50016 10.5002C7.50016 10.224 7.72402 10.0002 8.00016 10.0002Z"
          ></path>
        </svg>
        <p style={{ color: "red", marginLeft: "6px" }}>Error</p>
      </>
    );
  };

  const CorrectoEnvio = () => {
    return (
      <>
        <svg
          className="em68LXdMm8ygrRPqXGbx TBxJ_8X_wmCUCyvqlVj8 Hn7C9np7FdLcb_wuwZee L9La1RMJmAL5ILZyihV1"
          dataIcon="true"
          viewBox="0 0 16 16"
          fill="green"
          height="20px"
          width="20px"
        >
          <g transform="translate(3.23 4.823)">
            <path d="M3.177,7.353A1,1,0,0,1,2.47,7.06L-.707,3.884a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0l2.47,2.47L8.835-.708a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L3.883,7.061A1,1,0,0,1,3.177,7.353Z"></path>
          </g>
        </svg>
        <p style={{ marginLeft: "6px", color: "green" }}>sent out</p>
      </>
    );
  };

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const envio = () => {
    if (cont < 3) {
      const input1valor = input1.current.value.trim();
      const input2valor = input2.current.value.trim();
      if (input1valor.length > 3 && input2valor.length > 3) {
        //setCont(cont => cont+1); esto de aqui no funciona
        setCont((cont) => {
          cont = cont + 1;
          const fecha = new Date();
          //getTime obtiene milisegundos desde 1970(ephoc) hasta la hora actual
          const tiempoExpiracion = fecha.getTime() + 24 * 60 * 60 * 1000; //esto obtiene cuantos milisegundos tiene un dia adelantado desde 1970 ephoc
          const fechaExpiracion = new Date(tiempoExpiracion);
          // console.log("------cookies------");

          document.cookie = `conteo=${cont}; expires=${fechaExpiracion}`;
          // console.log("------conteo---------");
          // console.log("cuenta: " + cont);
          if (cont == 3) {
            document.cookie = `cookieExpiracion=${fechaExpiracion.getDate()}; expires=${fechaExpiracion}`;
          }
          return cont;
        });
        //alert("verificado");
        const input1 = input1valor.replace(/\s+/g, " ");
        const input2 = input2valor.replace(/\s+/g, " ");
        setLoad(true);

        //setTimeout(() => {
        //  setLoad(false); // aqui poner false despues de pasar los 10 segundos y salir. si es correcto enviado o incorrecto enviado
        //setMensaje("no se pudo enviar");
        /* setMensaje(Errorenvio)
          setEnviado("incorrecto");
          setTimeout(() => {
            setEnviado("normal");
            setMensaje("");
          }, 5000);
        }, 3000);*/

        //en local poner fetch("localhost:8000/data")
        fetch("/data", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          //credentials: "include",
          //comenta el credentials solo sirve en local,en vercel No
          body: JSON.stringify({
            correo: input1,
            mensaje: input2,
          }),
        })
          .then((e) => e.json())
          .then((e) => {
            //console.log(e);
            setLoad(false);
            if (e.error == null) {
              setMensaje(<CorrectoEnvio />);
              setEnviado("correcto");
            } else {
              setMensaje(<ErrorEnvio />);
              setEnviado("incorrecto");
            }
            setTimeout(() => {
              setMensaje("");
              setEnviado("");
            }, 5000);
          });
      }
      /*
        //esto es igual que arriba?
       setCont(cont=>cont+1)
       const fecha = new Date();
        const tiempoExpiracion = fecha.getTime() + (24 * 60 * 60 * 1000); //esto obtiene cuantos milisegundos tiene un dia
        const fechaExpiracion = new Date(tiempoExpiracion);
        console.log("------cookies------");

        document.cookie = `conteo=${cont}; expires=${fechaExpiracion}`;
        console.log(document.cookie);
        console.log("------conteo---------");
        console.log("cuenta: "+cont);
       */
    } else if (cont == 3) {
      setBoleanoAlerta(true); //si es true se muestra la alerta
      const fech = new Date();
      if (cook.cookieExpiracion == fech.getDate()) {
        //aqui falta borrar las cookies de conteo y de expiracion
        document.cookie = "conteo=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "conteo=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        return "";
      }

      //alert("tienes mas de 3 envios no puedes enviar mas");
      setAlerta(cook.cookieExpiracion + " de " + meses[fech.getMonth()]);
    }
  };

  //esto valida una clase
  const claseEnvio = (en) => {
    if (en == "normal") {
      return "";
    } else if (en == "correcto") {
      return "correcto";
    } else if (en == "incorrecto") {
      return "incorrecto";
    }
  };

  //esto es jsx para mostrar el loader
  const Sending = () => {
    return (
      <>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </>
    );
  };

  const Alerta = () => {
    return (
      <div className="container-alerta">
        <div className="alerta">
          <div className="top">
            <svg
              fill="red"
              viewBox="0 0 16 16"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.00016 1.8335C4.59441 1.8335 1.8335 4.59441 1.8335 8.00016C1.8335 11.4059 4.59441 14.1668 8.00016 14.1668C11.4059 14.1668 14.1668 11.4059 14.1668 8.00016C14.1668 4.59441 11.4059 1.8335 8.00016 1.8335ZM0.833496 8.00016C0.833496 4.04212 4.04212 0.833496 8.00016 0.833496C11.9582 0.833496 15.1668 4.04212 15.1668 8.00016C15.1668 11.9582 11.9582 15.1668 8.00016 15.1668C4.04212 15.1668 0.833496 11.9582 0.833496 8.00016ZM8.00016 4.16683C8.27631 4.16683 8.50016 4.39069 8.50016 4.66683V8.00016C8.50016 8.27631 8.27631 8.50016 8.00016 8.50016C7.72402 8.50016 7.50016 8.27631 7.50016 8.00016V4.66683C7.50016 4.39069 7.72402 4.16683 8.00016 4.16683ZM8.00016 10.0002C8.2763 10.0002 8.50016 10.224 8.50016 10.5002L8.50016 10.5835C8.50017 10.8596 8.27631 11.0835 8.00017 11.0835C7.72403 11.0835 7.50017 10.8596 7.50016 10.5835L7.50016 10.5002C7.50016 10.224 7.72402 10.0002 8.00016 10.0002Z"
              ></path>
            </svg>
            <div className="salir" onClick={() => setBoleanoAlerta(false)}>
              <svg
                className="ekis"
                viewBox="0 0 415.188 415.188"
                width="20"
                height="20"
                fill="red"
              >
                <path
                  d="M412.861,78.976c3.404-6.636,2.831-14.159-0.15-20.404c0.84-7.106-1.02-14.321-7.746-19.855
c-6.262-5.151-12.523-10.305-18.781-15.457c-11.005-9.055-28.237-11.913-38.941,0c-48.619,54.103-99.461,105.856-152.167,155.725
c-39.185-36.605-78.846-72.713-118.223-108.868c-13.82-12.693-33.824-8.71-42.519,6.411c-12.665,6.286-22.931,14.481-31.42,28.468
c-4.042,6.664-3.727,15.076,0,21.764c25.421,45.578,74.557,85.651,114.957,122.529c-5.406,4.839-10.772,9.724-16.287,14.461
c-54.43,46.742-91.144,76.399-23.029,124.325c0.919,0.647,1.856,0.504,2.789,0.882c1.305,0.602,2.557,1.026,4.004,1.264
c0.45,0.017,0.87,0.093,1.313,0.058c1.402,0.114,2.774,0.471,4.195,0.192c36.621-7.18,70.677-35.878,101.576-67.48
c30.1,29.669,62.151,58.013,97.395,74.831c8.391,4.005,18.395,1.671,24.855-3.931c10.832,0.818,20.708-5.913,25.665-15.586
c0.734-0.454,1.207-0.713,2.002-1.21c15.748-9.838,17.187-29.431,5.534-42.936c-26.313-30.492-54.284-59.478-82.798-87.95
C316.426,196.043,380.533,141.939,412.861,78.976z"
                ></path>
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
            </div>
          </div>
          <p style={{ color: "gray" }}>
            solo puedes enviar 3 mensajes por dia espera hasta mañana {alerta}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-container" id="contact">
      <h1>Contact me</h1>
      <h6>get in touch</h6>
      <div className="contact">
        <div className="contact-left">
          <p>talk to me</p>
          <div className="email" style={{ padding: "15px 80px" }}>
            <div className="email-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="fast-mail"
                fill="white"
                height="45px"
                width="45px"
              >
                <path
                  fill="#undefined"
                  d="M4.79,10.5h-2a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2ZM21.57,7.66l0-.06,0,0h0A3,3,0,0,0,19.2,6.5H11.27a3,3,0,0,0-2,.74h0v0A2.93,2.93,0,0,0,8.31,9l-.88,5a3,3,0,0,0,.66,2.45,3,3,0,0,0,2.29,1.07h7.94a3,3,0,0,0,3-2.48l.88-5A3,3,0,0,0,21.57,7.66Zm-2.74.84-3.4,2.76a1,1,0,0,1-1.38-.12L11.72,8.5Zm.48,6.17a1,1,0,0,1-1,.83H10.38a1,1,0,0,1-.76-.36,1,1,0,0,1-.22-.81l.8-4.53,2.35,2.66a3,3,0,0,0,4.14.35L20.13,10ZM5.79,6.5h-3a1,1,0,1,0,0,2h3a1,1,0,0,0,0-2Z"
                ></path>
              </svg>
            </div>
            <p>Email</p>
            <p className="correo">jayme35371@gmail.com</p>
            <a
              href="mailto:jayme35371@gmail.com"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span>write me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flecha"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="arrow-right"
                  width="20px"
                  height="20px"
                  fill="white"
                >
                  <path
                    fill="#undefined"
                    d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                  />
                </svg>
              </p>
            </a>
          </div>
          <div className="whatsapp">
            <div className="whatsapp-image">
              <svg
                version="1.1"
                fill="white"
                width="28px"
                height="28px"
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
                  />
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
            </div>
            <p>WhatsApp</p>
            <p>+51 906 090 587</p>
            <a
              href="https://wa.me/51906090587"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <span>wa me</span>
              <svg
                fill="white"
                className="flecha"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="arrow-right"
              >
                <path
                  fill="#undefined"
                  d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <p>write me your project</p>
          <div className="mail-input">
            <span>Mail</span>
            <input placeholder="insert your email" ref={input1}></input>
          </div>
          <div className="textarea-input">
            <span>Message</span>
            <textarea
              minlegth="10"
              required
              cols="30"
              rows="10"
              placeholder="Write your message"
              className="email-textarea"
              ref={input2}
            ></textarea>
          </div>
          <div
            className={`botonEnviar ${load ? "disabled" : ""} ${claseEnvio(
              enviado
            )}`}
            onClick={envio}
          >
            {load ? (
              <Sending />
            ) : (
              mensaje || (
                <>
                  <span>send Message</span>
                  <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path
                      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                      fill="var(--container-color)"
                    ></path>
                    <path
                      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                      fill="var(--container-color)"
                    ></path>
                  </svg>
                </>
              )
            )}
          </div>
        </div>
      </div>
      {/*aqui se pone la alerta de que si ya alcanzo los 4 envios de correo*/}
      {boleanoAlerta ? <Alerta /> : ""}
    </div>
  );
}

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

function HeaderMenu() {
  return (
    <div className="headerMenu">
      <ul className="menu-center">
        <li>
          <a href="#home">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="estate"
                fill="white"
                height="25px"
                width="25px"
              >
                <path
                  fill="#undefined"
                  d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
                ></path>
              </svg>
            </span>
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="#about">
            <span>
              <svg
                fill="white"
                width="25px"
                height="25px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="user"
              >
                <path
                  fill="#undefined"
                  d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
                ></path>
              </svg>
            </span>
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "relative", left: "3px" }}
              >
                <path
                  fill="lightgray"
                  d="M458.949 16.902c-21.23 45.511-62.196 13.713-94.89 12.604-92.464-.8-95.254 47.352-141.296 77.017-9.189-10.02-23.774-16.38-46.738-15.117-15.928.876-30.343 6.34-40.974 15.895-12.34 10.738-21.335 25.549-21.942 39.84 21.03-5.316 41.304-4.385 45.871 5.46 11.508 24.813-21.37 15.961-44.745 23.397-1.248.396-2.472.81-3.684 1.225-2.757 7.733-6.024 15.131-6.024 20.482 0 16.945 13.686 6.16 19.648 20.88.85 2.099 3.778 8.625 12.238 16.833 1.367 1.328 46-35.114 47.487-33.9-14.835 31.6-38.787 42.74-41.127 43.975-21.237 11.202-46.726 20.42-55.691 38.13l-.522-.168s-27.58 65.425-33.509 97.908c.575 16.747 25.672 12.545 25.672 12.545l39.527-11.785 4.686 16.94 119.482-150.627c-26.122-15.67-18.045-38.588-21.927-58.778 13.787-22.475 21.9-34.062 14.597-56.68 7.122-7.318 16.216-14.785 26.61-16.779 21.267-4.08 60.016 16.198 80.997 16.47 27.78.362 42.716-14.296 54.352-31.905-10.666 3.502-14.712 3.5-8.703-15.065-14.177 5.175-23.315 22.6-48.998 18.526-23.87-3.787-60.077-11.021-80.065-4.354 33.926-17.423 60.548-35.253 96.777-39.463 42.453 3.026 80.56 32.916 102.89-17.031zM340.169 153.78l-39.003 49.065 16.54 11.713 39.008-49.067zm-205.509 1.657c-5.303 0-10.607 1.195-10.607 3.584 2.163 2.943 9.788 5.337 13.459 5.42 5.858 0 7.755-.644 7.755-5.42 0-2.389-5.304-3.584-10.607-3.584zm140.864 47.156l-11.702 14.172L312.9 250.85l11.701-14.172zm-4.423 35.984L100.574 453.551s-10.247 8.425-.05 16.773c10.47 8.57 18.622-3.654 18.622-3.654L289.67 251.695zm18.932 41.914s-20.687 26.845-31.22 40.12c-42.147 53.119-125.718 156.698-127.942 158.156l.068 16.332H240.24l15.365-115.264 44.661 9.677s17.915 1.914 17.186-13.823c-4.626-21.768-19.228-74.864-27.42-95.198zm-22.714 48.874l8.746 21.61-14.493-3.73z"
                ></path>
              </svg>
            </span>
            <p>skills</p>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="bag-alt"
                style={{ width: "25px", height: "25px" }}
              >
                <path
                  fill="lightgray"
                  d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.71,21.71,0,0,0,8,1.53A21.75,21.75,0,0,0,20,13Zm0-7.69a19.89,19.89,0,0,1-16,0V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
                ></path>
              </svg>
            </span>
            <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>
              <svg
                fill="white"
                height="25px"
                width="25px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="message"
              >
                <path
                  fill="#undefined"
                  d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
                ></path>
              </svg>
            </span>
            <p>Contact</p>
          </a>
        </li>
      </ul>
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
          <div className="download">
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
          </div>
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
        <div className="btnDownload-mbl">
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
        </div>
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
      const saludoTexto = document.querySelector(
        "#home > div.right > div.right-texto > p.texto-dev2"
      );
      const boton = document.querySelector(
        "#home > div.right > div.right-texto > a > div"
      );

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

      portfolioTitulo.style = "opacity:1";
      caja1.style = "opacity:1";
      caja2.style = "opacity:1";
      caja3.style = "opacity:1";
      caja4.style = "opacity:1";

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

      const x = document.querySelector(".ventana");
      intervalo = setInterval(() => {
        const caja = document.querySelector("#jaymePortfolio");
        x.remove();
        console.log("cambio");
        caja.appendChild(x);

        const bodyHeight = window.innerWidth;
        console.log(bodyHeight);
      }, 3000);
      /*const x = document.querySelector(".ventana")
  setInterval(() => {
      const caja = document.querySelector("#jaymePortfolio");
      x.remove();
      console.log("cambio")
     caja.appendChild(x)

      const bodyHeight = window.innerWidth
      console.log(bodyHeight)
    },3000);*/
    } else if (borrarVentana == false) {
      window.addEventListener("scroll", scrollVentana);
      clearInterval(intervalo);
      // console.log("limpieza")
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
      const data = await fetch("https://back-portfolio-xi.vercel.app/assets");
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
  /*
  useEffect(()=>{
    const x = document.querySelector(".ventana")
  
    setInterval(() => {
        const caja = document.querySelector("#jaymePortfolio");
        x.remove();
        console.log("cambio")
       caja.appendChild(x)
  
  
  
        const bodyHeight = window.innerWidth
        console.log(bodyHeight)
      },3000);
  },[])*/
  /*
  const x = document.querySelector(".ventana")
  
  setInterval(() => {
      const caja = document.querySelector("#jaymePortfolio");
      x.remove();
      console.log("cambio")
     caja.appendChild(x)



      const bodyHeight = window.innerWidth
      console.log(bodyHeight)
    },3000);*/

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

const ContextGlobal = createContext();

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

    //esto desactiva el click derecho del mouse
    document.addEventListener("contextmenu", function (event) {
      //lo desactivare de momento
      // event.preventDefault();
    });

    //tenemos que capturar el userAgent del usuario y luego calcular el window.innerHeight
    //lo guardamos en session storage y luego calculamos si

    //const x = document.querySelector(".ventana");
    //setTimeout(()=>{
    //  setBorrarVentana(true)
    //esto de aqui es en caso de que detectemos si estan usando la consola de chrome
    // },3000)

    //esto de aca verifica cada 3 segundos si hubo un cambio de pantalla
    //si es asi es porque seguro a abierto la consola de chrome devs

    //esto detecta si se abre el devtools
    addListener((isOpen) => {
      setShowBlockContainer(isOpen);
    });
    launch();

    //esto de aqui abajo no vale
    /*setInterval(() => {
      const caja = document.querySelector("#jaymePortfolio");
      x.remove();
      console.log("cambio")
     caja.appendChild(x)



      const bodyHeight = window.innerWidth
      console.log(bodyHeight)
    },3000);
//----*/
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
