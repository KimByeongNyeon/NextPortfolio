import PageTransition from "../../components/PageTransition";
import StaggeredAnimation from "../../components/StaggeredAnimation";
import ScrollReveal from "../../components/common/ScrollReveal";
import SkillBarChart from "../../components/skills/SkillBarChart";
import SkillCard from "./SkillCard";
import { HiCode, HiDeviceMobile, HiServer } from "react-icons/hi";
import Link from "next/link";

export default function SkillsContent() {
  const skillCards = [
    {
      title: "프론트엔드 개발",
      icon: <HiCode className="text-blue-500 text-2xl" />,
      skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React.js", "Vue.js", "Next.js"],
      description: "사용자 인터페이스와 경험을 디자인하고 구현합니다. 반응형 디자인과 현대적인 프레임워크를 사용한 웹 개발에 집중합니다.",
    },
    {
      title: "모바일 개발",
      icon: <HiDeviceMobile className="text-purple-500 text-2xl" />,
      skills: ["Kotlin", "Flutter"],
      description: "안드로이드 네이티브 앱과 크로스 플랫폼 앱을 개발합니다. 사용자 친화적인 모바일 경험을 만드는 데 집중합니다.",
    },
    {
      title: "백엔드 개발",
      icon: <HiServer className="text-green-500 text-2xl" />,
      skills: ["Java", "Python", "Spring Boot", "Django"],
      description: "안정적이고 확장 가능한 서버 측 애플리케이션을 개발합니다. API 설계와 데이터베이스 관리에 강점이 있습니다.",
    },
  ];

  return (
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-16 px-4">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 relative inline-block">
              기술 스택
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </h1>
            <p className="text-gray-600 text-lg">다양한 기술을 활용하여 웹, 모바일, 백엔드 개발을 아우르는 풀스택 개발 역량을 갖추고 있습니다.</p>
          </div>
        </ScrollReveal>

        <div className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="border-b-2 border-blue-500 pb-2">기술 숙련도</span>
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm">
              <SkillBarChart />
            </div>
          </ScrollReveal>
        </div>

        <div className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="border-b-2 border-blue-500 pb-2">전문 분야</span>
            </h2>
            <StaggeredAnimation className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillCards.map((skillCard, index) => (
                <SkillCard key={index} title={skillCard.title} skills={skillCard.skills} icon={skillCard.icon} description={skillCard.description} />
              ))}
            </StaggeredAnimation>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">현재 학습 중인 기술</h2>
            <p className="text-gray-600 mb-6 text-center">끊임없이 새로운 기술을 탐구하며 역량을 확장하고 있습니다.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Next.js 심화", "TypeScript", "Three.js", "Node.js", "GraphQL", "Docker"].map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-white border border-blue-200 rounded-full text-blue-700 shadow-sm hover:shadow-md transition-shadow cursor-default flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                함께 작업해보세요
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
