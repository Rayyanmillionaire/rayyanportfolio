"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export function IntroSequence() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if intro has already played in this session to prevent annoyance
    const hasPlayedIntro = sessionStorage.getItem("hasPlayedIntro");

    if (prefersReducedMotion || hasPlayedIntro) {
      document.documentElement.style.setProperty('--intro-complete', '1');
      const event = new CustomEvent("introComplete");
      window.dispatchEvent(event);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("hasPlayedIntro", "true");
        document.documentElement.style.setProperty('--intro-complete', '1');
        // Dispatch event for other components to start their entrance animations
        const event = new CustomEvent("introComplete");
        window.dispatchEvent(event);
      }
    });

    // 1. Black screen is the default background of #intro-overlay
    // 2. Glowing cursor appears
    tl.to("#intro-cursor", { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" })
      .to("#intro-cursor", { opacity: 0, scale: 0, duration: 0.3, delay: 0.5 })
      
      // 3. Logo/Name fades in and morphs
      .fromTo("#intro-logo", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .to("#intro-logo", { 
        textShadow: "0 0 20px rgba(255,255,255,0.8)", 
        scale: 1.05, 
        duration: 0.8,
        ease: "power2.inOut" 
      })
      .to("#intro-logo", { opacity: 0, duration: 0.5, delay: 0.2 })
      
      // 4. Fade out the overlay to reveal the page (which has its own staggered entrance)
      .to("#intro-overlay", { opacity: 0, duration: 1, ease: "power2.inOut" })
      .set("#intro-overlay", { display: "none" });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isClient) return null;

  // Don't render if it already played
  if (typeof window !== "undefined" && window.sessionStorage.getItem("hasPlayedIntro")) {
    return null;
  }

  return (
    <div id="intro-overlay" className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      <div 
        id="intro-cursor" 
        className="w-4 h-4 bg-white rounded-full opacity-0 scale-0 shadow-[0_0_20px_rgba(255,255,255,1)]"
      />
      
      <div id="intro-logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col items-center">
        <span className="font-geist font-bold text-3xl md:text-5xl text-white tracking-tighter">
          RAYYAN
        </span>
      </div>
    </div>
  );
}
