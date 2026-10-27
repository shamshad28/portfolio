import { useState, useEffect } from "react";
import { Terminal, Menu, X, Zap, Radio } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#03050c]/85 border-b border-[#00f0ff]/20">
      {/* Top micro scanline ticker */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00f0ff] to-[#ff007f] opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-lg group">
            <div className="p-1.5 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)] cyber-cut">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-cyber font-extrabold tracking-tight text-white text-base md:text-lg group-hover:text-glow-cyan transition-all">
                SHAMSHAD<span className="text-[#00f0ff]">.</span>KHAN
              </span>
              <span className="text-[10px] font-mono text-[#ff007f] tracking-widest uppercase -mt-1">
                // NETRUNNER • FULL-STACK
              </span>
            </div>
          </a>

          {/* Live Node Clock Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#090e1f]/90 border border-[#00f0ff]/25 text-[11px] font-mono text-slate-300 cyber-cut">
            <Radio className="w-3 h-3 text-[#00ff9f] animate-pulse" />
            <span>
              NODE_MUMBAI // <span className="text-[#00f0ff] font-bold">{currentTime || "12:00:00"}</span>
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 text-xs uppercase font-mono tracking-wider text-slate-300">
          <a href="#about" className="hover:text-[#00f0ff] hover:text-glow-cyan transition-colors">
            // ABOUT
          </a>
          <a href="#skills" className="hover:text-[#00f0ff] hover:text-glow-cyan transition-colors">
            // ARSENAL
          </a>
          <a href="#experience" className="hover:text-[#00f0ff] hover:text-glow-cyan transition-colors">
            // CHRONICLES
          </a>
          <a href="#projects" className="hover:text-[#00f0ff] hover:text-glow-cyan transition-colors flex items-center gap-1">
            // OPS <span className="text-[#ff007f] font-bold text-[10px]">[03]</span>
          </a>
          <a href="#achievements" className="hover:text-[#00f0ff] hover:text-glow-cyan transition-colors">
            // CLEARANCE
          </a>
          <a href="#education" className="hover:text-[#00f0ff] hover:text-glow-cyan transition-colors">
            // ARCHIVE
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#00f0ff] to-[#00c8ff] text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] hover:from-[#ff007f] hover:to-[#ff2a85] hover:text-white cyber-cut hover:scale-105"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>TRANSMIT</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center bg-[#090e1f] border border-[#00f0ff]/30 text-[#00f0ff] hover:text-white cyber-cut active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 sm:px-6 py-4 sm:py-5 bg-[#03050c]/98 border-b border-[#00f0ff]/30 space-y-3 font-mono text-sm">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#00f0ff]/20 text-xs text-slate-400">
            <Radio className="w-3.5 h-3.5 text-[#00ff9f] animate-pulse" />
            <span>
              NODE_MUMBAI // <span className="text-[#00f0ff] font-bold">{currentTime}</span>
            </span>
          </div>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] py-1"
          >
            [ 01 ] // ABOUT
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] py-1"
          >
            [ 02 ] // TECH ARSENAL
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] py-1"
          >
            [ 03 ] // CHRONICLES
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] py-1"
          >
            [ 04 ] // OPS (03)
          </a>
          <a
            href="#achievements"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] py-1"
          >
            [ 05 ] // CLEARANCE
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] py-1"
          >
            [ 06 ] // ARCHIVE
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#00f0ff] to-[#ff007f] text-black font-extrabold text-sm mt-3 shadow-[0_0_20px_rgba(0,240,255,0.4)] cyber-cut"
          >
            <Zap className="w-4 h-4 fill-current text-black" />
            INITIATE TRANSMISSION
          </a>
        </div>
      )}
    </header>
  );
}

