import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, Heart, X, Sparkles } from "lucide-react";
import galleryBg from "@/assets/gallery-bg.jpg";
import tiniImg from "@/assets/tini.jpeg";

// Gallery Images
import img1 from "@/assets/gallery-top-1.jpg";
import img2 from "@/assets/gallery-top-2.jpg";
import img3 from "@/assets/gallery-3.jpg";
import img4 from "@/assets/gallery-4.jpg";
import img5 from "@/assets/gallery-new-5.jpeg";
import img6 from "@/assets/gallery-new-6.jpeg";

const images = [
  { src: img1, alt: "Memory 1", delay: 0.1, tilt: -4 },
  { src: img2, alt: "Memory 2", delay: 0.2, tilt: 2 },
  { src: img3, alt: "Memory 3", delay: 0.3, tilt: -2 },
  { src: img4, alt: "Memory 4", delay: 0.4, tilt: 4 },
  { src: img5, alt: "Memory 5", delay: 0.5, tilt: -3 },
  { src: img6, alt: "Memory 6", delay: 0.6, tilt: 3 },
];

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Twin Memories" },
      { name: "description", content: "A beautiful collection of our favorite moments." },
    ],
  }),
});

const YT_ID = "g1uEqR5eFMo";

function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    function initPlayer() {
      if (!document.getElementById("youtube-player-hidden")) return;
      const p = new (window as any).YT.Player("youtube-player-hidden", {
        height: "0",
        width: "0",
        videoId: YT_ID,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: YT_ID,
          controls: 0,
          disablekb: 1,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => {
            e.target.setVolume(100);
            e.target.playVideo();
            playerRef.current = e.target;
          },
          onStateChange: (e: any) => {
            setPlaying(e.data === (window as any).YT.PlayerState.PLAYING);
          },
        },
      });
    }

    const scriptId = "youtube-iframe-api";
    if (!document.getElementById(scriptId)) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = scriptId;
      document.head.appendChild(tag);
    }

    if ((window as any).YT?.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  }, [playing]);

  return (
    <main className="relative font-body min-h-screen pb-32 overflow-hidden">
      {/* Animated Background Layer */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="fixed inset-0 -z-20 bg-cover bg-center origin-center"
        style={{ backgroundImage: `url(${galleryBg})` }}
      />

      {/* Floating Sparkles over the balloons */}
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
      {/* back link */}
      <Link
        to="/journey"
        className="fixed top-6 left-6 z-30 backdrop-blur-xl bg-white/50 border border-white/70 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold text-[oklch(0.4_0.2_295)] hover:scale-105 transition"
      >
        <ArrowLeft className="w-4 h-4" /> back
      </Link>

      {/* Title */}
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
          [Baddie Aura]
        </motion.h1>
      </div>

      {/* Masonry-style Grid */}
      <div className="w-full px-8 md:px-14 lg:px-16 pt-6 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: img.tilt * 2, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: img.tilt, scale: 1 }}
              transition={{
                duration: 1,
                delay: img.delay,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onClick={() => setSelected(i)}
              className="group relative cursor-pointer max-w-[380px] mx-auto w-full"
            >
              {/* polaroid white frame background */}
              <div
                className="absolute -inset-2 md:-inset-2.5 rounded-[1.5rem] bg-white/40 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:bg-white/60 group-hover:shadow-[0_20px_60px_oklch(0.55_0.22_295/0.2)]"
              />

              {/* image container */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/60 shadow-inner z-10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* romantic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.68_0.2_295/0.6)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* floating heart on hover */}
                <motion.div
                  className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white fill-white drop-shadow-md" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            {/* background decorative glowing blobs for lightbox */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[oklch(0.78_0.18_350)] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[oklch(0.68_0.2_295)] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />

            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-2 md:p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src={images[selected].src}
                  alt={images[selected].alt}
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/50 flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all shadow-[0_0_30px_oklch(0.55_0.22_295/0.5)]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center py-12 md:py-16"
      >
        <Link
          to="/finale"
          className="group relative btn-bday text-white font-semibold px-10 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_40px_oklch(0.55_0.22_295/0.5)]"
        >
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          <span className="relative tracking-wide">NEXT</span>
          <span className="relative w-9 h-9 rounded-full bg-white/25 backdrop-blur flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </span>
          <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-[oklch(0.95_0.05_80)] opacity-0 group-hover:opacity-100 transition animate-pulse" />
        </Link>
      </motion.div>

      {/* Hidden YouTube player for background audio */}
      <div id="youtube-player-hidden" />

      {/* Floating Music Toggle Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-40 w-24 h-24 rounded-full shadow-[0_8px_30px_oklch(0.55_0.22_295/0.5)] flex items-center justify-center overflow-hidden hover:shadow-[0_8px_40px_oklch(0.55_0.22_295/0.7)] hover:scale-110 active:scale-90 transition-all cursor-pointer"
      >
        <img
          src={tiniImg}
          alt="Music"
          className="w-full h-full object-cover"
          style={{
            animation: "spin 3s linear infinite",
            animationPlayState: playing ? "running" : "paused",
          }}
        />
      </button>
    </main>
  );
}
