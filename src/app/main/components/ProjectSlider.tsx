"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { FaVuejs, FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiDjango, SiSpringboot, SiKotlin, SiTypescript, SiNextdotjs, SiFastapi } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  techIcons: React.ReactNode[];
  features: string[];
  link?: string;
  githubLink?: string;
  bgColor: string;
  textColor: string;
};

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  // 실제 프로젝트 데이터
  const projects: Project[] = [
    {
      id: 1,
      title: "CashFit - 금융상품 추천 웹 어플리케이션",
      description:
        "사용자는 추천받은 상품에 대한 의견을 나눌 수 있는 커뮤니티 게시판을 이용할 수 있으며, 각 상품에 대한 코멘트 작성이 가능합니다. AI 기반 맞춤형 금융 상품 추천과 직관적인 UI를 통해 금융 정보에 쉽게 접근할 수 있습니다.",
      imageUrl: "/assets/projects/cashfit.png",
      tags: ["Vue.js", "Django", "금융 추천", "데이터 분석"],
      techIcons: [<FaVuejs key="vue" color="#4FC08D" size={24} />, <SiDjango key="django" color="#092E20" size={24} />],
      features: ["개인 맞춤형 금융상품 추천", "재무 상태 분석 및 시각화", "금융 교육 콘텐츠", "예산 관리 도구"],
      githubLink: "https://github.com/KimByeongNyeon/SSAFY_Final_PJT",
      bgColor: "from-emerald-50 to-emerald-100",
      textColor: "text-emerald-800",
    },
    {
      id: 2,
      title: "MBG(문방구) - 현장체험학습 어플리케이션",
      description: "Kotlin과 Spring Boot를 활용한 현장체험학습 관리 애플리케이션입니다. 학생, 교사에게 체험학습 진행을 위한 다양한 기능을 제공합니다.",
      imageUrl: "/assets/projects/MBG.png",
      tags: ["Kotlin", "Spring Boot", "교육 어플", "위치 기반 서비스"],
      techIcons: [<SiKotlin key="kotlin" color="#7F52FF" size={24} />, <SiSpringboot key="spring" color="#6DB33F" size={24} />],
      features: ["실시간 위치 추적", "출석 관리", "비상 알림 시스템", "학습 자료 제공", "학생 관리 어플플"],
      githubLink: "https://github.com/KimByeongNyeon/MBG",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-800",
    },
    {
      id: 3,
      title: "게이미피케이션 금융 학습 플랫폼",
      description:
        "React, TypeScript, Spring Boot를 활용하여 소비패턴 분석을 기반으로 한 게이미피케이션 요소가 적용된 금융 학습 플랫폼입니다. 사용자가 자신의 소비 습관을 재미있게 분석하고 개선할 수 있는 경험을 제공합니다.",
      imageUrl: "/assets/projects/finCatch.png",
      tags: ["React", "TypeScript", "Spring Boot", "게이미피케이션", "금융 교육"],
      techIcons: [<FaReact key="react" color="#61DAFB" size={24} />, <SiTypescript key="ts" color="#3178C6" size={24} />, <SiSpringboot key="spring" color="#6DB33F" size={24} />],
      features: ["개인 소비패턴 분석", "챌린지 및 보상 시스템", "금융 지식 퀴즈", "AI 기반 맞춤형 퀴즈즈"],
      githubLink: "https://github.com/KimByeongNyeon/FinCatch",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-800",
    },
    {
      id: 4,
      title: "얼굴 분석 기반 헤어스타일 추천 서비스",
      description: "React, TypeScript, Spring Boot, Fast API를 활용한 얼굴 분석 기반 헤어스타일 추천 프로젝트입니다. 기업 Becon과 연계하여 실제 사용자들에게 가치를 제공하는 서비스를 개발했습니다.",
      imageUrl: "/assets/projects/toBeContinued.png",
      tags: ["React", "TypeScript", "Spring Boot", "Fast API", "얼굴 분석", "AI"],
      techIcons: [
        <FaReact key="react" color="#61DAFB" size={24} />,
        <SiTypescript key="ts" color="#3178C6" size={24} />,
        <SiSpringboot key="spring" color="#6DB33F" size={24} />,
        <SiFastapi key="fastapi" color="#009688" size={24} />,
      ],
      features: ["얼굴형 자동 분석", "퍼스널 컬러 진단", "헤어스타일 가상 체험", "스타일 히스토리 관리"],
      link: "https://becon.com",
      githubLink: "https://github.com/kimbyeongnyeon",
      bgColor: "from-rose-50 to-rose-100",
      textColor: "text-rose-800",
    },
    {
      id: 5,
      title: "Next.js 기반 포트폴리오 사이트",
      description: "Next.js와 TypeScript를 활용하여 개발한 개인 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용하여 방문자에게 인상적인 경험을 제공합니다.",
      imageUrl: "https://placehold.co/600x400/000000/ffffff?text=Portfolio",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      techIcons: [<SiNextdotjs key="next" color="#000000" size={24} />, <SiTypescript key="ts" color="#3178C6" size={24} />],
      features: ["반응형 디자인", "부드러운 페이지 전환", "프로젝트 쇼케이스", "접근성 고려"],
      githubLink: "https://github.com/kimbyeongnyeon/nextportfolio",
      bgColor: "from-gray-50 to-gray-100",
      textColor: "text-gray-800",
    },
  ];

  const formatCode = (text: string) => {
    return text
      .replace(/(const|let|var)/g, '<span class="text-gray-400">$1</span>')
      .replace(/project/g, '<span class="text-purple-400">project</span>')
      .replace(/(description|features|stack):/g, '<span class="text-cyan-400">$1</span><span class="text-gray-400">:</span>')
      .replace(/("[^"]+?")/g, '<span class="text-emerald-400">$1</span>')
      .replace(/[{}\[\],]/g, '<span class="text-gray-200">$&</span>');
  };

  useEffect(() => {
    if (selectedProject !== null) {
      setIsTypingDone(false);
      setTypedText("");
    }
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject !== null) {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* 프로젝트 헤더 */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 relative inline-block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">주요 프로젝트</span>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-70"></div>
          </motion.h2>
          <motion.p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            최근에 진행한 개인 및 팀 프로젝트들을 소개합니다.
          </motion.p>
        </div>

        {/* 프로젝트 그리드 */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedProject === null ? (
              // 프로젝트 카드 그리드 뷰
              projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                  onClick={() => setSelectedProject(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layoutId={`project-${index}`}
                  whileHover={{ y: -5 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "8px 8px 16px rgba(200, 200, 200, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.8), inset 2px 2px 4px rgba(255, 255, 255, 0.8), inset -2px -2px 4px rgba(200, 200, 200, 0.3)",
                  }}
                >
                  {/* 프로젝트 카드 내용 */}
                  <div className="relative aspect-[4/3] group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 rounded-t-2xl"
                      style={{ backgroundImage: `url(${project.imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300 rounded-t-2xl" />

                    {/* 기술 스택 아이콘 */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.techIcons.map((icon, idx) => (
                        <motion.div
                          key={idx}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </div>

                    {/* 프로젝트 제목 */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs text-white backdrop-blur-md bg-white/10"
                            style={{
                              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && <span className="px-3 py-1 rounded-full text-xs text-white backdrop-blur-md bg-white/10">+{project.tags.length - 3}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-white/40 backdrop-blur-sm">
                    <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              // 선택된 프로젝트 상세 뷰
              <motion.div
                className="col-span-full overflow-hidden"
                layoutId={`project-${selectedProject}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(15px)",
                  boxShadow: "10px 10px 30px rgba(200, 200, 200, 0.3), -10px -10px 30px rgba(255, 255, 255, 0.8)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                }}
              >
                <div className="relative flex flex-col">
                  {/* 뒤로가기 버튼 */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 left-6 z-50 w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(10px)",
                      boxShadow:
                        "4px 4px 10px rgba(200, 200, 200, 0.3), -4px -4px 10px rgba(255, 255, 255, 0.8), inset 1px 1px 2px rgba(255, 255, 255, 0.8), inset -1px -1px 2px rgba(200, 200, 200, 0.3)",
                      borderRadius: "50%",
                    }}
                  >
                    <FiX size={24} />
                  </motion.button>

                  {/* 이미지 섹션 */}
                  <div className="w-full h-[450px] relative overflow-hidden rounded-t-2xl">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${projects[selectedProject].imageUrl})` }}
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.05 }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />

                    {/* 기술 스택 아이콘 */}
                    <div className="absolute top-6 right-6 flex space-x-3">
                      {projects[selectedProject].techIcons.map((icon, idx) => (
                        <motion.div
                          key={idx}
                          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                          whileHover={{ y: -5, scale: 1.1 }}
                          style={{
                            boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.1), -3px -3px 8px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </div>

                    {/* 프로젝트 제목 - 이미지 위에 오버레이 */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <motion.h3
                        className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {projects[selectedProject].title}
                      </motion.h3>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 rounded-full text-sm text-white backdrop-blur-md bg-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                            style={{
                              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 상세 정보 섹션 */}
                  <div className="p-8 md:p-10 bg-white/60 backdrop-blur-md">
                    {/* 프로젝트 설명 */}
                    <motion.p className="text-gray-700 text-lg mb-8 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                      {projects[selectedProject].description}
                    </motion.p>

                    {/* 특징 리스트 */}
                    <motion.div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                      {projects[selectedProject].features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-4 rounded-xl"
                          style={{
                            background: "rgba(255, 255, 255, 0.5)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "3px 3px 8px rgba(200, 200, 200, 0.2), -3px -3px 8px rgba(255, 255, 255, 0.7), inset 1px 1px 2px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white mr-4">{idx + 1}</div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    {/* 코드 에디터 스타일 컨테이너 */}
                    <motion.div
                      className="font-mono text-sm rounded-xl mb-8 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      style={{
                        boxShadow: "8px 8px 16px rgba(100, 100, 100, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {/* 코드 에디터 헤더 */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-gray-400 text-sm">project.json</span>
                      </div>

                      {/* 코드 내용 */}
                      <div className="p-5 overflow-auto max-h-[300px] bg-[#1E1E1E] font-mono">
                        <div className="whitespace-pre-wrap">
                          <span className="text-gray-400">const</span> <span className="text-purple-400">project</span> <span className="text-gray-400">=</span>{" "}
                          <span className="text-gray-200">{"{"}</span>
                          <div className="ml-4">
                            <span className="text-cyan-400">description</span>
                            <span className="text-gray-400">:</span> <span className="text-emerald-400">"{projects[selectedProject].description.substring(0, 80)}..."</span>
                            <span className="text-gray-200">,</span>
                          </div>
                          <div className="ml-4 mt-2">
                            <span className="text-cyan-400">features</span>
                            <span className="text-gray-400">:</span> <span className="text-gray-200">[</span>
                          </div>
                          <div className="ml-8">
                            {projects[selectedProject].features.map((feature, idx) => (
                              <div key={idx}>
                                <span className="text-amber-400">"{feature}"</span>
                                <span className="text-gray-200">{idx < projects[selectedProject].features.length - 1 ? "," : ""}</span>
                              </div>
                            ))}
                          </div>
                          <div className="ml-4">
                            <span className="text-gray-200">],</span>
                          </div>
                          <div className="ml-4 mt-2">
                            <span className="text-cyan-400">stack</span>
                            <span className="text-gray-400">:</span> <span className="text-gray-200">[</span>
                          </div>
                          <div className="ml-8">
                            {projects[selectedProject].tags.map((tag, idx) => (
                              <div key={idx}>
                                <span className="text-amber-400">"{tag}"</span>
                                <span className="text-gray-200">{idx < projects[selectedProject].tags.length - 1 ? "," : ""}</span>
                              </div>
                            ))}
                          </div>
                          <div className="ml-4">
                            <span className="text-gray-200">]</span>
                          </div>
                          <div>
                            <span className="text-gray-200">{"}"}</span>
                            <span className="text-gray-400 animate-pulse">{showCursor ? "|" : ""}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* 액션 버튼 */}
                    <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                      {projects[selectedProject].link && (
                        <Link
                          href={projects[selectedProject].link}
                          className="flex-1 inline-flex items-center justify-center px-6 py-4 text-white 
                            rounded-xl transition-all transform hover:-translate-y-1"
                          style={{
                            background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                            boxShadow: "6px 6px 12px rgba(100, 100, 100, 0.2), -2px -2px 6px rgba(255, 255, 255, 0.7)",
                          }}
                        >
                          <FiExternalLink className="mr-2" size={20} />
                          라이브 데모
                        </Link>
                      )}
                      {projects[selectedProject].githubLink && (
                        <Link
                          href={projects[selectedProject].githubLink}
                          className="flex-1 inline-flex items-center justify-center px-6 py-4
                            text-gray-700 rounded-xl transition-all transform hover:-translate-y-1"
                          style={{
                            background: "rgba(255, 255, 255, 0.7)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "6px 6px 12px rgba(200, 200, 200, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8), inset 1px 1px 2px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          <FiGithub className="mr-2" size={20} />
                          소스 코드
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
