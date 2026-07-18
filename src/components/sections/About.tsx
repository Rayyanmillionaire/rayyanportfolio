import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-geist tracking-tight text-white">
            About Me
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground/90 font-inter leading-relaxed">
            <p>
              Hello! I'm Rayyan Ahammed, a Computer Science Engineering student at KMCT CEETM, Kerala, driven by a deep passion for software engineering, modern web development, and innovative digital product design.
            </p>
            <p>
              I specialize in developing responsive, scalable, and visually engaging web applications using technologies such as React, TypeScript, Tailwind CSS, and modern frontend frameworks. I enjoy solving complex problems by combining clean architecture with exceptional user experience, ensuring every project is both functional and aesthetically refined.
            </p>
            <p>
              Beyond software development, I actively explore Artificial Intelligence, UI/UX Design, Automation, and Product Development. I also have a strong interest in financial technology, entrepreneurship, and digital innovation, which has strengthened my analytical thinking and strategic decision-making.
            </p>
            <p>
              I believe that great software is built through curiosity, discipline, and attention to detail. Whether collaborating on a team or working independently, I strive to deliver meaningful solutions that create lasting impact.
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full max-w-sm lg:w-1/3 relative">
          <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image 
              src="/profile.png" 
              alt="Rayyan Ahammed" 
              fill
              className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
