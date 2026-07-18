"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export function EasterEgg() {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const konami = [
      "ArrowUp", "ArrowUp", 
      "ArrowDown", "ArrowDown", 
      "ArrowLeft", "ArrowRight", 
      "ArrowLeft", "ArrowRight", 
      "b", "a"
    ];
    let index = 0;

    const down = (e: KeyboardEvent) => {
      if (e.key === konami[index]) {
        index++;
        if (index === konami.length) {
          setActivated(true);
          index = 0;
          
          // Easter egg effect: Barrel roll the body
          gsap.to("body", {
            rotation: 360,
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => gsap.set("body", { clearProps: "all" })
          });
        }
      } else {
        index = 0;
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return null;
}
