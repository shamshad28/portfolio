import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Volume2, VolumeX } from "lucide-react";

interface IntroVideoLoaderProps {
  onFinish: () => void;
}

const VIDEO_SRC = `${import.meta.env.BASE_URL}assets/astra.mp4`;

export default function IntroVideoLoader({ onFinish }: IntroVideoLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [canSkip, setCanSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasFinishedRef = useRef(false);

  const completeLoader = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsFading(true);
    setTimeout(() => {
      onFinish();
    }, 700);
  };

  useEffect(() => {
    // Disable background page scroll during video intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Allow skip after 1.2 seconds
    const skipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 1200);

    // Fallback safety timeout in case autoplay fails or video stalls
    const maxSafetyTimer = setTimeout(() => {
      completeLoader();
    }, 8000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        completeLoader();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(skipTimer);
      clearTimeout(maxSafetyTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      const pct = Math.min(Math.round((current / total) * 100), 100);
      setProgress(pct);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      onClick={canSkip ? completeLoader : undefined}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 select-none ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#000000" }}
    >
      {/* Subtle Corner Reticles */}
      <div className="absolute top-4 left-4 text-xs font-mono text-white/30 pointer-events-none">
        ┌ ─ [SYS.INIT // INTRO SEQUENCE]
      </div>
      <div className="absolute top-4 right-4 text-xs font-mono text-white/30 pointer-events-none">
        [RUNTIME: 2026.10] ─ ┐
      </div>
      <div className="absolute bottom-4 left-4 text-xs font-mono text-white/30 pointer-events-none">
        └ ─ [DEV.0x28 // SHAMSHAD KHAN]
      </div>

      {/* Main Video Presentation */}
      <div className="relative w-full max-w-4xl h-full max-h-[85vh] flex items-center justify-center px-4">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={completeLoader}
          onError={completeLoader}
          className="w-full h-full object-contain rounded-2xl shadow-[0_0_50px_rgba(211,253,80,0.15)]"
        />

        {/* Ambient Glow behind video */}
        <div className="absolute -inset-4 bg-[#D3FD50]/5 rounded-3xl blur-2xl pointer-events-none -z-10" />
      </div>

      {/* Bottom Telemetry & Controls HUD */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-6 flex flex-col items-center gap-3">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm relative">
          <div
            className="h-full bg-[#D3FD50] transition-all duration-150 shadow-[0_0_12px_#D3FD50]"
            style={{ width: `${Math.max(progress, 5)}%` }}
          />
        </div>

        {/* Status Line */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1.5 text-[#D3FD50]">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span className="font-semibold tracking-wider">
              {progress < 100 ? `INITIALIZING // ${progress}%` : "READY // LAUNCHING"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-neutral-300 hover:text-white transition-all cursor-pointer"
              title={isMuted ? "Unmute Intro" : "Mute Intro"}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D3FD50]" />}
            </button>

            {/* Skip Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                completeLoader();
              }}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.08] hover:bg-[#D3FD50] text-neutral-200 hover:text-black font-semibold text-[11px] tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
            >
              <span>SKIP</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

