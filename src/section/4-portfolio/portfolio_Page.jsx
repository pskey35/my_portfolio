import "./portfolio_Page.scss"
import GitHub_Icon from "./assets/icons/github";
import Cards from "./assets/jsons/card.json";





const Card = ({ dataUnidad }) => {
  return (
    <div className="caja" key={dataUnidad.id}>
      <div className="caja-content">
        <span className="caja-lin"></span>
        <div className="caja-image">
          <a
            href={dataUnidad.linkWeb}
            target="_blank"
          >
            <img
              src={dataUnidad.image}
              alt="error"

            />
          </a>
        </div>
        <div className="caja-titulo">
          <div className="caja_titulo_h1">{dataUnidad.title}</div>
          {
            dataUnidad.github == null ?
              <div className="caja_block_h2">
                <span className="text-working"> working...</span>
                <span className="point"></span>
              </div>
              :
              <a href={dataUnidad.github} target="_blank">
               <GitHub_Icon ></GitHub_Icon>
                </a>
          }


        </div>
        <div className="caja-texto">
          {dataUnidad.description}
        </div>

      </div>
    </div>)
}




function Portfolio() {

  return (
    <div className="portfolio-container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio">
        {Cards && Cards.map((dataUnidad) => (
          <Card dataUnidad={dataUnidad}></Card>
        ))}

      </div>
    </div>
  );
}

export default Portfolio;