import { useState } from "react";
import { Mail, Phone, ExternalLink, Copy, Check, Send, Terminal, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  // Phone number masked with stars for privacy as requested by user
  const maskedPhone = "+91 704542****";
  const email = "shamkhan7045@gmail.com";
  const linkedin = "https://www.linkedin.com/in/shamshad-khan-817591229";
  const github = "https://github.com/shamshad28";
  const instagram = "https://www.instagram.com/iam_shamshad_28?obrf=MTQwZmRsNXB2dGowcw==";

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleRequestCall = () => {
    setFormState((prev) => ({
      ...prev,
      subject: "Direct Voice Call Request // Technical Collaboration",
      message: prev.message || "Hi Shamshad, I would like to schedule a voice call with you to discuss...",
    }));
    document.getElementById("packet-form")?.scrollIntoView({ behavior: "smooth" });
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
    <section id="contact" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-white/[0.08] reveal-on-scroll">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D3FD50]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10 relative z-10">

        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          TRANSMIT <span className="text-[#D3FD50] text-glow-lime">PACKET</span> &amp; COMMS
        </h2>
        <p className="mt-2 text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl font-tech">
          Have an engineering project, high-impact role, or technical collaboration? Initiate direct packet transmission across any channel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start relative z-10">
        {/* Left Column: Direct Contact Information Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* Phone Card with Privacy Masking — No raw link exposed */}
          <div className="p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group border border-white/[0.08] hover:border-[#D3FD50]/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white group-hover:text-[#D3FD50] group-hover:border-[#D3FD50]/40 group-hover:scale-105 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-[#D3FD50] tracking-wider font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D3FD50]" />
                    <span>// VOICE_LINK • PRIVACY PROTECTED</span>
                  </div>
                  <div className="text-base font-bold text-white font-mono tracking-wider mt-0.5">
                    {maskedPhone}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(maskedPhone, "phone")}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-[#D3FD50] transition-colors text-xs flex items-center gap-1 border border-white/[0.08] cursor-pointer"
                title="Copy secure contact ID"
              >
                {copiedType === "phone" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D3FD50]" />
                    <span className="text-[#D3FD50] font-mono text-[11px]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px]">COPY</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center gap-2">
              <button
                type="button"
                onClick={handleRequestCall}
                className="flex-1 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-white border border-white/[0.1] hover:border-[#D3FD50]/40 text-xs font-mono font-semibold text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                title="Request a callback or voice discussion"
              >
                <Phone className="w-3.5 h-3.5 text-[#D3FD50]" /> REQUEST CALL
              </button>
              <a
                href={`mailto:${email}?subject=Direct%20Voice%20Call%20Request`}
                className="flex-1 py-2 px-3 rounded-xl bg-[#D3FD50]/10 hover:bg-[#D3FD50]/20 text-[#D3FD50] border border-[#D3FD50]/30 text-xs font-mono font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                title="Request call via secure email dispatch"
              >
                <Mail className="w-3.5 h-3.5" /> COMMS DISPATCH
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group border border-white/[0.08] hover:border-[#D3FD50]/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white group-hover:text-[#D3FD50] group-hover:border-[#D3FD50]/40 group-hover:scale-105 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#D3FD50] tracking-wider font-semibold">// DATALINK • DIRECT EMAIL</div>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#D3FD50] transition-colors break-all font-mono"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(email, "email")}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-[#D3FD50] transition-colors text-xs flex items-center gap-1 border border-white/[0.08] cursor-pointer"
                title="Copy email address"
              >
                {copiedType === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D3FD50]" />
                    <span className="text-[#D3FD50] font-mono text-[11px]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px]">COPY</span>
                  </>
                )}
              </button>
            </div>
            <div className="mt-4 pt-3.5 border-t border-white/[0.08]">
              <a
                href={`mailto:${email}`}
                className="w-full py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-[#D3FD50] text-xs font-mono font-semibold text-center transition-colors flex items-center justify-center gap-1.5 border border-white/[0.1] hover:border-[#D3FD50]/40"
              >
                <Mail className="w-3.5 h-3.5 text-[#D3FD50]" /> COMPOSE PACKET
              </a>
            </div>
          </div>

          {/* Social Profiles: LinkedIn, GitHub & Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl glass-panel glass-panel-hover transition-all duration-300 group flex flex-col justify-between border border-white/[0.08] hover:border-[#D3FD50]/50"
            >
              <div className="flex items-center justify-between mb-2">
                <svg className="w-4 h-4 fill-neutral-300 group-hover:fill-[#D3FD50] transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-[#D3FD50] transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-[#D3FD50] font-mono font-medium">// LINKEDIN</div>
                <div className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors font-mono">
                  Shamshad
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl glass-panel glass-panel-hover transition-all duration-300 group flex flex-col justify-between border border-white/[0.08] hover:border-[#D3FD50]/50"
            >
              <div className="flex items-center justify-between mb-2">
                <svg className="w-4 h-4 fill-neutral-300 group-hover:fill-[#D3FD50] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-[#D3FD50] transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-400 group-hover:text-[#D3FD50] font-mono font-medium">// GITHUB</div>
                <div className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors font-mono">
                  @shamshad28
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl glass-panel glass-panel-hover transition-all duration-300 group flex flex-col justify-between border border-white/[0.08] hover:border-[#D3FD50]/50"
            >
              <div className="flex items-center justify-between mb-2">
                <svg className="w-4 h-4 fill-neutral-300 group-hover:fill-[#D3FD50] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-[#D3FD50] transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-[#D3FD50] font-mono font-medium">// INSTAGRAM</div>
                <div className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors truncate font-mono">
                  @iam_shamshad_28
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Interactive Contact Form */}
        <div className="lg:col-span-7">
          <form
            id="packet-form"
            onSubmit={handleSubmit}
            className="p-6 sm:p-7 rounded-2xl glass-panel relative border border-white/[0.08]"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-4 h-4 text-[#D3FD50]" />
                <span className="text-xs font-mono text-[#D3FD50] uppercase tracking-wider font-semibold">
                  TERMINAL // PACKET TRANSMISSION
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white">Direct Message Transmission</h3>
              <p className="text-xs text-neutral-400 mt-0.5 font-tech">
                Dispatch an encrypted message packet directly to <span className="text-[#D3FD50] font-mono break-all">{email}</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                  // SENDER NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Jensen"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50] transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                  // RETURN ADDRESS (EMAIL)
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50] transition-all font-mono"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                // PACKET SUBJECT
              </label>
              <input
                type="text"
                required
                placeholder="Software Collaboration / Technical Opportunity"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50] transition-all font-mono"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                // ENCRYPTED PAYLOAD (MESSAGE)
              </label>
              <textarea
                required
                rows={3}
                placeholder="Hi Shamshad, I checked out your portfolio and would like to collaborate on..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50] transition-all resize-none font-tech"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-neutral-500 font-mono text-center sm:text-left">
                {isSent ? "DISPATCHING PACKET..." : "[PROTOCOL: 256-BIT ENCRYPTED]"}
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#D3FD50] text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-lime hover:bg-white hover:text-black hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-black stroke-[2.5]" />
                <span>DISPATCH PACKET</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
