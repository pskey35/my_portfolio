/*tagcloud sirve para hacer una esfera 3d rotando*/
import TagCloud from "TagCloud";
import { useEffect } from "react"
import "./skills_Page.scss";


export default function Skills() {
  useEffect(() => {
    const container = ".container";
    const text = ["", "", "", "", "", "", "", "", "", "", "", "", ""];

    let options = {
      radius: 200,
      maxSpeed: "slow",
      initSpeed: "slow",
      keep: true,
      containerClass: "circulo",
      itemClass: "items",
    };

    if (window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches) {
      options = {
        radius: 450,
        maxSpeed: "slow",
        initSpeed: "slow",
        keep: true,
        containerClass: "circulo",
        itemClass: "items",
      };

    } else if (window.matchMedia("(min-width: 1280px)").matches) {
      options = {
        radius: 580,
        maxSpeed: "slow",
        initSpeed: "slow",
        keep: true,
        containerClass: "circulo",
        itemClass: "items",
      };

    }


    TagCloud(container, text, options);

    const span1 = document.querySelector(".circulo .items:nth-child(1)");
    span1.style.backgroundImage = "";




  }, []);
  return (
    <div className="skills" id="skills">
      <span className="container">
        <div className="container-texto">

          <h2>Skills</h2>
          <h7>My technologies</h7>
        </div>

        <div className="sol"></div>
      </span>
    </div>
  );
}
