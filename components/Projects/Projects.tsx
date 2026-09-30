"use client";

import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          number="04"
          badge="Featured Work"
          title="Projects"
          description="A collection of projects that showcase my skills and passion for development."
        />

      </div>
    </section>
  );
}