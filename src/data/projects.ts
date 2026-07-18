export type Project = {
  id: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  challenges: string;
  result: string;
  lessons: string;
  tech: string[];
  link: string;
  year: string;
  role: string;
  image: string;
  altText: string;
};

export const projects: Project[] = [
  {
    id: "careernav",
    title: "CareerNav",
    description: "Career acceleration platform for students. Features learning roadmaps, skill trackers, and resume builders.",
    overview: "CareerNav is a comprehensive platform designed to bridge the gap between academic learning and industry requirements. It features dynamic learning roadmaps tailored to specific tech roles, an interactive skill tracker, and an AI-powered resume builder. Built with Next.js and Tailwind, it ensures a blazingly fast experience.",
    problem: "Students often graduate with theoretical knowledge but lack the specific practical skills required by modern tech companies. Existing platforms are either too generic or lack actionable, role-specific roadmaps.",
    approach: "I engineered a centralized hub that aggregates role-based roadmaps, utilizing a Postgres database for user progress tracking. The stack (Next.js + Tailwind) was chosen for its optimal balance of rapid iteration speed and production-grade performance.",
    challenges: "Handling real-time updates for the interactive skill tracker without overwhelming the database was a major hurdle. I resolved this by implementing a robust optimistic UI update pattern combined with debounced API calls, reducing database write operations by over 60%.",
    result: "Shipped a fully functional MVP featuring 5 core career roadmaps, a resume builder, and seamless authentication. The application maintains perfect 100 Lighthouse scores across performance and accessibility.",
    lessons: "Complex state management across highly interactive features taught me the importance of planning client-server boundaries early in the architecture phase.",
    tech: ["Next.js", "React", "Tailwind", "PostgreSQL"],
    link: "https://studentscareer.vercel.app/",
    year: "2026",
    role: "Full-Stack Developer",
    image: "/careernav.jpg",
    altText: "CareerNav dashboard interface displaying interactive learning roadmaps and skill progress charts."
  },
  {
    id: "rayyansys",
    title: "RAYYAN.SYS",
    description: "CLI-inspired terminal portfolio with keyboard-first navigation and retro CRT effects.",
    overview: "A unique, interactive portfolio designed to mimic a classic command-line interface. It features a custom command parser, keyboard-first navigation, and authentic retro CRT CSS effects. This project showcases deep DOM manipulation skills and a strong eye for unconventional UX.",
    problem: "Standard web portfolios often blend together in a sea of similar templates. I wanted a way to immediately signal strong technical proficiency while providing a memorable, highly interactive experience for developers and recruiters.",
    approach: "I built a custom terminal emulator entirely from scratch in React. Rather than relying on heavy terminal libraries, I architected a lightweight state machine to parse commands, handle history, and manage the file system simulation. Styling was achieved through pure CSS and Tailwind for the CRT scanline and flicker effects.",
    challenges: "Ensuring accessibility in a purely keyboard-driven, custom interface was challenging. Standard focus management breaks down in a simulated terminal. I solved this by maintaining a hidden, visually-impaired accessible input field that intercepts all keystrokes while syncing state with the visual terminal, ensuring screen readers could still interpret the flow.",
    result: "Delivered a high-performance terminal experience that handles complex commands seamlessly. The project achieved a unique aesthetic without sacrificing accessibility.",
    lessons: "I learned that unconventional UI patterns require significantly more foundational work to remain accessible, but the result is a massive differentiator.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://rayyan-sys.vercel.app/",
    year: "2026",
    role: "Frontend Developer",
    image: "/rayyansys.jpg",
    altText: "Terminal-style portfolio interface showing a command prompt with retro green text on a dark background."
  },
  {
    id: "ryxaurenite",
    title: "Ry Xaurenite",
    description: "Experimental personal portfolio showcasing modern web design trends and animations.",
    overview: "An award-winning experimental portfolio pushing the boundaries of web animation and CSS capabilities. Features complex GSAP timelines, custom cursor interactions, and seamless page transitions. This served as the testing ground for many of the premium effects used in my professional work.",
    problem: "To stand out as a UI/UX Developer, I needed a sandbox that pushed beyond standard CSS transitions into complex, timeline-based animation choreography without sacrificing framerate.",
    approach: "I leveraged Vite for blazing fast builds and integrated GSAP for precise control over sequential animations. I heavily utilized CSS custom properties mapped to scroll triggers to create a sense of depth and continuous interaction.",
    challenges: "Managing performance during heavy scroll-linked animations on mobile devices. I solved this by utilizing the `will-change` property strategically, offloading heavy calculations to the GPU via 3D transforms, and debouncing resize events to recalculate trigger points dynamically.",
    result: "A buttery-smooth 60fps experience across both desktop and mobile. The portfolio effectively acts as a living resume of advanced frontend capabilities.",
    lessons: "Animation should enhance, not obstruct. I learned the critical importance of keeping scroll-jacking to an absolute minimum and prioritizing immediate user feedback.",
    tech: ["React", "Vite", "Tailwind", "GSAP"],
    link: "https://ry-xaurenite-portfolio.vercel.app/",
    year: "2025",
    role: "UI/UX Developer",
    image: "/ryxaurenite.jpg",
    altText: "Modern web portfolio hero section featuring bold typography and abstract geometric background elements."
  }
];
