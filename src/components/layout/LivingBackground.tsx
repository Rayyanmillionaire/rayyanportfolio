"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LivingBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!bgRef.current) return;

    // We change the background gradient color based on scroll position using GSAP
    const sections = [
      { id: "#hero", color: "rgba(59, 130, 246, 0.15)" }, // Blue
      { id: "#about", color: "rgba(139, 92, 246, 0.15)" }, // Purple
      { id: "#experience", color: "rgba(16, 185, 129, 0.15)" }, // Emerald
      { id: "#projects", color: "rgba(6, 182, 212, 0.15)" }, // Cyan
      { id: "#contact", color: "rgba(250, 250, 250, 0.1)" }, // Warm white
    ];

    sections.forEach((section) => {
      const el = document.querySelector(section.id);
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(bgRef.current, {
              backgroundColor: section.color,
              duration: 1,
              ease: "power2.inOut"
            });
          },
          onEnterBack: () => {
            gsap.to(bgRef.current, {
              backgroundColor: section.color,
              duration: 1,
              ease: "power2.inOut"
            });
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* Living Ambient Light */}
      <div 
        ref={bgRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] blur-[140px] rounded-full transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.15)" }}
      />
      {/* CSS-only static grain overlay (performs much better than SVG filter) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] repeat" />
    </div>
  );
}
