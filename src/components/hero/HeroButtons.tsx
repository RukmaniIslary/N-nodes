"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="
      flex
      flex-wrap
      gap-5
      justify-center
      mt-10
      "
    >
      <Link
        href="/#shop"
        className="
        px-8
        py-4
        rounded-full
        bg-red-500
        hover:bg-red-600
        transition
        red-glow
        font-semibold
        "
      >
        Shop Collection
      </Link>

      <Link
        href="/#shop"
        className="
        px-8
        py-4
        rounded-full
        glass
        hover:bg-white/10
        transition
        font-semibold
        "
      >
        Explore 3D Showcase
      </Link>
    </motion.div>
  );
}
