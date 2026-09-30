"use client";

import Card from "@/components/ui/Card";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type SkillCardProps = {
  icon: IconType;
  name: string;
  description: string;
  level: number;
  color: string;
};

export default function SkillCard({
  icon: Icon,
  name,
  description,
  level,
  color,
}: SkillCardProps) {
  return (
    <Card className="group">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110">
          <Icon size={34} style={{ color }} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {name}
          </h3>

          <p className="text-sm text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Skill Level
          </span>

          <span
            className="font-semibold"
            style={{ color }}
          >
            {level}%
          </span>
        </div>

        {/* Background */}
        <div className="h-2 overflow-hidden rounded-full bg-white/10">

          {/* Animated Progress */}
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />

        </div>
      </div>
    </Card>
  );
}