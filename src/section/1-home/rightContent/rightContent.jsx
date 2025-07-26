//esto aun no lo usare
import "./rightContent.scss"
import { IconSaludoMobile, IconSaludoDesktop } from "../assets/icons/saludo.jsx";
import RightImage from "../assets/icons/rightImage/rightImage.jsx";
import KnowMoreButton from "../../../components/KnowMoreButton.jsx";
import { motion } from "framer-motion";

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

                <KnowMoreButton />

            </div>

            <RightImage />
        </div>
    )
}