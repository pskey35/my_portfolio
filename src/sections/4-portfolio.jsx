
export default function Portfolio() {


  const hoverEffect = (event) => {
    for (const card of document.getElementsByClassName("caja")) {
      const rect = card.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };






  const dataCardsPortfolio = [
    {
      id: "card-1",
      linkWeb: "https://eccomerce-jayme.vercel.app",
      title: "Ecommerce Leaf",
      image: "./eccomerce.png",
      github: null,
      description: `Leaft is your online destination for purchasing electronics,
       accessories, etc. We focus on offering high quality products at competitive 
       prices, with a fast, safe and simple purchasing experience
       . For this application I have used Next js as a development environment`

    },

    {
      id: "card-2",
      linkWeb: "https://calculadora-steel-zeta.vercel.app",
      title: "Calculator",
      image: "./calculadora.PNG",
      github: "https://calculadora-steel-zeta.vercel.app",
      description: `This calculator has been built from scratch 
      using only JavaScript, demonstrating my ability to work with
       this fundamental programming language. My calculator project
        offers an intuitive and easy-to-use interface. Users will be
         able to perform basic math operations,such as adding, 
         subtracting, multiplying and dividing, with just a few clicks.`
    },

    {
      id: "card-3",
      linkWeb: "https://youtube-clone-ruddy-iota.vercel.app",
      title: "Youtube Clone",
      image: "./youtube.PNG",
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
      image: "./galy.png",
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
      linkWeb: "https://hacker-simulator.vercel.app",
      title: "Hacker simulator",
      image: "/dog.PNG",
      github: "https://github.com/pskey35/hacker-simulator",
      description: `This website simulates the experience of being a 
      real hacker, where each letter you type executes commands as if 
      you were in a terminal. On this website, users will be able to
       immerse themselves in the exciting world of computer hacking safely
        and legally. The interface has been designed 
        to simulate a command line terminal, with a retro style and 
        visual elements that evoke the atmosphere of a hacker environment`
    },
    {
      id: "card-6",
      linkWeb: "https://landing-airbnb.vercel.app/",
      title: "Airbnb landing",
      github:null,
      image: "https://firebasestorage.googleapis.com/v0/b/prueba-62d11.appspot.com/o/airbnbCapture.png?alt=media&token=dd170a9d-4826-48c0-b661-1e74e042418e",
      description: "I designed and developed a landing page inspired by Airbnb's style, focused on promoting affordable hotels and providing a user-friendly experience"

    }


  ]


  // este es mi antiguo eccomerce
  // href="https://ecommerce-nine-psi-92.vercel.app/"

  return (
    <div className="portfolio-container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio">
        {dataCardsPortfolio && dataCardsPortfolio.map((dataUnidad, index) => {

          return (
            <div className="caja" onMouseMove={hoverEffect}>
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
                  <div className="dev">
                    <span className="text-working"> working...</span>
                    <span className="point"></span>
                  </div>

                </div>
                <div className="caja-texto">
                  {dataUnidad.description}
                </div>

              </div>
            </div>)
        })}

      </div>
    </div>
  );
}