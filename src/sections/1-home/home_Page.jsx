import { useState } from "react";
import Header from "./assets/components/header.jsx"
import "./circles.scss"
import "./home.scss"
import OndasCircles from "./assets/icons/ondas.jsx";
import Button_Github from "./assets/Buttons/Button_github.jsx";
import Button_Linkedin from "./assets/Buttons/Button_linkedin.jsx";
import Button_Whatsapp from "./assets/Buttons/Button_whatsapp.jsx";

import IconKnowMore from "./assets/icons/know_more.jsx";
import IconSaludo from "./assets/icons/saludo.jsx";









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

        <Button_Github></Button_Github>
        <Button_Linkedin></Button_Linkedin>
        <Button_Whatsapp></Button_Whatsapp>
     



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

