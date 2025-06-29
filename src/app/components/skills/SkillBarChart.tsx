"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript,
  SiTailwindcss, 
  SiReact, 
  SiVuedotjs, 
  SiNextdotjs,
  SiRedux,
  SiFramer,
  SiVite,
  SiFigma,
  SiGit,
  SiVercel,
  SiReactquery,
} from "react-icons/si";
import { HiViewGrid, HiChartPie } from "react-icons/hi";

type SkillBarProps = {
  name: string;
  percentage: number;
  color: string;
  icon: React.ReactNode;
  category: string;
};

function SkillBar({ name, percentage, color, icon, category }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getCategoryColor = (category: string) => {
    const colors = {
      "핵심 기술": "#3b82f6", // blue
      "프레임워크": "#8b5cf6", // violet
      "스타일링": "#ec4899", // pink
      "상태 관리": "#10b981", // emerald
      "개발 도구": "#f59e0b", // amber
    };
    return colors[category as keyof typeof colors] || "#6b7280";
  };

  return (
    <motion.div
      className="mb-6 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="mr-3 p-2 rounded-md" style={{ backgroundColor: `${color}20` }}>
            {icon}
          </div>
          <span className="font-medium text-gray-800">{name}</span>
        </div>
        <span 
          className="text-xs font-semibold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: getCategoryColor(category) }}
        >
          {category}
        </span>
      </div>
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden" ref={ref}>
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-20"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ width: "30%" }}
          />
        </motion.div>
      </div>
      <div className="mt-2.5 flex justify-between items-center">
        <span className="text-xs text-gray-400 font-medium">숙련도</span>
        <span className="text-sm font-bold text-gray-700">{percentage}%</span>
      </div>
    </motion.div>
  );
}

// 원형 차트 컴포넌트
function CircularChart({ skills }: { skills: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const getCategoryColor = (category: string) => {
    const colors = {
      "핵심 기술": "#3b82f6",
      "프레임워크": "#8b5cf6", 
      "스타일링": "#ec4899",
      "상태 관리": "#10b981",
      "개발 도구": "#f59e0b",
    };
    return colors[category as keyof typeof colors] || "#6b7280";
  };

  const categories = ["핵심 기술", "프레임워크", "스타일링", "상태 관리", "개발 도구"];
  const categoryAverages = categories.map(category => {
    const categorySkills = skills.filter(skill => skill.category === category);
    const average = categorySkills.reduce((sum, skill) => sum + skill.percentage, 0) / categorySkills.length;
    return {
      category,
      percentage: Math.round(average),
      color: getCategoryColor(category),
      skills: categorySkills
    };
  });

  const radius = 80;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" ref={ref}>
      {/* 원형 차트 */}
      <div className="flex justify-center">
        <div className="relative">
          <svg width={radius * 2.5} height={radius * 2.5} className="transform -rotate-90">
            {categoryAverages.map((category, index) => {
              const strokeDasharray = `${(category.percentage / 100) * circumference} ${circumference}`;
              const rotation = index * 72; // 360/5 = 72도씩 회전
              
              return (
                <motion.circle
                  key={category.category}
                  stroke={category.color}
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={0}
                  strokeLinecap="round"
                  r={normalizedRadius}
                  cx={radius * 1.25}
                  cy={radius * 1.25}
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={isInView ? { strokeDasharray } : { strokeDasharray: `0 ${circumference}` }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  style={{
                    transformOrigin: `${radius * 1.25}px ${radius * 1.25}px`,
                    transform: `rotate(${rotation}deg)`
                  }}
                  opacity={0.8}
                />
              );
            })}
          </svg>
          
          {/* 중앙 텍스트 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">

              <div className="text-sm text-gray-500">전체 평균</div>
              <div className="text-lg font-semibold text-blue-600">
                {Math.round(categoryAverages.reduce((sum, cat) => sum + cat.percentage, 0) / categoryAverages.length)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 범례 */}
      <div className="space-y-4">
        {categoryAverages.map((category, index) => (
          <motion.div
            key={category.category}
            className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="font-medium text-gray-800">{category.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{category.skills.length}개</span>
              <span className="font-bold text-gray-700">{category.percentage}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SkillBarChart() {
  const [viewType, setViewType] = useState<'bar' | 'circular'>('bar');

  const skills = [
    // 핵심 기술
    { name: "HTML5", percentage: 85, color: "#e34c26", icon: <SiHtml5 size={20} color="#e34c26" />, category: "핵심 기술" },
    { name: "CSS3", percentage: 80, color: "#264de4", icon: <SiCss3 size={20} color="#264de4" />, category: "핵심 기술" },
    { name: "JavaScript", percentage: 90, color: "#f0db4f", icon: <SiJavascript size={20} color="#f0db4f" />, category: "핵심 기술" },
    { name: "TypeScript", percentage: 85, color: "#3178c6", icon: <SiTypescript size={20} color="#3178c6" />, category: "핵심 기술" },
    
    // 프레임워크
    { name: "React.js", percentage: 80, color: "#61dafb", icon: <SiReact size={20} color="#61dafb" />, category: "프레임워크" },
    { name: "Next.js", percentage: 50, color: "#000000", icon: <SiNextdotjs size={20} color="#000000" />, category: "프레임워크" },
    { name: "Vue.js", percentage: 70, color: "#4FC08D", icon: <SiVuedotjs size={20} color="#4FC08D" />, category: "프레임워크" },
    
    // 스타일링
    { name: "TailwindCSS", percentage: 80, color: "#06b6d4", icon: <SiTailwindcss size={20} color="#06b6d4" />, category: "스타일링" },
    { name: "Framer Motion", percentage: 60, color: "#0055ff", icon: <SiFramer size={20} color="#0055ff" />, category: "스타일링" },
    
    // 상태 관리
    { name: "Redux", percentage: 60, color: "#764abc", icon: <SiRedux size={20} color="#764abc" />, category: "상태 관리" },
    { name: "React Query", percentage: 60, color: "#ff4500", icon: <SiReactquery size={20} color="#ff4500" />, category: "상태 관리" },
    
    // 개발 도구
    { name: "Vite", percentage: 75, color: "#646cff", icon: <SiVite size={20} color="#646cff" />, category: "개발 도구" },
    { name: "Git", percentage: 90, color: "#f05032", icon: <SiGit size={20} color="#f05032" />, category: "개발 도구" },
    { name: "Figma", percentage: 85, color: "#f24e1e", icon: <SiFigma size={20} color="#f24e1e" />, category: "개발 도구" },
    { name: "Vercel", percentage: 60, color: "#000000", icon: <SiVercel size={20} color="#000000" />, category: "개발 도구" },
  ];

  const categories = ["핵심 기술", "프레임워크", "스타일링", "상태 관리", "개발 도구"];

  return (
    <div className="space-y-6">
      {/* 토글 버튼 */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-xl flex space-x-1">
          <button
            onClick={() => setViewType('bar')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              viewType === 'bar' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <HiViewGrid size={18} />

          </button>
          <button
            onClick={() => setViewType('circular')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              viewType === 'circular' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <HiChartPie size={18} />

          </button>
        </div>
      </div>

      {/* 차트 컨텐츠 */}
      <motion.div
        key={viewType}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {viewType === 'bar' ? (
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  {category}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <SkillBar 
                        key={skill.name} 
                        name={skill.name} 
                        percentage={skill.percentage} 
                        color={skill.color} 
                        icon={skill.icon} 
                        category={skill.category} 
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CircularChart skills={skills} />
        )}
      </motion.div>
    </div>
  );
}
