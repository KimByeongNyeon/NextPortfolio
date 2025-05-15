import PageTransition from "../components/PageTransition";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";

export default function MainPage() {
  return (
    <PageTransition animationType="fade">
      <div className="w-full min-h-screen overflow-visible relative">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <HeroSection />
          <ProjectsSection />
          <BlogSection />
        </div>
      </div>
    </PageTransition>
  );
}
