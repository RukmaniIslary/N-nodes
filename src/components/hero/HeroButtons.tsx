"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ delay:1 }}
      className="
      flex
      gap-5
      justify-center
      mt-10
      "
    >
      <button
        className="
        px-8
        py-4
        rounded-full
        bg-red-500
        red-glow
        "
      >
        Shop Collection
      </button>

      <button
        className="
        px-8
        py-4
        rounded-full
        glass
        "
      >
        Explore 3D Showcase
      </button>
    </motion.div>
  );
}