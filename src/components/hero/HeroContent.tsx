"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="z-20 text-center">

      <motion.h1
        initial={{
          opacity:0,
          y:100
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1
        }}
        className="
        text-7xl
        font-black
        leading-tight
        "
      >
        <span
          className="
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-blue-500
          text-transparent
          bg-clip-text
          "
        >
          N-Nodes Premium
        </span>

        <br />

        Sneaker Universe
      </motion.h1>

      <motion.p
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          delay:0.5
        }}
        className="
        text-gray-400
        mt-8
        text-xl
        "
      >
        Experience the Future of Sneaker Shopping
      </motion.p>

    </div>
  );
}