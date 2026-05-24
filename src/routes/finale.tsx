import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Heart, Sparkles, Star } from "lucide-react";
import galleryBg from "@/assets/gallery-bg.jpg";
import nickBg from "@/assets/nick-bg.png";
import hb from "@/assets/hb.jpeg";

export const Route = createFileRoute("/finale")({
  component: FinalePage,
  head: () => ({
    meta: [
      { title: "Finale — Twin Memories" },
      { name: "description", content: "A beautiful ending to our story." },
    ],
  }),
});

function FinalePage() {
  return (
    <main className="relative font-body min-h-screen pb-32 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="fixed inset-0 -z-20 bg-cover bg-center origin-center"
        style={{ backgroundImage: `url(${nickBg})` }}
      />

      <div className="fixed inset-0 -z-15 bg-black/30" />

      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[8%] text-[#FFD700]">
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div animate={{ y: [15, -15, 15], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[60%] left-[5%] text-[#FFD700]">
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div animate={{ y: [-15, 15, -15], opacity: [0.5, 1, 0.5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[30%] right-[6%] text-[#FFD700]">
          <Sparkles className="w-10 h-10" />
        </motion.div>
        <motion.div animate={{ y: [20, -20, 20], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[75%] right-[8%] text-[#FFD700]">
          <Sparkles className="w-7 h-7" />
        </motion.div>
      </div>

      <Link
        to="/journey"
        className="fixed top-6 left-6 z-30 backdrop-blur-xl bg-white/50 border border-white/70 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold text-[oklch(0.4_0.2_295)] hover:scale-105 transition"
      >
        <ArrowLeft className="w-4 h-4" /> back
      </Link>

      <div className="relative pt-20 md:pt-28 pb-8 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
          className="font-bunch-blossoms text-4xl md:text-5xl lg:text-[4.5rem] tracking-tight"
          style={{
            color: "#1a1a1a",
            textShadow: "0 4px 20px rgba(255, 215, 0, 0.4)",
          }}
        >
          Happy Birthday Baddie!
        </motion.h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-[oklch(0.78_0.18_350)] flex items-center justify-center shadow-[0_0_30px_oklch(0.78_0.18_350/0.5)]">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
          </div>

          <div className="mt-6 font-cassandra text-2xl md:text-3xl leading-relaxed text-[oklch(0.32_0.18_295)]">
            <p className="mb-6">MAST ESAI HASTE AND KHUSH RAHNA , APNE AUTISM PAR CHAR LINE LIKHI THI...</p>

            <div className="border-t border-white/30 pt-6 mt-6">
              <p className="mb-1">यहाँ हर शख़्स,</p>
              <p className="mb-1">हर पल हादसा होने से डरता है।</p>
              <p className="mb-1">खिलौना है जो मिट्टी के,</p>
              <p className="mb-1">टूट जाने से डरता है।</p>
              <p className="mb-1">मेरे दिल के किसी कोने में,</p>
              <p className="mb-1">मासूम सा एक बच्चा</p>
              <p className="mb-1">बड़ों की दुनिया देखकर,</p>
              <p className="mb-6">बड़ा होने से डरता है...</p>
            </div>

            <div className="border-t border-white/30 pt-6 mt-6">
              <p className="mb-1">ESAI AUTISTIC AND BAKAIT BANE REHNA HAI</p>
              <p className="mb-1">TEEN SAAL APAN KO BAHUT SARE KAAND KARNE HAI,</p>
              <p className="mb-1">BAS ESAI SLAY KARTE RAHNA,</p>
              <p className="mb-6">MY AUTISTIC TWIN ✨</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-white/30 backdrop-blur-xl shadow-2xl rotate-[-3deg]" />
            <div className="absolute -inset-2 rounded-[2.25rem] bg-white/50 backdrop-blur-xl shadow-xl rotate-[2deg]" />
            <div className="relative w-80 h-56 md:w-[800px] md:h-[440px] rounded-[2rem] overflow-hidden ring-1 ring-white/60 shadow-2xl mx-auto">
              <img
                src={hb}
                alt="Creator"
                className="w-full h-full object-cover object-[30%_center]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 mb-16"
        >
          <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/40 border border-white/60 rounded-full px-8 py-4 shadow-xl">
            <Star className="w-6 h-6 text-[oklch(0.55_0.22_295)] fill-[oklch(0.55_0.22_295)]" />
            <span className="font-display text-xl md:text-2xl text-[oklch(0.35_0.18_295)] tracking-wide">
              CREATOR — CHIGMA HB
            </span>
            <Star className="w-6 h-6 text-[oklch(0.55_0.22_295)] fill-[oklch(0.55_0.22_295)]" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="font-cassandra text-lg md:text-xl text-[oklch(0.5_0.15_295)] pb-10"
        >
          made with ❤️ for my baddie twin
        </motion.p>
      </div>
    </main>
  );
}
