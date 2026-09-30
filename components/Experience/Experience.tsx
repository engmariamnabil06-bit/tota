"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#05010d] py-32"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[180px]" />
      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-700/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionTitle
  number="03"
  badge="My Journey"
  title="Experience"
  description="My learning path and professional journey so far."
/>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 rounded-full bg-white/10">

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="w-full rounded-full bg-gradient-to-b from-fuchsia-400 via-purple-500 to-cyan-400"
            />

          </div>

          {/* Rocket */}
          <motion.div
            initial={{
              y: -120,
              opacity: 0,
            }}
            whileInView={{
              y: "1050px",
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-0 z-50 -translate-x-1/2"
          >
            <div className="relative">

              {/* Fire */}
              <div className="absolute left-1/2 top-12 h-24 w-10 -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-300 via-purple-500 to-transparent blur-xl" />

              <div className="rounded-full bg-[#12091d] p-4 shadow-[0_0_35px_#a855f7]">

                <Rocket
                  size={40}
                  className="-rotate-45 text-purple-300"
                />

              </div>

            </div>
          </motion.div>

          {/* Cards */}
          <div className="space-y-32 pt-40">
            {experiences.map((item, index) => {

  const left = index % 2 === 0;

  return (

    <motion.div
      key={index}
      initial={{
        opacity: 0,
        x: left ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .8,
        delay: index * .2,
      }}
      className={`relative flex ${
        left
          ? "justify-start"
          : "justify-end"
      }`}
    >

      {/* Timeline Dot */}

      <motion.div
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: .3 + index * .2,
        }}
        className="
          absolute
          left-1/2
          top-16
          z-20
          h-7
          w-7
          -translate-x-1/2
          rounded-full
          border-4
          border-[#05010d]
          bg-purple-400
          shadow-[0_0_25px_#a855f7]
        "
      />

      {/* Connector */}

      <div
        className={`absolute top-[72px] h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-400 ${
          left
            ? "left-[42%] w-[8%]"
            : "right-[42%] w-[8%]"
        }`}
      />

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: .3,
        }}
        className="
          w-[40%]
          rounded-3xl
          border
          border-purple-500/20
          bg-white/5
          p-8
          backdrop-blur-xl
          shadow-lg
          hover:border-purple-400
          hover:shadow-[0_0_35px_#7c3aed]
        "
      >

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div className="rounded-2xl bg-purple-500/20 p-4">

            <item.icon
              size={30}
              className="text-purple-300"
            />

          </div>

          <span className="rounded-xl bg-purple-500/20 px-4 py-2 text-sm text-purple-300">

            {item.year}

          </span>

        </div>

        <h3 className="text-3xl font-bold">

          {item.title}

        </h3>

        <p className="mt-2 text-purple-300">

          {item.company}

        </p>

        <p className="mt-6 leading-8 text-gray-300">

          {item.description}

        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-4">

          {item.technologies.map((tech, i) => {

            const Icon = tech.icon;

            return (

              <div
                key={i}
                className="group relative"
              >

                <div
                  className="
                    rounded-2xl
                    border
                    border-purple-500/20
                    bg-white/5
                    p-3
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:scale-110
                    hover:border-purple-400
                    hover:bg-purple-500/10
                    hover:shadow-[0_0_25px_#a855f7]
                  "
                >

                  <Icon
                    size={24}
                    className="text-purple-300"
                  />

                </div>

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-10
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-lg
                    bg-[#141021]
                    px-3
                    py-1
                    text-xs
                    text-white
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >

                  {tech.name}

                </div>

              </div>

            );

          })}

        </div>

      </motion.div>

    </motion.div>

  );

})}
          </div>

        </div>

      </div>

    </section>
  );
}