"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  description: string;
  color: string;
  iconBg: string;
}

export default function SkillCard({ title, skills, icon, description, color, iconBg }: SkillCardProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* 배경 그라데이션 효과 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
      
      {/* 아이콘 */}
      <div className="relative">
        <div className={`${iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        {/* 제목 */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        {/* 설명 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        
        {/* 스킬 태그들 */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            주요 기술
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* 전문성 인디케이터 */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} animate-pulse`}></div>
        </div>
      </div>
    </motion.div>
  );
}
