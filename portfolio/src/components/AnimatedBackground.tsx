"use client";

import { motion } from "framer-motion";

/**
 * Signature visual: a faint dot-grid (the "system") with two slow,
 * drifting glows in the signal/amber accents (the "activity" moving
 * through it). Kept subtle on purpose — restrained motion for a
 * professional engineering portfolio, not a hero animation showpiece.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <motion.div
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-signal/20 blur-[100px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-amber/10 blur-[100px]"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-grid-fade" />
    </div>
  );
}
