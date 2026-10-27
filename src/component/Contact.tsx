import { useState } from "react";
import { Mail, Phone, ExternalLink, Copy, Check, Send, MessageCircle, Terminal } from "lucide-react";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const phone = "7045421172";
  const formattedPhone = "+91 7045421172";
  const email = "shamkhan7045@gmail.com";
  const linkedin = "https://www.linkedin.com/in/shamshad-khan-817591229";
  const github = "https://github.com/shamshad28";
  const instagram = "https://www.instagram.com/iam_shamshad_28?obrf=MTQwZmRsNXB2dGowcw==";
  const whatsapp = "https://wa.me/917045421172";

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-[#00f0ff]/20 reveal-on-scroll">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#00f0ff]/6 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 bg-[#090e1f] border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] mb-4 cyber-cut">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-ping" />
          <span className="font-bold tracking-wider">[ 06 // COMMS ]</span>
          <span className="text-[#ff007f]">•</span>
          <span className="text-slate-300">SIGNAL TRANSMISSION</span>
        </div>
        <h2 className="font-cyber text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          TRANSMIT <span className="text-[#00f0ff] text-glow-cyan">PACKET</span> &amp; <span className="text-[#ff007f] text-glow-pink">COMMS</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl font-tech">
          Have a software project, high-impact role, or technical collaboration? Initiate direct packet transmission across any channel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Direct Contact Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Phone Card */}
          <div className="p-5 bg-[#070b18]/85 border border-[#00f0ff]/30 hover:border-[#00f0ff] transition-all duration-300 group cyber-cut shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-[#0d1428] border border-[#00f0ff]/40 text-[#00f0ff] group-hover:scale-105 transition-transform cyber-cut">
                  <Phone className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#00f0ff] tracking-wider">// VOICE_LINK • CALL</div>
                  <a
                    href={`tel:${phone}`}
                    className="text-base font-bold text-slate-100 hover:text-[#00f0ff] transition-colors font-mono"
                  >
                    {formattedPhone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(phone, "phone")}
                className="p-2 bg-[#0d1428] hover:bg-[#131d38] text-slate-400 hover:text-[#00f0ff] transition-colors text-xs flex items-center gap-1 border border-slate-700 cyber-cut"
                title="Copy phone number"
              >
                {copiedType === "phone" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff9f]" />
                    <span className="text-[#00ff9f] font-mono text-[11px]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px]">COPY</span>
                  </>
                )}
              </button>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
              <a
                href={`tel:${phone}`}
                className="flex-1 py-2 px-3 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 text-xs font-mono font-bold text-center transition-colors flex items-center justify-center gap-1.5 cyber-cut"
              >
                <Phone className="w-3.5 h-3.5" /> CALL
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 bg-[#00ff9f]/10 hover:bg-[#00ff9f]/20 text-[#00ff9f] border border-[#00ff9f]/30 text-xs font-mono font-bold text-center transition-colors flex items-center justify-center gap-1.5 cyber-cut"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WHATSAPP
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-5 bg-[#070b18]/85 border border-[#ff007f]/30 hover:border-[#ff007f] transition-all duration-300 group cyber-cut shadow-[0_0_20px_rgba(255,0,127,0.15)]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-[#160c1c] border border-[#ff007f]/40 text-[#ff007f] group-hover:scale-105 transition-transform cyber-cut">
                  <Mail className="w-5 h-5 text-[#ff007f]" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#ff007f] tracking-wider">// DATALINK • EMAIL</div>
                  <a
                    href={`mailto:${email}`}
                    className="text-base font-bold text-slate-100 hover:text-[#ff007f] transition-colors break-all font-mono"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(email, "email")}
                className="p-2 bg-[#0d1428] hover:bg-[#131d38] text-slate-400 hover:text-[#ff007f] transition-colors text-xs flex items-center gap-1 border border-slate-700 cyber-cut"
                title="Copy email address"
              >
                {copiedType === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff9f]" />
                    <span className="text-[#00ff9f] font-mono text-[11px]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px]">COPY</span>
                  </>
                )}
              </button>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={`mailto:${email}`}
                className="w-full py-2 px-3 bg-[#0d1428] hover:bg-[#131d38] text-slate-200 hover:text-[#00f0ff] text-xs font-mono font-bold text-center transition-colors flex items-center justify-center gap-1.5 border border-slate-700 cyber-cut"
              >
                <Mail className="w-3.5 h-3.5 text-[#00f0ff]" /> COMPOSE PACKET
              </a>
            </div>
          </div>

          {/* Social Profiles: LinkedIn, GitHub & Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-[#070b18]/85 border border-[#00f0ff]/25 hover:border-[#00f0ff] transition-all duration-300 group flex flex-col justify-between cyber-cut hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <div className="flex items-center justify-between mb-3">
                <svg className="w-5 h-5 fill-[#00f0ff]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00f0ff] transition-colors" />
              </div>
              <div>
                <div className="text-[11px] text-[#00f0ff] font-mono">// LINKEDIN</div>
                <div className="text-sm font-bold text-slate-200 group-hover:text-[#00f0ff] transition-colors font-mono">
                  Shamshad
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-[#070b18]/85 border border-[#00f0ff]/25 hover:border-[#00f0ff] transition-all duration-300 group flex flex-col justify-between cyber-cut hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <div className="flex items-center justify-between mb-3">
                <svg className="w-5 h-5 fill-slate-200 group-hover:fill-[#00f0ff] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00f0ff] transition-colors" />
              </div>
              <div>
                <div className="text-[11px] text-[#00f0ff] font-mono">// GITHUB</div>
                <div className="text-sm font-bold text-slate-200 group-hover:text-[#00f0ff] transition-colors font-mono">
                  @shamshad28
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-[#070b18]/85 border border-[#ff007f]/25 hover:border-[#ff007f] transition-all duration-300 group flex flex-col justify-between cyber-cut hover:shadow-[0_0_15px_rgba(255,0,127,0.3)]"
            >
              <div className="flex items-center justify-between mb-3">
                <svg className="w-5 h-5 fill-[#ff007f]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#ff007f] transition-colors" />
              </div>
              <div>
                <div className="text-[11px] text-[#ff007f] font-mono">// INSTAGRAM</div>
                <div className="text-sm font-bold text-slate-200 group-hover:text-[#ff007f] transition-colors truncate font-mono">
                  @iam_shamshad_28
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Interactive Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-7 md:p-8 bg-[#070b18]/85 border border-[#00f0ff]/30 shadow-[0_0_35px_-5px_rgba(0,240,255,0.2)] relative cyber-cut"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                  TERMINAL_V2 // PACKET TRANSMISSION
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-cyber text-slate-100">Direct Message Transmission</h3>
              <p className="text-xs text-slate-400 mt-1 font-tech">
                Dispatch an encrypted message packet directly to <span className="text-[#00f0ff] font-mono break-all">{email}</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#00f0ff] mb-1.5">
                  // SENDER NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Jensen"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0f22] border border-slate-700 text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all cyber-cut font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#00f0ff] mb-1.5">
                  // RETURN ADDRESS (EMAIL)
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@matrix.corp"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0f22] border border-slate-700 text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all cyber-cut font-mono"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-mono uppercase text-[#00f0ff] mb-1.5">
                // PACKET SUBJECT
              </label>
              <input
                type="text"
                required
                placeholder="Software Collaboration / Technical Opportunity"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0f22] border border-slate-700 text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all cyber-cut font-mono"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono uppercase text-[#00f0ff] mb-1.5">
                // ENCRYPTED PAYLOAD (MESSAGE)
              </label>
              <textarea
                required
                rows={4}
                placeholder="Hi Shamshad, I checked out your portfolio and would like to collaborate on..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0f22] border border-slate-700 text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all resize-none cyber-cut font-tech"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono text-center sm:text-left">
                {isSent ? "DISPATCHING PACKET..." : "[PROTOCOL: 256-BIT ENCRYPTED]"}
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#00f0ff] to-[#00c8ff] text-black font-extrabold text-sm uppercase font-mono tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,127,0.6)] hover:from-[#ff007f] hover:to-[#ff2a85] hover:text-white flex items-center justify-center gap-2 cyber-cut hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH PACKET</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

