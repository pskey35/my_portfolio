
import {useEffect } from "react"
import { IconSettings, IconWork, IconExperience } from "./assets/icons.jsx";
import perfilImage from "./assets/image/jaymeAlejoLino.jpg"
//3-components
function CarryBlock() {

    return (
        <div>
            <div style={{ width: "18px", height: "18px" }}>
                <IconSettings width="100%" height="100%"></IconSettings>
            </div>

            <p style={{ color: "white" }}>Support</p>
            <p
                style={{
                    color: "gray",
                    fontSize: "14px",
                }}
            >
                i'm carry
            </p>
        </div>
    )
}



//2do block component
function WorkBlock() {
    return (
        <div>
            <IconWork width="18px" height="18px" fill="white"></IconWork>
            <p style={{ color: "white" }}>Completed</p>
            <p style={{ color: "gray", fontSize: "14px" }}>99%</p>
        </div>
    )
}


function ExperienceBlock() {
    return (
        <div>
            <IconExperience width="18px" height="18px" fill="white"></IconExperience>
            <p style={{ color: "white" }}>Experience</p>
            <p style={{ color: "gray", fontSize: "14px" }}>6 years</p>
        </div>
    )
}




const ClickButtonToMyCv = ({ width, height }) => {


    //esto abre el modal del CV
    const clickMyCv = () => {
        //ocultamos el scroll
        document.body.style.cssText = "overflow:hidden";
        const cv_caja = document.querySelector(".cv-caja");

        const cv_contentElement = document.querySelector(".cv-content");

        //primero tenemos que terminar la animacion y luego desaparecemos la caja
        cv_caja.style.cssText = "visibility:visible;opacity:1";
        cv_contentElement.style.cssText = "animation:fadeCV 50ms linear forwards";

    };


    return (

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
            
                >
                    <path
                        opacity="0.5"
                        d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                        stroke="#1C274C"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="#1C274C"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
        </a>
    )
}



function About() {








    useEffect(() => {
        const tituloElement = document.querySelector(".about");
        const perfilContainer = document.querySelector(".perfilContainer");

        const observador = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        perfilContainer.style.cssText = "animation:goUp 140ms ease forwards";
                    } else {
                        //no entiendo porque  no funciona
                        perfilContainer.style.cssText = "opacity:1";
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
                    
                        <img src={perfilImage} alt="" />
                    </div>
                    <div className="me">
                        <p>Jayme Ln</p>
                        <p>Full stack Developer</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="iconos">
                        {/*Block experience  */}
                        <ExperienceBlock></ExperienceBlock>

                        {/*work block*/}
                        <WorkBlock></WorkBlock>

                        {/*Block carry
                        3rd position
                        */}
                        <CarryBlock></CarryBlock>

                    </div>



                    {/*rightTExto*/}
                    <div className="right-texto">
                        I am a front-end developer with 1 year of experience in various web agencies. Interested in design, web development and
                        learning new technologies. with the aim of being creative
                        developer viewCV
                    </div>

                    <ClickButtonToMyCv width="100%" height="100%"></ClickButtonToMyCv>

                </div>


            </div>
        </div>
    );
}





export default About;