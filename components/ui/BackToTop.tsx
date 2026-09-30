"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShow(window.scrollY > 500);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  if (!show) return null;

  return (

    <motion.button
      initial={{
        opacity: 0,
        scale: .5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
      }}
      whileHover={{
        scale: 1.1,
        y: -4,
      }}
      whileTap={{
        scale: .95,
      }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-8
        right-8
        z-50
        rounded-full
        border
        border-purple-500/20
        bg-[#12091d]/90
        p-4
        backdrop-blur-xl
        transition-all
        hover:border-purple-400
        hover:shadow-[0_0_35px_#9333ea]
      "
    >

      <ArrowUp
        size={24}
        className="text-purple-300"
      />

    </motion.button>

  );

}