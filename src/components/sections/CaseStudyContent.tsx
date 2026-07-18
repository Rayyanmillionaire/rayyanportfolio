"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Project } from "@/data/projects";
import Link from "next/link";

interface CaseStudyContentProps {
  project: Project;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <div className="relative bg-[#111] min-h-screen flex flex-col w-full text-left">
      <motion.div layoutId={`image-${project.id}`} className="relative h-64 md:h-96 w-full bg-[#1a1a1a] border-b border-white/5 overflow-hidden">
        <Image src={project.image} alt={project.altText} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" priority />
      </motion.div>

      <div className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto w-full flex-grow">
        <div className="mb-12">
          <Link 
            href="/#projects" 
            scroll={false}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <motion.h1 layoutId={`title-${project.id}`} className="text-4xl md:text-6xl font-bold font-geist text-white mb-4">
                {project.title}
              </motion.h1>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground">
                <span>ROLE: {project.role}</span>
                <span>YEAR: {project.year}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
              >
                Visit Project <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-geist">Overview</h2>
              <motion.p layoutId={`desc-${project.id}`} className="text-muted-foreground leading-relaxed text-lg">
                {project.overview}
              </motion.p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-geist">Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.problem}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-geist">Approach</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.approach}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-geist">Challenges</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.challenges}
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-geist">Result</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.result}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-geist">Lessons Learned</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.lessons}
              </p>
            </section>
          </div>
          
          <div className="space-y-8">
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white font-geist">Technologies</h3>
              <div className="flex flex-col gap-3">
                {project.tech.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground border-b border-white/5 pb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {t}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
