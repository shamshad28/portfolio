import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero3D from "./component/Hero3D";
import Skill from "./component/Skill";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Achievements from "./component/Achievements";
import Education from "./component/Education";
import Contact from "./component/Contact";
import GalaxyBackground from "./component/GalaxyBackground";
import IntroVideoLoader from "./component/IntroVideoLoader";
import { ArrowUpRight, Mail, Phone, Heart, MessageSquare } from "lucide-react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isImmersiveGalaxy, setIsImmersiveGalaxy] = useState(false);
  const email = "shamkhan7045@gmail.com";
  const linkedin = "https://www.linkedin.com/in/shamshad-khan-817591229?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
  const github = "https://github.com/shamshad28";
  const instagram = "https://www.instagram.com/iam_shamshad_28?obrf=MTQwZmRsNXB2dGowcw==";

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll, .reveal-from-left, .reveal-from-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const marqueeKeywords = [
    "FULL-STACK DEVELOPER",
    "MERN ARCHITECTURE & KERNEL",
    "REACT NATIVE (MOBILE HYPERDRIVE)",
    "NODE.JS & DISTRIBUTED SYSTEMS",
    "AI SOLUTIONS & NEURAL PIPELINES",
    "DISTRIBUTED TELEMETRY & LOGGING",
    "PULSE CHAT (WEBSOCKET MATRIX)",
    "RESTFUL API PROTOCOLS",
    "MONGODB & SQL COMPILATION",
    "MICROSOFT CYBERSECURITY DEFENSE",
    "SHAMSHAD KHAN // DEV.0x28",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-tech selection:bg-[#D3FD50] selection:text-black relative">
      {/* Starting Page Intro Video Loader */}
      {showIntro && (
        <IntroVideoLoader onFinish={() => setShowIntro(false)} />
      )}

      {/* Full-Screen Interactive Particle Galaxy Simulation Backdrop */}
      <GalaxyBackground
        immersiveMode={isImmersiveGalaxy}
        onToggleImmersive={setIsImmersiveGalaxy}
      />

      {/* Main Website Content (Hidden smoothly during Immersive Full-Screen Simulation Mode) */}
      <div
        className={`relative z-10 transition-opacity duration-700 ${
          isImmersiveGalaxy ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Top Navbar */}
        <Navbar />

      {/* Hero Section — K72 Editorial Architecture */}
      <section id="about" className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-4 sm:pb-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Bold Typography & Agency Punchline */}
        <div className="lg:col-span-7 z-10 space-y-4">
          {/* K72 Ultra-Bold Punchline Headline */}
          <div className="space-y-1">

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-white">
              SOFTWARE <br />
              ENGINEER <br />
              <span className="text-[#D3FD50] tracking-tight">
                FULL-STACK DEVELOPER
              </span>
            </h1>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed font-tech">
            I&apos;m <span className="text-white font-semibold">Shamshad Khan</span> — Full-Stack Developer &amp; Software Engineer, architecting high-frequency real-time messaging platforms, distributed logging systems, AI-powered digital products, and cross-platform mobile runtimes.
          </p>

          {/* Micro Stack Tags in K72 Pill Chips */}


          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
            <a
              href="#contact"
              className="w-full sm:w-auto justify-center px-7 py-3 rounded-full bg-[#D3FD50] text-black font-extrabold text-xs uppercase font-mono tracking-wider transition-all duration-300 shadow-lime hover:bg-white hover:text-black hover:scale-[1.03] active:scale-95 flex items-center gap-2"
            >
              <span>TRANSMIT PACKET</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-[#D3FD50] font-medium text-xs font-mono tracking-wider border border-white/[0.12] hover:border-[#D3FD50] transition-all"
            >
              WORK OPS
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-[#D3FD50] font-medium text-xs font-mono tracking-wider border border-white/[0.12] hover:border-[#D3FD50] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D3FD50]" />
              <span>LET&apos;S TALK</span>
            </a>

            {/* Social Icons Pill — Secure, No Raw Phone Exposure */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-neutral-300">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-black hover:border-[#D3FD50] hover:bg-[#D3FD50] transition-all"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-black hover:border-[#D3FD50] hover:bg-[#D3FD50] transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-black hover:border-[#D3FD50] hover:bg-[#D3FD50] transition-all"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`mailto:${email}`}
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-black hover:border-[#D3FD50] hover:bg-[#D3FD50] transition-all"
                aria-label="Email Shamshad Khan"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-black hover:border-[#D3FD50] hover:bg-[#D3FD50] transition-all"
                aria-label="Contact Shamshad Khan"
                title="Contact via Phone / Comms"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Hologram */}
        <div className="lg:col-span-5">
          <Hero3D />
        </div>
      </section>

      {/* K72 Minimal Continuous Marquee Ticker */}
      <div className="w-full overflow-hidden border-y border-white/[0.08] bg-black py-2.5 mb-2">
        <div className="animate-marquee font-mono text-xs uppercase tracking-widest text-neutral-300 gap-10 items-center">
          {marqueeKeywords.concat(marqueeKeywords).map((word, i) => (
            <div key={i} className="flex items-center gap-6 whitespace-nowrap">
              <span className="hover:text-[#D3FD50] transition-colors">{word}</span>
              <span className="text-[#D3FD50] font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <Skill />

      {/* Work Experience Section */}
      <Experience />

      {/* Featured Projects Section */}
      <Project />

      {/* Achievements & Certifications Section */}
      <Achievements />

      {/* Education Section */}
      <Education />

      {/* Let's Talk / Contact Section */}
      <Contact />

      {/* K72 Editorial Minimal Footer */}
      <footer className="border-t border-white/[0.08] bg-black py-8 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-heading font-black text-lg tracking-tight text-white">
              SHAMSHAD<span className="text-[#D3FD50]">.</span>KHAN
            </span>
            <p className="text-[11px] text-neutral-400 mt-0.5 font-mono">
              // FULL-STACK SOFTWARE ARCHITECT • ACTIVE PROTOCOL
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 text-xs text-neutral-400 font-mono uppercase tracking-wider">
            <a href="#about" className="hover:text-[#D3FD50] transition-colors">
              // AGENCY
            </a>
            <a href="#skills" className="hover:text-[#D3FD50] transition-colors">
              // ARSENAL
            </a>
            <a href="#experience" className="hover:text-[#D3FD50] transition-colors">
              // CHRONICLES
            </a>
            <a href="#projects" className="hover:text-[#D3FD50] transition-colors">
              // WORK
            </a>
            <a href="#achievements" className="hover:text-[#D3FD50] transition-colors">
              // CLEARANCE
            </a>
            <a href="#education" className="hover:text-[#D3FD50] transition-colors">
              // ARCHIVE
            </a>
            <a href="#contact" className="hover:text-[#D3FD50] transition-colors">
              // TRANSMIT
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
            <span>[ SYSTEM: NOMINAL ]</span>
            <Heart className="w-3.5 h-3.5 text-[#D3FD50] fill-[#D3FD50]" />
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}