"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function IntroduceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillGroups = [
    {
      name: "Front-end",
      skills: ["TypeScript", "JavaScript", "React.js", "Next.js"],
    },
    {
      name: "Data & State",
      skills: ["Tanstack-query", "Redux-toolkit", "Zustand"],
    },
    { name: "Tools", skills: ["Git / Github", "VScode / Cursor"] },
    { name: "Collaboration", skills: ["Figma", "Jira"] },
  ];

  const education = [
    {
      period: "2024 ~ 2025",
      title: "삼성 청년 SW 아카데미 (SSAFY)",
      description:
        "Python 기반 컴퓨팅 사고력 교육 및 Vue, Django 기반 프로젝트를 통해 기초를 다졌으며, TS/React 기반 실무 프로젝트로 기획부터 배포까지 전 과정을 경험했습니다.",
    },
    {
      period: "2023 ~ 2024",
      title: "쌍용 교육센터",
      description:
        "Java 기반 풀스택 교육과정으로 JSP 기반 프로젝트를 통해 웹 프로그래밍의 기초를 습득하였습니다.",
    },
  ];

  const awards = [
    "SSAFY 기업 연계 프로젝트 최우수상 수상",
    "SSAFY 전국 프로젝트 발표회 입상",
  ];

  const timeline = [
    {
      year: "2023",
      label: "쌍용 교육센터",
      detail: "Java 풀스택 과정 수료",
      type: "education",
    },
    {
      year: "2024",
      label: "SSAFY 입학",
      detail: "삼성 청년 SW 아카데미 12기",
      type: "education",
    },
    {
      year: "2024",
      label: "이달의 동료 선정",
      detail: "팀 기여 및 지식 공유",
      type: "award",
    },
    {
      year: "2025",
      label: "기업 연계 프로젝트 최우수상",
      detail: "SSAFY 수상",
      type: "award",
    },
    {
      year: "2025",
      label: "전국 발표회 입상",
      detail: "SSAFY 졸업",
      type: "award",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-white dark:bg-black text-gray-700 dark:text-gray-200 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeIn} className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            소통을 기반으로 함께 성장하는 개발자 입니다.
            <br />
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
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              저는 적극적으로 소통하는 데 자신이 있습니다. 과거 삼성 청년 SW
              아카데미 프로젝트 2차 프로젝트 당시 Git 에 서툰 팀원들을 돕고자
              Git 관련 교육을 간단하게 진행한 경험이 있고 3차 프로젝트에서는
              Front End 작업이 처음이었던 팀원을 위해 어떤 방식으로 컴포넌트를
              구성할 지, 커스텀 훅은 어떤 경우에 사용하는 지 등의 기초적인 React
              학습을 도와준 경험이 있고 어려워 하는 부분이 있을까 먼저 찾아가서
              지속적인 도움을 준 경험이 있습니다. 이러한 경험들을 토대로
              팀원들로부터 믿음직하다는 피드백과 가장 많은 도움을 준 팀원을
              의미하는 이달의 동료에 선정된 경험이 있습니다.
            </p>
            <p>
              또한 개발자도 한 명의 사용자라고 생각합니다. 실제 사용자는
              개발자보다 비개발자가 더 많다고 생각하여 내가 먼저 비개발자의
              입장이 되어 어떻게 하면 서비스가 어필될 수 있을 지를 항상
              고민합니다. 삼성 청년 SW 아카데미 최종 프로젝트 전국 발표회 당시
              비개발자였던 심사위원들에게 프로젝트를 설명할 당시 어려운 개발
              용어보다는 왜 우리 서비스가 페인 포인트를 해결할 수 있는 지
              직관적으로 전달하였고 그 결과 전달 능력이 뛰어나다는 평가와
              완성도가 굉장히 높은 프로젝트인 것 같다는 평가를 받은 적이
              있습니다.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          {...fadeIn}
          className="mb-20 pt-12 border-t border-gray-100 dark:border-white/5"
        >
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
            History
          </h4>
          <div className="flex items-start w-full">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start flex-1 min-w-0">
                {/* Node + Label */}
                <div className="flex flex-col items-start min-w-0">
                  <div
                    className={`w-3 h-3 rounded-full mt-1 shrink-0 ${item.type === "award" ? "bg-blue-500" : "bg-gray-400 dark:bg-gray-500"}`}
                  />
                  <div className="mt-3 pr-3 min-w-0">
                    <span className="text-xs font-mono text-blue-500 block mb-1">
                      {item.year}
                    </span>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug break-keep">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 break-keep">
                      {item.detail}
                    </p>
                  </div>
                </div>
                {/* Connector line */}
                {index < timeline.length - 1 && (
                  <div className="flex-1 h-px bg-gray-200 dark:bg-white/10 mt-1.5 shrink-0 min-w-4" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-gray-100 dark:border-white/5">
          {/* Education */}
          <motion.div {...fadeIn}>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h4>
            <div className="space-y-10">
              {education.map((item) => (
                <div key={item.title}>
                  <span className="text-sm font-mono text-blue-500 mb-2 block">
                    {item.period}
                  </span>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div {...fadeIn}>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Awards
            </h4>
            <ul className="space-y-6">
              {awards.map((award) => (
                <li key={award} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-lg leading-snug">
                    {award}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
