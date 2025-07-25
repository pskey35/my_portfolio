
import useScroll from "./useScroll";
import "./iconPerfil.scss";

export const IconPerfil = () => {
   
    

   const {style} = useScroll();

    return (
        <div className="iconPerfil" style={style}>
            <img src="/foto.jpg" alt="Icon Perfil" />
        </div>
    );
};