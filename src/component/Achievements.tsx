import { ShieldCheck, Code, CheckCircle2, Lock } from "lucide-react";

interface AchievementItem {
  title: string;
  issuer: string;
  category: string;
  badge: string;
  description: string;
  topics: string[];
  color: string;
  glow: string;
  borderAccent: string;
  icon: typeof ShieldCheck;
}

const achievements: AchievementItem[] = [
  {
    title: "Microsoft Cyber Security Certification",
    issuer: "MICROSOFT CORP",
    category: "Security Architecture & Threat Defense",
    badge: "OFFICIAL CLEARANCE",
    description: "Certified proficiency in fundamental cybersecurity principles, identity & access management, threat defense mechanisms, and secure cloud environments.",
    topics: ["Threat Mitigation", "Identity & Access Management", "Network Security", "Security Operations"],
    color: "from-[#D3FD50] to-white",
    glow: "rgba(211, 253, 80, 0.12)",
    borderAccent: "hover:border-[#D3FD50]/50 hover:shadow-[0_8px_30px_-4px_rgba(211,253,80,0.2)]",
    icon: ShieldCheck,
  },
  {
    title: "Python Fundamentals Certification",
    issuer: "CERTIFIED CREDENTIAL",
    category: "Programming & Data Structures",
    badge: "CORE KERNEL",
    description: "Certified core competency in Python programming, object-oriented concepts, algorithm design, standard libraries, and automated data processing pipelines.",
    topics: ["OOP Principles", "Data Structures", "Algorithm Design", "Scripting & Automation"],
    color: "from-white to-[#D3FD50]",
    glow: "rgba(255, 255, 255, 0.1)",
    borderAccent: "hover:border-white/50 hover:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.15)]",
    icon: Code,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-white/[0.08] reveal-on-scroll">
      {/* Background Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#D3FD50]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10 relative z-10">

        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          SECURITY <span className="text-[#D3FD50] text-glow-lime">CLEARANCE</span> &amp; CERTS
        </h2>
        <p className="mt-2 text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl font-tech">
          Verified industry credentials validating competencies in enterprise defense architectures and algorithmic programming.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 max-w-4xl mx-auto">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group relative flex flex-col justify-between border border-white/[0.08] ${item.borderAccent}`}
              style={{
                boxShadow: `0 8px 30px -4px ${item.glow}`,
              }}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white group-hover:text-[#D3FD50] group-hover:border-[#D3FD50]/40 group-hover:scale-105 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-3 py-0.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-[#D3FD50] tracking-wider font-semibold">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                  // {item.issuer} • {item.category}
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#D3FD50] transition-colors">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed font-tech">
                  {item.description}
                </p>

                <div className="mt-4 space-y-1.5 font-tech">
                  {item.topics.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#D3FD50]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-neutral-300 group-hover:text-[#D3FD50] transition-colors">
                  <Lock className="w-3 h-3 text-[#D3FD50]" />
                  ENCRYPTED // VERIFIED
                </span>
                <span className="text-[#D3FD50] font-semibold text-[11px] tracking-wider">SHA-256 VALIDATED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
