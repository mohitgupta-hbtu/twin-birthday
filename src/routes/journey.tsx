import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import AmbientBackground from "@/components/journey/AmbientBackground";
import StoryBlock from "@/components/journey/StoryBlock";
import StoryLines from "@/components/journey/StoryLines";
import library from "@/assets/library.png";
import twinMagic from "@/assets/twin-magic.png";
import placeholder1 from "@/assets/new-1.jpg";
import placeholder2 from "@/assets/fairy-image.jpeg";

export const Route = createFileRoute("/journey")({
  component: JourneyPage,
  head: () => ({
    meta: [
      { title: "Our Journey — Twin Memories" },
      { name: "description", content: "A dreamy cinematic walk through our memories together." },
    ],
  }),
});

function SectionTitle({ chapter, title }: { chapter: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center pt-12 md:pt-16"
    >
      <p className="font-display italic tracking-[0.4em] text-xs md:text-sm text-[oklch(0.55_0.22_295)]">
        ✦ {chapter} ✦
      </p>
      <h2 className="puffy-text font-black text-4xl md:text-5xl mt-2">{title}</h2>
    </motion.div>
  );
}

function JourneyPage() {
  return (
    <main className="relative font-body min-h-screen">
      <AmbientBackground />

      {/* back link */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-30 backdrop-blur-xl bg-white/50 border border-white/70 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold text-[oklch(0.4_0.2_295)] hover:scale-105 transition"
      >
        <ArrowLeft className="w-4 h-4" /> back
      </Link>

      {/* PAGE 1 — Library to Masti */}
      <SectionTitle chapter="CHAPTER ONE" title="LIBRARY → MASTI" />

      <StoryBlock image={library} imageAlt="Tagore Central Library" side="left" tilt={-4}>
        <StoryLines
          lines={[
            "Ye hai hamari library,",
            "aur yaha pe hamne bahut bakaiti ki —",
            "aur hamare autism ki mulaqat yahi se hui.",
            "Vaise to pehla discussion philosophy ka tha,",
            "par phir hui bakaiti ki shuruwat —",
            "break time ke mahaan concept se 🍵",
            "Jabse hamara EQ aur humour badne laga,",
            "aur IQ kam... aur phir hui ek chatpati dosti ki shuruwat ✦",
          ]}
        />
      </StoryBlock>

      <StoryBlock image={twinMagic} imageAlt="Me and my twin — magical sparkles" side="right" tilt={5}>
        <StoryLines
          lines={[
            "Lagbhag ek achhi dosti ki shuruwat hui hogi 18–19 April 2026,",
            "phir padai kam, break time jyada hone laga.",
            "Sath mai pada bhi, hasa bhi,",
            "aur ghooma bhi bahut — papa ke paise ke petrol se (hehehe ⛽).",
            "Sabke mast nicknames rakhe,",
            "bahut maje liye ek doosre ke.",
            "Kuch bhi kaho, bahut jiya apan ne khulke,",
            "bahut up and down dekhe, 1st year mai hi —",
            "aur best part ki mujhe aap jaisi best HG mil gayi 💫",
            "my lovely twin.",
          ]}
        />
      </StoryBlock>

      {/* soft connector */}
      <div className="h-16 md:h-24 relative">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-40 bg-gradient-to-r from-transparent via-[oklch(0.55_0.22_295)] to-transparent"
        />
      </div>

      {/* PAGE 2 — Secret Spot */}
      <SectionTitle chapter="CHAPTER TWO" title="SECRET SPOT" />

      <StoryBlock image={placeholder1} imageAlt="Secret spot memory" side="left" tilt={-3}>
        <StoryLines
          lines={[
            "Yahi tha hamara secret spot...",
            "jaha pe hamne bahut si ajeeb",
            "par yaadgaar baatein ki.",
            "(— editable later ✎)",
          ]}
        />
      </StoryBlock>

      <StoryBlock image={placeholder2} imageAlt="Another memory" side="right" tilt={4}>
        <StoryLines
          lines={[
            "Aur kuch yaadein aisi bhi thi,",
            "jo sirf hum dono ke beech reh gayi —",
            "hawa mai, hasi mai, chai ke cup mai.",
            "(— add your story here ✦)",
          ]}
        />
      </StoryBlock>

      <div className="text-center pb-32 pt-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-cassandra text-3xl md:text-4xl text-gradient-bday"
        >
          ... to be continued ✨
        </motion.p>
      </div>
    </main>
  );
}
