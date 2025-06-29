"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { FaVuejs, FaReact, FaJava, FaPython, FaTrophy } from "react-icons/fa";
import { SiDjango, SiSpringboot, SiKotlin, SiTypescript, SiNextdotjs, SiFastapi } from "react-icons/si";

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
  award?: {
    title: string;
    rank: string;
  };
};

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  // 스크롤 기반 애니메이션
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // 실제 프로젝트 데이터 (최우수상 프로젝트를 맨 앞으로)
  const projects: Project[] = [
    {
      id: 4,
      title: "얼굴 분석 기반 헤어스타일 추천 서비스",
      description: "React, TypeScript, Spring Boot, Fast API를 활용한 얼굴 분석 기반 헤어스타일 추천 프로젝트입니다. 기업 Becon과 연계하여 실제 사용자들에게 가치를 제공하는 서비스를 개발했습니다.",
      imageUrl: "/assets/projects/all-back.png",
      tags: ["React", "TypeScript", "Spring Boot", "Fast API"],
      techIcons: [
        <FaReact key="react" color="#61DAFB" size={20} />,
        <SiTypescript key="ts" color="#3178C6" size={20} />,
        <SiSpringboot key="spring" color="#6DB33F" size={20} />,
        <SiFastapi key="fastapi" color="#009688" size={20} />,
      ],
      features: ["프론트엔드 전체적인 아키텍처 및 UI", "face-api.js를 통한 얼굴 유효성 검사", "얼굴형 자동 분석", "추천 헤어스타일 확인", "나만의 커스텀 헤어", "QR 코드를 통한 프로필 공유", "예약 및 결제 시스템"],
      link: "https://becon.com",
      githubLink: "https://github.com/S207-tobe-continued/tobe-continued",
      award: {
        title: "SSAFY 우수상",
        rank: "최우수상",
      }
    },
    {
      id: 1,
      title: "CashFit - 금융상품 추천 웹 어플리케이션",
      description: "사용자는 추천받은 상품에 대한 의견을 나눌 수 있는 커뮤니티 게시판을 이용할 수 있으며, 각 상품에 대한 코멘트 작성이 가능합니다. AI 기반 맞춤형 금융 상품 추천과 직관적인 UI를 통해 금융 정보에 쉽게 접근할 수 있습니다.",
      imageUrl: "/assets/projects/cashfit.png",
      tags: ["Vue.js", "Django", "금융 추천"],
      techIcons: [<FaVuejs key="vue" color="#4FC08D" size={20} />, <SiDjango key="django" color="#092E20" size={20} />],
      features: ["개인 맞춤형 금융상품 추천", "AI 기반 금융 상품 추천", "환율 조회", "암호화폐 시세 조회", "커뮤니티 게시판"],
      githubLink: "https://github.com/KimByeongNyeon/SSAFY_Final_PJT",
    },
    {
      id: 2,
      title: "MBG(문방구) - 현장체험학습 어플리케이션",
      description: "Kotlin과 Spring Boot를 활용한 현장체험학습 관리 애플리케이션입니다. 학생, 교사에게 체험학습 진행을 위한 다양한 기능을 제공합니다.",
      imageUrl: "/assets/projects/MBG.png",
      tags: ["Kotlin", "Spring Boot", "교육", "위치 기반"],
      techIcons: [<SiKotlin key="kotlin" color="#7F52FF" size={20} />, <SiSpringboot key="spring" color="#6DB33F" size={20} />],
      features: ["OAuth2.0을 통한 소셜 로그인", "출석 관리", "만족도 조사", "학습 자료 제공", "문화재 도감 리워드", "오답노트 제공", "보고서 작성", "전체적인 UI"],
      githubLink: "https://github.com/KimByeongNyeon/MBG",
    },
    {
      id: 3,
      title: "게이미피케이션 금융 학습 플랫폼",
      description: "React, TypeScript, Spring Boot를 활용하여 소비패턴 분석을 기반으로 한 게이미피케이션 요소가 적용된 금융 학습 플랫폼입니다. 사용자가 자신의 소비 습관을 재미있게 분석하고 개선할 수 있는 경험을 제공합니다.",
      imageUrl: "/assets/projects/finCatch.png",
      tags: ["React", "TypeScript", "Spring Boot", "게이미피케이션"],
      techIcons: [<FaReact key="react" color="#61DAFB" size={20} />, <SiTypescript key="ts" color="#3178C6" size={20} />, <SiSpringboot key="spring" color="#6DB33F" size={20} />],
      features: ["프론트엔드 전체적인 아키텍처 및 UI", "개인 소비패턴 분석", "1:1 퀴즈 게임", "채팅", "귀여운 고양이 뽑기", "OAuth2.0을 통한 소셜 로그인", "나의 거래내역 확인", "PIXI.js를 통한 움직이는 고양이 캐릭터"],
      githubLink: "https://github.com/KimByeongNyeon/FinCatch",
    },
    {
      id: 5,
      title: "Next.js 기반 포트폴리오 사이트",
      description: "Next.js와 TypeScript를 활용하여 개발한 개인 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용하여 방문자에게 인상적인 경험을 제공합니다.",
      imageUrl: "/assets/profile.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      techIcons: [<SiNextdotjs key="next" color="#000000" size={20} />, <SiTypescript key="ts" color="#3178C6" size={20} />],
      features: ["Vercel로 빠른 배포", "부드러운 페이지 전환"],
      githubLink: "https://github.com/kimbyeongnyeon/nextportfolio",
    },
  ];

  // 카드 호버 애니메이션 변형
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // 기술 아이콘 애니메이션
  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // 태그 애니메이션
  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        {/* 프로젝트 헤더 */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          ref={headerRef}
          style={{
            y: headerY,
            opacity: headerOpacity
          }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4" 
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-black">PROJECTS</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            개발한 프로젝트들을 소개합니다
          </motion.p>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <div ref={gridRef}>
          <AnimatePresence mode="wait">
            {selectedProject === null ? (
              // 프로젝트 카드 그리드 뷰
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    custom={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`relative bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer group ${
                      project.award ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                    }`}
                    onClick={() => setSelectedProject(index)}
                  >
                    {/* 수상 배지 - 미묘하게 */}
                    {project.award && (
                      <motion.div 
                        className="absolute top-3 left-3 z-10 flex items-center space-x-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <FaTrophy size={12} />
                        </motion.div>
                        <span>최우수상</span>
                      </motion.div>
                    )}

                    {/* 프로젝트 이미지 */}
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority={index < 3}
                        />
                      </motion.div>
                      
                      {/* 호버 시 나타나는 오버레이 */}
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span
                          className="text-white font-medium px-4 py-2 bg-black bg-opacity-50 rounded-lg"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          자세히 보기
                        </motion.span>
                      </motion.div>
                    </div>

                    {/* 프로젝트 정보 */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <motion.h3 
                          className="font-semibold text-gray-900 text-lg line-clamp-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.div 
                          className="flex space-x-1"
                          initial="rest"
                          whileHover="hover"
                        >
                          {project.techIcons.slice(0, 3).map((icon, idx) => (
                            <motion.div 
                              key={idx} 
                              className="w-6 h-6 flex items-center justify-center"
                              variants={iconVariants}
                              transition={{ delay: idx * 0.1 }}
                            >
                              {icon}
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      <motion.p 
                        className="text-gray-600 text-sm mb-4 line-clamp-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      >
                        {project.description}
                      </motion.p>

                      <motion.div 
                        className="flex flex-wrap gap-1 mb-4"
                        initial="hidden"
                        animate="visible"
                      >
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <motion.span
                            key={idx}
                            custom={idx}
                            variants={tagVariants}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > 3 && (
                          <motion.span 
                            className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md"
                            custom={3}
                            variants={tagVariants}
                          >
                            +{project.tags.length - 3}
                          </motion.span>
                        )}
                      </motion.div>

                      <div className="flex items-center justify-between">
                        <motion.span 
                          className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          상세 보기 →
                        </motion.span>
                        <div className="flex space-x-2">
                          {project.link && (
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FiExternalLink className="text-gray-400" size={16} />
                            </motion.div>
                          )}
                          {project.githubLink && (
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: -15 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FiGithub className="text-gray-400" size={16} />
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // 선택된 프로젝트 상세 뷰
              <motion.div
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* 헤더 */}
                <motion.div 
                  className="flex items-center justify-between p-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiX size={20} />
                    </motion.button>
                    <motion.h2 
                      className="text-xl font-semibold text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {projects[selectedProject].title}
                    </motion.h2>
                    {projects[selectedProject].award && (
                      <motion.span 
                        className="flex items-center space-x-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <FaTrophy size={12} />
                        </motion.div>
                        <span>최우수상</span>
                      </motion.span>
                    )}
                  </div>
                  <motion.div 
                    className="flex space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {projects[selectedProject].githubLink && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={projects[selectedProject].githubLink!}
                          className="flex items-center space-x-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <FiGithub size={16} />
                          <span>소스 코드</span>
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>

                {/* 내용 */}
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 이미지 및 설명 */}
                    <div className="lg:col-span-2">
                      <motion.div 
                        className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <Image
                          src={projects[selectedProject].imageUrl}
                          alt={projects[selectedProject].title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover"
                          priority
                        />
                      </motion.div>
                      
                      <div className="prose max-w-none">
                        <motion.h3 
                          className="text-lg font-semibold mb-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          이런 프로젝트를 만들었어요!
                        </motion.h3>
                        <motion.p 
                          className="text-gray-600 leading-relaxed mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                        >
                          {projects[selectedProject].description}
                        </motion.p>
                        
                        <motion.h3 
                          className="text-lg font-semibold mb-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                        >
                          내가 구현한 기능들
                        </motion.h3>
                        <motion.ul className="space-y-2">
                          {projects[selectedProject].features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-center text-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-blue-600 rounded-full mr-3"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                              />
                              {feature}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>

                    {/* 사이드바 */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-3">사용한 기술 스택</h3>
                        <div className="space-y-2">
                          {projects[selectedProject].techIcons.map((icon, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                              >
                                {icon}
                              </motion.div>
                              <span className="text-sm text-gray-700">
                                {projects[selectedProject].tags[idx]}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">태그</h3>
                        <div className="flex flex-wrap gap-2">
                          {projects[selectedProject].tags.map((tag, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                              whileHover={{ scale: 1.05, backgroundColor: "rgb(243 244 246)" }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {projects[selectedProject].award && (
                        <motion.div 
                          className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.8 }}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <motion.div
                              animate={{ rotate: [0, 15, -15, 0] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                            >
                              <FaTrophy className="text-yellow-600" size={16} />
                            </motion.div>
                            <h3 className="font-semibold text-yellow-800">수상 내역</h3>
                          </div>
                          <p className="text-yellow-700 text-sm">
                            {projects[selectedProject].award!.title} - {projects[selectedProject].award!.rank}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
