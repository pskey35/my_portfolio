import Header from "./assets/components/header.jsx"
import "./assets/icons/ondas/ondas.scss";
import "./home.scss";


//icons - buttons
//import OndasCircles from "./assets/icons/ondas.jsx";
import OndasCircles from "./assets/icons/ondas/ondas.jsx";
import Button_Github from "./assets/Buttons/Button_github.jsx";
import Button_Linkedin from "./assets/Buttons/Button_linkedin.jsx";
import Button_Whatsapp from "./assets/Buttons/Button_whatsapp.jsx";
import IconKnowMore from "./assets/icons/know_more.jsx";
import IconSaludo from "./assets/icons/saludo.jsx";


import RightImage from "./assets/icons/rightImage/rightImage.jsx";






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

        <Button_Github height="30px" width="30px"
          to="https://github.com/pskey35"
          stroke="currentColor"
          fill="currentColor" />


        <Button_Linkedin
          width="30px"
          height="30px"
          to="https://www.linkedin.com/in/jayme-alejo-lino-7597a6268/"
          fill="white"
        />



        <Button_Whatsapp
          width="30px"
          height="30px"
          fill="currentColor"
        />




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

        <RightImage></RightImage>
      </div>
    </div>
  )
}


export default function Home() {
 

  return (
    <>
      <Header></Header>
      <HomeContent></HomeContent>
      <OndasCircles></OndasCircles>
    </>
  );
}

