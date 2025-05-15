import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  description: string;
}

export default function SkillCard({ title, skills, icon, description }: SkillCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-gray-50 mr-3">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-50 rounded-md text-sm font-medium text-gray-700 border border-gray-100">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
