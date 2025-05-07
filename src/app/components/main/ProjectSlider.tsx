'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  githubLink?: string;
};

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 샘플 프로젝트 데이터
  const projects: Project[] = [
    {
      id: 1,
      title: '리액트 기반 반응형 포트폴리오',
      description: '최신 디자인 트렌드와 애니메이션 효과를 적용한 모던 웹 개발자 포트폴리오입니다. 다크 모드, 애니메이션, 반응형 레이아웃을 구현했습니다.',
      imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=React+Portfolio',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive'],
      link: '#',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Next.js 블로그 플랫폼',
      description: 'SEO 최적화된 블로그 플랫폼으로, 정적 생성과 서버 사이드 렌더링을 모두 활용하여 최적의 성능을 제공합니다. Notion API를 연동했습니다.',
      imageUrl: 'https://placehold.co/600x400/4f46e5/ffffff?text=Next.js+Blog',
      tags: ['Next.js', 'TypeScript', 'Notion API', 'SSG'],
      link: '#',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: '온라인 코드 에디터',
      description: '실시간 코드 실행과 협업이 가능한 웹 기반 코드 에디터입니다. WebSocket을 활용한 실시간 협업과 다양한 테마를 지원합니다.',
      imageUrl: 'https://placehold.co/600x400/ec4899/ffffff?text=Code+Editor',
      tags: ['React', 'Monaco Editor', 'WebSocket', 'Express'],
      link: '#',
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // 자동 슬라이드 기능
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
      <div className="relative h-[32rem] w-full">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="absolute inset-0 flex"
          >
            <div className="flex flex-col lg:flex-row w-full h-full">
              <div className="lg:w-1/2 h-64 lg:h-full relative overflow-hidden">
                {/* Project Image */}
                <div
                  className="w-full h-full bg-cover bg-center transform transition-transform duration-5000 hover:scale-110"
                  style={{ backgroundImage: `url(${currentProject.imageUrl})` }}
                />
                
                {/* Project Number */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white font-mono py-1 px-3 rounded-full text-sm">
                  Project {currentIndex + 1}/{projects.length}
                </div>
                
                {/* Technology Tags Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-white bg-opacity-20 text-white rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="text-3xl font-bold mb-6 text-gray-800">{currentProject.title}</h3>
                  
                  {/* Code Decoration */}
                  <div className="bg-gray-800 rounded-lg mb-6 font-mono text-sm text-gray-300 p-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`// ${currentProject.title}
const project = {
  technologies: [${currentProject.tags.map(tag => `'${tag}'`).join(', ')}],
  goal: 'Create amazing user experience'
};

function build(tech) {
  return tech.map(t => implement(t)).join('');
}

// Result: A high-performance application`}
                      </code>
                    </pre>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed">{currentProject.description}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={currentProject.link}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                      transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    <FiExternalLink className="mr-2" />
                    라이브 데모
                  </Link>
                  
                  {currentProject.githubLink && (
                    <Link
                      href={currentProject.githubLink}
                      className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-full 
                        hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-medium hover:-translate-y-1"
                    >
                      <FiGithub className="mr-2" />
                      소스 코드
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center
          bg-white bg-opacity-80 rounded-full shadow-md hover:bg-opacity-100 transition-all hover:scale-110 z-10"
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center
          bg-white bg-opacity-80 rounded-full shadow-md hover:bg-opacity-100 transition-all hover:scale-110 z-10"
        aria-label="Next project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
} 