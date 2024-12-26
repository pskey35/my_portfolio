import { ContextGlobal } from "../../App";
import { useContext, useEffect } from "react"

export default function About() {
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
                            <p style={{ color: "gray", fontSize: "14px" }}>1 year</p>
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
                            <p style={{ color: "gray", fontSize: "14px" }}>80%</p>
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
                        I am a front-end developer with 1 year of experience in various web agencies. Interested in design, web development and
                        learning new technologies. with the aim of being creative
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
                </div>
            </div>
        </div>
    );
}