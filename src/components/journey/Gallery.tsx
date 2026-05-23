import { motion } from "motion/react";
import { useState } from "react";
import { Heart, X } from "lucide-react";

type GalleryProps = {
  images: { src: string; alt: string }[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="px-6 md:px-14 py-10 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={() => setSelected(i)}
              className="group relative cursor-pointer"
            >
              {/* tilted card behind */}
              <div
                className="absolute -inset-2 rounded-2xl bg-white/30 backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:rotate-0"
                style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
              />

              {/* main image card */}
              <div
                className="relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-white/50 shadow-xl"
                style={{
                  boxShadow:
                    "0 20px 50px oklch(0.55 0.22 295 / 0.2), 0 0 30px oklch(0.78 0.18 350 / 0.15), inset 0 0 0 1px oklch(1 0 0 / 0.3)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.3_0.2_295/0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* hover heart icon */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                {/* subtle glow border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "inset 0 0 30px oklch(0.85 0.12 350 / 0.4)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative max-w-3xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white hover:bg-white/40 transition shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
