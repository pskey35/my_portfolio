//import { ContextGlobal } from "../../App";

export default function CvModal() {
  //const { cvOpen, setCvOpen } = useContext(ContextGlobal);

  const clickPrint = () => {
    console.log(window);
  };

  const clickExitDesk = () => {
    //ocultamos el scroll
    document.body.style.cssText = "overflow:auto";
    const cv_contentElement = document.querySelector(".cv-content");
    //hace la animacion y una ves animado se borra
    cv_contentElement.style.cssText = "animation:exitCV 100ms ease forwards";

    const animFunction = (event) => {
      const cv_caja = document.querySelector(".cv-caja");

      cv_caja.style.cssText = "opacity:0;visibility:hidden";

      event.target.removeEventListener("animationend", animFunction);
    };

    cv_contentElement.addEventListener("animationend", animFunction);
  };

  return (
    <div className="cv-caja">
      <div className="cv-content">
        <div className="image">
          <img src="myCV.png"></img>
          <div className="front-image">
            <img src="myCV.png"></img>
          </div>
          <div>salir</div>
        </div>
        <div className="exit-desk" onClick={clickExitDesk}>
          <svg width="60%" stroke="white" height="60%" viewBox="0 0 24 24">
            <path
              d="M7.68473 7.33186C8.07526 6.94134 8.07526 6.30817 7.68473 5.91765C7.29421 5.52712 6.66105 5.52712 6.27052 5.91765L1.60492 10.5832C0.823873 11.3643 0.823872 12.6306 1.60492 13.4117L6.27336 18.0801C6.66388 18.4706 7.29705 18.4706 7.68757 18.0801C8.0781 17.6896 8.0781 17.0564 7.68757 16.6659L4.02154 12.9998L22 12.9998C22.5523 12.9998 23 12.5521 23 11.9998C23 11.4476 22.5523 10.9998 22 10.9998L4.01675 10.9998L7.68473 7.33186Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="botones">
          <div className="print" onClick={clickPrint}>
            <svg
              viewBox="0 -2 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>print</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g id="Page-1">
                <g
                  id="Icon-Set"
                  sketch:type="MSLayerGroup"
                  transform="translate(-100.000000, -205.000000)"
                  fill="white"
                >
                  <path
                    d="M130,226 C130,227.104 129.104,228 128,228 L125.858,228 C125.413,226.278 123.862,225 122,225 L110,225 C108.138,225 106.587,226.278 106.142,228 L104,228 C102.896,228 102,227.104 102,226 L102,224 C102,222.896 102.896,222 104,222 L128,222 C129.104,222 130,222.896 130,224 L130,226 L130,226 Z M122,231 L110,231 C108.896,231 108,230.104 108,229 C108,227.896 108.896,227 110,227 L122,227 C123.104,227 124,227.896 124,229 C124,230.104 123.104,231 122,231 L122,231 Z M108,209 C108,207.896 108.896,207 110,207 L122,207 C123.104,207 124,207.896 124,209 L124,220 L108,220 L108,209 L108,209 Z M128,220 L126,220 L126,209 C126,206.791 124.209,205 122,205 L110,205 C107.791,205 106,206.791 106,209 L106,220 L104,220 C101.791,220 100,221.791 100,224 L100,226 C100,228.209 101.791,230 104,230 L106.142,230 C106.587,231.723 108.138,233 110,233 L122,233 C123.862,233 125.413,231.723 125.858,230 L128,230 C130.209,230 132,228.209 132,226 L132,224 C132,221.791 130.209,220 128,220 L128,220 Z"
                    id="print"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <a className="download" href="jaymeCV.pdf" download="jaymeCV.pdf">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="30px"
              height="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                stroke="white"
                strokewidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
                fill="white"
              />
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                strokewidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke="white"
              />
            </svg>
            <span>Download</span>
          </a>
        </div>

        <div className="exit-mbl" onClick={clickExitDesk}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{ fill: "#f7f7f7" }}
              d="M7.68473 7.33186C8.07526 6.94134 8.07526 6.30817 7.68473 5.91765C7.29421 5.52712 6.66105 5.52712 6.27052 5.91765L1.60492 10.5832C0.823873 11.3643 0.823872 12.6306 1.60492 13.4117L6.27336 18.0801C6.66388 18.4706 7.29705 18.4706 7.68757 18.0801C8.0781 17.6896 8.0781 17.0564 7.68757 16.6659L4.02154 12.9998L22 12.9998C22.5523 12.9998 23 12.5521 23 11.9998C23 11.4476 22.5523 10.9998 22 10.9998L4.01675 10.9998L7.68473 7.33186Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
        <a className="btnDownload-mbl" href="/jaymeCV.pdf" download="jaymeCV.pdf">
          <span>Download CV</span>
          <svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
                fill="white"
              ></path>
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                strokeidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke="white"
              ></path>
            </svg>
          </svg>
        </a>
      </div>
    </div>
  );
}