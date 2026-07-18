"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function ModalWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Save previously focused element to restore it later
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    // Focus the modal content on open
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Hide background content from screen readers
    const root = document.getElementById("projects"); // or body, but we need to exclude the modal
    if (root) root.setAttribute("aria-hidden", "true");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }

      // Simple focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (root) root.removeAttribute("aria-hidden");
      
      // Restore focus on close
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [router]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => router.back()}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
      />
      <div 
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-12 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-label="Project Case Study"
      >
        <div
          ref={modalRef}
          tabIndex={-1}
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-white/10 rounded-3xl shadow-2xl pointer-events-auto outline-none"
        >
          {children}
        </div>
      </div>
    </>
  );
}
