import type { Metadata, Viewport } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { EasterEgg } from "@/components/animations/EasterEgg";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: "Rayyan Ahammed | Software Engineer",
  description: "Crafting modern, scalable, and user-centric digital experiences through clean code, thoughtful design, and continuous innovation.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rayyan-portfolio-ry.vercel.app/#person",
        "name": "Rayyan Ahammed",
        "jobTitle": "Software Engineer",
        "url": "https://rayyan-portfolio-ry.vercel.app/",
        "sameAs": [
          "https://github.com/Rayyanmillionaire",
          "https://www.linkedin.com/in/rayyanahammed/"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "KMCT CEETM"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://rayyan-portfolio-ry.vercel.app/#website",
        "url": "https://rayyan-portfolio-ry.vercel.app/",
        "name": "Rayyan Ahammed | Software Engineer",
        "publisher": {
          "@id": "https://rayyan-portfolio-ry.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <EasterEgg />
        <CommandPalette />
        {children}
        {modal}
      </body>
    </html>
  );
}
