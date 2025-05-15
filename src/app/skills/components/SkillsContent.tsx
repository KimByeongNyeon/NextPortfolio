"use client";

import PageTransition from "../../components/PageTransition";
import StaggeredAnimation from "../../components/StaggeredAnimation";
import ScrollReveal from "../../components/common/ScrollReveal";
import SkillBarChart from "./SkillBarChart";
import SkillCard from "./SkillCard";
import { HiCode, HiDeviceMobile, HiServer } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SkillsContent() {
  const skillCards = [
    {
      title: "프론트엔드 개발",
      icon: <HiCode className="text-blue-500 text-3xl" />,
      skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React.js", "Vue.js", "Next.js"],
      description: "사용자 인터페이스와 경험을 디자인하고 구현합니다. 반응형 디자인과 현대적인 프레임워크를 사용한 웹 개발에 집중합니다.",
      color: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-50",
    },
    {
      title: "모바일 개발",
      icon: <HiDeviceMobile className="text-purple-500 text-3xl" />,
      skills: ["Kotlin", "Flutter"],
      description: "안드로이드 네이티브 앱과 크로스 플랫폼 앱을 개발합니다. 사용자 친화적인 모바일 경험을 만드는 데 집중합니다.",
      color: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-50",
    },
    {
      title: "백엔드 개발",
      icon: <HiServer className="text-emerald-500 text-3xl" />,
      skills: ["Java", "Python", "Spring Boot", "Django"],
      description: "안정적이고 확장 가능한 서버 측 애플리케이션을 개발합니다. API 설계와 데이터베이스 관리에 강점이 있습니다.",
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-50",
    },
  ];

  return (
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">기술 스택</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              다양한 기술을 활용하여 웹, 모바일, 백엔드 개발을 아우르는
              <br className="hidden sm:block" /> 풀스택 개발 역량을 갖추고 있습니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-32">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-12 bg-gray-200"></div>
              <h2 className="text-2xl font-bold mx-4 text-gray-800">기술 숙련도</h2>
              <div className="h-px w-12 bg-gray-200"></div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
              <SkillBarChart />
            </div>
          </ScrollReveal>
        </div>

        <div className="mb-32">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-12 bg-gray-200"></div>
              <h2 className="text-2xl font-bold mx-4 text-gray-800">전문 분야</h2>
              <div className="h-px w-12 bg-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillCards.map((skillCard, index) => (
                <SkillCard key={index} title={skillCard.title} skills={skillCard.skills} icon={skillCard.icon} description={skillCard.description} color={skillCard.color} iconBg={skillCard.iconBg} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
