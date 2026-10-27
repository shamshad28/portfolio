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
  badgeColor: string;
  checkColor: string;
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
    color: "from-[#00f0ff] via-[#0077b6] to-[#023e8a]",
    glow: "rgba(0, 240, 255, 0.25)",
    borderAccent: "hover:border-[#00f0ff] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]",
    badgeColor: "text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/30",
    checkColor: "text-[#00f0ff]",
    icon: ShieldCheck,
  },
  {
    title: "Python Fundamentals Certification",
    issuer: "CERTIFIED CREDENTIAL",
    category: "Programming & Data Structures",
    badge: "CORE KERNEL",
    description: "Certified core competency in Python programming, object-oriented concepts, algorithm design, standard libraries, and automated data processing pipelines.",
    topics: ["OOP Principles", "Data Structures", "Algorithm Design", "Scripting & Automation"],
    color: "from-[#ff007f] via-[#fcee0a] to-[#ff007f]",
    glow: "rgba(255, 0, 127, 0.25)",
    borderAccent: "hover:border-[#ff007f] hover:shadow-[0_0_25px_rgba(255,0,127,0.3)]",
    badgeColor: "text-[#ff007f] bg-[#ff007f]/10 border-[#ff007f]/30",
    checkColor: "text-[#ff007f]",
    icon: Code,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-[#00f0ff]/20 reveal-on-scroll">
      {/* Background Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 bg-[#090e1f] border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] mb-4 cyber-cut">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-ping" />
          <span className="font-bold tracking-wider">[ 04 // CLEARANCE ]</span>
          <span className="text-[#ff007f]">•</span>
          <span className="text-slate-300">SECURITY PROTOCOLS</span>
        </div>
        <h2 className="font-cyber text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          SECURITY <span className="text-[#00f0ff] text-glow-cyan">CLEARANCE</span> &amp; <span className="text-[#ff007f] text-glow-pink">CERTS</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl font-tech">
          Verified industry credentials validating competencies in enterprise defense architectures and algorithmic programming.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-4xl mx-auto">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-5 sm:p-7 md:p-8 bg-[#070b18]/85 border border-slate-800 transition-all duration-300 group hover:translate-y-[-3px] relative flex flex-col justify-between cyber-cut ${item.borderAccent}`}
              style={{
                boxShadow: `0 0 30px -5px ${item.glow}`,
              }}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#0d1428] border border-[#00f0ff]/30 text-[#00f0ff] group-hover:scale-110 transition-transform cyber-cut">
                    <Icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <span className={`text-[10px] font-mono px-3 py-1 border cyber-cut tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  // {item.issuer} • {item.category}
                </div>

                <h3 className="text-xl font-bold font-cyber text-slate-100 group-hover:text-[#00f0ff] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm mt-3 leading-relaxed font-tech">
                  {item.description}
                </p>

                <div className="mt-5 space-y-1.5 font-tech">
                  {item.topics.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${item.checkColor}`} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-[#00ff9f]">
                  <Lock className="w-3.5 h-3.5 text-[#00ff9f]" />
                  ENCRYPTED // VERIFIED
                </span>
                <span className="text-[#00f0ff]">SHA-256 VALIDATED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

