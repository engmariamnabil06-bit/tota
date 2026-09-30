"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Timeline() {
  return (
    <>
      {/* Main Line */}
      <div className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 rounded-full bg-white/10">

        {/* Purple Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="w-full rounded-full bg-gradient-to-b from-fuchsia-300 via-purple-500 to-violet-400 shadow-[0_0_30px_#a855f7]"
        />
      </div>

      {/* Rocket */}
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
          scale: .7,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="absolute left-1/2 top-0 z-50 -translate-x-1/2"
      >
        <div className="relative">

          {/* Fire */}
          <div className="absolute left-1/2 top-12 h-24 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-300 via-purple-500 to-transparent blur-xl" />

          <div className="rounded-full bg-[#130a22] p-4 shadow-[0_0_45px_#a855f7]">

            <Rocket
              size={40}
              className="-rotate-45 text-purple-300"
            />

          </div>

        </div>
      </motion.div>
    </>
  );
}