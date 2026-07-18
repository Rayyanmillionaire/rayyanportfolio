"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { User, Briefcase, Mail, FolderHeart, Moon, Sun, Monitor, Code } from "lucide-react";
import { useRouter } from "next/navigation";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) })}>
              <User className="mr-2 h-4 w-4" />
              <span>About Me</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => { document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) })}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Experience</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) })}>
              <FolderHeart className="mr-2 h-4 w-4" />
              <span>Selected Works</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {
              const link = document.createElement('a');
              link.href = '/Rayyan_Ahammed_Resume.pdf';
              link.download = 'Rayyan_Ahammed_Resume.pdf';
              link.click();
            })}>
              <Monitor className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) })}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Socials">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/Rayyanmillionaire", "_blank"))}>
              <Code className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/rayyanahammed/", "_blank"))}>
              <Monitor className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme (Placeholder)">
            <CommandItem onSelect={() => runCommand(() => document.documentElement.classList.remove('dark'))}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light Mode</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.documentElement.classList.add('dark'))}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark Mode</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
