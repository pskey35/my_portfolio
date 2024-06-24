/*tagcloud sirve para hacer una esfera 3d rotando*/
import TagCloud from "TagCloud";
import {useEffect} from "react"



export default function Skills() {
    useEffect(() => {
      const container = ".container";
      const text = ["", "", "", "", "", "", "", "", "", "", ""];
  
      const options = {
        radius: 200,
        maxSpeed: "slow",
        initSpeed: "slow",
        keep: true,
        containerClass: "circulo",
        itemClass: "items",
      };
  
      TagCloud(container, text, options);
  
      const span1 = document.querySelector(".circulo .items:nth-child(1)");
      span1.style.backgroundImage = "";
    }, []);
    return (
      <div className="skills" id="skills">
        <div className="estr"></div>
        <div className="estr2"></div>
        <div className="estr3"></div>
        <span className="container">
          <div className="container-texto">Skills</div>
          <div className="sol"></div>
        </span>
      </div>
    );
  }
  