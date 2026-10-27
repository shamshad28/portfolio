import { Calendar, MapPin, CheckCircle2, Building2, ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  location?: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  current?: boolean;
  website?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Nexcore Alliance LLP",
    role: "Full-Stack Developer",
    location: "Kurla West, Mumbai",
    period: "September 7, 2026 – Present",
    type: "Full-Time Operation",
    current: true,
    website: "https://www.linkedin.com/company/nexcore-alliance/",
    description: [
      "Contributing to full-stack web and mobile application engineering, AI solutions, and digital transformation initiatives.",
      "Designing and developing robust RESTful APIs, modular backend architecture, and optimized database management workflows.",
      "Collaborating with cross-functional teams to build high-performance MVPs, custom software integrations, and enterprise client products.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "AI Solutions", "Full-Stack"],
  },
  {
    company: "Web AI Tech Solution LLP",
    role: "Java Developer Intern",
    period: "January 2026 – July 2026",
    type: "Internship Deployment",
    current: false,
    description: [
      "Contributed to Java-based application development, database management, CRUD operations, backend development, and core software engineering activities.",
      "Demonstrated strong technical aptitude, professionalism, and commitment to learning while maintaining a high standard of teamwork and professional conduct.",
    ],
    skills: ["Java", "Backend Development", "CRUD Operations", "Database Management", "REST APIs"],
  },
  {
    company: "Aptech Ltd.",
    role: "Software Engineer Trainee",
    location: "Mumbai",
    period: "September 2025",
    type: "Traineeship Program",
    current: false,
    description: [
      "Managed server configurations and networking infrastructure for 10+ systems, maintaining 98% uptime.",
      "Performed advanced SQL database operations, optimizing queries and improving query execution performance by 15–20%.",
      "Implemented full CRUD operations and managed complex relational queries using SQL Server, resolving 25+ technical issues.",
    ],
    skills: ["SQL Server", "Database Optimization", "Server Configuration", "Networking", "CRUD"],
  },
  {
    company: "ITEXEMPLAR",
    role: "In-Plant Training",
    location: "Thane",
    period: "February 2022 – June 2022",
    type: "Enterprise In-Plant",
    current: false,
    description: [
      "Completed a comprehensive 5-month in-plant training, gaining rigorous hands-on experience in a real-world enterprise software development environment.",
      "Collaborated with an agile team of 4 members, actively contributing to 2 live projects and applying core computer engineering principles.",
    ],
    skills: ["Live Projects", "Software Engineering", "Team Collaboration", "System Design"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-[#00f0ff]/20 reveal-on-scroll">
      {/* Background Cyber Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-[#ff007f]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 bg-[#090e1f] border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] mb-4 cyber-cut">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff007f] animate-ping" />
          <span className="font-bold tracking-wider">[ 02 // CHRONICLES ]</span>
          <span className="text-[#00f0ff]">•</span>
          <span className="text-slate-300">MISSION LOG</span>
        </div>
        <h2 className="font-cyber text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          CAREER <span className="text-[#00f0ff] text-glow-cyan">CHRONICLES</span> &amp; <span className="text-[#ff007f] text-glow-pink">LOG</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl font-tech">
          Full-stack deployments across corporate software engines, enterprise real-time messaging, AI automation, and high-uptime backend services.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-6 relative z-10 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`p-5 sm:p-6 md:p-8 bg-[#070b18]/85 border transition-all duration-300 group relative cyber-cut ${
              exp.current
                ? "border-[#00f0ff] shadow-[0_0_30px_-5px_rgba(0,240,255,0.35)]"
                : "border-slate-800 hover:border-[#ff007f]/50 hover:shadow-[0_0_20px_-5px_rgba(255,0,127,0.2)]"
            }`}
          >
            {/* Top Accent Strip */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                exp.current
                  ? "from-[#00f0ff] via-[#fcee0a] to-[#ff007f]"
                  : "from-slate-700 to-slate-800 group-hover:from-[#00f0ff]/70 group-hover:to-[#ff007f]/70"
              } transition-all`}
            />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 border cyber-cut ${
                      exp.current
                        ? "text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/40 font-bold"
                        : "text-slate-300 bg-slate-800/60 border-slate-700/60"
                    }`}
                  >
                    // {exp.type}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#00ff9f]/10 border border-[#00ff9f]/40 text-[#00ff9f] text-xs font-mono font-bold cyber-cut">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-ping" />
                      ACTIVE OPERATION // LEVEL 1
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-cyber text-slate-100 group-hover:text-[#00f0ff] transition-colors">
                  {exp.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-slate-400 font-tech">
                  <div className="flex items-center gap-1.5 font-bold text-slate-200">
                    <Building2 className="w-4 h-4 text-[#00f0ff]" />
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#00f0ff] transition-colors flex items-center gap-1 underline underline-offset-4 decoration-[#00f0ff]/40 text-glow-cyan"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3 h-3 text-[#00f0ff]" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#ff007f]" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#00f0ff] bg-[#0d1428] px-3 py-1.5 border border-[#00f0ff]/30 self-start cyber-cut">
                <Calendar className="w-3.5 h-3.5 text-[#ff007f] shrink-0" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 mt-4 text-sm text-slate-300 leading-relaxed font-tech">
              {exp.description.map((desc, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      exp.current ? "text-[#00f0ff]" : "text-[#ff007f]"
                    }`}
                  />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-2.5 py-1 text-xs font-mono border cyber-cut ${
                    exp.current
                      ? "bg-[#091024] text-[#00f0ff] border-[#00f0ff]/30 hover:border-[#00f0ff]"
                      : "bg-[#091024] text-slate-300 border-slate-700/60 hover:border-[#ff007f]/40 hover:text-white"
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

