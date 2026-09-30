"use client";

import Card from "@/components/ui/Card";
import { IconType } from "react-icons";

type Props = {
  title: string;
  company: string;
  description: string;
  year: string;
  icon: IconType;
  technologies: string[];
  left?: boolean;
};

export default function ExperienceCard({
  title,
  company,
  description,
  year,
  icon: Icon,
  technologies,
}: Props) {
  return (
    <Card className="relative w-full rounded-3xl border border-purple-500/20 bg-[#0b0715]/90 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-400">

      <div className="mb-6 flex items-center justify-between">

        <div className="rounded-2xl bg-purple-500/10 p-4">
          <Icon
            size={32}
            className="text-purple-400"
          />
        </div>

        <span className="rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          {year}
        </span>

      </div>

      <h3 className="text-3xl font-bold text-white">
        {title}
      </h3>

      <h4 className="mt-2 text-xl text-purple-300">
        {company}
      </h4>

      <p className="mt-6 leading-8 text-gray-300">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
          >
            {tech}
          </span>

        ))}

      </div>

    </Card>
  );
}