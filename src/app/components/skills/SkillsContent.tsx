"use client";

import StaggeredAnimation from "../StaggeredAnimation";
import ScrollReveal from "../common/ScrollReveal";
import SkillBarChart from "./SkillBarChart";
import SkillCard from "./SkillCard";
import { 
  HiCode, 
  HiTemplate, 
  HiLightningBolt, 
  HiDesktopComputer,
  HiSparkles,
  HiCog
} from "react-icons/hi";
import { motion } from "framer-motion";

export default function SkillsContent() {
  const skillCards = [
    {
      title: "핵심 역량",
      icon: <HiCode className="text-blue-500 text-3xl" />,
      skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript ES6+"],
      description: "프로젝트 구조화에 고민하고 효율적인 개발을 추구합니다!",
      color: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-50",
    },
    {
      title: "UI/UX 구현",
      icon: <HiTemplate className="text-purple-500 text-3xl" />,
      skills: ["TailwindCSS", "CSS3", "Bootstrap", "Framer Motion"],
      description: "항상 나는 사용자라고 생각하고 내가 사용자라면 어떤 인터페이스가 좋을까 고민하고 개발합니다!",
      color: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-50",
    },
    {
      title: "반응형 디자인",
      icon: <HiDesktopComputer className="text-orange-500 text-3xl" />,
      skills: ["PWA", "Grid Layout", "Flexbox", "Media Queries",],
      description: "모바일 환경에 최적화된 디자인을 고민하고 개발합니다!",
      color: "from-orange-500 to-red-600",
      iconBg: "bg-orange-50",
    },
    {
      title: "상태 관리",
      icon: <HiSparkles className="text-indigo-500 text-3xl" />,
      skills: ["Redux", "Context API", "React Query"],
      description: "클라이언트 상태관리와 서버 상태관리를 어떻게 효율적으로 관리할까 고민하고 개발합니다!",
      color: "from-indigo-500 to-blue-600",
      iconBg: "bg-indigo-50",
    },
    {
      title: "개발 도구",
      icon: <HiCog className="text-gray-500 text-3xl" />,
      skills: ["Vite", "ESLint", "Prettier", "Git", "Vercel", "Figma"],
      description: "개발 환경을 효율적으로 구축하고 팀 협업을 최적화하는 것을 항상 고민합니다",
      color: "from-gray-500 to-slate-600",
      iconBg: "bg-gray-50",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 relative inline-block bg-clip-text text-black">
            SKILLS
          </h1>
          
        </div>
      </ScrollReveal>

      <div className="mb-32">
        <ScrollReveal>
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
            <SkillBarChart />
          </div>
        </ScrollReveal>
      </div>

      <div className="mb-32">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCards.map((skillCard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard 
                  title={skillCard.title} 
                  skills={skillCard.skills} 
                  icon={skillCard.icon} 
                  description={skillCard.description} 
                  color={skillCard.color} 
                  iconBg={skillCard.iconBg} 
                />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
