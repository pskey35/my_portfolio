
export default function Portfolio() {
  /*
  useEffect(() => {
    const hijo = document.querySelector(".portfolio").children;
    const width = hijo[1].clientWidth;
    const height = hijo[1].clientHeight;
    //esto es para la rotacion de las cards de mis proyectos
    for (let i = 0; i < hijo.length; i++) {
      hijo[i].addEventListener("mousemove", (event) => {
        const { layerX, layerY } = event;
        const yRotation = ((layerX - width / 2) / width) * 30;
 
        const xRotation = ((layerY - height / 2) / height) * 20;
        if (xRotation < -30 || xRotation > 30) {
          const string = `perspective(1000px)
          rotateX(${15}deg)
          rotateY(${yRotation}deg)
          scale3d(1,1,1)`;
          hijo[i].style.transform = string;
        } else {
          const string = `perspective(1000px)
          rotateX(${xRotation}deg)
          rotateY(${yRotation}deg)
          scale3d(1,1,1)`;
          hijo[i].style.transform = string;
        }
      });
 
      hijo[i].addEventListener("mouseout", (e) => {
        const string = "perspective(none)";
        hijo[i].style.transform = string;
      });
    }
  }, []);
*/

  const data = [
    {
      link: "https://ecommerce-nine-psi-92.vercel.app/",
      image: "./eccomerce.png",
      github: "https://github.com/pskey35/ecommerce"
    },
    {
      link: "https://hacker-simulator.vercel.app",
      github: "./dog.PNG",
      image: "https://hacker-simulator.vercel.app"
    },
    {
      link: `https://youtube-clone-ruddy-iota.vercel.app/`,
      github: `https://github.com/pskey35/youtubeClone`,
      image: "./youtube.PNG"
    }



  ]

  const hoverEffect = (event) => {
    /*for (const card of document.getElementsByClassName("caja")) {
      const rect = card.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;
 
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }*/
  };



  // este es mi antiguo eccomerce
  // href="https://ecommerce-nine-psi-92.vercel.app/"

  return (
    <div className="portfolio-container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio" onMouseMove={hoverEffect}>

        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              <a
                href="https://eccomerce-jayme.vercel.app/"
                target="_blank"
              >
                <img
                  src="./eccomerce.png"
                  alt="error"
                  style={{ objectPosition: "right" }}
                />
              </a>
            </div>
            <div className="caja-titulo">
              <div>Ecommerce Leaf</div>
              <div className="dev">

                <span className="text-working"> working...</span>
                <span className="point"></span>
              </div>

            </div>
            <div className="caja-texto">
              Leaft is your online destination for purchasing electronics, accessories, etc. We focus on offering high quality products at competitive prices, with a fast, safe and simple purchasing experience.
              For this application I have used Next js as a development environment
              <p style={{ color: "gray", marginTop: "10px" }}>
              For this application I have used Next js as a development environment
              </p>
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              <a
                href="https://youtube-clone-ruddy-iota.vercel.app/"
                target="_blank"
              >
                <img
                  src="./youtube.PNG"
                  alt="error"
                  style={{ objectPosition: "left" }}
                />
              </a>
            </div>
            <div className="caja-titulo">
              <div>Youtube Clone</div>
              <a href="https://github.com/pskey35/youtubeClone" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                </svg>
              </a>
            </div>
            <div className="caja-texto">
              It's an incredible platform that will allow you to enjoy your favorite videos, discover new content, and connect with a passionate community of creators. It is a perfect option if you are looking for a simple and direct experience to watch your favorite videos and discover new content.
              This application is a clone of YouTube made in react js
              <p style={{ color: "gray", marginTop: "10px" }}>
                This application is a clone of YouTube made in react js
              </p>
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              <a href="https://calculadora-steel-zeta.vercel.app/">
                <img src="./calculadora.PNG" alt="error" />
              </a>
            </div>
            <div className="caja-titulo">
              <div>Calculadora</div>
              <a href="https://github.com/pskey35/calculadora" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                </svg>
              </a>
            </div>
            <div className="caja-texto">
              This calculator has been built from scratch using only
              JavaScript, demonstrating my ability to work with this
              fundamental programming language. My calculator project
              offers an intuitive and easy-to-use interface. Users will
              be able to perform basic math operations,
              such as adding, subtracting, multiplying
              and dividing, with just a few clicks.
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              {/*<img src="/assets/html5.webp" alt="error" />*/}
              <a href="https://hacker-simulator.vercel.app/" target="_blank">
                <img
                  src="/dog.PNG"
                  alt="error"
                  style={{ objectPosition: "left" }}
                ></img>
              </a>
            </div>
            <div className="caja-titulo">
              <div>Hacker simulator</div>
              <a
                href="https://github.com/pskey35/hacker-simulator"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                </svg>
              </a>
            </div>
            <div className="caja-texto">
              This website simulates the experience of being a real
              hacker, where each letter you type executes commands
              as if you were in a terminal. On this website, users
              will be able to immerse themselves in the exciting world
              of computer hacking safely and legally. The interface
              has been designed to simulate a command line terminal, with a
              retro style and visual elements that evoke the atmosphere
              of a hacker environment.
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="caja-content">
            <span className="caja-lin"></span>
            <div className="caja-image">
              <a href="https://galy.vercel.app" target="_blank">
                <img src="./galy.png" alt="error" />
              </a>
            </div>
            <div className="caja-titulo">
              <div>Galy</div>
              <div className="dev">

                <span className="text-working"> working...</span>
                <span className="point"></span>
              </div>
            </div>
            <div className="caja-texto">
              On Galy, users can upload their photos, explore other users'
              visual content, and discover new trends through
              a friendly and interactive interface.

              With social interaction features like comments,
              reactions and the option to follow other users, Galy
              encourages connection and visual exchange.


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}