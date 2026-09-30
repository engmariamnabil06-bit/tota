"use client";

import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}