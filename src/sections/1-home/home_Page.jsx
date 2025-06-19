import { useState } from "react";
import Header from "./assets/components/header.jsx"
import "./circles.scss"
import "./home.scss"
import OndasCircles from "./assets/icons/ondas.jsx";
import IconGithub from "./assets/icons/github.jsx";
import IconLinkedin from "./assets/icons/linkedin.jsx";
import IconWhatsapp from "./assets/icons/whatsapp.jsx";
import IconKnowMore from "./assets/icons/know_more.jsx";
import IconSaludo from "./assets/icons/saludo.jsx";




const BotonGithub = () => {
  return (
    <div >
      <a href="https://github.com/pskey35" target="_blank">
        <IconGithub></IconGithub>
      </a>
    </div>
  )
}

const BotonLinkedin = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/jayme-ln-7597a6268/" target="_blank">
        <IconLinkedin></IconLinkedin>
      </a>
    </div>
  )
}
const BotonWhatsapp = () => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=5491131234567" target="_blank">
        <IconWhatsapp></IconWhatsapp>
      </a>
    </div>
  )
}

const Button_Redirecto_to_About = () => {

  return (
    <a href="#about">
      <div className="texto-boton">
        <span className="more">Know more</span>
        <span className="icon">
          <IconKnowMore></IconKnowMore>
        </span>
      </div>
    </a>
  )
}

function HomeContent() {

  return (
    <div className="home" id="home">
      <div className="left">

        <BotonGithub></BotonGithub>
        <BotonLinkedin></BotonLinkedin>
        <BotonWhatsapp></BotonWhatsapp>



      </div>
      <div className="right">
        <div className="right-texto">
          <p className="texto-nombre">
            <span>Jayme Ln</span>
            <IconSaludo></IconSaludo>
          </p>
          <div className="texto-dev">
            <span className="linea"></span>
            <span className="front">Front-end Developer</span>
          </div>
          <p className="texto-dev2">
            Hey there! im jayme Ln, a Front-end Developer
          </p>

          <Button_Redirecto_to_About></Button_Redirecto_to_About>
     
        </div>

        <div className="right-image">

        </div>
      </div>
    </div>
  )
}


export default function Home() {
  //aqui se activa si se da click en el icono y se muestra el menu
  const [menu, setMenu] = useState(false);


  const funcionMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Header apareceFooter={funcionMenu}></Header>
      <HomeContent></HomeContent>
      <OndasCircles></OndasCircles>
    </>
  );
}

