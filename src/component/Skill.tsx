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
    subtitle: "Frontend & Full-Stack Application Engines",
    slot: "CORE",
    icon: Code2,
    color: "from-[#D3FD50] to-white",
    glowColor: "rgba(211, 253, 80, 0.15)",
    accentBorder: "hover:border-[#D3FD50]/60",
    badgeAccent: "text-black border-[#D3FD50] bg-[#D3FD50] font-semibold hover:bg-white hover:border-white",
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
    subtitle: "Server Pipelines & High-Throughput Routing",
    slot: "BACKEND",
    icon: Server,
    color: "from-white to-[#D3FD50]",
    glowColor: "rgba(255, 255, 255, 0.12)",
    accentBorder: "hover:border-white/60",
    badgeAccent: "text-white border-white/30 bg-white/10 hover:border-[#D3FD50] hover:text-[#D3FD50]",
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
    slot: "DEVOPS",
    icon: Wrench,
    color: "from-[#D3FD50] to-[#a3e635]",
    glowColor: "rgba(211, 253, 80, 0.15)",
    accentBorder: "hover:border-[#D3FD50]/60",
    badgeAccent: "text-black border-[#D3FD50] bg-[#D3FD50] font-semibold hover:bg-white hover:border-white",
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
    <section id="skills" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t border-white/[0.08] reveal-on-scroll">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#D3FD50]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8 relative z-10">

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          TECH <span className="text-[#D3FD50]">ARSENAL</span> &amp; STACK
        </h2>
        <p className="mt-2 text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl font-tech">
          Engineered with modern full-stack web and mobile protocols, high-concurrency APIs, resilient database clusters, and rapid dev pipelines.
        </p>
      </div>

      {/* Grid of 3 Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className={`relative rounded-2xl glass-panel glass-panel-hover p-5 sm:p-6 flex flex-col justify-between group ${cat.accentBorder}`}
              style={{
                boxShadow: `0 8px 30px -4px ${cat.glowColor}`,
              }}
            >
              {/* Top Bar Glow Accent */}
              <div
                className={`absolute top-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r ${cat.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white group-hover:border-[#D3FD50] group-hover:text-[#D3FD50] group-hover:scale-105 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-black bg-[#D3FD50] px-2.5 py-0.5 rounded-full">
                      {cat.slot}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 bg-white/[0.03] px-2.5 py-0.5 rounded-full border border-white/[0.08]">
                      {cat.skills.length} MODULES
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#D3FD50] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-400 font-tech mt-0.5 mb-4">
                  {cat.subtitle}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium font-mono transition-all duration-200 ${skill.highlight
                          ? cat.badgeAccent
                          : "bg-white/[0.02] text-neutral-300 border border-white/[0.08] hover:border-white/[0.2] hover:text-white"
                        }`}
                    >
                      <CheckCircle2
                        className={`w-3 h-3 ${skill.highlight ? "text-current" : "text-neutral-500"
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
              <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-[#D3FD50]">
                  <Cpu className="w-3.5 h-3.5 text-[#D3FD50] animate-pulse" />
                  RUNTIME: READY
                </span>
                <span className="text-white font-semibold group-hover:text-[#D3FD50] transition-colors">
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
