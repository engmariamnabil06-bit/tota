"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

        {/* Left Side */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

            <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

            <span className="text-green-300">
              Available for Opportunities
            </span>

          </div>

          {/* Greeting */}
          <p className="text-lg text-purple-300">
            👋 Hi, I'm
          </p>

          {/* Name */}
          <h1 className="mt-3 text-6xl font-extrabold leading-tight">

            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-purple-400 bg-clip-text text-transparent">
              Mariam Nabil
            </span>

          </h1>

          {/* Job */}
          <h2 className="mt-6 text-2xl font-semibold text-purple-300">
            Full Stack Developer
          </h2>

          {/* Typing */}
          <div className="mt-6 h-10">

            <TypeAnimation
              sequence={[
                "Building Modern Web Applications.",
                1800,
                "Creating Beautiful User Interfaces.",
                1800,
                "Learning Something New Every Day.",
                1800,
                "Turning Ideas Into Real Projects.",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl font-medium text-white"
            />

          </div>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

            I build modern, responsive and user-friendly web
            applications using modern technologies while
            continuously improving my skills and creating
            meaningful digital experiences.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/CV.pdf"
              download
              className="rounded-xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-700"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-purple-500 px-8 py-4 font-semibold transition hover:bg-purple-600/20"
            >
              View Projects
            </a>

          </div>

        </div>

        {/* Right Side */}
<div className="relative flex justify-center items-center">

  {/* الخلفية المضيئة */}
  <div className="absolute h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[120px]" />

  {/* دائرة خارجية */}
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      h-[420px]
      w-[420px]
      rounded-full
      border
      border-purple-500/20
      border-dashed
    "
  />

  {/* Avatar */}
  <motion.div
    animate={{
      y: [-10, 10, -10],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10"
  >
    <div className="relative flex justify-center items-center">

  {/* Glow */}
  <div className="absolute h-[650px] w-[650px] rounded-full bg-purple-600/20 blur-[120px]" />

  {/* Circle */}
  <div className="absolute h-[600px] w-[600px] rounded-full border border-purple-500/20" />

  {/* Spline */}
  <div className="relative h-[700px] w-[700px]">

    <Spline
      scene="https://prod.spline.design/GlRRCfH9mgy6UDZ2/scene.splinecode"
    />

  </div>

</div>
  </motion.div>



        </div>

      </div>
    </section>
  );
}