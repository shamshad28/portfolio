import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Volume2, VolumeX, ShieldCheck } from "lucide-react";

interface IntroVideoLoaderProps {
  onFinish: () => void;
}

const VIDEO_SRC = `${import.meta.env.BASE_URL}assets/astra.mp4`;
const MODEL_PATH = `${import.meta.env.BASE_URL}assets/monitor.glb`;
const BATTLESTATION_IMG = `${import.meta.env.BASE_URL}assets/battlestation.jpg`;

export default function IntroVideoLoader({ onFinish }: IntroVideoLoaderProps) {
  const [progress, setProgress] = useState(12);
  const [statusText, setStatusText] = useState("INITIALIZING CORE PROTOCOLS");
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasFinishedRef = useRef(false);
  const pageReadyRef = useRef(false);

  const completeLoader = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setProgress(100);
    setStatusText("SYSTEM NOMINAL // LAUNCHING INTERFACE");
    setIsFading(true);
    setTimeout(() => {
      onFinish();
    }, 700);
  };

  useEffect(() => {
    // Lock background scroll during full-page intro loader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Track real full page asset loading
    let assetsLoaded = 0;
    const totalAssets = 4; // Window load, Fonts ready, 3D Model GLTF, Hero texture

    const checkAssetLoaded = () => {
      assetsLoaded++;
      const currentPct = Math.min(Math.round((assetsLoaded / totalAssets) * 88), 88);
      setProgress((prev) => Math.max(prev, currentPct));

      if (assetsLoaded === 1) setStatusText("COMPILING GRAPHICS SHADERS");
      if (assetsLoaded === 2) setStatusText("PRELOADING 3D HOLOGRAM MATRIX");
      if (assetsLoaded === 3) setStatusText("SYNCING DISTRIBUTED TELEMETRY");

      if (assetsLoaded >= totalAssets) {
        pageReadyRef.current = true;
        setIsPageReady(true);
        setStatusText("ALL ASSETS LOADED // FINALIZING STREAM");
      }
    };

    // 1. Window load event (or readyState)
    if (document.readyState === "complete") {
      checkAssetLoaded();
    } else {
      const handleWindowLoad = () => checkAssetLoaded();
      window.addEventListener("load", handleWindowLoad, { once: true });
    }

    // 2. Web font families ready
    if (document.fonts) {
      document.fonts.ready.then(() => checkAssetLoaded()).catch(() => checkAssetLoaded());
    } else {
      checkAssetLoaded();
    }

    // 3. Preload 3D GLTF Model binary
    fetch(MODEL_PATH)
      .then(() => checkAssetLoaded())
      .catch(() => checkAssetLoaded());

    // 4. Preload Battlestation Texture Image
    const img = new Image();
    img.src = BATTLESTATION_IMG;
    img.onload = () => checkAssetLoaded();
    img.onerror = () => checkAssetLoaded();

    // Safety timeout in case of slow connection
    const safetyTimer = setTimeout(() => {
      completeLoader();
    }, 9000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        completeLoader();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(safetyTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      const videoPct = Math.round((current / total) * 100);

      if (pageReadyRef.current) {
        setProgress(Math.max(videoPct, 92));
      } else {
        // While assets are loading, synchronize progress up to 88%
        setProgress((prev) => Math.min(Math.max(prev, videoPct), 88));
      }
    }
  };

  const handleVideoEnded = () => {
    if (pageReadyRef.current) {
      completeLoader();
    } else {
      // If page is still loading large assets, loop smoothly until ready
      if (videoRef.current) {
        videoRef.current.play().catch(() => { });
      }
    }
  };

  // When both the page is ready and video completes, finish smoothly
  useEffect(() => {
    if (isPageReady) {
      if (videoRef.current && (videoRef.current.ended || videoRef.current.currentTime >= videoRef.current.duration - 0.4)) {
        completeLoader();
      }
    }
  }, [isPageReady]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-black transition-opacity duration-700 select-none ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      style={{ backgroundColor: "#000000" }}
    >
      {/* 1. Full-Page Edge-to-Edge Video with Horizontal Adaptive Framing */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        {/* Ambient Blurred Video Background: fills entire viewport seamlessly */}
        <video
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-30 scale-110 pointer-events-none"
        />

        {/* Foreground Sharp Video: preserves full horizontal landscape presentation */}
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          onError={completeLoader}
          className="relative z-10 w-full h-full max-w-full max-h-full object-contain"
        />

        {/* Subtle Cyberpunk Contrast & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />
      </div>

      {/* 2. Top Header Telemetry Bar */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#D3FD50] animate-ping" />
          <span className="font-bold tracking-wider text-white">
            SHAMSHAD<span className="text-[#D3FD50]">.</span>KHAN
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">DEV.0x28 // KERNEL INIT</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-300 shadow-xl">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D3FD50]" />
          <span>PORTFOLIO OS // FULL RUNTIME</span>
        </div>
      </div>

      {/* 3. Bottom Telemetry & Controls HUD */}
      <div className="absolute bottom-6 sm:bottom-10 inset-x-4 sm:inset-x-0 max-w-xl mx-auto z-20 flex flex-col items-center gap-3 pointer-events-auto">
        {/* Glowing Full-Width Progress Track */}
        <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden backdrop-blur-md relative border border-white/10">
          <div
            className="h-full bg-[#D3FD50] transition-all duration-200 shadow-[0_0_16px_#D3FD50]"
            style={{ width: `${Math.max(progress, 8)}%` }}
          />
        </div>

        {/* Live Loading Telemetry & Interactive Actions */}
        <div className="w-full flex items-center justify-between text-xs font-mono">
          {/* Status readout */}
          <div className="flex items-center gap-2 text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#D3FD50] animate-spin" />
            <span className="font-semibold text-[11px] tracking-wider">
              {progress >= 100 ? "INTERFACE READY // LAUNCHING" : `${statusText} [${progress}%]`}
            </span>
          </div>

          {/* Action buttons: Sound & Skip */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              className="p-2 rounded-full bg-black/80 hover:bg-black border border-white/10 hover:border-white/30 text-neutral-200 hover:text-white transition-all cursor-pointer backdrop-blur-md shadow-lg"
              title={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-neutral-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#D3FD50]" />}
            </button>

            {/* Enter/Skip Button */}
            <button
              type="button"
              onClick={completeLoader}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D3FD50] text-black font-extrabold text-xs tracking-wider transition-all duration-200 cursor-pointer shadow-lime hover:bg-white hover:scale-105 active:scale-95"
            >
              <span>ENTER SITE</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
