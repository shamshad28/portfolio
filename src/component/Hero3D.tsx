import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, Environment, useGLTF, Center, Html } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Loader2, Mail, MessageCircle, ExternalLink, Box, Camera, Sparkles } from "lucide-react";

const MODEL_PATH = `${import.meta.env.BASE_URL}assets/monitor.glb`;
const BATTLESTATION_IMG = `${import.meta.env.BASE_URL}assets/battlestation.jpg`;

function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center gap-2.5 px-4 py-2 bg-[#03050c]/90 border border-[#00f0ff]/60 text-[#00f0ff] font-mono text-xs backdrop-blur-md shadow-[0_0_25px_rgba(0,240,255,0.4)] whitespace-nowrap pointer-events-none cyber-cut">
        <Loader2 className="w-4 h-4 animate-spin text-[#ff007f]" />
        <span className="tracking-wider">[SYS.INIT // LOADING 3D HOLOGRAM...]</span>
      </div>
    </Html>
  );
}

// Model component centered and scaled to fit container
function SceneModel() {
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <Center>
      <primitive object={scene} scale={0.26} />
    </Center>
  );
}

useGLTF.preload(MODEL_PATH);

export default function Hero3D() {
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "station">("3d");

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/shamshad28",
      color: "hover:text-[#00f0ff] hover:border-[#00f0ff]/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shamshad-khan-817591229",
      color: "hover:text-[#00f0ff] hover:border-[#00f0ff]/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/iam_shamshad_28?obrf=MTQwZmRsNXB2dGowcw==",
      color: "hover:text-[#ff007f] hover:border-[#ff007f]/60 hover:shadow-[0_0_15px_rgba(255,0,127,0.4)]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/917045421172",
      color: "hover:text-[#00ff9f] hover:border-[#00ff9f]/60 hover:shadow-[0_0_15px_rgba(0,255,159,0.4)]",
      icon: <MessageCircle className="w-4 h-4" />,
    },
    {
      name: "Email",
      url: "mailto:shamkhan7045@gmail.com",
      color: "hover:text-[#fcee0a] hover:border-[#fcee0a]/60 hover:shadow-[0_0_15px_rgba(252,238,10,0.4)]",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <div className="relative model-container h-[360px] sm:h-[480px] lg:h-[580px] border border-[#00f0ff]/30 hover:border-[#ff007f]/60 transition-all duration-500 cursor-grab active:cursor-grabbing group">
      {/* Corner Crosshair Reticles */}
      <span className="absolute top-2 left-2 text-[#00f0ff]/40 font-mono text-[10px] sm:text-[11px] pointer-events-none select-none z-20">┌─ + ─</span>
      <span className="absolute top-2 right-2 text-[#00f0ff]/40 font-mono text-[10px] sm:text-[11px] pointer-events-none select-none z-20">─ + ─┐</span>
      <span className="absolute bottom-2 left-2 text-[#00f0ff]/40 font-mono text-[10px] sm:text-[11px] pointer-events-none select-none z-20">└─ + ─</span>
      <span className="absolute bottom-2 right-2 text-[#00f0ff]/40 font-mono text-[10px] sm:text-[11px] pointer-events-none select-none z-20">─ + ─┘</span>

      {/* Top Left: Cyberpunk HUD Node Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#03050c]/90 border border-[#00f0ff]/40 text-[10px] sm:text-xs font-mono text-[#00f0ff] pointer-events-none backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.25)] cyber-cut max-w-[48%]">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00f0ff] animate-ping shrink-0" />
        <span className="font-bold tracking-wider truncate">NETLINK // CORE</span>
      </div>

      {/* Top Right: View Switcher (3D Core vs Battlestation Cam) */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1 p-1 bg-[#03050c]/90 border border-[#00f0ff]/30 backdrop-blur-md cyber-cut">
        <button
          type="button"
          onClick={() => setViewMode("3d")}
          className={`px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-mono tracking-wider transition-all cyber-cut flex items-center gap-1 cursor-pointer ${
            viewMode === "3d"
              ? "bg-[#00f0ff] text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.6)]"
              : "text-slate-400 hover:text-[#00f0ff]"
          }`}
          title="Switch to 3D Hologram"
        >
          <Box className="w-3 h-3" />
          <span>3D CORE</span>
        </button>
        <button
          type="button"
          onClick={() => setViewMode("station")}
          className={`px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-mono tracking-wider transition-all cyber-cut flex items-center gap-1 cursor-pointer ${
            viewMode === "station"
              ? "bg-[#ff007f] text-white font-bold shadow-[0_0_12px_rgba(255,0,127,0.6)]"
              : "text-slate-400 hover:text-[#ff007f]"
          }`}
          title="Switch to Battlestation Cam"
        >
          <Camera className="w-3 h-3" />
          <span>STATION</span>
        </button>
      </div>

      {/* Main Viewport: 3D Hologram vs Battlestation Live Cam */}
      {viewMode === "station" ? (
        <div className="relative w-full h-full overflow-hidden select-none bg-[#03050c]">
          <img
            src={BATTLESTATION_IMG}
            alt="Cyberpunk Developer Battlestation"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle Scanlines & Gradient Vignette */}
          <div className="absolute inset-0 cyber-scanlines opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03050c]/90 via-transparent to-[#03050c]/50 pointer-events-none" />

          {/* Telemetry Info Badge */}
          <div className="absolute top-14 left-4 z-20 hidden sm:flex flex-col gap-0.5 px-3 py-2 bg-[#03050c]/90 border border-[#00ff9f]/40 text-xs font-mono text-slate-300 backdrop-blur-md cyber-cut shadow-[0_0_15px_rgba(0,255,159,0.25)]">
            <div className="flex items-center gap-1.5 text-[#00ff9f] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#00ff9f]" />
              <span>LIVE CAM // BATTLESTATION TELEMETRY</span>
            </div>
            <span className="text-[10px] text-slate-400">// DUAL-HUD DISPLAY • QUANTUM DEV ENVIRONMENT</span>
          </div>
        </div>
      ) : (
        <Canvas camera={{ position: [0, 0, 3.8], fov: 42 }}>
          <ambientLight intensity={1.1} color="#0d1b2a" />
          <directionalLight position={[4, 7, 4]} intensity={2.8} color="#00f0ff" castShadow />
          <directionalLight position={[-4, 3, -3]} intensity={2.6} color="#ff007f" />
          <directionalLight position={[0, -3, 2]} intensity={0.9} color="#fcee0a" />

          <Suspense fallback={<ModelLoader />}>
            <Float speed={2.4} rotationIntensity={0.25} floatIntensity={0.35} floatingRange={[-0.04, 0.04]}>
              <SceneModel />
            </Float>
            <ContactShadows position={[0, -0.78, 0]} opacity={0.75} scale={6} blur={2} far={2} color="#00f0ff" />
            <Environment preset="night" />
          </Suspense>

          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={2.0}
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.06}
            rotateSpeed={0.8}
            minPolarAngle={Math.PI / 3.5}
            maxPolarAngle={Math.PI / 1.85}
            target={[0, 0, 0]}
          />
        </Canvas>
      )}

      {/* FLOATING CYBER SOCIAL DOCK ON 3D MODEL */}
      <div className="absolute bottom-3 inset-x-2 sm:inset-x-4 z-20 flex flex-col items-center pointer-events-auto">
        <div className="flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 bg-[#040610]/90 border border-[#00f0ff]/40 backdrop-blur-md shadow-[0_0_25px_rgba(0,240,255,0.2)] cyber-cut">
          <span className="text-[11px] font-mono text-[#00f0ff] px-2 hidden sm:inline-block tracking-wider">
            [SYS_LINK]:
          </span>

          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setActiveHover(s.name)}
              onMouseLeave={() => setActiveHover(null)}
              className={`relative p-2 sm:p-2.5 bg-[#090e1f] border border-[#00f0ff]/20 text-slate-300 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${s.color}`}
              aria-label={s.name}
              title={s.name}
            >
              {s.icon}

              {/* Tooltip on hover */}
              {activeHover === s.name && (
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#03050c] border border-[#00f0ff] text-[10px] font-mono text-[#00f0ff] whitespace-nowrap shadow-[0_0_15px_rgba(0,240,255,0.4)] pointer-events-none flex items-center gap-1">
                  <span>{s.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}