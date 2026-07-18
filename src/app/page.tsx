"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollChapters } from "@/components/layout/ScrollChapters";
import { LivingBackground } from "@/components/layout/LivingBackground";
import { IntroSequence } from "@/components/animations/IntroSequence";
import { Hero } from "@/components/sections/Hero";
import { TrustedTech } from "@/components/sections/TrustedTech";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <LivingBackground />
      <ScrollChapters />
      <IntroSequence />
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <TrustedTech />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
