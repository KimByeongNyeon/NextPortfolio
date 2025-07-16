"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import { FiExternalLink, FiGithub, FiArrowDown, FiX, FiEye, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaVuejs, FaReact, FaJava, FaPython, FaTrophy } from "react-icons/fa";
import { SiDjango, SiSpringboot, SiKotlin, SiTypescript, SiNextdotjs, SiFastapi } from "react-icons/si";
import { Project, TechIcon } from "@/types/project";
import { projects } from "@/lib/projectData";
import { developerLottie } from "@/lib/lottie_developer";

// 아이콘 매핑 함수
const getTechIcon = (iconInfo: TechIcon) => {
  const iconMap: Record<string, React.ReactNode> = {
    React: <FaReact color={iconInfo.color} size={24} />,
    Vue: <FaVuejs color={iconInfo.color} size={24} />,
    TypeScript: <SiTypescript color={iconInfo.color} size={24} />,
    JavaScript: <FaJava color={iconInfo.color} size={24} />,
    SpringBoot: <SiSpringboot color={iconInfo.color} size={24} />,
    Django: <SiDjango color={iconInfo.color} size={24} />,
    Kotlin: <SiKotlin color={iconInfo.color} size={24} />,
    NextJS: <SiNextdotjs color={iconInfo.color} size={24} />,
    FastAPI: <SiFastapi color={iconInfo.color} size={24} />,
    Python: <FaPython color={iconInfo.color} size={24} />,
  };
  
  return iconMap[iconInfo.name] || <div style={{ color: iconInfo.color }}>{iconInfo.name}</div>;
};

// 개발중 Lottie 애니메이션 데이터 (코딩하는 애니메이션)
const developmentAnimationData = developerLottie;

// 이미지 컴포넌트 with 에러 처리
const ProjectImage = ({ 
  src, 
  alt, 
  className 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div className={`${className} bg-gray-800 flex flex-col items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
          {/* 간단한 CSS 애니메이션으로 코딩 애니메이션 구현 */}
          <div className="mb-6">
            <div className="relative">
              <div className="w-32 h-20 bg-gray-700 rounded-lg shadow-lg transform perspective-1000 rotate-x-12">
                {/* 노트북 화면 */}
                <div className="w-full h-full bg-gray-900 rounded-lg p-2 relative overflow-hidden">
                  <div className="space-y-1">
                    {/* 코드 라인들 */}
                    <motion.div 
                      className="h-1 bg-green-400 rounded"
                      animate={{ width: ["0%", "60%", "60%", "0%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    />
                    <motion.div 
                      className="h-1 bg-blue-400 rounded"
                      animate={{ width: ["0%", "80%", "80%", "0%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.3 }}
                    />
                    <motion.div 
                      className="h-1 bg-yellow-400 rounded"
                      animate={{ width: ["0%", "45%", "45%", "0%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.6 }}
                    />
                    <motion.div 
                      className="h-1 bg-purple-400 rounded"
                      animate={{ width: ["0%", "70%", "70%", "0%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.9 }}
                    />
                  </div>
                  
                  {/* 커서 깜빡임 */}
                  <motion.div 
                    className="absolute bottom-2 left-2 w-0.5 h-3 bg-white"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </div>
              
              {/* 키보드 */}
              <div className="mt-2 w-36 h-3 bg-gray-600 rounded-sm mx-auto">
                <div className="grid grid-cols-12 gap-px p-0.5 h-full">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div 
                      key={i}
                      className="bg-gray-700 rounded-sm"
                      animate={{ 
                        backgroundColor: ["#374151", "#4B5563", "#374151"] 
                      }}
                      transition={{ 
                        duration: 0.5, 
                        repeat: Infinity, 
                        delay: Math.random() * 2 
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">개발 진행중</h3>
            <p className="text-gray-400 text-sm mb-4">
              아직 진행중인 프로젝트입니다
            </p>
            
            {/* 로딩 점들 */}
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1200px) 100vw, 1200px"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

// 프로젝트 상세 모달 컴포넌트
function ProjectDetailModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  // 프로젝트별 갤러리 이미지 생성 (예: tobecontinued01.gif, tobecontinued02.gif 등)
  const generateGalleryImages = (projectTitle: string) => {
    const baseImages = [];
    
    // 프로젝트 title과 실제 폴더명 매핑
    const folderMapping: Record<string, string> = {
      'ToBeContinued': 'tobecontinued',
      'CashFit': 'cashfit', 
      'MBG(문방구)': 'mbg',
      'FinCatch': 'fincatch',
      'NextPortfolio': 'nextportfolio'
    };
    
    const folderName = folderMapping[projectTitle] || projectTitle.toLowerCase();
    
    // 각 프로젝트별 실제 이미지 개수에 맞춰 조정
    const imageCount = projectTitle === 'CashFit' ? 8 : 5;
    
    for (let i = 1; i <= imageCount; i++) {
      baseImages.push(`/assets/projects/${folderName}/${folderName}${i.toString().padStart(2, '0')}.gif`);
    }
    return baseImages;
  };

  const galleryImages = generateGalleryImages(project.title);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900 rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-y-auto shadow-2xl custom-scrollbar"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="relative p-8 pb-6 border-b border-gray-800">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <FiX size={24} />
              </button>

              <div className="pr-16">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-gray-400">{project.year}</span>
                  <span className="text-sm text-gray-400 font-mono">{project.month}</span>
                  <span className="text-sm text-gray-400">• {project.duration}</span>
                  
                  {project.award && (
                    <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-xs">
                      <FaTrophy size={12} />
                      <span>{project.award.rank}</span>
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <h2 className="text-xl text-gray-300 mb-4">
                  {project.subtitle}
                </h2>
                
                {project.detailedDescription && (
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.detailedDescription}
                  </p>
                )}

                {/* 프로젝트 메타 정보 */}
                <div className="flex flex-wrap gap-6 mt-6 text-sm">
                  {project.teamSize && (
                    <div>
                      <span className="text-gray-500">팀 규모:</span>
                      <span className="text-white ml-2">{project.teamSize}명</span>
                    </div>
                  )}
                  {project.role && (
                    <div>
                      <span className="text-gray-500">담당 역할:</span>
                      <span className="text-white ml-2">{project.role}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-500">상태:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${
                      project.status === 'completed' ? 'bg-green-900 text-green-300' :
                      project.status === 'in-progress' ? 'bg-blue-900 text-blue-300' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {project.status === 'completed' ? '완료' : 
                       project.status === 'in-progress' ? '진행중' : '계획'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* 갤러리 섹션 */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6">프로젝트 갤러리</h3>
                <div className="relative">
                  <div className={`${
                    project.title === 'MBG(문방구)' ? 'aspect-[9/16]' : 'aspect-video'
                  } rounded-2xl overflow-hidden bg-gray-800 relative max-h-[70vh]`}>
                    <ProjectImage
                      src={galleryImages[currentImageIndex]}
                      alt={`${project.title} 스크린샷 ${currentImageIndex + 1}`}
                      className="w-full h-full"
                    />
                    
                    {/* 이미지 네비게이션 */}
                    {galleryImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors text-white z-20"
                        >
                          <FiChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors text-white z-20"
                        >
                          <FiChevronRight size={20} />
                        </button>
                      </>
                    )}

                    {/* 이미지 인디케이터 */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 기술 스택 섹션 */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6">기술 스택</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(project.techStack).map(([category, techs]) => (
                    <div key={category} className="bg-gray-800 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-white mb-3 capitalize">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 상세 기능 섹션 */}
              {project.detailedFeatures && (
                <section>
                  <h3 className="text-2xl font-bold text-white mb-6">내가 담당한 기능</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.detailedFeatures.map((featureGroup, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800 rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-4">
                          {featureGroup.category}
                        </h4>
                        <ul className="space-y-2">
                          {featureGroup.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* 도전과제 및 해결방법 */}
              {(project.challenges || project.solutions) && (
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {project.challenges && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">도전과제</h3>
                      <div className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <motion.div
                            key={index}
                            className="bg-red-900/20 border border-red-800/30 rounded-lg p-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <p className="text-red-200 text-sm leading-relaxed">{challenge}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.solutions && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">해결방법</h3>
                      <div className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <motion.div
                            key={index}
                            className="bg-green-900/20 border border-green-800/30 rounded-lg p-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <p className="text-green-200 text-sm leading-relaxed">{solution}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* 배운 점 */}
              {project.learnings && (
                <section>
                  <h3 className="text-2xl font-bold text-white mb-6">배운 점</h3>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-6">
                    <ul className="space-y-3">
                      {project.learnings.map((learning, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-blue-200 leading-relaxed">{learning}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* 링크 섹션 */}
              <section className="flex justify-center">
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={project.githubLink}
                        className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                        target="_blank"
                      >
                        <FiGithub size={20} />
                        <span>GitHub</span>
                      </Link>
                    </motion.div>
                  )}
                  {project.link && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={project.link}
                        className="flex items-center space-x-2 px-6 py-3 bg-white hover:bg-gray-200 text-black rounded-lg transition-colors"
                        target="_blank"
                      >
                        <FiExternalLink size={20} />
                        <span>Live Demo</span>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 프로젝트 섹션이 뷰포트에 있는지 감지
  const isProjectSectionInView = useInView(containerRef, { 
    margin: "-20% 0px -20% 0px" 
  });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 스크롤에 따른 현재 프로젝트 업데이트
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const projectIndex = Math.floor(latest * projects.length);
      setCurrentProject(Math.min(projectIndex, projects.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress, projects.length]);

  const handleProjectDetailClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="w-full bg-black text-white">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #4b5563, #6b7280);
          border-radius: 10px;
          border: 2px solid #1f2937;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #6b7280 #1f2937;
        }
      `}</style>

      {/* 헤더 섹션 */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              PROJECTS
            </h1>
            
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm text-white mb-4">SCROLL TO EXPLORE</span>
            <FiArrowDown className="text-white" size={24} />
          </motion.div>
        </div>
        
        {/* 배경 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80" />
      </section>

      {/* 프로젝트 섹션들 */}
      <div ref={containerRef} className="relative">
        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            index={index}
            isActive={currentProject === index}
            onDetailClick={handleProjectDetailClick}
          />
        ))}
      </div>

      {/* 네비게이션 인디케이터 - 프로젝트 섹션에 있을 때만 표시 */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: isProjectSectionInView ? 1 : 0,
          x: isProjectSectionInView ? 0 : 50
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col space-y-3">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                currentProject === index ? 'bg-white' : 'bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              initial={{ scale: 0 }}
              animate={{ scale: isProjectSectionInView ? 1 : 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            />
          ))}
        </div>
      </motion.div>

      {/* 프로젝트 상세 모달 */}
      <ProjectDetailModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

// 개별 프로젝트 섹션 컴포넌트
function ProjectSection({ 
  project, 
  index, 
  isActive,
  onDetailClick
}: { 
  project: Project; 
  index: number; 
  isActive: boolean;
  onDetailClick: (project: Project) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-25%" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 프로젝트 정보 */}
        <motion.div
          className={`space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
          style={{ y: contentY }}
        >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm text-gray-500">{project.year}</span>
              <span className="text-sm text-gray-500 font-mono">
                {project.month}
              </span>
              
              {project.award && (
                <span className="flex items-center space-x-1 px-2 py-1 bg-yellow-900 text-yellow-300 rounded-md text-xs">
                  <FaTrophy size={12} />
                  <span>최우수상</span>
                </span>
              )}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              {project.title}
            </h2>
            <h3 className="text-xl text-gray-400 mb-6">
              {project.subtitle}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.techIcons.map((iconInfo, idx) => (
                <motion.div
                  key={idx}
                  className="p-3 bg-gray-900 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTechIcon(iconInfo)}
                </motion.div>
              ))}
            </div>

            {/* 링크들 */}
            <div className="flex space-x-4">
              <motion.button
                onClick={() => onDetailClick(project)}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiEye size={20} />
                <span>상세보기</span>
              </motion.button>
              
              {project.githubLink && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={project.githubLink}
                    className="flex items-center space-x-2 px-6 py-3 border border-gray-700 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    target="_blank"
                  >
                    <FiGithub size={20} />
                    <span>GitHub</span>
                  </Link>
                </motion.div>
              )}
              {project.link && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={project.link}
                    className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                    target="_blank"
                  >
                    <FiExternalLink size={20} />
                    <span>Live Demo</span>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* 프로젝트 이미지 */}
        <motion.div
          className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
          style={{ y: imageY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`relative ${
              project.title === 'MBG(문방구)' ? 'aspect-[9/16]' : 'aspect-video'
            } rounded-2xl overflow-hidden bg-gray-900`}
          >
            <ProjectImage
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full"
            />
            
            {/* 이미지 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          </motion.div>

          {/* 기능 목록 */}
          <motion.div
            className="mt-6 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-gray-400 mb-3">내가 담당한 기능</h4>
            {project.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center text-sm text-gray-500"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              >
                <div className="w-1 h-1 bg-gray-600 rounded-full mr-3" />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
