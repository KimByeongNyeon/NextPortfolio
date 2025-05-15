"use client";

import ScrollReveal from "../../components/common/ScrollReveal";
import ProjectsShowcase from "../../components/main/ProjectSlider";

export default function ProjectsSection() {
  return (
    <section className="mb-32">
      <ScrollReveal>
        <ProjectsShowcase />
      </ScrollReveal>
    </section>
  );
}
