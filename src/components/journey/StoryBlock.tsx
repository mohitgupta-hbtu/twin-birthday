import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

type Props = {
  image: string;
  imageAlt: string;
  side: "left" | "right"; // image side
  children: ReactNode; // story text
  tilt?: number;
};

export default function StoryBlock({ image, imageAlt, side, children, tilt = -3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0.6]);

  const Img = (
    <motion.div
      style={{ y: imgY }}
      className={`relative mx-auto w-full max-w-[380px] ${side === "left" ? "lg:mr-auto" : "lg:ml-auto"}`}
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-white/30 backdrop-blur-xl shadow-2xl" style={{ transform: `rotate(${tilt}deg)` }} />
      <motion.div
        whileHover={{ scale: 1.02, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="relative aspect-[4/3] rounded-[2rem] overflow-hidden ring-1 ring-white/60 shadow-2xl animate-float-slow"
        style={{
          boxShadow:
            "0 30px 80px oklch(0.55 0.22 295 / 0.35), 0 0 60px oklch(0.78 0.18 350 / 0.25), inset 0 0 0 1px oklch(1 0 0 / 0.4)",
        }}
      >
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.55_0.22_295/0.25)] via-transparent to-[oklch(0.95_0.06_80/0.15)]" />
        {/* glow border */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem]" style={{ boxShadow: "inset 0 0 40px oklch(0.92 0.12 85 / 0.3)" }} />
      </motion.div>

      {/* floating decorations */}
      <Sparkles className="absolute -top-4 -left-2 w-8 h-8 text-[oklch(0.92_0.12_85)] drop-shadow-lg animate-float-y" />
      <Star className="absolute -bottom-3 right-6 w-7 h-7 fill-[oklch(0.68_0.2_295)] text-[oklch(0.68_0.2_295)] animate-float-y" style={{ animationDelay: "1.5s" }} />
      <Heart className="absolute top-1/2 -right-4 w-6 h-6 fill-[oklch(0.85_0.12_350)] text-[oklch(0.85_0.12_350)] animate-float-y" style={{ animationDelay: "2.5s" }} />
    </motion.div>
  );

  const Text = (
    <motion.div
      style={{ y, opacity }}
      className="relative font-cassandra text-[oklch(0.32_0.18_295)] story-glow text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide max-w-xl mx-auto lg:mx-0"
    >
      <div className="absolute -inset-8 rounded-[2rem] bg-white/20 backdrop-blur-md -z-10" />
      {children}
    </motion.div>
  );

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center px-6 md:px-14 py-16 lg:py-20">
      {side === "left" ? (
        <>
          {Img}
          {Text}
        </>
      ) : (
        <>
          {Text}
          {Img}
        </>
      )}
    </div>
  );
}
