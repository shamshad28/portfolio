import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Sparkles, RotateCcw, Maximize2, Minimize2, Eye } from "lucide-react";

interface GalaxyBackgroundProps {
  immersiveMode?: boolean;
  onToggleImmersive?: (val: boolean) => void;
}

export default function GalaxyBackground({
  immersiveMode = false,
  onToggleImmersive,
}: GalaxyBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simulation telemetry state
  const [currentPhase, setCurrentPhase] = useState<string>("PHASE 1: FADE-IN");
  const [particleCount] = useState<number>(22000);
  const [isImmersive, setIsImmersive] = useState<boolean>(immersiveMode);
  const [showHUD, setShowHUD] = useState<boolean>(true);

  // Animation reset trigger
  const resetTriggerRef = useRef<number>(Date.now());

  const handleReset = useCallback(() => {
    resetTriggerRef.current = Date.now();
    setCurrentPhase("PHASE 1: FADE-IN");
  }, []);

  const toggleImmersive = useCallback(() => {
    const nextVal = !isImmersive;
    setIsImmersive(nextVal);
    if (onToggleImmersive) {
      onToggleImmersive(nextVal);
    }
  }, [isImmersive, onToggleImmersive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // --- THREE.JS SETUP ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Strictly pure pitch black

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      4000
    );
    camera.position.set(0, -180, 750);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1.0);

    // --- CREATE SOFT CIRCULAR GLOW TEXTURE (Size: 1.5–2.5px with soft edge) ---
    const createSoftCircleTexture = (): THREE.Texture => {
      const size = 64;
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const ctx = c.getContext("2d")!;

      const center = size / 2;
      const gradient = ctx.createRadialGradient(
        center,
        center,
        0,
        center,
        center,
        center
      );
      // Strictly monochrome white with gaussian-like soft glow falloff
      gradient.addColorStop(0.0, "rgba(255, 255, 255, 1.0)");
      gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.9)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.35)");
      gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.08)");
      gradient.addColorStop(1.0, "rgba(255, 255, 255, 0.0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      const texture = new THREE.CanvasTexture(c);
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
      return texture;
    };

    const particleTexture = createSoftCircleTexture();

    // --- GENERATE GALAXY PARTICLES & PHASES ---
    const count = particleCount;
    const geometry = new THREE.BufferGeometry();

    const currentPositions = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    const clusterPositions = new Float32Array(count * 3);
    const galaxyPositions = new Float32Array(count * 3);

    // Orbital physics parameters for continuous motion
    const orbitalRadii = new Float32Array(count);
    const orbitalAngles = new Float32Array(count);
    const orbitalVelocities = new Float32Array(count);
    const armOffsetsX = new Float32Array(count);
    const armOffsetsY = new Float32Array(count);
    const armOffsetsZ = new Float32Array(count);

    // Galaxy Spiral Formula Parameters: r = a + b * theta
    const spiralA = 40.0;
    const spiralB = 38.0;
    const numArms = 3; // 3 Distinct Spiral Arms
    const maxTheta = 4.2 * Math.PI;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // 1. PHASE 1: Randomly scattered across wide viewport space
      const rx = (Math.random() - 0.5) * 1900;
      const ry = (Math.random() - 0.5) * 1400;
      const rz = (Math.random() - 0.5) * 800;

      initialPositions[i3] = rx;
      initialPositions[i3 + 1] = ry;
      initialPositions[i3 + 2] = rz;

      currentPositions[i3] = rx;
      currentPositions[i3 + 1] = ry;
      currentPositions[i3 + 2] = rz;

      // 2. PHASE 2: Core Clustering & Vortex Swirl
      // Central subset (30%) pulled into dense glowing core, rest into swirling funnel
      const isCoreSubset = i < count * 0.28;
      if (isCoreSubset) {
        // Dense spherical core bulge
        const coreR = Math.pow(Math.random(), 2.2) * 95;
        const corePhi = Math.random() * Math.PI * 2;
        const coreTheta = Math.acos(2 * Math.random() - 1);

        clusterPositions[i3] = coreR * Math.sin(coreTheta) * Math.cos(corePhi);
        clusterPositions[i3 + 1] = coreR * Math.sin(coreTheta) * Math.sin(corePhi);
        clusterPositions[i3 + 2] = coreR * Math.cos(coreTheta) * 0.65;
      } else {
        // Vortex swirl collapsing inward
        const vortexR = 70 + Math.random() * 260;
        const vortexAngle = Math.random() * Math.PI * 2;
        const vortexZ = (Math.random() - 0.5) * 70;

        clusterPositions[i3] = Math.cos(vortexAngle) * vortexR;
        clusterPositions[i3 + 1] = Math.sin(vortexAngle) * vortexR;
        clusterPositions[i3 + 2] = vortexZ;
      }

      // 3. PHASE 3: Spiral Galaxy Formation (r = a + b * theta)
      let gx = 0;
      let gy = 0;
      let gz = 0;
      let r = 0;
      let angle = 0;

      if (i < count * 0.22) {
        // Dense core galaxy bulge
        const rad = Math.pow(Math.random(), 2.0) * 80;
        angle = Math.random() * Math.PI * 2;
        r = rad;

        gx = Math.cos(angle) * rad;
        gy = Math.sin(angle) * rad;
        gz = (Math.random() - 0.5) * 55 * Math.exp(-rad / 60);

        armOffsetsX[i] = 0;
        armOffsetsY[i] = 0;
        armOffsetsZ[i] = gz;
      } else if (i < count * 0.94) {
        // Spiral Arms: Archimedean formula r = a + b * theta
        const armIndex = i % numArms;
        const armBaseAngle = (armIndex * 2 * Math.PI) / numArms;

        // Radial progression along arm
        const p = Math.pow(Math.random(), 0.72);
        const theta = p * maxTheta;
        r = spiralA + spiralB * theta;

        angle = armBaseAngle + theta;

        // Gaussian arm dispersion width expands with radius
        const spreadFactor = 12 + r * 0.085;
        const normalU1 = Math.random() || 0.001;
        const normalU2 = Math.random() || 0.001;
        const randGaussian =
          Math.sqrt(-2.0 * Math.log(normalU1)) * Math.cos(2.0 * Math.PI * normalU2);
        const randGaussianZ =
          Math.sqrt(-2.0 * Math.log(normalU1)) * Math.sin(2.0 * Math.PI * normalU2);

        const deltaR = randGaussian * spreadFactor;
        const totalR = Math.max(10, r + deltaR);

        gx = Math.cos(angle) * totalR;
        gy = Math.sin(angle) * totalR;
        gz = randGaussianZ * (8 + (1 - p) * 22);

        armOffsetsX[i] = (Math.random() - 0.5) * 4;
        armOffsetsY[i] = (Math.random() - 0.5) * 4;
        armOffsetsZ[i] = gz;
      } else {
        // Ambient deep-space field stars (cosmic depth)
        const outerR = 300 + Math.random() * 650;
        angle = Math.random() * Math.PI * 2;
        r = outerR;

        gx = Math.cos(angle) * outerR;
        gy = Math.sin(angle) * outerR;
        gz = (Math.random() - 0.5) * 160;

        armOffsetsX[i] = 0;
        armOffsetsY[i] = 0;
        armOffsetsZ[i] = gz;
      }

      galaxyPositions[i3] = gx;
      galaxyPositions[i3 + 1] = gy;
      galaxyPositions[i3 + 2] = gz;

      orbitalRadii[i] = Math.sqrt(gx * gx + gy * gy) || 1;
      orbitalAngles[i] = Math.atan2(gy, gx);

      // Orbital velocity dampening: Keplerian / flat rotation curve
      // Inner stars revolve faster, outer stars revolve with stable dampening
      orbitalVelocities[i] = 0.55 / Math.sqrt(orbitalRadii[i] + 30);

    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(currentPositions, 3)
    );

    // Custom Shader Material for exact particle size (1.5-2.5px) and twinkle pulsing
    const pointMaterial = new THREE.PointsMaterial({
      size: 2.2, // 1.5–2.5px particle size specification
      map: particleTexture,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending, // Dense core naturally glows pure white
      depthWrite: false,
      color: 0xffffff, // Strictly monochrome white
    });

    const particles = new THREE.Points(geometry, pointMaterial);
    // Slight galaxy disk tilt for majestic 3D perspective
    particles.rotation.x = -0.68;
    particles.rotation.y = 0.18;
    scene.add(particles);

    // --- MOUSE PARALLAX INTERACTIVITY ---
    let mouseX = 0;
    let mouseY = 0;
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      mouseX = (clientX / window.innerWidth) * 2 - 1;
      mouseY = -(clientY / window.innerHeight) * 2 + 1;
      targetParallaxX = mouseX * 0.28;
      targetParallaxY = mouseY * 0.22;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });

    // --- RESIZE LISTENER ---
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Smooth Easing Helper
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // --- MAIN RENDER & SIMULATION LOOP ---
    let animationFrameId: number;
    let lastTime = performance.now();
    let currentPhaseText = "PHASE 1: FADE-IN";

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Elapsed time since start or manual reset
      const elapsed = (Date.now() - resetTriggerRef.current) / 1000;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      // PHASE 1: FADE-IN (0.0s to 1.5s)
      if (elapsed < 1.5) {
        const fadeProgress = Math.min(elapsed / 1.5, 1.0);
        pointMaterial.opacity = fadeProgress;

        // Position: Initial scattered field
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          posArray[i3] = initialPositions[i3];
          posArray[i3 + 1] = initialPositions[i3 + 1];
          posArray[i3 + 2] = initialPositions[i3 + 2];
        }
        posAttr.needsUpdate = true;

        if (currentPhaseText !== "PHASE 1: FADE-IN") {
          currentPhaseText = "PHASE 1: FADE-IN";
          setCurrentPhase("PHASE 1: FADE-IN");
        }
      }
      // PHASE 2: CLUSTERING & SPIN (1.5s to 3.5s)
      else if (elapsed < 3.5) {
        pointMaterial.opacity = 1.0;
        const clusterT = (elapsed - 1.5) / 2.0;
        const ease = easeInOutCubic(Math.min(clusterT, 1.0));

        // Swirl acceleration during clustering
        const swirlAngle = clusterT * Math.PI * 1.5;

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const ix = initialPositions[i3];
          const iy = initialPositions[i3 + 1];
          const iz = initialPositions[i3 + 2];

          const cx = clusterPositions[i3];
          const cy = clusterPositions[i3 + 1];
          const cz = clusterPositions[i3 + 2];

          // Intermediate position with vortex swirl
          const lerpX = ix + (cx - ix) * ease;
          const lerpY = iy + (cy - iy) * ease;
          const lerpZ = iz + (cz - iz) * ease;

          const cosS = Math.cos(swirlAngle * ease);
          const sinS = Math.sin(swirlAngle * ease);

          posArray[i3] = lerpX * cosS - lerpY * sinS;
          posArray[i3 + 1] = lerpX * sinS + lerpY * cosS;
          posArray[i3 + 2] = lerpZ;
        }
        posAttr.needsUpdate = true;

        if (currentPhaseText !== "PHASE 2: CLUSTERING & SPIN") {
          currentPhaseText = "PHASE 2: CLUSTERING & SPIN";
          setCurrentPhase("PHASE 2: CLUSTERING & SPIN");
        }
      }
      // PHASE 3: SPIRAL GALAXY FORMATION (3.5s to 6.0s)
      else if (elapsed < 6.0) {
        pointMaterial.opacity = 1.0;
        const spiralT = (elapsed - 3.5) / 2.5;
        const ease = easeInOutCubic(Math.min(spiralT, 1.0));

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const cx = clusterPositions[i3];
          const cy = clusterPositions[i3 + 1];
          const cz = clusterPositions[i3 + 2];

          const gx = galaxyPositions[i3];
          const gy = galaxyPositions[i3 + 1];
          const gz = galaxyPositions[i3 + 2];

          posArray[i3] = cx + (gx - cx) * ease;
          posArray[i3 + 1] = cy + (gy - cy) * ease;
          posArray[i3 + 2] = cz + (gz - cz) * ease;
        }
        posAttr.needsUpdate = true;

        if (currentPhaseText !== "PHASE 3: SPIRAL ARMS (r = a + bθ)") {
          currentPhaseText = "PHASE 3: SPIRAL ARMS (r = a + bθ)";
          setCurrentPhase("PHASE 3: SPIRAL ARMS (r = a + bθ)");
        }
      }
      // CONTINUOUS MOTION & ORBITAL PHYSICS (t >= 6.0s)
      else {
        pointMaterial.opacity = 1.0;

        // Continuous clockwise rotation with velocity dampening
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const speed = orbitalVelocities[i];
          // Clockwise rotation: decrement angle
          orbitalAngles[i] -= speed * delta * 0.95;

          const r = orbitalRadii[i];
          const angle = orbitalAngles[i];

          posArray[i3] = Math.cos(angle) * r + armOffsetsX[i];
          posArray[i3 + 1] = Math.sin(angle) * r + armOffsetsY[i];
          posArray[i3 + 2] = armOffsetsZ[i];
        }
        posAttr.needsUpdate = true;

        if (currentPhaseText !== "STEADY VORTEX // GALAXY ROTATION") {
          currentPhaseText = "STEADY VORTEX // GALAXY ROTATION";
          setCurrentPhase("STEADY VORTEX // GALAXY ROTATION");
        }
      }

      // Subtle global disc pulsation
      const timeSec = now * 0.001;
      const pulse = 0.98 + Math.sin(timeSec * 0.8) * 0.02;
      particles.scale.set(pulse, pulse, pulse);

      // Subtle slow global disc drift
      particles.rotation.z -= delta * 0.045;

      // Mouse Parallax Damping
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.04;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.04;

      camera.position.x = currentParallaxX * 180;
      camera.position.y = -180 + currentParallaxY * 130;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      pointMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 select-none bg-black overflow-hidden transition-all duration-700 ${
        isImmersive ? "z-50" : "z-0"
      }`}
      style={{ backgroundColor: "#000000" }}
    >
      {/* Three.js Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-black"
        style={{ background: "#000000" }}
      />

      {/* Galaxy Simulation Telemetry HUD & Controls */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-auto flex items-center gap-2">
        {showHUD ? (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/90 border border-white/15 backdrop-blur-xl shadow-2xl text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-bold tracking-wider text-white">
              [VORTEX]:
            </span>
            <span className="text-white font-semibold">
              {currentPhase}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">
              {(particleCount / 1000).toFixed(0)}K STARS
            </span>

            {/* Replay Button */}
            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 ml-1 rounded-full bg-white/[0.08] hover:bg-white text-neutral-300 hover:text-black transition-all cursor-pointer"
              title="Replay Formation Simulation"
              aria-label="Replay Formation Simulation"
            >
              <RotateCcw className="w-3 h-3" />
            </button>

            {/* Toggle Immersive Fullscreen Mode */}
            <button
              type="button"
              onClick={toggleImmersive}
              className="p-1.5 rounded-full bg-white/[0.08] hover:bg-white text-neutral-300 hover:text-black transition-all cursor-pointer"
              title={isImmersive ? "Exit Immersive Mode" : "Full-Screen Galaxy Mode"}
              aria-label={isImmersive ? "Exit Immersive Mode" : "Full-Screen Galaxy Mode"}
            >
              {isImmersive ? (
                <Minimize2 className="w-3 h-3" />
              ) : (
                <Maximize2 className="w-3 h-3" />
              )}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowHUD(true)}
            className="p-2 rounded-full bg-black/80 border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-lg"
            title="Show Telemetry"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Immersive Mode Banner / Exit Button */}
      {isImmersive && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
          <button
            type="button"
            onClick={toggleImmersive}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-neutral-200 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>EXIT FULL-SCREEN SIMULATION</span>
          </button>
        </div>
      )}
    </div>
  );
}
