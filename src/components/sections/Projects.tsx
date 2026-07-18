"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "careernav",
    title: "CareerNav",
    description: "Career acceleration platform for students. Features learning roadmaps, skill trackers, and resume builders.",
    fullDescription: "CareerNav is a comprehensive platform designed to bridge the gap between academic learning and industry requirements. It features dynamic learning roadmaps tailored to specific tech roles, an interactive skill tracker, and an AI-powered resume builder. Built with Next.js and Tailwind, it ensures a blazingly fast experience.",
    tech: ["Next.js", "React", "Tailwind", "PostgreSQL"],
    link: "https://studentscareer.vercel.app/",
    year: "2026",
    role: "Full-Stack Developer",
    image: "/careernav.jpg"
  },
  {
    id: "rayyansys",
    title: "RAYYAN.SYS",
    description: "CLI-inspired terminal portfolio with keyboard-first navigation and retro CRT effects.",
    fullDescription: "A unique, interactive portfolio designed to mimic a classic command-line interface. It features a custom command parser, keyboard-first navigation, and authentic retro CRT CSS effects. This project showcases deep DOM manipulation skills and a strong eye for unconventional UX.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://rayyan-sys.vercel.app/",
    year: "2026",
    role: "Frontend Developer",
    image: "/rayyansys.jpg"
  },
  {
    id: "ryxaurenite",
    title: "Ry Xaurenite",
    description: "Experimental personal portfolio showcasing modern web design trends and animations.",
    fullDescription: "An award-winning experimental portfolio pushing the boundaries of web animation and CSS capabilities. Features complex GSAP timelines, custom cursor interactions, and seamless page transitions. This served as the testing ground for many of the premium effects used in my professional work.",
    tech: ["React", "Vite", "Tailwind", "GSAP"],
    link: "https://ry-xaurenite-portfolio.vercel.app/",
    year: "2025",
    role: "UI/UX Developer",
    image: "/ryxaurenite.jpg"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-geist tracking-tight text-white">
          Selected Works
        </h2>
        <p className="text-muted-foreground max-w-xl">
          A showcase of digital products engineered with focus on performance, aesthetics, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div 
            layoutId={`card-${project.id}`}
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group relative block rounded-2xl p-px bg-white/5 hover:bg-white/10 transition-colors overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            
            <motion.div layoutId={`card-inner-${project.id}`} className="relative h-full bg-[#111] rounded-[15px] overflow-hidden flex flex-col transform transition-transform duration-500 group-hover:-translate-y-1">
              <motion.div layoutId={`image-${project.id}`} className="relative h-48 w-full bg-[#1a1a1a] border-b border-white/5 overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </motion.div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </motion.h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
                <motion.p layoutId={`desc-${project.id}`} className="text-sm text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-white/5 text-muted-foreground rounded-md border border-white/10 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-12 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-white/10 rounded-3xl shadow-2xl pointer-events-auto"
              >
                <motion.div layoutId={`card-inner-${selectedProject.id}`} className="relative bg-[#111] min-h-full flex flex-col">
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <motion.div layoutId={`image-${selectedProject.id}`} className="relative h-64 md:h-96 w-full bg-[#1a1a1a] border-b border-white/5 overflow-hidden">
                    <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" />
                  </motion.div>

                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                      <div>
                        <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl md:text-5xl font-bold font-geist text-white mb-4">
                          {selectedProject.title}
                        </motion.h3>
                        <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground">
                          <span>ROLE: {selectedProject.role}</span>
                          <span>YEAR: {selectedProject.year}</span>
                        </div>
                      </div>
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
                      >
                        Visit Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div className="md:col-span-2 space-y-6">
                        <h4 className="text-xl font-bold text-white">Overview</h4>
                        <motion.p layoutId={`desc-${selectedProject.id}`} className="text-muted-foreground leading-relaxed text-lg">
                          {selectedProject.fullDescription}
                        </motion.p>
                      </div>
                      
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white">Technologies</h4>
                        <div className="flex flex-col gap-2">
                          {selectedProject.tech.map((t, i) => (
                            <div key={i} className="flex items-center gap-3 text-muted-foreground border-b border-white/5 pb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
