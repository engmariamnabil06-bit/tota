import { IconType } from "react-icons";

import {
  FaLaptopCode,
  FaRobot,
  FaCode,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";

type Technology = {
  icon: IconType;
  name: string;
};

type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: IconType;
  technologies: Technology[];
};

export const experiences: Experience[] = [
  {
    year: "2026",
    title: "Full Stack Development",
    company: "Egyptian E-Learning University",
    description:
      "Learning React, Next.js, Node.js and building modern web applications.",

    icon: FaLaptopCode,

    technologies: [
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },

  {
    year: "2025",
    title: "AI & Machine Learning Project",
    company: "Sprint Training Program",
    description:
      "Built an AI project for diabetes prediction during the Sprint Training Program.",

    icon: FaRobot,

    technologies: [
      {
        icon: SiPython,
        name: "Python",
      },
      {
        icon: SiPandas,
        name: "Pandas",
      },
      {
        icon: SiScikitlearn,
        name: "Scikit-learn",
      },
    ],
  },

  {
    year: "2025",
    title: "Frontend Projects",
    company: "Personal Portfolio",
    description:
      "Built responsive websites using modern frontend technologies.",

    icon: FaCode,

    technologies: [
      {
        icon: SiHtml5,
        name: "HTML5",
      },
      {
        icon: SiCss,
        name: "CSS3",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
];