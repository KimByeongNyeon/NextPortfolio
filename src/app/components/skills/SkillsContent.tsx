"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import SkillBarChart from "./SkillBarChart";
import { 
  FaReact, 
  FaVuejs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";
import { 
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiVite,
  SiEslint,
  SiPrettier,
  SiVercel
} from "react-icons/si";
import { HiX } from "react-icons/hi";

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
  color: string;
  description: string;
  capabilities: string[];
};

// 스킬 모달 컴포넌트
function SkillModal({ skill, isOpen, onClose }: { skill: Skill | null; isOpen: boolean; onClose: () => void; }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen && skill) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isOpen, skill]);

  if (!skill) return null;

  // 원형 프로그레스 계산
  const radius = 60;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl custom-scrollbar transition-colors"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: `${skill.color}40 transparent`
            }}
          >
            {/* 헤더 */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div 
                  className="p-3 rounded-2xl text-3xl"
                  style={{ backgroundColor: `${skill.color}` }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">{skill.name}</h2>
                  <span 
                    className="text-sm font-medium px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <HiX size={24} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* 원형 프로그레스 차트 */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <svg width={radius * 2.5} height={radius * 2.5} className="transform -rotate-90">
                  {/* 배경 원 */}
                  <circle
                    stroke="#e5e7eb"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={radius * 1.25}
                    cy={radius * 1.25}
                  />
                  {/* 프로그레스 원 */}
                  <motion.circle
                    stroke={skill.color}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius * 1.25}
                    cy={radius * 1.25}
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                
                {/* 중앙 퍼센트 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold text-gray-900 dark:text-white transition-colors"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {skill.level}%
                    </motion.div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* 설명 */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors">기술 설명</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{skill.description}</p>
            </motion.div>

            {/* 역량 목록 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors">보유 역량</h3>
              <div className="space-y-3">
                {skill.capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed transition-colors">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SkillsContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isInView = useInView(containerRef, { margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const skills: Skill[] = [
    { 
      name: "React", 
      icon: <FaReact />, 
      level: 90, 
      category: "Frontend", 
      color: "#61DAFB",
      description: "컴포넌트 기반 라이브러리로 재사용 가능한 UI를 구축하고, 상태 관리와 생명주기를 효율적으로 다룹니다.",
      capabilities: [
        "Custom Hook을 활용한 UI/비즈니스 로직 분리",
        "Context API와 Redux를 통한 전역 상태 관리",
        "React.memo, useMemo, useCallback을 통한 성능 최적화",
        "계층형 아키텍처 도입",
        
      ]
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs />, 
      level: 65, 
      category: "Frontend", 
      color: "#000000",
      description: "React 기반 풀스택 프레임워크로 SSR, SSG, API Routes를 활용한 최적화된 웹 애플리케이션을 개발합니다.",
      capabilities: [
        "App Router와 Server Components 활용",
        "Dynamic Routing 구현",
        "Image 최적화와 SEO 메타데이터 관리",
       
      ]
    },
    { 
      name: "Vue.js", 
      icon: <FaVuejs />, 
      level: 80, 
      category: "Frontend", 
      color: "#4FC08D",
      description: "직관적이고 유연한 프로그레시브 프레임워크로 반응형 웹 애플리케이션을 구축합니다.",
      capabilities: [
        "Composition API를 활용한 컴포넌트 설계",
        "Vuex/Pinia를 통한 상태 관리",
        "Vue Router를 이용한 SPA 라우팅",
        "Provide/Inject를 통한 의존성 주입",
        
      ]
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript />, 
      level: 85, 
      category: "Frontend", 
      color: "#3178C6",
      description: "정적 타입 검사를 통해 안전하고 확장 가능한 JavaScript 코드를 작성합니다.",
      capabilities: [
        "제네릭 활용",
        "인터페이스와 타입 별칭 활용",
        "유니온 타입과 인터섹션 타입 활용",
        "타입 가드, 단언, 추론 활용"
      ]
    },
    { 
      name: "JavaScript", 
      icon: <FaJs />, 
      level: 88, 
      category: "Frontend", 
      color: "#F7DF1E",
      description: "ES6+ 문법과 최신 JavaScript 기능을 활용하여 효율적인 웹 애플리케이션을 개발합니다.",
      capabilities: [
        "ES6+ 문법 (Arrow Function, Destructuring, Spread/Rest)",
        "Promise, async/await를 통한 비동기 처리",
        "클로저와 스코프 체인 이해",
        "프로토타입 기반 객체지향 프로그래밍",
        "이벤트 루프와 콜백 큐 동작 원리 이해"
      ]
    },
    {
      name: "TaillwindCSS",
      icon: <SiTailwindcss />,
      level: 75,
      category: "Frontend",
      color: "#06B6D4",
      description: "tailwindCSS의 유틸리티 클래스를 활용하여 직관적이고 효율적인 UI를 구현합니다.",
      capabilities: [
        "Responsive Design 구현",
        "Custom Utility Class 작성",
        "Theme System 구축"
      ]
    },
    { 
      name: "HTML5", 
      icon: <FaHtml5 />, 
      level: 90, 
      category: "Frontend", 
      color: "#E34F26",
      description: "시맨틱 마크업과 웹 표준을 준수하여 접근성과 SEO에 최적화된 웹 구조를 설계합니다.",
      capabilities: [
        "시맨틱 태그를 활용한 구조화된 마크업",
        "웹 접근성 (WCAG) 가이드라인 준수",
        "Canvas API를 통한 그래픽 렌더링",
        "Web Storage API (localStorage, sessionStorage) 활용",
        "Geolocation API와 기타 HTML5 API 활용"
      ]
    },
    { 
      name: "CSS3", 
      icon: <FaCss3Alt />, 
      level: 85, 
      category: "Frontend", 
      color: "#1572B6",
      description: "최신 CSS 기능과 레이아웃 시스템을 활용하여 직관적인 UI를 구현합니다.",
      capabilities: [
        "Flexbox와 Grid를 활용한 레이아웃 설계",
        "CSS Variables를 통한 테마 시스템 구축",
        "Keyframes와 Transition을 통한 애니메이션",
        "미디어 쿼리를 통한 반응형 디자인"
      ]
    },
    
    { 
      name: "Framer Motion", 
      icon: <SiFramer />, 
      level: 75, 
      category: "Animation", 
      color: "#0055FF",
      description: "React를 위한 애니메이션 라이브러리로 부드럽고 인터랙티브한 사용자 경험을 제공합니다.",
      capabilities: [
        "Layout Animation과 Shared Layout 구현",
        "Gesture 기반 인터랙션 (드래그, 스와이프)",
        "SVG Path Animation과 Morphing",
        "Scroll-triggered Animation 구현",
        "Page Transition과 Route Animation"
      ]
    },
    { 
      name: "Redux", 
      icon: <SiRedux />, 
      level: 70, 
      category: "State Management", 
      color: "#764ABC",
      description: "예측 가능한 상태 관리를 통해 복잡한 애플리케이션의 데이터 플로우를 체계적으로 관리합니다.",
      capabilities: [
        "Redux Toolkit을 활용한 보일러플레이트 감소",
        "createSlice와 createAsyncThunk 활용",
       
        "DevTools를 활용한 디버깅"
      ]
    },
    { 
      name: "Git", 
      icon: <FaGitAlt />, 
      level: 85, 
      category: "Tools", 
      color: "#F05032",
      description: "버전 관리 시스템을 활용하여 효율적인 협업과 코드 이력 관리를 수행합니다.",
      capabilities: [
        "Git Flow와 GitHub Flow 전략 적용",
        "Conflict 해결과 코드 리뷰 프로세스",
      ]
    },
    { 
      name: "Figma", 
      icon: <FaFigma />, 
      level: 70, 
      category: "Design", 
      color: "#F24E1E",
      description: "디자인 시스템과 프로토타입을 구축하여 개발자와 디자이너 간의 원활한 협업을 지원합니다.",
      capabilities: [
        "Component와 Variant를 활용한 디자인 시스템",
        "Auto Layout을 통한 반응형 디자인",
        "Interactive Prototype 제작",
      ]
    },
    
    { 
      name: "Vercel", 
      icon: <SiVercel />, 
      level: 50, 
      category: "Tools", 
      color: "#000000",
      description: "JAMstack과 서버리스 아키텍처를 활용하여 확장 가능한 웹 애플리케이션을 배포합니다.",
      capabilities: [
        "Git 기반 자동 배포와 Preview 환경",
        "환경 변수와 Secret 관리",
      ]
    },
  ];

  // 무한 캐러셀을 위해 스킬을 여러번 복제
  const infiniteSkills = [...skills, ...skills, ...skills, ...skills, ...skills];

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  return (
    <div className="w-full bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500" ref={containerRef}>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #cbd5e1, #94a3b8);
        }
        
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: #f1f5f9;
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f1f5f9;
        }
      `}</style>

      {/* 헤더 섹션 */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          
          {/* 홀로그램 그리드 */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            style={{
              y: headerY,
              opacity: headerOpacity
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SKILLS
          </h1>
            
          </motion.div>
          
            <div className="max-w-7xl mx-auto px-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              
              <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors">
                빠르게 변화하는 프론트엔드 기술을 학습하고 적용합니다.
              </p>
            </motion.div>
      </div>

        {/* 무한 캐러셀 컨테이너 */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex space-x-12"
            animate={isPaused ? {} : {
              x: [0, -(skills.length * (240 + 48))]
            }}
            transition={{
              duration: skills.length * 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{ width: 'fit-content' }}
          >
            {infiniteSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 w-56 bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % skills.length) * 0.05 }}
                viewport={{ once: true }}
                onClick={() => handleSkillClick(skill)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="text-5xl"
                    style={{ color: skill.color }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  <div className="space-y-3 w-full">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg transition-colors">
                      {skill.name}
                    </h3>
                    
                    <div className="text-xs text-gray-600 dark:text-gray-300 px-2 py-1 bg-gray-100 dark:bg-white/10 rounded-full backdrop-blur-sm transition-colors">
                      {skill.category}
                    </div>
                    
                    {/* 숙련도 바 */}
                    <div className="w-full bg-gray-200 dark:bg-white/20 rounded-full h-3 transition-colors">
                      <motion.div
                        className="h-3 rounded-full relative overflow-hidden"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white opacity-30"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "30%" }}
                        />
                      </motion.div>
                    </div>
                    
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 transition-colors">
                      {skill.level}%
                    </span>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      클릭하여 상세 정보 보기
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
          </div>
        </section>

      {/* 스킬 모달 */}
      <SkillModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* 스킬 차트 섹션 - 주석처리 */}
      {/* 
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              기술 <span className="text-purple-600">숙련도</span>
            </h2>
            <p className="text-gray-600 text-lg">
              각 기술별 상세한 숙련도와 경험을 확인해보세요
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-2xl"
          >
            <SkillBarChart />
          </motion.div>
      </div>
      </section>
      */}
    </div>
  );
}
