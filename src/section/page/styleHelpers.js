// Función helper para establecer opacidad y animación
export const setStyle = (selector, styles = { opacity: "1" }) => {
  const element = document.querySelector(selector);
  if (element) {
    Object.entries(styles).forEach(([prop, value]) => {
      element.style[prop] = value;
    });
  }
};
