import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import img1 from "@/assets/new-1.jpg";
import img2 from "@/assets/new-1-wings.jpg";
import img3 from "@/assets/fairy-image.jpeg";
import img4 from "@/assets/new-4.png";

const images = [img1, img2, img3, img4];

const Decoration = ({
  className,
  delay = 0,
  rotate = 0,
  children,
}: {
  className?: string;
  delay?: number;
  rotate?: number;
  children: React.ReactNode;
}) => (
  <div
    className={`absolute pointer-events-none animate-float-y ${className ?? ""}`}
    style={{ animationDelay: `${delay}s`, ["--r" as never]: `${rotate}deg` }}
  >
    {children}
  </div>
);

const Confetti = () => {
  const bits = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bits.map((_, i) => {
        const colors = [
          "oklch(0.78 0.18 350)",
          "oklch(0.68 0.2 295)",
          "oklch(0.85 0.12 80)",
          "oklch(0.82 0.1 235)",
        ];
        const left = (i * 53) % 100;
        const size = 6 + ((i * 7) % 10);
        const dur = 8 + ((i * 3) % 9);
        const delay = (i * 0.7) % 6;
        return (
          <span
            key={i}
            className="absolute rounded-sm"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              background: colors[i % colors.length],
              animation: `drift ${dur}s linear ${delay}s infinite`,
              borderRadius: i % 2 ? "9999px" : "2px",
              opacity: 0.7,
            }}
          />
        );
      })}
    </div>
  );
};

export default function BirthdayHero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-sky-dream font-body">
      {/* abstract blobs */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.85_0.12_350/0.5)] blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-[oklch(0.78_0.14_295/0.45)] blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.9_0.09_80/0.5)] blur-3xl" />

      <Confetti />

      {/* hanging decorations */}
      <Decoration className="top-0 left-[8%]" delay={0} rotate={-8}>
        <div className="w-px h-24 bg-[oklch(0.7_0.1_280/0.4)] mx-auto" />
        <Heart className="w-10 h-10 -mt-1 fill-[oklch(0.85_0.12_350)] text-[oklch(0.85_0.12_350)] drop-shadow-lg" />
      </Decoration>
      <Decoration className="top-0 left-[28%]" delay={1.2} rotate={6}>
        <div className="w-px h-36 bg-[oklch(0.7_0.1_280/0.4)] mx-auto" />
        <Star className="w-12 h-12 -mt-1 fill-[oklch(0.55_0.22_295)] text-[oklch(0.55_0.22_295)] drop-shadow-lg" />
      </Decoration>
      <Decoration className="top-0 right-[12%]" delay={0.6} rotate={-12}>
        <div className="w-px h-28 bg-[oklch(0.7_0.1_280/0.4)] mx-auto" />
        <Star className="w-11 h-11 -mt-1 fill-[oklch(0.68_0.2_295)] text-[oklch(0.68_0.2_295)] drop-shadow-lg" />
      </Decoration>
      <Decoration className="bottom-10 left-[5%]" delay={2} rotate={15}>
        <Heart className="w-9 h-9 fill-white text-white drop-shadow-xl" />
      </Decoration>
      <Decoration className="bottom-24 right-[6%]" delay={1.5} rotate={-20}>
        <Sparkles className="w-12 h-12 text-[oklch(0.78_0.18_350)] drop-shadow-lg" />
      </Decoration>

      {/* nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-14 py-6">
        <div className="text-[oklch(0.45_0.24_305)] font-script text-2xl">
          twin.day
        </div>

      </nav>

      {/* content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 md:px-14 pb-20 pt-6">
        {/* LEFT — slider */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          {/* layered cards behind */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-white/40 backdrop-blur-xl rotate-[-6deg] shadow-2xl" />
          <div className="absolute -inset-2 rounded-[2.25rem] bg-white/60 backdrop-blur-xl rotate-[3deg] shadow-xl" />

          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/60 animate-float-slow" style={{ background: "linear-gradient(135deg, oklch(0.85 0.12 350), oklch(0.78 0.14 295), oklch(0.82 0.1 270), oklch(0.88 0.08 320))" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={idx < images.length ? idx : 0}
                src={images[idx < images.length ? idx : 0]}
                alt="Birthday memory"
                width={768}
                height={960}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
                transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.55_0.22_295/0.3)] via-transparent to-transparent" />


          </div>

          {/* floating mini cards */}


          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-4 -right-4 backdrop-blur-xl bg-white/60 border border-white/70 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 animate-float-y"
            style={{ animationDelay: "2s" }}
          >
            <Sparkles className="w-4 h-4 text-[oklch(0.55_0.22_295)]" />
            <span className="text-xs font-semibold text-[oklch(0.35_0.18_295)]">100% baddie</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — content */}
        <div className="relative text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display italic text-[oklch(0.55_0.22_295)] tracking-[0.3em] text-xs md:text-sm mb-3"
          >
            ✦ HAPPY BIRTHDAY ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            className="puffy-text font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight"
          >
            TWIN<span className="inline-block animate-float-y" style={{ ["--r" as never]: "8deg" }}>!</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 font-display text-lg md:text-xl leading-relaxed text-gradient-bday max-w-xl mx-auto lg:mx-0"
          >
            <p className="mb-4">
              YEH HAI HAMARI PRIYE MITTAR <br />
              <span className="font-script not-italic text-3xl md:text-4xl">BADDIE NANDINI SINGH</span>
            </p>
            <p className="text-base md:text-lg mb-4">
              INKE SLAY KARNE KA ANDAJ HI KUCH ALG HAI <br />
              YE BAS HASTI HAI , HASTI HAI <br />
              AUR SIRF HASTI HAI AND <br />
              KHUSH RAHTI HAI
            </p>
            <p className="text-base md:text-lg mb-4">
              YE TO HO GAYA <em>MISS BADDIE</em> KA <br />
              CHOTA SA INTRO ✨
            </p>
            <p className="text-base md:text-lg">
              AAJ HAM SAB KI PYARI BADDIE JII KA BIRTHDAY HAI, DEKHTE HAI <br />
              AAGE KYA KYA MILTA HAI ... <span className="text-2xl">😁</span>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <Link to="/journey" preload="intent" className="group relative btn-bday text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_40px_oklch(0.55_0.22_295/0.5)]">
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition" />
              <span className="relative tracking-wide">START JOURNEY</span>
              <span className="relative w-9 h-9 rounded-full bg-white/25 backdrop-blur flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
              <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-[oklch(0.95_0.05_80)] opacity-0 group-hover:opacity-100 transition animate-pulse" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
