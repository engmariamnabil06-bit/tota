"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05010d] py-20">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          whileHover={{ scale: 1.03 }}
          className="text-5xl font-extrabold"
        >
          <span className="bg-gradient-to-r from-white via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
            Mariam.
          </span>
        </motion.h2>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          Full Stack Developer | AI Enthusiast
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Crafting modern web experiences with clean code,
          creative design and meaningful user experiences.
        </p>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <p className="text-sm text-gray-500">
          © 2026 Mariam Nabil. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}