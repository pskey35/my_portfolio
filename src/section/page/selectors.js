// Lista de selectores organizados por secciones
const selectors = [
  // Header section
  [".header"],

  // Home section - social icons
  ["#home > div.left > div:nth-child(1)",  // git
   "#home > div.left > div:nth-child(2)",  // linkedin
   "#home > div.left > div:nth-child(3)"], // whatsapp

  // Home section - right content
  ["#home > div.right > div.right-image",
   "#home > div.right > div.right-texto > p.texto-nombre",
   "#home > div.right > div.right-texto > div",
   ".texto-boton",
   "#home > div.right > div.right-texto > p.texto-dev2",
   "#home > div.right > div.right-texto > a > div"],

  // About section
  ["#about > div.titulo > h3",
   "#about > div.titulo > p",
   "#about > div.about-container > div.container-left",
   "#about > div.about-container > div.container-right > div.iconos > div:nth-child(1)",
   "#about > div.about-container > div.container-right > div.iconos > div:nth-child(2)",
   "#about > div.about-container > div.container-right > div.iconos > div:nth-child(3)",
   "#about > div.about-container > div.container-right > div.right-texto",
   "#about > div.about-container > div.container-right > a"],

  // Skills section
  ["#skills > span > div.container-texto",
   "#skills > span > div.sol",
   "#skills > span > div.circulo"],

  // Portfolio section
  ["#portfolio > h1"],
  ["#portfolio > div > div:nth-child(1)",
   "#portfolio > div > div:nth-child(2)",
   "#portfolio > div > div:nth-child(3)",
   "#portfolio > div > div:nth-child(4)",
   "#portfolio > div > div:nth-child(5)",
   "#portfolio > div > div:nth-child(6)"],

  // Contact section
  ["#contact h1",
   "#contact h6",
   "#contact > div > div.contact-left > p",
   "#contact > div > div.contact-left > div.email",
   "#contact > div > div.contact-left > div.whatsapp",
   "#contact > div > div.contact-right > p",
   "#contact > div > div.contact-right > div.mail-input",
   "#contact > div > div.contact-right > div.textarea-input",
   "#contact > div > div.contact-right > div.botonEnviar"],

  // Footer section
  ["#jaymePortfolio > div > div.footer > p.footer-name",
   "#jaymePortfolio > div > div.footer > div > div:nth-child(1)",
   "#jaymePortfolio > div > div.footer > div > div:nth-child(2)",
   "#jaymePortfolio > div > div.footer > div > div:nth-child(3)"]
];

export default selectors;
