'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/common/ScrollReveal';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string | null;
  codeSnippet: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-10 px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold mb-6">프로젝트</h1>
          <div className="inline-block font-mono text-sm bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md mb-8">
            <code>{`function getProjects() {
  return projects.filter(p => p.isAwesome).sort((a, b) => b.coolFactor - a.coolFactor);
}`}</code>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 mt-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              isActive={activeProject === index}
              onToggle={() => setActiveProject(activeProject === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

function ProjectCard({ project, index, isActive, onToggle }: { 
  project: Project; 
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div 
        className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-auto">
            <img 
              src={project.image || 'https://via.placeholder.com/600x400'} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-blue-500/80 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-500/80 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex space-x-3 mb-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FiGithub className="mr-1" /> GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FiExternalLink className="mr-1" /> Demo
                </a>
              )}
              <button 
                onClick={onToggle}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FiCode className="mr-1" /> {isActive ? '코드 숨기기' : '코드 보기'}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="font-mono text-sm bg-gray-900 text-gray-200 p-4 rounded-lg shadow-inner overflow-x-auto">
                  <pre>{project.codeSnippet}</pre>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
} 