"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-geist tracking-tight text-white">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground">
          Open to software engineering internships, freelance projects, and innovative product development.
        </p>
      </div>

      {submitted ? (
        <div className="glass-card p-12 rounded-2xl flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
          <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-2xl text-left space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 bg-white text-black hover:bg-white/90 rounded-lg font-medium transition-all"
          >
            {isSubmitting ? "Sending..." : (
              <>
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
      
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>rayyan.officialx@gmail.com</div>
        <div className="flex gap-4">
          <a href="https://github.com/Rayyanmillionaire" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/rayyanahammed/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
