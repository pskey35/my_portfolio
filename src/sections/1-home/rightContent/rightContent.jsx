import "./rightContent.scss"
import { IconSaludoMobile, IconSaludoDesktop } from "../assets/icons/saludo.jsx";
import RightImage from "../assets/icons/rightImage/rightImage.jsx";
import IconKnowMore from "../assets/icons/know_more.jsx";


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

export default function RightContent() {
    return (
        <div className="right">
            <div className="right-texto">
                <p className="texto-nombre">
                    <span>Jayme Ln</span>
                    <IconSaludoDesktop width="36px" height="36px"></IconSaludoDesktop>
                    <IconSaludoMobile width="36px" height="36px"></IconSaludoMobile>
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
    )
}