import Eccomerce from "./assets/images/eccomerce.png";
import Lebasi from "./assets/images/lebasi.png";
import Youtube from "./assets/images/youtube.png";
import Laliz from "./assets/images/laliz.png";
import Galy from "./assets/images/galy.png";


const dataCardsPortfolio = [
  {
    id: "card-1",
    linkWeb: "https://eccomerce-jayme.vercel.app",
    title: "Ecommerce Leaf",
    image: Eccomerce,
    github: null,
    description: `Leaft is your online destination for purchasing electronics,
       accessories, etc. We focus on offering high quality products at competitive 
       prices, with a fast, safe and simple purchasing experience
       . For this application I have used Next js as a development environment`

  },


  {
    id: "card-2",
    linkWeb: "https://lebasi-client.vercel.app/",
    title: "Lebasi suplementos",
    image:Lebasi,
    github: "https://github.com/pskey35/lebasi.git",
    description: `Lebasi is a website that offers a wide variety of
      nutritional supplements, including proteins, vitamins, minerals,
      amino acids, and more. The site is designed to provide users with
      an easy and convenient way to purchase high-quality supplements
      `
  },

  {
    id: "card-3",
    linkWeb: "https://youtube-clone-ruddy-iota.vercel.app",
    title: "Youtube Clone",
    image: Youtube,
    github: "https://github.com/pskey35/youtubeClone",
    description: `It's an incredible platform that will allow you to 
      enjoy your favorite videos, discover new content, and connect with 
      a passionate community of creators. It is a perfect option if you 
      are looking for a simple and direct experience to watch your favorite videos 
      and discover new content. This application is a clone of YouTube made in react js`
  },

  {
    id: "card-4",
    linkWeb: "https://galy.vercel.app/",
    title: "Galy social media",
    image: Galy,
    github: null,
    description: `This website simulates the experience of being a 
      real hacker, where each letter you type executes commands as if 
      you were in a terminal. On this website, users will be able to
       immerse themselves in the exciting world of computer hacking safely
        and legally. The interface has been designed 
        to simulate a command line terminal, with a retro style and 
        visual elements that evoke the atmosphere of a hacker environment`
  },

  {
    id: "card-5",
    linkWeb: "https://www.muebleslaliz.com/",
    title: "Laliz muebles",
    image: Laliz,
    github: "https://github.com/pskey35/hacker-simulator",
    description: `The goal was to reflect each client's unique style by
     integrating tools that enable smooth navigation, visually appealing
      product displays, and personalized
       attention — all to ensure a seamless and 
       satisfying shopping experience.

`
  },

 
  {
    id: "card-6",
    linkWeb: "https://landing-airbnb.vercel.app/",
    title: "Airbnb landing",
    github: "https://github.com/pskey35/landing-airbnb",
    image: "https://firebasestorage.googleapis.com/v0/b/prueba-62d11.appspot.com/o/airbnbCapture.png?alt=media&token=dd170a9d-4826-48c0-b661-1e74e042418e",
    description: `
      I designed and developed a visually appealing and responsive
       landing page inspired by Airbnb's sleek and modern style.
        The page is specifically tailored to promote affordable
         hotels, ensuring a user-friendly experience for visitors. 
         It features a clean layout, intuitive navigation, and compelling 
         visuals to engage users and encourage them to explore accommodation 
         options`
  }


]




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
          <div>{dataUnidad.title}</div>
          {
            dataUnidad.github == null ?
              <div className="dev">
                <span className="text-working"> working...</span>
                <span className="point"></span>
              </div>
              :
              <a href={dataUnidad.github} target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path></svg></a>
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
        {dataCardsPortfolio && dataCardsPortfolio.map((dataUnidad) => (
          <Card dataUnidad={dataUnidad}></Card>
        ))}

      </div>
    </div>
  );
}

export default Portfolio;