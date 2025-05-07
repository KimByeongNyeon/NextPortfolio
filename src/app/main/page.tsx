import PageTransition from "../components/PageTransition";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";

export default function MainPage() {
  return (
    <PageTransition animationType="slide-right">
      <div className="container mx-auto py-12 px-4">
        <HeroSection />
        <ProjectsSection />
        <BlogSection />
      </div>
    </PageTransition>
  );
}
