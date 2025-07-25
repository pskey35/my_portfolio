export function anim(elemento, estilo) {
    const ele = document.querySelector(elemento);
    // console.log(ele);
    const altura = window.innerHeight;
    const posicion = ele.getBoundingClientRect().top;
    // console.log(`posicion: ${posicion}, alturaWindow: ${altura}`);
    if (posicion < altura / 1.2) {
      ele.style.animation = estilo;
    }
  }
  
  