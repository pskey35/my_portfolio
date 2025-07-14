import { useContext } from "react";
import { ContextGlobal } from "../../../../../../App.jsx";
import "./header.scss"

function HeaderMenu() {
    //esto es el header para mobiles


    
    return (
        <div className="headerMenu">
            <ul className="menu-center">

                {
                    headerMobileItems.map((dataUnidad) => {
                        return (
                            <li>
                                <a href={dataUnidad.href}>
                                    <span>
                                        {dataUnidad.icon}
                                    </span>
                                    <p>{dataUnidad.title}</p>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}


function MobileNavHeader() {
    const { openMenu, setOpenMenu } = useContext(ContextGlobal);


    const clickBotonMenu = () => {
        setOpenMenu(!openMenu);
    };


    return (

        <div className="navMobile botonHeader">
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