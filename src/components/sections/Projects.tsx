"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
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
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`}
            scroll={false}
            className="group relative block rounded-2xl p-px bg-white/5 hover:bg-white/10 transition-colors overflow-hidden cursor-pointer"
          >
            <motion.div layoutId={`card-${project.id}`} className="absolute inset-0" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            
            <motion.div layoutId={`card-inner-${project.id}`} className="relative h-full bg-[#111] rounded-[15px] overflow-hidden flex flex-col transform transition-transform duration-500 group-hover:-translate-y-1">
              <motion.div layoutId={`image-${project.id}`} className="relative h-48 w-full bg-[#1a1a1a] border-b border-white/5 overflow-hidden">
                <Image src={project.image} alt={project.altText} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
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
          </Link>
        ))}
      </div>
    </section>
  );
}
