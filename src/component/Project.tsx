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
  icon: typeof Activity;
}

const projects: ProjectItem[] = [
  {
    code: "PULSE",
    title: "Pulse Chat Platform",
    category: "WEBSOCKET // REAL-TIME MATRIX",
    desc: "A high-frequency real-time messaging engine featuring WebSocket bi-directional channels, persistent data streams, instant packet delivery, presence telemetry, and a reactive modern UI.",
    highlights: [
      "Real-time bidirectional messaging powered by Socket.IO",
      "Persistent chat channels, direct messaging & auth",
      "Production-ready deployment on Vercel with responsive design",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shamshad28/pulse-chat-frontend",
    live: "https://pulse-chat-frontend-dusky.vercel.app",
    icon: MessageCircle,
  },
  {
    code: "TELEMETRY",
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
    icon: Activity,
  },
  {
    code: "MOBILE",
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
    icon: Smartphone,
  },
];

export default function Project() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-white/[0.08] reveal-on-scroll">
      {/* Background Ambient */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[250px] bg-[#D3FD50]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10 relative z-10">

        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          DEPLOYED <span className="text-[#D3FD50] text-glow-lime">OPERATIONS</span> &amp; CODE
        </h2>
        <p className="mt-2 text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl font-tech">
          Production-grade applications showcasing WebSocket real-time concurrency, cross-platform mobile engineering, and telemetry pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {projects.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="relative rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col justify-between group border border-white/[0.08] hover:border-[#D3FD50]/50 transition-all duration-300"
            >
              <div>
                {/* Header tag & Code */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-[#D3FD50] font-semibold">
                    {p.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-neutral-500 font-bold">
                      [{p.code}]
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white group-hover:text-[#D3FD50] group-hover:border-[#D3FD50]/40 group-hover:scale-105 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#D3FD50] transition-colors leading-snug">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-neutral-400 text-xs md:text-sm leading-relaxed font-tech">
                  {p.desc}
                </p>

                {/* Key Highlights */}
                <div className="mt-3.5 space-y-1.5 font-tech">
                  {p.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D3FD50] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] bg-white/[0.03] text-neutral-300 font-mono font-medium border border-white/[0.08] hover:border-[#D3FD50]/40 hover:text-white transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 hover:text-white font-mono text-xs border border-white/[0.1] hover:border-white/30 transition-all group/btn"
                >
                  <Terminal className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-[#D3FD50]" />
                  <span>SOURCE</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D3FD50] text-black font-extrabold text-xs uppercase font-mono tracking-wider transition-all shadow-lime hover:bg-white hover:text-black hover:scale-105 group/btn"
                  >
                    <Globe className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>EXECUTE</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-[11px] text-neutral-500 font-mono">[OPEN SOURCE]</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}