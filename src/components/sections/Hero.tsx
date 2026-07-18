"use client";

import { useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial hidden state
    const elements = [titleRef.current, subtitleRef.current, textRef.current, btnsRef.current];
    
    if (sessionStorage.getItem("hasPlayedIntro")) {
      gsap.set(elements, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(elements, { opacity: 0, y: 20 });

    const handleIntroComplete = () => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("introComplete", handleIntroComplete);
    return () => window.removeEventListener("introComplete", handleIntroComplete);
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8">
        
        {/* Title / Name */}
        <div className="space-y-4">
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold font-geist tracking-tighter text-white opacity-0 translate-y-5">
            Rayyan Ahammed
          </h1>
          <h2 ref={subtitleRef} className="text-xl md:text-2xl font-inter text-muted-foreground font-medium opacity-0 translate-y-5">
            Aspiring Software Engineer & UI/UX Enthusiast
          </h2>
        </div>

        {/* Tagline */}
        <p ref={textRef} className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-5">
          Crafting modern, scalable, and user-centric digital experiences through clean code, thoughtful design, and continuous innovation.
        </p>

        {/* CTAs */}
        <div ref={btnsRef} className="flex flex-wrap items-center justify-center gap-4 pt-4 opacity-0 translate-y-5">
          <Link 
            href="#projects"
            className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300")}
          >
            View Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link 
            href="#contact"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 px-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300")}
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
