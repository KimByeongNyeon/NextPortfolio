'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

type SkillBarProps = {
  name: string;
  percentage: number;
  color: string;
};

function SkillBar({ name, percentage, color }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden" ref={ref}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function SkillBarChart() {
  const skills = [
    { name: 'HTML', percentage: 95, color: '#e34c26' },
    { name: 'CSS', percentage: 90, color: '#264de4' },
    { name: 'JavaScript', percentage: 85, color: '#f0db4f' },
    { name: 'TypeScript', percentage: 80, color: '#007acc' },
    { name: 'React', percentage: 85, color: '#61dafb' },
    { name: 'Next.js', percentage: 80, color: '#000000' },
    { name: 'Node.js', percentage: 75, color: '#3c873a' },
    { name: 'Tailwind CSS', percentage: 90, color: '#06b6d4' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} percentage={skill.percentage} color={skill.color} />
      ))}
    </div>
  );
} 