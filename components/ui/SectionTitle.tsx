"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  number: string;
  badge: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  number,
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="relative mb-28 text-center">

      {/* Background Number */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-[140px]
          font-black
          text-white
          md:text-[220px]
        "
      >
        {number}
      </motion.h1>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="
          relative
          z-10
          mb-6
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-purple-500/30
          bg-purple-500/10
          px-6
          py-3
          backdrop-blur-md
        "
      >

        <div className="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7]" />

        <span className="text-white">
          {badge}
        </span>

      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: .8,
          delay: .1,
        }}
        className="relative z-10 text-6xl font-extrabold"
      >

        <span className="bg-gradient-to-r from-white via-fuchsia-200 to-purple-400 bg-clip-text text-transparent">
          {title}
        </span>

      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: .25,
          duration: .8,
        }}
        className="
          relative
          z-10
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-gray-400
        "
      >
        {description}
      </motion.p>

    </div>
  );
}