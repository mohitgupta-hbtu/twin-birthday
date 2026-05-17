import { motion } from "motion/react";

/** Persistent dreamy background — gradients morph slowly + drifting particles */
export default function AmbientBackground() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-sky-dream pointer-events-none">
      {/* morphing blobs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ background: "oklch(0.85 0.12 350 / 0.45)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, 120, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: "oklch(0.78 0.14 295 / 0.4)" }}
        animate={{ x: [0, -60, 40, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "oklch(0.9 0.09 80 / 0.45)" }}
        animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* drifting golden particles */}
      {particles.map((_, i) => {
        const left = (i * 37) % 100;
        const size = 3 + ((i * 5) % 6);
        const dur = 14 + ((i * 3) % 12);
        const delay = (i * 0.6) % 10;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: "-10px",
              width: size,
              height: size,
              background:
                i % 3 === 0
                  ? "oklch(0.92 0.12 85 / 0.9)"
                  : i % 3 === 1
                  ? "oklch(0.85 0.12 350 / 0.8)"
                  : "oklch(0.78 0.14 295 / 0.8)",
              boxShadow: "0 0 12px currentColor",
              color: "oklch(0.92 0.12 85 / 0.6)",
              animation: `drift ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
