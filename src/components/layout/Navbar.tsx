"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // If intro has already played, just show it
    if (sessionStorage.getItem("hasPlayedIntro")) {
      gsap.set(navRef.current, { y: 0, opacity: 1 });
      return;
    }

    gsap.set(navRef.current, { y: -100, opacity: 0 });

    const handleIntroComplete = () => {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });
    };

    window.addEventListener("introComplete", handleIntroComplete);
    return () => window.removeEventListener("introComplete", handleIntroComplete);
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/5 opacity-0 -translate-y-full">
      <Link href="/" className="font-geist font-bold text-xl tracking-tight text-white hover:text-white/80 transition-colors">
        Rayyan Ahammed
      </Link>
      
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">About</Link>
        <Link href="#experience" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Experience</Link>
        <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Projects</Link>
        <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href="/Rayyan_Ahammed_Resume.pdf" 
          download="Rayyan_Ahammed_Resume.pdf"
          className="hidden sm:inline-flex h-9 px-4 items-center justify-center rounded-md border border-white/10 bg-transparent text-sm font-medium text-white hover:bg-white/5 transition-colors"
        >
          Resume
        </a>
        <a 
          href="#contact"
          className="inline-flex h-9 px-4 items-center justify-center rounded-md bg-white text-sm font-medium text-black hover:bg-white/90 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
