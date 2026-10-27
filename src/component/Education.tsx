import { GraduationCap, Award, Calendar, MapPin, BookOpen, Binary } from "lucide-react";

interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  scoreType?: string;
  badge: string;
  highlight?: boolean;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "H.J. Theem College of Engineering",
    location: "Mumbai",
    period: "2022 – 2025",
    badge: "UNDERGRADUATE // DEGREE",
    highlight: true,
  },
  {
    degree: "Diploma in Computer Engineering",
    field: "Computer Science & Engineering",
    institution: "Government Polytechnic",
    location: "Mumbai",
    period: "2019 – 2022",
    score: "70.83%",
    scoreType: "Aggregate Percentage",
    badge: "DIPLOMA // TECH",
    highlight: false,
  },
  {
    degree: "SSC Board (Class 10)",
    field: "General Academics",
    institution: "Alfalah High School",
    location: "Mumbai",
    period: "2019",
    score: "79.80%",
    scoreType: "Board Percentage",
    badge: "FOUNDATIONAL // SSC",
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-[#00f0ff]/20">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-[#00ff9f]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14 relative z-10 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#090e1f] border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] mb-4 cyber-cut">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="font-bold tracking-wider">[ 05 // ARCHIVE ]</span>
          <span className="text-[#ff007f]">•</span>
          <span className="text-slate-300">ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="font-cyber text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          DATA <span className="text-[#00f0ff] text-glow-cyan">ARCHIVES</span> &amp; <span className="text-[#ff007f] text-glow-pink">DEGREES</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl font-tech">
          Formal software engineering foundations, algorithmic computing, and system architecture qualifications.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Vertical Cyber Timeline Guide Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#ff007f] to-transparent -translate-x-1/2 hidden sm:block shadow-[0_0_10px_rgba(0,240,255,0.5)]" />

        <div className="space-y-8">
          {educationData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                  isEven ? "sm:flex-row-reverse reveal-from-left" : "reveal-from-right"
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 bg-[#03050c] border-2 border-[#00f0ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] z-20 hidden sm:flex cyber-cut">
                  <GraduationCap className="w-4 h-4 text-[#00f0ff]" />
                </div>

                {/* Card */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] p-6 bg-[#070b18]/85 border transition-all duration-300 group hover:translate-y-[-3px] cyber-cut ${
                    item.highlight
                      ? "border-[#00f0ff] shadow-[0_0_25px_-5px_rgba(0,240,255,0.3)] bg-[#070e22]/90"
                      : "border-slate-800 hover:border-[#ff007f]/50 hover:shadow-[0_0_20px_-5px_rgba(255,0,127,0.2)]"
                  }`}
                >
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00f0ff] bg-[#00f0ff]/10 px-2.5 py-1 border border-[#00f0ff]/30 cyber-cut">
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-[#ff007f]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-lg md:text-xl font-bold font-cyber text-slate-100 group-hover:text-[#00f0ff] transition-colors">
                    {item.degree}
                  </h3>

                  {item.field && (
                    <div className="flex items-center gap-1.5 text-xs text-[#00ff9f] font-mono mt-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#00ff9f]" />
                      <span>// {item.field}</span>
                    </div>
                  )}

                  {/* Institution & Location */}
                  <div className="mt-3 text-sm text-slate-400 flex items-center gap-1.5 font-tech">
                    <MapPin className="w-3.5 h-3.5 text-[#ff007f] shrink-0" />
                    <span>{item.institution}, {item.location}</span>
                  </div>

                  {/* Score / Grade Tag or Status */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      {item.score ? item.scoreType : "DATA_STATUS"}
                    </span>
                    {item.score ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ff007f]/10 border border-[#ff007f]/30 text-[#ff007f] text-xs font-mono font-bold cyber-cut shadow-[0_0_10px_rgba(255,0,127,0.3)]">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.score}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono font-bold cyber-cut shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                        <Binary className="w-3.5 h-3.5" />
                        <span>GRADUATED // COMPLETED</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

