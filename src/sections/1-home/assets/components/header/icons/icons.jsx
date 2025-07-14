const HomeIcon = ({ index, clickScrollInto,width,height }) => (
  <li key={index} onClick={(event) => clickScrollInto("home-a", event)} className="icon-headerDesktop_header">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="estate">
        <path
          fill="lightgray"
          d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
        ></path>
      </svg>
    </span>
    <a href="#home" id="home-a">Home</a>
  </li>
);

const AboutIcon = ({ index, clickScrollInto,width,height }) => (
  <li key={index} onClick={(event) => clickScrollInto("about-a", event)} className="icon-headerDesktop_header">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user">
        <path
          fill="lightgray"
          d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
        ></path>
      </svg>
    </span>
    <a href="#about" id="about-a">About</a>
  </li>
);

const SkillsIcon = ({ index, clickScrollInto,width,height }) => (
  <li key={index} onClick={(event) => clickScrollInto("skills-a", event)} className="icon-headerDesktop_header">
    <span>
      <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="lightgray"
          d="M458.949 16.902c-21.23 45.511-62.196 13.713-94.89 12.604-92.464-.8-95.254 47.352-141.296 77.017-9.189-10.02-23.774-16.38-46.738-15.117-15.928.876-30.343 6.34-40.974 15.895-12.34 10.738-21.335 25.549-21.942 39.84 21.03-5.316 41.304-4.385 45.871 5.46 11.508 24.813-21.37 15.961-44.745 23.397-1.248.396-2.472.81-3.684 1.225-2.757 7.733-6.024 15.131-6.024 20.482 0 16.945 13.686 6.16 19.648 20.88.85 2.099 3.778 8.625 12.238 16.833 1.367 1.328 46-35.114 47.487-33.9-14.835 31.6-38.787 42.74-41.127 43.975-21.237 11.202-46.726 20.42-55.691 38.13l-.522-.168s-27.58 65.425-33.509 97.908c.575 16.747 25.672 12.545 25.672 12.545l39.527-11.785 4.686 16.94 119.482-150.627c-26.122-15.67-18.045-38.588-21.927-58.778 13.787-22.475 21.9-34.062 14.597-56.68 7.122-7.318 16.216-14.785 26.61-16.779 21.267-4.08 60.016 16.198 80.997 16.47 27.78.362 42.716-14.296 54.352-31.905-10.666 3.502-14.712 3.5-8.703-15.065-14.177 5.175-23.315 22.6-48.998 18.526-23.87-3.787-60.077-11.021-80.065-4.354 33.926-17.423 60.548-35.253 96.777-39.463 42.453 3.026 80.56 32.916 102.89-17.031z"
        />
      </svg>
    </span>
    <a href="#skills" id="skills-a">Skills</a>
  </li>
);

const PortfolioIcon = ({ index, clickScrollInto,width,height }) => (
  <li key={index} onClick={(event) => clickScrollInto("portfolio-a", event)} className="icon-headerDesktop_header">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bag-alt">
        <path
          fill="lightgray"
          d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.71,21.71,0,0,0,8,1.53A21.75,21.75,0,0,0,20,13Zm0-7.69a19.89,19.89,0,0,1-16,0V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
        ></path>
      </svg>
    </span>
    <a href="#portfolio" id="portfolio-a">Portfolio</a>
  </li>
);

const ContactIcon = ({ index, clickScrollInto,width,height }) => (
  <li key={index} onClick={(event) => clickScrollInto("contact-a", event)} className="icon-headerDesktop_header">
    <span>
      <svg fill="lightgray"  width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message">
        <path
          fill="#undefined"
          d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
        ></path>
      </svg>
    </span>
    <a href="#contact" id="contact-a">Contact</a>
  </li>
);



export {ContactIcon, PortfolioIcon, SkillsIcon, AboutIcon, HomeIcon};