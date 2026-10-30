import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, useGLTF, Center, Html } from "@react-three/drei";
import { Suspense, useState, useMemo } from "react";
import { Loader2, Mail, Phone, ExternalLink, Box, Camera, Sparkles } from "lucide-react";

const MODEL_PATH = `${import.meta.env.BASE_URL}assets/monitor.glb`;
const BATTLESTATION_IMG = `${import.meta.env.BASE_URL}assets/battlestation.jpg`;

function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/90 border border-white/[0.12] text-[#D3FD50] font-mono text-xs backdrop-blur-md shadow-lime whitespace-nowrap pointer-events-none">
        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#D3FD50]" />
        <span className="tracking-wider">[SYS.INIT // 3D MODEL]</span>
      </div>
    </Html>
  );
}

// Model component centered, scaled slightly smaller to showcase display with balanced 1920x1080 framing
// Clones scene to prevent Three.js/Fiber from disposing cached GLTF geometry/materials on unmount or re-render
function SceneModel() {
  const { scene } = useGLTF(MODEL_PATH);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  return (
    <Center>
      <primitive object={clonedScene} scale={0.29} rotation={[0.06, -0.28, 0]} dispose={null} />
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
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shamshad-khan-817591229",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/iam_shamshad_28?obrf=MTQwZmRsNXB2dGowcw==",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Direct Comms",
      url: "#contact",
      icon: <Phone className="w-3.5 h-3.5" />,
    },
    {
      name: "Email",
      url: "mailto:shamkhan7045@gmail.com",
      icon: <Mail className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div className="relative model-container w-full h-[540px] sm:h-[580px] lg:h-[620px] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D3FD50]/50 transition-all duration-500 cursor-grab active:cursor-grabbing group bg-[#080808] shadow-[0_0_40px_rgba(0,0,0,0.85)] flex flex-col justify-between p-4 sm:p-5">
      {/* Corner Bracket Reticles (as in reference screenshot) */}
      <div className="absolute top-3 left-3 text-xs font-mono text-white/30 group-hover:text-[#D3FD50]/70 transition-colors pointer-events-none select-none z-30">
        ┌ ─
      </div>
      <div className="absolute top-3 right-3 text-xs font-mono text-white/30 group-hover:text-[#D3FD50]/70 transition-colors pointer-events-none select-none z-30">
        ─ ┐
      </div>
      <div className="absolute bottom-3.5 left-3.5 text-xs font-mono text-white/30 group-hover:text-[#D3FD50]/70 transition-colors pointer-events-none select-none z-30">
        └ ─
      </div>
      <div className="absolute bottom-3.5 right-3.5 text-xs font-mono text-white/30 group-hover:text-[#D3FD50]/70 transition-colors pointer-events-none select-none z-30">
        ─ ┘
      </div>

      {/* Top Header Bar with Badge and Switcher */}
      <div className="w-full flex items-center justify-end z-20 px-4 pt-1">
        {/* Top Right: View Switcher */}
        <div className="flex items-center gap-1 p-0.5 rounded-full bg-black/90 border border-white/10 backdrop-blur-md shadow-sm">
          <button
            type="button"
            onClick={() => setViewMode("3d")}
            className={`px-2.5 py-1 text-xs font-medium tracking-wider transition-all rounded-full flex items-center gap-1 cursor-pointer ${viewMode === "3d"
              ? "bg-[#D3FD50] text-black font-extrabold shadow-lime"
              : "text-neutral-400 hover:text-white"
              }`}
            title="Switch to 3D Hologram"
          >
            <Box className="w-3 h-3" />
            <span>3D CORE</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("station")}
            className={`px-2.5 py-1 text-xs font-medium tracking-wider transition-all rounded-full flex items-center gap-1 cursor-pointer ${viewMode === "station"
              ? "bg-white text-black font-extrabold"
              : "text-neutral-400 hover:text-white"
              }`}
            title="Switch to Battlestation Cam"
          >
            <Camera className="w-3 h-3" />
            <span>STATION</span>
          </button>
        </div>
      </div>

      {/* Main Viewport: Centered Canvas Container (544px by 358.67px as requested) */}
      <div className="w-full flex-1 flex items-center justify-center my-auto relative">
        {/* Battlestation Cam View */}
        <div
          className={`relative w-full max-w-[544px] h-[358.67px] rounded-xl overflow-hidden select-none bg-black border border-white/10 shadow-lg ${viewMode === "station" ? "block" : "hidden"
            }`}
          style={{ width: "100%", maxWidth: "544px", height: "358.67px" }}
        >
          <img
            src={BATTLESTATION_IMG}
            alt="Cyberpunk Developer Battlestation"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none" />

          {/* Telemetry Info Badge */}
          <div className="absolute top-4 left-4 z-20 hidden sm:flex flex-col gap-0.5 px-3 py-1.5 rounded-xl bg-black/90 border border-white/10 text-xs font-mono text-neutral-200 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-1.5 text-[#D3FD50] font-semibold text-[11px]">
              <Sparkles className="w-3 h-3 text-[#D3FD50]" />
              <span>LIVE CAM // BATTLESTATION TELEMETRY</span>
            </div>
            <span className="text-[10px] text-neutral-400">// DUAL-HUD DISPLAY • DEV ENVIRONMENT</span>
          </div>
        </div>

        {/* 3D Model Canvas View - Stays mounted so WebGL context is never lost */}
        <div
          className={`w-full max-w-[544px] h-[358.67px] relative flex items-center justify-center ${viewMode === "3d" ? "block" : "hidden"
            }`}
          style={{ width: "100%", maxWidth: "544px", height: "358.67px" }}
        >
          <Canvas
            camera={{ position: [0, 0.04, 2.9], fov: 38 }}
            dpr={[1, 2]}
            frameloop="always"
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              preserveDrawingBuffer: true,
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={1.5} color="#151515" />
            <directionalLight position={[5, 8, 5]} intensity={4.0} color="#D3FD50" castShadow />
            <directionalLight position={[-5, 4, -4]} intensity={3.0} color="#ffffff" />
            <directionalLight position={[0, -4, 3]} intensity={1.8} color="#D3FD50" />
            <pointLight position={[2, 3, 2]} intensity={2.2} color="#D3FD50" />
            <pointLight position={[-2, 1, 3]} intensity={1.8} color="#ffffff" />

            <Suspense fallback={<ModelLoader />}>
              <Float speed={2.0} rotationIntensity={0.25} floatIntensity={0.3} floatingRange={[-0.03, 0.03]}>
                <SceneModel />
              </Float>
              <ContactShadows position={[0, -0.72, 0]} opacity={0.65} scale={5.5} blur={2.0} far={2} color="#D3FD50" />
            </Suspense>

            <OrbitControls
              autoRotate={true}
              autoRotateSpeed={7}
              enableZoom={false}
              enablePan={false}
              enableDamping
              dampingFactor={0.07}
              rotateSpeed={1.0}
              minPolarAngle={Math.PI / 3.4}
              maxPolarAngle={Math.PI / 1.8}
              target={[0, 0, 0]}
            />
          </Canvas>
        </div>
      </div>

      {/* FLOATING SYSTEM LINK DOCK (as in reference screenshot) */}
      <div className="w-full flex justify-center z-20 pb-1 pointer-events-auto">
        <div className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-black/90 border border-white/15 backdrop-blur-xl shadow-2xl">
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#D3FD50]">
            [SYS_LINK]:
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target={s.url.startsWith("#") ? undefined : "_blank"}
                rel={s.url.startsWith("#") ? undefined : "noreferrer"}
                onMouseEnter={() => setActiveHover(s.name)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative p-2 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-black hover:bg-[#D3FD50] hover:border-[#D3FD50] hover:shadow-lime transition-all duration-200 hover:scale-105"
                aria-label={s.name}
                title={s.name}
              >
                {s.icon}

                {/* Tooltip on hover */}
                {activeHover === s.name && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#121212] border border-[#D3FD50]/40 text-[10px] font-mono text-[#D3FD50] whitespace-nowrap shadow-lg pointer-events-none flex items-center gap-1">
                    <span>{s.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}