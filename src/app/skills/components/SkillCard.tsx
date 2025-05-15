"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  description: string;
  color: string;
  iconBg: string;
}

export default function SkillCard({ title, skills, icon, description, color, iconBg }: SkillCardProps) {
  return (
    <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 h-full transition-all duration-300">
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <div className="p-8">
        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
