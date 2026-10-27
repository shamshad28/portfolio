import { ExternalLink, Activity, Smartphone, MessageCircle, Globe, Terminal } from "lucide-react";

interface ProjectItem {
  code: string;
  title: string;
  category: string;
  desc: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  accentColor: string;
  tagColor: string;
  icon: typeof Activity;
}

const projects: ProjectItem[] = [
  {
    code: "OP_01",
    title: "Pulse Chat Platform",
    category: "WEBSOCKET // REAL-TIME MATRIX",
    desc: "A high-frequency real-time messaging engine featuring WebSocket bi-directional channels, persistent data streams, instant packet delivery, presence telemetry, and a reactive cyber UI.",
    highlights: [
      "Real-time bidirectional messaging powered by Socket.IO",
      "Persistent chat channels, direct messaging & auth",
      "Production-ready deployment on Vercel with responsive design",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shamshad28/pulse-chat-frontend",
    live: "https://pulse-chat-frontend-dusky.vercel.app",
    accentColor: "border-[#00f0ff]/30 hover:border-[#00f0ff] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]",
    tagColor: "text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/30",
    icon: MessageCircle,
  },
  {
    code: "OP_02",
    title: "Centralized Logging System & Health Monitoring Tool",
    category: "DISTRIBUTED // TELEMETRY & OBSERVABILITY",
    desc: "A distributed log aggregation and node telemetry engine collecting real-time CPU/memory metrics, visualizing system vitals via Chart.js, and dispatching automated threshold alerts.",
    highlights: [
      "Real-time server metrics & log streaming",
      "Interactive telemetry dashboard with Chart.js",
      "RESTful health-check endpoints & automated alerts",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Chart.js", "RESTful APIs", "Git"],
    github: "https://github.com/shamshad28/Centralized-Logging-System-Health-Monitoring-Tool",
    accentColor: "border-[#ff007f]/30 hover:border-[#ff007f] hover:shadow-[0_0_25px_rgba(255,0,127,0.3)]",
    tagColor: "text-[#ff007f] bg-[#ff007f]/10 border-[#ff007f]/30",
    icon: Activity,
  },
  {
    code: "OP_03",
    title: "Chat APK (Real-Time Mobile Messaging)",
    category: "MOBILE // REACT NATIVE HYPERDRIVE",
    desc: "Cross-platform mobile communication runtime engineered with React Native and Node.js. Delivers persistent session authentication, instant socket messaging, and MongoDB persistence.",
    highlights: [
      "Instant real-time messaging & conversation history",
      "User authentication & session management",
      "Native mobile UI built with React Native",
    ],
    tech: ["React Native", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/shamshad28/chat-APK",
    accentColor: "border-[#fcee0a]/30 hover:border-[#fcee0a] hover:shadow-[0_0_25px_rgba(252,238,10,0.3)]",
    tagColor: "text-[#fcee0a] bg-[#fcee0a]/10 border-[#fcee0a]/30",
    icon: Smartphone,
  },
];

export default function Project() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-[#00f0ff]/20 reveal-on-scroll">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-[#ff007f]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 bg-[#090e1f] border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] mb-4 cyber-cut">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="font-bold tracking-wider">[ 03 // OPERATIONS ]</span>
          <span className="text-[#ff007f]">•</span>
          <span className="text-slate-300">SELECTED ARCHIVES (03)</span>
        </div>
        <h2 className="font-cyber text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          DEPLOYED <span className="text-[#00f0ff] text-glow-cyan">OPERATIONS</span> &amp; <span className="text-[#ff007f] text-glow-pink">CODE</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl font-tech">
          Production-grade applications showcasing WebSocket real-time concurrency, cross-platform mobile engineering, and telemetry pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
        {projects.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className={`relative p-5 sm:p-6 md:p-7 bg-[#070b18]/85 border transition-all duration-300 group flex flex-col justify-between cyber-cut ${p.accentColor}`}
            >
              <div>
                {/* Header tag & Code */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border cyber-cut ${p.tagColor}`}>
                    {p.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      [{p.code}]
                    </span>
                    <div className="p-2 bg-[#0d1428] border border-slate-700 text-[#00f0ff] group-hover:scale-110 transition-transform cyber-cut">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-cyber text-slate-100 group-hover:text-[#00f0ff] transition-colors leading-snug">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-400 text-xs md:text-sm leading-relaxed font-tech">
                  {p.desc}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 space-y-1.5 font-tech">
                  {p.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-[11px] bg-[#090e21] text-[#00f0ff] font-mono font-medium border border-[#00f0ff]/20 cyber-cut"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-7 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0d1428] hover:bg-[#131d38] text-slate-200 hover:text-[#00f0ff] font-mono text-xs border border-slate-700 hover:border-[#00f0ff] transition-all cyber-cut group/btn"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>SOURCE</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#00f0ff] to-[#00c8ff] text-black font-extrabold text-xs uppercase font-mono tracking-wider transition-all shadow-[0_0_15px_rgba(0,240,255,0.35)] hover:shadow-[0_0_20px_rgba(255,0,127,0.5)] hover:from-[#ff007f] hover:to-[#ff2a85] hover:text-white cyber-cut group/btn"
                  >
                    <Globe className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>EXECUTE</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">[OPEN SOURCE]</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}