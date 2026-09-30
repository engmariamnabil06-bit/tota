"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionTitle
  number="02"
  badge="My Skills"
  title="Technologies I Work With"
  description="Modern technologies and tools I use to build fast, scalable and beautiful web applications."
/>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.div
  key={skill.name}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: skill.level * 0.002,
  }}
>
  <SkillCard
    icon={skill.icon}
    name={skill.name}
    description={skill.description}
    level={skill.level}
    color={skill.color}
  />
</motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}