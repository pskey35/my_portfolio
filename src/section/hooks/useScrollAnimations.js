import { useEffect } from "react";
import { anim } from "../1-home/animacion.jsx";
import { scrollAnimList } from "../page/scrollAnimations.js";
import selectors from "../page/selectors.js";
import { setStyle } from "../page/styleHelpers.js";
import { useContext } from "react";
import { ContextGlobal } from "../../App.jsx";

export function useScrollAnimations() {
  const { borrarVentana } = useContext(ContextGlobal);

  useEffect(() => {
    function scrollVentana() {
      for (let i = 0; i < scrollAnimList.length; i++) {
        const [selector, animation] = scrollAnimList[i];
        anim(selector, animation);
      }
    }

    let intervalo;
    if (borrarVentana === true) {
      window.removeEventListener("scroll", scrollVentana);
      selectors.forEach((section, sectionIndex) => {
        section.forEach((selector, index) => {
          if (sectionIndex === 2 && index === 0) {
            setStyle(selector, { opacity: "1", animation: "none" });
          } else if (sectionIndex === 3 && index === 0) {
            setStyle(selector, { opacity: "1", animation: "none !important" });
          } else {
            setStyle(selector);
          }
        });
      });
    } else if (borrarVentana === false) {
      window.addEventListener("scroll", scrollVentana);
      clearInterval(intervalo);
    }
    return () => {
      window.removeEventListener("scroll", scrollVentana);
      clearInterval(intervalo);
    };
  }, [borrarVentana]);
}
