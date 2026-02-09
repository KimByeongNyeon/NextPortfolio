"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function IntroduceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillGroups = [
    { name: "Front-end", skills: ["TypeScript", "JavaScript", "React.js", "Next.js"] },
    { name: "Data & State", skills: ["Tanstack-query", "Redux-toolkit", "Zustand"] },
    { name: "Tools", skills: ["Git / Github", "VScode / Cursor"] },
    { name: "Collaboration", skills: ["Figma", "Jira"] }
  ];

  const education = [
    {
      period: "2024 ~ 2025",
      title: "삼성 청년 SW 아카데미 (SSAFY)",
      description: "Python 기반 컴퓨팅 사고력 교육 및 Vue, Django 기반 프로젝트를 통해 기초를 다졌으며, TS/React 기반 실무 프로젝트로 기획부터 배포까지 전 과정을 경험했습니다."
    },
    {
      period: "2023 ~ 2024",
      title: "쌍용 교육센터",
      description: "Java 기반 풀스택 교육과정으로 JSP 기반 프로젝트를 통해 웹 프로그래밍의 기초를 습득하였습니다."
    }
  ];

  const awards = [
    "SSAFY 기업 연계 프로젝트 최우수상 수상",
    "SSAFY 전국 프로젝트 발표회 입상"
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-white dark:bg-black text-gray-700 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div {...fadeIn} className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            소통과 성장을 우선시하는 개발자 입니다.<br/>
          </h3>
        </motion.div>

        {/* Profile & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <motion.div {...fadeIn} className="md:col-span-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden grayscale-0 transition-all duration-700 border border-white/10">
              <Image 
                src="/assets/profile.png" 
                alt="Kim Byeongnyeon" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="md:col-span-8 space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              반복을 줄이고 유지보수성을 높이기 위해 항상 <span className="text-gray-900 dark:text-white font-semibold">효율적인 아키텍처 설계</span>를 고민합니다. 
              기존의 반복되던 코드를 커스텀 훅으로 분리해 재사용한 구조를 만드는 데 강점이 있으며, 
              실제로 API 통신 효율화를 위해
              <Link href="https://www.npmjs.com/package/react-easy-api"> <span className="text-blue-500 font-medium">react-easy-api</span></Link> 라이브러리를 제작한 바 있습니다.
            </p>
            <p>
              동료들과 함께 성장하는 가치를 믿습니다. SSAFY 프로젝트 당시 Git에 서툰 팀원들을 위한 교육 세션을 진행하고, 
              React가 처음인 팀원에게 컴포넌트 설계와 훅 사용법을 공유하며 적극적으로 도움을 주었습니다. 
              이러한 노력으로 팀원들로부터 높은 신뢰를 얻어 <span className="text-gray-900 dark:text-white font-medium">'이달의 동료'</span>에 선정되기도 했습니다.
            </p>
            <p>
              개발자도 한 명의 사용자라는 생각으로, <span className="text-gray-900 dark:text-white font-semibold">사용자 관점의 기술적 가치</span>를 전달하려 노력합니다. 
              최종 프로젝트 발표회 당시 비개발자 심사위원들에게 서비스의 핵심 문제를 직관적으로 설명하여 
              전달력과 완성도 면에서 긍정적인 평가를 받은 바 있습니다.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}

        {/* Education & Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-gray-100 dark:border-white/5">
          {/* Education */}
          <motion.div {...fadeIn}>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h4>
            <div className="space-y-10">
              {education.map((item) => (
                <div key={item.title}>
                  <span className="text-sm font-mono text-blue-500 mb-2 block">{item.period}</span>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div {...fadeIn}>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Awards</h4>
            <ul className="space-y-6">
              {awards.map((award) => (
                <li key={award} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-lg leading-snug">{award}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}