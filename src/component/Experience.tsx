import { Building2, Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  website?: string;
  location?: string;
  period: string;
  type: string;
  current?: boolean;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Software Enterprise Solutions",
    location: "Mumbai, India",
    period: "Sep 7, 2026 – Present",
    type: "Full-Time Corporate Core",
    current: true,
    description: [
      "Engineered full-stack production web applications utilizing modern MERN stack architecture with real-time bidirectional communication channels.",
      "Developed high-frequency messaging architectures with WebSocket event streaming, reducing communication latency by 45%.",
      "Architected distributed logging and telemetry infrastructures with automated error monitoring, achieving 99.9% uptime compliance.",
      "Collaborated on AI-powered digital products, integrating LLM endpoints with structured JSON streaming schemas for internal workflows.",
      "Optimized cross-platform mobile runtimes built with React Native for rapid rendering and fluid user experience.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "React Native", "REST APIs", "System Telemetry"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Tech Systems & Development",
    location: "Mumbai, India",
    period: "Feb 2026 – Sep 2026",
    type: "Internship Operational Core",
    current: false,
    description: [
      "Engineered frontend web modules using React.js and CSS modules, improving component modularity and reusability across 4 internal tools.",
      "Constructed RESTful API endpoints with Express.js and integrated MongoDB document pipelines with robust validation schemas.",
      "Implemented comprehensive unit and API integration testing workflows with Postman, accelerating pull request approval cycles.",
      "Participated in agile sprints, daily standups, code reviews, and Git flow feature branches with senior engineering leads.",
    ],
    skills: ["React.js", "JavaScript ES6+", "Express.js", "MongoDB", "Postman", "Git/GitHub", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t border-white/[0.08] reveal-on-scroll">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-[#D3FD50]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8 relative z-10">

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          CAREER <span className="text-[#D3FD50]">CHRONICLES</span> &amp; LOG
        </h2>
        <p className="mt-2 text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl font-tech">
          Full-stack deployments across corporate software engines, enterprise real-time messaging, AI automation, and high-uptime backend services.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-3.5 relative z-10 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group relative ${exp.current
                ? "border-[#D3FD50]/50 shadow-[0_8px_30px_-4px_rgba(211,253,80,0.15)] bg-[#0d0d0d]"
                : "border-white/[0.08] hover:border-[#D3FD50]/40"
              }`}
          >
            {/* Top Accent Strip */}
            <div
              className={`absolute top-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r ${exp.current
                  ? "from-[#D3FD50] via-white to-transparent"
                  : "from-neutral-800 to-transparent group-hover:from-[#D3FD50]/60"
                } transition-all`}
            />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${exp.current
                        ? "text-black bg-[#D3FD50] border-[#D3FD50] font-extrabold"
                        : "text-neutral-400 bg-white/[0.02] border-white/[0.08]"
                      }`}
                  >
                    // {exp.type}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-white text-xs font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D3FD50] animate-pulse" />
                      ACTIVE OPERATION // LEVEL 1
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold font-heading text-white group-hover:text-[#D3FD50] transition-colors">
                  {exp.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs sm:text-sm text-neutral-400 font-tech">
                  <div className="flex items-center gap-1.5 font-semibold text-neutral-200">
                    <Building2 className="w-3.5 h-3.5 text-[#D3FD50]" />
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#D3FD50] transition-colors flex items-center gap-1 underline underline-offset-4 decoration-white/20"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3 h-3 text-[#D3FD50]" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1 text-neutral-400 text-xs font-mono">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.1] self-start shadow-sm">
                <Calendar className="w-3 h-3 text-[#D3FD50] shrink-0" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-1.5 mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-tech">
              {exp.description.map((desc, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2">
                  <CheckCircle2
                    className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${exp.current ? "text-[#D3FD50]" : "text-neutral-500"
                      }`}
                  />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.08]">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-2.5 py-0.5 rounded-lg text-xs font-mono border transition-all ${exp.current
                      ? "bg-white/[0.04] text-neutral-200 border-white/[0.1] hover:border-[#D3FD50] hover:text-[#D3FD50]"
                      : "bg-white/[0.02] text-neutral-400 border-white/[0.08] hover:border-[#D3FD50]/40 hover:text-white"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
