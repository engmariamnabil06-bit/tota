"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          number="05"
          badge="Let's Connect"
          title="Contact Me"
          description="I'm always open to discussing new opportunities, collaborations, or exciting projects."
        />
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

  {/* Left Side */}
  <div className="grid gap-6">

    {contactInfo.map((item, index) => {

      const Icon = item.icon;

      return (

        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .15,
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="
            group
            flex
            items-center
            justify-between
            rounded-3xl
            border
            border-purple-500/20
            bg-white/5
            p-7
            backdrop-blur-xl
            transition-all
            hover:border-purple-400
            hover:shadow-[0_0_35px_#9333ea]
          "
        >

          <div className="flex items-center gap-5">

            <div
              className="
                rounded-2xl
                bg-purple-500/20
                p-4
                transition-all
                duration-300
                group-hover:rotate-12
                group-hover:scale-110
              "
            >

              <Icon
                size={28}
                className="text-purple-300"
              />

            </div>

            <div>

              <h3 className="text-xl font-semibold">

                {item.title}

              </h3>

              <p className="mt-1 text-gray-400">

                {item.value}

              </p>

            </div>

          </div>

          <ArrowUpRight
            className="
              text-purple-400
              transition-transform
              duration-300
              group-hover:translate-x-2
              group-hover:-translate-y-2
            "
          />

        </motion.a>

      );

    })}

  </div>

  {/* Right Side */}
  <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-10 backdrop-blur-xl">

    <h3 className="mb-8 text-3xl font-bold">
      Send Me a Message
    </h3>

    <p className="mb-8 text-gray-400">
      Fill out the form and I'll get back to you as soon as possible.
    </p>

    <form className="space-y-6">

  <input
    type="text"
    placeholder="Your Name"
    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-purple-400"
  />

  <input
    type="email"
    placeholder="Your Email"
    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-purple-400"
  />

  <input
    type="text"
    placeholder="Subject"
    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-purple-400"
  />

  <textarea
    rows={6}
    placeholder="Your Message..."
    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-purple-400"
  />

  <button
    className="
      w-full
      rounded-2xl
      bg-gradient-to-r
      from-purple-600
      to-fuchsia-500
      py-4
      font-semibold
      transition
      hover:scale-[1.02]
      hover:shadow-[0_0_30px_#9333ea]
    "
  >
    Send Message 🚀
  </button>

</form>

  </div>

</div>

      </div>
    </section>
  );
}