import { motion } from "motion/react";

export default function StoryLines({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-1.5">
      {lines.map((l, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {l}
        </motion.p>
      ))}
    </div>
  );
}
