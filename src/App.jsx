import "./portafolio.scss";
import { addListener, launch } from "devtools-detector";
import { useEffect, useState, useContext, createContext } from "react";
import Ventana from "./sections/view.jsx"


export const ContextGlobal = createContext();

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



    //tenemos que capturar el userAgent del usuario y luego calcular el window.innerHeight
    //lo guardamos en session storage y luego calculamos si




    //esto de aca verifica cada 3 segundos si hubo un cambio de pantalla
    //si es asi es porque seguro a abierto la consola de chrome devs



    //esto detecta si se abre el devtools--- mira la linea de codigo 618
    addListener((isOpen) => {
      setShowBlockContainer(isOpen);
    
    });
    //launch();

   
  // 
    //esto desactiva el click derecho del mouse
    document.addEventListener("contextmenu", function (event) {
      //lo desactivare de momento
      // event.preventDefault();
    });

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
