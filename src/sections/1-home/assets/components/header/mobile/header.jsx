import React, { useContext } from "react";
import { ContextGlobal } from "../../../../../../App.jsx";



function MobileNavHeader() {
   const { openMenu, setOpenMenu } = useContext(ContextGlobal);
        const clickBotonMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (

        <div className="botonHeader">
            <div className="botonReal" onClick={clickBotonMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {openMenu ? <HeaderMenu></HeaderMenu> : ""}
        </div>
    )
}


export default MobileNavHeader;