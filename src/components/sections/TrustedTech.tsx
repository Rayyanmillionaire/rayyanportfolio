export function TrustedTech() {
  const techs = ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "AWS", "AI", "Framer Motion", "Node.js", "Figma"];
  
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden flex flex-col items-center justify-center space-y-6">
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
        Trusted Technologies
      </p>
      
      <div className="relative w-full max-w-5xl mx-auto flex overflow-hidden mask-edges">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center px-8 text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors cursor-default whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
