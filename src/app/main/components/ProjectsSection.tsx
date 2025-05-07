import ScrollReveal from "../../components/common/ScrollReveal";
import ProjectSlider from "../../components/main/ProjectSlider";

export default function ProjectsSection() {
  return (
    <section className="mb-24">
      <ScrollReveal>
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <h2 className="text-2xl font-bold mx-4 px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-gray-800 border border-gray-200">주요 프로젝트</h2>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>
        <ProjectSlider />
      </ScrollReveal>
    </section>
  );
}
