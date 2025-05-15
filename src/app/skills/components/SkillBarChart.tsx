"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiVuedotjs, SiNextdotjs, SiKotlin, SiFlutter, SiPython, SiSpring, SiDjango } from "react-icons/si";
import { FaJava } from "react-icons/fa";

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
        <span className="text-sm font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: `${color}15`, color: color }}>
          {category}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden" ref={ref}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        />
      </div>
      <div className="mt-2 flex justify-end">
        <span className="text-xs text-gray-500">{percentage}%</span>
      </div>
    </motion.div>
  );
}

export default function SkillBarChart() {
  const frontendSkills = [
    { name: "HTML", percentage: 90, color: "#e34c26", icon: <SiHtml5 size={20} color="#e34c26" />, category: "프론트엔드" },
    { name: "CSS", percentage: 85, color: "#264de4", icon: <SiCss3 size={20} color="#264de4" />, category: "프론트엔드" },
    { name: "JavaScript", percentage: 88, color: "#f0db4f", icon: <SiJavascript size={20} color="#f0db4f" />, category: "프론트엔드" },
    { name: "TailwindCSS", percentage: 90, color: "#06b6d4", icon: <SiTailwindcss size={20} color="#06b6d4" />, category: "프론트엔드" },
    { name: "React.js", percentage: 85, color: "#61dafb", icon: <SiReact size={20} color="#61dafb" />, category: "프론트엔드" },
    { name: "Vue.js", percentage: 80, color: "#4FC08D", icon: <SiVuedotjs size={20} color="#4FC08D" />, category: "프론트엔드" },
    { name: "Next.js", percentage: 75, color: "#000000", icon: <SiNextdotjs size={20} color="#000000" />, category: "프론트엔드" },
  ];

  const mobileSkills = [
    { name: "Kotlin", percentage: 80, color: "#7F52FF", icon: <SiKotlin size={20} color="#7F52FF" />, category: "모바일" },
    { name: "Flutter", percentage: 75, color: "#02569B", icon: <SiFlutter size={20} color="#02569B" />, category: "모바일" },
  ];

  const backendSkills = [
    { name: "Java", percentage: 82, color: "#007396", icon: <FaJava size={20} color="#007396" />, category: "백엔드" },
    { name: "Python", percentage: 85, color: "#3776AB", icon: <SiPython size={20} color="#3776AB" />, category: "백엔드" },
    { name: "Spring Boot", percentage: 80, color: "#6DB33F", icon: <SiSpring size={20} color="#6DB33F" />, category: "백엔드" },
    { name: "Django", percentage: 78, color: "#092E20", icon: <SiDjango size={20} color="#092E20" />, category: "백엔드" },
  ];

  const allSkills = [...frontendSkills, ...mobileSkills, ...backendSkills];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allSkills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} percentage={skill.percentage} color={skill.color} icon={skill.icon} category={skill.category} />
      ))}
    </div>
  );
}
