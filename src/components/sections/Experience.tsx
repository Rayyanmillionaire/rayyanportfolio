"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experienceData = [
  {
    title: "Full Stack Web Development Intern",
    company: "Portfolio Builders",
    duration: "June 2026 – June 28, 2026",
    description: "Built a responsive careers portal with React, reusable UI components, and performance optimizations. Engineered premium UI components with a strong focus on accessibility and modern design."
  },
  {
    title: "Founder & Full-Stack Developer",
    company: "Xaurenite",
    duration: "2026 – Present",
    description: "Developed multiple business websites, digital products, and AI-assisted workflows. Focused on maintainable, production-ready code, clean architecture, and exploring AI integrations."
  },
  {
    title: "Freelance UI/UX Designer & Web Developer",
    company: "Independent",
    duration: "2025 – Present",
    description: "Designed and implemented high-performance, visually engaging digital experiences for various clients. Specialized in Next.js, Tailwind CSS, GSAP animations, and user-centric design principles."
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;
    
    const cards = gsap.utils.toArray<HTMLElement>('.experience-card');
    
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto" ref={containerRef}>
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-geist tracking-tight text-white">
          Experience
        </h2>
        <p className="text-muted-foreground">
          A timeline of my professional journey and technical growth.
        </p>
      </div>

      <div className="relative border-l border-white/10 pl-8 space-y-12">
        {/* Glowing Line Indicator */}
        <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

        {experienceData.map((exp, idx) => (
          <div key={idx} className="experience-card relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            
            <div className="bg-[#111] border border-white/5 p-6 rounded-2xl shadow-lg hover:border-white/10 transition-colors">
              <span className="text-xs font-mono text-blue-400 mb-2 block">{exp.duration}</span>
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <h4 className="text-sm text-muted-foreground mb-4">{exp.company}</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
