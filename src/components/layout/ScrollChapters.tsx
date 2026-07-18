"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollChapters() {
  const [activeChapter, setActiveChapter] = useState("hero");

  const chapters = [
    { id: "hero", label: "00 — Start" },
    { id: "about", label: "01 — About" },
    { id: "experience", label: "02 — Experience" },
    { id: "projects", label: "03 — Projects" },
    { id: "contact", label: "04 — Contact" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveChapter(chapter.id),
          onEnterBack: () => setActiveChapter(chapter.id),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {chapters.map((chapter) => (
        <a 
          key={chapter.id}
          href={`#${chapter.id}`}
          className="group flex items-center justify-end gap-3"
          aria-label={chapter.label}
        >
          <span 
            className={`text-xs font-mono transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
              activeChapter === chapter.id ? "opacity-100 translate-x-0 text-white" : "text-muted-foreground"
            }`}
          >
            {chapter.label}
          </span>
          <div 
            className={`h-px transition-all duration-300 ${
              activeChapter === chapter.id ? "w-8 bg-white" : "w-4 bg-white/20 group-hover:bg-white/50 group-hover:w-6"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
