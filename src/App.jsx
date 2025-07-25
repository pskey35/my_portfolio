import "./portafolio.scss";
//import { addListener, launch } from "devtools-detector";
import { useState, createContext } from "react";
import Ventana from "./section/view.jsx"


export const ContextGlobal = createContext();


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







  return (
    <ContextGlobal.Provider value={value}>
      <div id="jaymePortfolio">
        <Ventana></Ventana>
      </div>
    </ContextGlobal.Provider>
  );
}
