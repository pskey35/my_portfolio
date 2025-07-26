import { useEffect } from "react";
import { anim } from "../1-home/animacion.jsx";
import { homeAnimList } from "../page/homeAnimations.js";

export function useHomeAnimations() {
  useEffect(() => {
    for (let i = 0; i < homeAnimList.length; i++) {
      const [selector, animation] = homeAnimList[i];
      anim(selector, animation);
    }
  }, []);
}