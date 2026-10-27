import { Code2, Server, Wrench, CheckCircle2, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  slot: string;
  icon: typeof Code2;
  color: string;
  glowColor: string;
  accentBorder: string;
  badgeAccent: string;
  skills: { name: string; highlight?: boolean; tag?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "MERN // WEB CORE",
    subtitle: "Frontend & Full-Stack Cyber Systems",
    slot: "SLOT_01",
    icon: Code2,
    color: "from-[#00f0ff] to-[#0077b6]",
    glowColor: "rgba(0, 240, 255, 0.25)",
    accentBorder: "hover:border-[#00f0ff]/70",
    badgeAccent: "text-[#00f0ff] border-[#00f0ff]/30 bg-[#00f0ff]/10 hover:border-[#00f0ff]",
    skills: [
      { name: "React.js", highlight: true, tag: "Frontend" },
      { name: "Node.js", highlight: true, tag: "Runtime" },
      { name: "Express.js", highlight: true, tag: "Framework" },
      { name: "MongoDB", highlight: true, tag: "NoSQL DB" },
      { name: "JavaScript (ES6+)", highlight: true, tag: "Core" },
      { name: "HTML5", highlight: false, tag: "Markup" },
      { name: "CSS3", highlight: false, tag: "Styling" },
      { name: "React Native", highlight: true, tag: "Mobile" },
    ],
  },
  {
    title: "BACKEND // ARCHITECTURE",
    subtitle: "Server Pipelines & Data Highway",
    slot: "SLOT_02",
    icon: Server,
    color: "from-[#ff007f] to-[#b5179e]",
    glowColor: "rgba(255, 0, 127, 0.25)",
    accentBorder: "hover:border-[#ff007f]/70",
    badgeAccent: "text-[#ff007f] border-[#ff007f]/30 bg-[#ff007f]/10 hover:border-[#ff007f]",
    skills: [
      { name: "RESTful API Design", highlight: true, tag: "Architecture" },
      { name: "Middleware", highlight: false, tag: "Express" },
      { name: "CRUD Operations", highlight: false, tag: "Database" },
      { name: "MongoDB", highlight: true, tag: "Document DB" },
      { name: "SQL", highlight: true, tag: "Relational DB" },
    ],
  },
  {
    title: "TOOLS // DEVOPS ARSENAL",
    subtitle: "Version Control, Telemetry & Testing",
    slot: "SLOT_03",
    icon: Wrench,
    color: "from-[#00ff9f] to-[#058c42]",
    glowColor: "rgba(0, 255, 159, 0.25)",
    accentBorder: "hover:border-[#00ff9f]/70",
    badgeAccent: "text-[#00ff9f] border-[#00ff9f]/30 bg-[#00ff9f]/10 hover:border-[#00ff9f]",
    skills: [
      { name: "Git", highlight: true, tag: "VCS" },
      { name: "GitHub", highlight: true, tag: "Network" },
      { name: "Postman", highlight: true, tag: "API Testing" },
      { name: "Chart.js", highlight: true, tag: "Data Viz" },
    ],
  },
];

export default function Skill() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-[#00f0ff]/20 reveal-on-scroll">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 bg-[#090e1f] border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] mb-4 cyber-cut">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="font-bold tracking-wider">[ 01 // ARSENAL ]</span>
          <span className="text-[#ff007f]">•</span>
          <span className="text-slate-300">NEURAL PROTOCOLS</span>
        </div>
        <h2 className="font-cyber text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          TECH <span className="text-[#00f0ff] text-glow-cyan">ARSENAL</span> &amp; <span className="text-[#ff007f] text-glow-pink">STACK</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl font-tech">
          Engineered with modern full-stack web and mobile protocols, high-concurrency APIs, resilient database clusters, and rapid dev pipelines.
        </p>
      </div>

      {/* Grid of 3 Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className={`relative bg-[#070b18]/80 border border-[#00f0ff]/25 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-3px] ${cat.accentBorder} group cyber-cut shadow-[0_0_20px_rgba(3,5,12,0.8)]`}
              style={{
                boxShadow: `0 0 25px -5px ${cat.glowColor}`,
              }}
            >
              {/* Top Bar Glow Accent */}
              <div
                className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${cat.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#0d1428] border border-[#00f0ff]/30 text-[#00f0ff] group-hover:scale-110 transition-transform cyber-cut">
                    <Icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-[#fcee0a] bg-[#fcee0a]/10 px-2 py-0.5 border border-[#fcee0a]/30 cyber-cut">
                      {cat.slot}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-[#0d1428] px-2.5 py-1 border border-[#00f0ff]/20">
                      {cat.skills.length} MODULES
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-cyber text-slate-100 group-hover:text-[#00f0ff] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 font-tech mt-1 mb-5">
                  {cat.subtitle}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-mono transition-all duration-200 cyber-cut ${
                        skill.highlight
                          ? cat.badgeAccent
                          : "bg-[#0a0f22]/70 text-slate-300 border border-slate-700/60 hover:border-[#00f0ff]/40 hover:text-white"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${
                          skill.highlight ? "text-current" : "text-slate-500"
                        }`}
                      />
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] opacity-70 font-mono">
                          // {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 pt-4 border-t border-[#00f0ff]/20 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-[#00ff9f]">
                  <Cpu className="w-3.5 h-3.5 text-[#00ff9f] animate-pulse" />
                  RUNTIME: READY
                </span>
                <span className="text-[#00f0ff] group-hover:text-glow-cyan transition-all">
                  FULL-STACK KERNEL
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

