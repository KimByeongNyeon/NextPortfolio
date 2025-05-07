import PageTransition from '../components/PageTransition';
import StaggeredAnimation from '../components/StaggeredAnimation';
import ScrollReveal from '../components/common/ScrollReveal';
import SkillBarChart from '../components/skills/SkillBarChart';

export default function SkillsPage() {
  const skillCards = [
    {
      title: "프론트엔드 개발",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "백엔드 개발",
      skills: ["Node.js", "Express", "Python", "Django"]
    },
    {
      title: "기타 기술",
      skills: ["Git", "Docker", "AWS", "Firebase"]
    }
  ];

  return (
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-10 px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold mb-10">기술 스택</h1>
        </ScrollReveal>
        
        <div className="mb-16">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold mb-6">전문 기술</h2>
            <SkillBarChart />
          </ScrollReveal>
        </div>

        <div className="mb-16">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold mb-6">기술 분야</h2>
            <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCards.map((skillCard, index) => (
                <SkillCard 
                  key={index}
                  title={skillCard.title} 
                  skills={skillCard.skills}
                />
              ))}
            </StaggeredAnimation>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-xl font-semibold mb-4">현재 학습 중인 기술</h2>
            <div className="flex flex-wrap gap-3">
              {["GraphQL", "Svelte", "Rust", "Go", "Web3"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="mr-2 text-blue-500">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
