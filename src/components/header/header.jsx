import { useContext, useEffect } from "react"
import { ContextGlobal } from "../../App.jsx"
import "./header.scss"
import MobileNavHeader from "./mobile/header.jsx";
import DesktopNavHeader from "./desktop/header.jsx";






//este header es para Desktop
function Header() {
    const { openMenu, setOpenMenu } = useContext(ContextGlobal);



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
                //aqui animamos cada 0.x segundos su span osea las bolitas de hamburger
                /*   const itemMenu1 = document.querySelector(
                       "#jaymePortfolio > div > div.vista1 > div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(1) > a > span"
                   );*/
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

                /*    itemMenu1.style.cssText =
                        "animation:fade-li 900ms cubic-bezier(.39,.11,.18,1.51) forwards reverse";*/

                itemMenu2.style.cssText =
                    "animation:fade-li 900ms 180ms cubic-bezier(.39,.11,.18,1.51) forwards";

                itemMenu3.style.cssText =
                    "animation:fade-li 900ms 300ms cubic-bezier(.39,.11,.18,1.51) forwards";

                itemMenu4.style.cssText =
                    "animation:fade-li 900ms 500ms cubic-bezier(.39,.11,.18,1.51) forwards";

                itemMenu5.style.cssText =
                    "animation:fade-li 900ms 500ms cubic-bezier(.39,.11,.18,1.51) forwards";
            }, 0)
                ;
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
                        `div.header > div.botonHeader > div.headerMenu > ul > li:nth-child(${i + 1
                        }) > a > span`
                    );

                    const differences = animDuration * i;
                    itemIcon.style.cssText = `animation:fade-li ${900 + differences
                        }ms  ${differences}ms cubic-bezier(.39,.11,.18,1.51) forwards`;

                    //aqui le aplicaremos animacion a la etiqueta P del icono

                    const itemMenu1_p = document.querySelector(
                        `div.botonHeader > div.headerMenu > ul > li:nth-child(${i + 1
                        }) > a > p`
                    );

                    itemMenu1_p.style.cssText = `animation:fade-li ${900 + differences
                        }ms ${differences}ms cubic-bezier(.39,.11,.18,1.51) forwards`;
                }

            }, 0);
        }
    }, [openMenu]);

    const clickScrollInto = (place, event) => {
        const element_a = document.querySelector(`#${place}`);
        element_a.click();
    };





    return (
        <div className="header">



           <DesktopNavHeader></DesktopNavHeader>
            <MobileNavHeader></MobileNavHeader>




        </div>
    );

}
export default Header;