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
    <section id="education" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-white/[0.08]">
      {/* Background Ambient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[300px] bg-[#D3FD50]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10 relative z-10 reveal-on-scroll">

        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          DATA <span className="text-[#D3FD50] text-glow-lime">ARCHIVES</span> &amp; DEGREES
        </h2>
        <p className="mt-2 text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl font-tech">
          Formal software engineering foundations, algorithmic computing, and system architecture qualifications.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Vertical Timeline Guide Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-[#D3FD50] via-white/20 to-transparent -translate-x-1/2 hidden sm:block shadow-[0_0_10px_rgba(211,253,80,0.3)]" />

        <div className="space-y-6">
          {educationData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-center gap-4 ${isEven ? "sm:flex-row-reverse reveal-from-left" : "reveal-from-right"
                  }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-[#D3FD50] flex items-center justify-center shadow-[0_0_15px_rgba(211,253,80,0.4)] z-20 hidden sm:flex">
                  <GraduationCap className="w-3.5 h-3.5 text-[#D3FD50]" />
                </div>

                {/* Card */}
                <div
                  className={`w-full sm:w-[calc(50%-1.75rem)] p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 ${item.highlight
                      ? "border-[#D3FD50]/40 shadow-lime bg-[#0d0d0d]"
                      : "border-white/[0.08] hover:border-white/30 bg-[#0d0d0d]"
                    }`}
                >
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D3FD50] bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.1] font-semibold">
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                      <Calendar className="w-3 h-3 text-[#D3FD50]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-[#D3FD50] transition-colors">
                    {item.degree}
                  </h3>

                  {item.field && (
                    <div className="flex items-center gap-1.5 text-xs text-[#D3FD50] font-mono mt-1 font-medium">
                      <BookOpen className="w-3 h-3 text-[#D3FD50]" />
                      <span>// {item.field}</span>
                    </div>
                  )}

                  {/* Institution & Location */}
                  <div className="mt-2 text-xs sm:text-sm text-neutral-400 flex items-center gap-1.5 font-tech">
                    <MapPin className="w-3 h-3 text-neutral-300 shrink-0" />
                    <span>{item.institution}, {item.location}</span>
                  </div>

                  {/* Score / Grade Tag or Status */}
                  <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-mono">
                      {item.score ? item.scoreType : "DATA_STATUS"}
                    </span>
                    {item.score ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#D3FD50] text-xs font-mono font-semibold">
                        <Award className="w-3 h-3 text-[#D3FD50]" />
                        <span>{item.score}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-white text-xs font-mono font-semibold">
                        <Binary className="w-3 h-3 text-[#D3FD50]" />
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
