import { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight, Globe } from "lucide-react";

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
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/90 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
        {/* K72 Editorial Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-white group-hover:border-[#D3FD50] group-hover:text-[#D3FD50] transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black tracking-tight text-white text-base md:text-lg group-hover:text-[#D3FD50] transition-colors">
                SHAMSHAD<span className="text-[#D3FD50]">.</span>KHAN
              </span>
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase -mt-1 font-semibold">
                FULL-STACK SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* K72 Style City Telemetry Clock */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-neutral-300 backdrop-blur-md">
            <Globe className="w-3 h-3 text-[#D3FD50]" />
            <span>
              MUMBAI_<span className="text-[#D3FD50] font-semibold">{currentTime || "12:00:00"}</span>
            </span>
          </div>
        </div>

        {/* Desktop Quicknav — K72 Agency Editorial Style */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase font-mono font-medium tracking-wider text-neutral-300">
          <a href="#about" className="hover:text-[#D3FD50] transition-colors">
            Agency
          </a>
          <a href="#skills" className="hover:text-[#D3FD50] transition-colors">
            Arsenal
          </a>
          <a href="#experience" className="hover:text-[#D3FD50] transition-colors">
            Chronicles
          </a>
          <a href="#projects" className="hover:text-[#D3FD50] transition-colors">
            Work
          </a>
          <a href="#achievements" className="hover:text-[#D3FD50] transition-colors">
            Clearance
          </a>
          <a href="#education" className="hover:text-[#D3FD50] transition-colors">
            Archive
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#D3FD50] text-black font-extrabold text-xs tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.03] active:scale-95 shadow-lime"
          >
            <span>TRANSMIT</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl min-w-[38px] min-h-[38px] flex items-center justify-center bg-white/[0.04] border border-white/[0.1] text-white hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all active:scale-95 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 sm:px-6 py-4 bg-black/98 backdrop-blur-2xl border-b border-white/[0.08] space-y-2.5 font-mono text-sm">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/[0.08] text-xs text-neutral-400">
            <Globe className="w-3.5 h-3.5 text-[#D3FD50]" />
            <span>
              MUMBAI_<span className="text-[#D3FD50] font-semibold">{currentTime}</span>
            </span>
          </div>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#D3FD50] py-1"
          >
            // AGENCY
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#D3FD50] py-1"
          >
            // ARSENAL
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#D3FD50] py-1"
          >
            // CHRONICLES
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#D3FD50] py-1"
          >
            // WORK
          </a>
          <a
            href="#achievements"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#D3FD50] py-1"
          >
            // CLEARANCE
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#D3FD50] py-1"
          >
            // ARCHIVE
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#D3FD50] text-black font-extrabold text-sm mt-2 shadow-lime"
          >
            <span>TRANSMIT PACKET</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      )}
    </header>
  );
}
