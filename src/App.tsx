import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero3D from "./component/Hero3D";
import Skill from "./component/Skill";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Achievements from "./component/Achievements";
import Education from "./component/Education";
import Contact from "./component/Contact";
import { ArrowRight, Mail, Phone, Heart } from "lucide-react";

export default function App() {
  const phone = "7045421172";
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
    "NEXCORE ALLIANCE LLP",
    "CYBERPUNK FULL-STACK OPERATOR",
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
    <div className="min-h-screen bg-[#03050c] text-slate-100 font-tech selection:bg-[#ff007f] selection:text-white">
      {/* Background Cyber Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-[#00f0ff]/12 rounded-full blur-[170px]" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#ff007f]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#00ff9f]/8 rounded-full blur-[160px]" />
        {/* Subtle Cyber Grid Lines Overlay */}
        <div className="absolute inset-0 cyber-scanlines opacity-40 pointer-events-none" />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section — Cyberpunk Editorial Style */}
      <section id="about" className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal-on-scroll">
        {/* Left Column: Cyberpunk Editorial Typography */}
        <div className="lg:col-span-7 z-10 space-y-6">
          {/* Index pill badge with Company & Status */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-[#090e1f]/90 border border-[#00f0ff]/40 text-[11px] sm:text-xs font-mono text-slate-200 cyber-cut shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff9f] animate-ping shrink-0" />
            <span className="text-[#00f0ff] font-bold tracking-wider">[ SYSTEM ACTIVE // NEXCORE ALLIANCE ]</span>
            <span className="text-[#ff007f] hidden sm:inline">•</span>
            <span className="text-slate-300">Joined Sep 7, 2026</span>
          </div>

          {/* Cyberpunk Punchline Headline */}
          <div className="space-y-2">
            <h1 className="font-cyber text-3xl min-[420px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase break-words">
              <span className="text-white text-glow-cyan">SOFTWARE</span> <br />
              ENGINEER<br />
              <span className="text-[#00f0ff] underline decoration-[#ff007f] underline-offset-8">
                FULL-STACK DEVELOPER
              </span>
            </h1>
          </div>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-tech">
            I&apos;m <span className="text-white font-bold text-glow-cyan">Shamshad Khan</span> — Full-Stack Developer at{" "}
            <a
              href="https://www.linkedin.com/company/nexcore-alliance/"
              target="_blank"
              rel="noreferrer"
              className="text-[#00f0ff] hover:text-[#ff007f] font-bold underline underline-offset-4 decoration-[#00f0ff]/50 transition-colors"
            >
              Nexcore Alliance LLP
            </a>
            , architecting high-frequency real-time messaging platforms, distributed logging systems, AI-powered digital products, and cross-platform mobile runtimes.
          </p>

          {/* Micro Stack Tags in Cyberpunk Chips */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 bg-[#090e1f] border border-[#00f0ff]/30 text-[#00f0ff] cyber-cut hover:border-[#00f0ff] hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all">
              ⚡ Nexcore Alliance LLP
            </span>
            <span className="px-3 py-1 bg-[#090e1f] border border-[#ff007f]/30 text-[#ff007f] cyber-cut hover:border-[#ff007f] hover:shadow-[0_0_10px_rgba(255,0,127,0.4)] transition-all">
              ⚡ MERN Stack Architecture
            </span>
            <span className="px-3 py-1 bg-[#090e1f] border border-[#00ff9f]/30 text-[#00ff9f] cyber-cut hover:border-[#00ff9f] hover:shadow-[0_0_10px_rgba(0,255,159,0.4)] transition-all">
              ⚡ React Native
            </span>
            <span className="px-3 py-1 bg-[#090e1f] border border-[#fcee0a]/30 text-[#fcee0a] cyber-cut hover:border-[#fcee0a] hover:shadow-[0_0_10px_rgba(252,238,10,0.4)] transition-all">
              ⚡ REST APIs &amp; WebSockets
            </span>
            <span className="px-3 py-1 bg-[#090e1f] border border-[#00f0ff]/30 text-[#00f0ff] cyber-cut hover:border-[#00f0ff] hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all">
              ⚡ AI &amp; Enterprise Solutions
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#00f0ff] to-[#00c8ff] text-black font-black text-sm uppercase font-mono tracking-widest cyber-cut transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(255,0,127,0.7)] hover:from-[#ff007f] hover:to-[#ff2a85] hover:text-white flex items-center gap-2.5 hover:scale-105"
            >
              <span>TRANSMIT PACKET</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#090e1f]/90 hover:bg-[#0f172a] text-[#00f0ff] font-bold text-sm font-mono tracking-wider cyber-cut border border-[#00f0ff]/40 hover:border-[#ff007f]/70 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
            >
              ACCESS OPS [03]
            </a>

            {/* Social Icons Pill */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300 pt-2 sm:pt-0">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#090e1f] border border-[#00f0ff]/30 text-slate-300 cyber-cut hover:text-[#00f0ff] hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
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
                className="p-3 bg-[#090e1f] border border-[#00f0ff]/30 text-slate-300 cyber-cut hover:text-[#00f0ff] hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
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
                className="p-3 bg-[#090e1f] border border-[#00f0ff]/30 text-slate-300 cyber-cut hover:text-[#ff007f] hover:border-[#ff007f] hover:shadow-[0_0_15px_rgba(255,0,127,0.4)] transition-all"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3 bg-[#090e1f] border border-[#00f0ff]/30 text-slate-300 cyber-cut hover:text-[#fcee0a] hover:border-[#fcee0a] hover:shadow-[0_0_15px_rgba(252,238,10,0.4)] transition-all"
                aria-label="Email Shamshad Khan"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${phone}`}
                className="p-3 bg-[#090e1f] border border-[#00f0ff]/30 text-slate-300 cyber-cut hover:text-[#00ff9f] hover:border-[#00ff9f] hover:shadow-[0_0_15px_rgba(0,255,159,0.4)] transition-all"
                aria-label="Call Shamshad Khan"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Model with Auto-Move */}
        <div className="lg:col-span-5">
          <Hero3D />
        </div>
      </section>

      {/* Cyber Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden border-y border-[#00f0ff]/30 bg-[#060a17]/90 py-3.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
        <div className="animate-marquee font-mono text-xs uppercase tracking-widest text-[#00f0ff] gap-10 items-center">
          {marqueeKeywords.concat(marqueeKeywords).map((word, i) => (
            <div key={i} className="flex items-center gap-6 whitespace-nowrap">
              <span className="hover:text-[#ff007f] transition-colors">{word}</span>
              <span className="text-[#ff007f] font-bold">⚡</span>
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

      {/* Footer */}
      <footer className="border-t border-[#00f0ff]/30 bg-[#020409] py-12 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cyber font-black text-xl tracking-tight text-white text-glow-cyan">
              SHAMSHAD<span className="text-[#ff007f]">.</span>KHAN
            </span>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              // FULL-STACK OPERATOR AT NEXCORE ALLIANCE LLP • ACTIVE PROTOCOL
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-mono uppercase tracking-wider">
            <a href="#about" className="hover:text-[#00f0ff] transition-colors">
              // ABOUT
            </a>
            <a href="#skills" className="hover:text-[#00f0ff] transition-colors">
              // ARSENAL
            </a>
            <a href="#experience" className="hover:text-[#00f0ff] transition-colors">
              // CHRONICLES
            </a>
            <a href="#projects" className="hover:text-[#00f0ff] transition-colors">
              // OPS
            </a>
            <a href="#achievements" className="hover:text-[#00f0ff] transition-colors">
              // CLEARANCE
            </a>
            <a href="#education" className="hover:text-[#00f0ff] transition-colors">
              // ARCHIVE
            </a>
            <a href="#contact" className="hover:text-[#ff007f] transition-colors">
              // TRANSMIT
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span>[ SYSTEM: NOMINAL ]</span>
            <Heart className="w-3.5 h-3.5 text-[#ff007f] fill-[#ff007f]" />
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );

}