'use client';

import Link from 'next/link';
import PageTransition from './components/PageTransition';
import { motion } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { FiHome, FiCode, FiBookOpen, FiMail, FiArrowRight } from 'react-icons/fi';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

// Navigation items
const navItems = [
  { 
    href: "/main", 
    title: "Main Page", 
    description: "포트폴리오와 프로젝트 소개",
    icon: <FiHome className="text-blue-500" />
  },
  { 
    href: "/skills", 
    title: "Skills", 
    description: "기술 스택과 역량 소개",
    icon: <FiCode className="text-indigo-500" />
  },
  { 
    href: "/blog", 
    title: "Blog", 
    description: "기술 관련 포스트와 인사이트",
    icon: <FiBookOpen className="text-purple-500" />
  },
  { 
    href: "/contact", 
    title: "Contact", 
    description: "연락처 및 SNS 정보",
    icon: <FiMail className="text-pink-500" />
  }
];

export default function Home() {
  return (
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-16 px-4">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
                <SiNextdotjs className="text-4xl text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-400 rounded-lg -rotate-12 opacity-90"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dashboard</span></h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            프론트엔드 개발자 포트폴리오에 오신 것을 환영합니다. <br className="hidden md:block" />
            아래 메뉴에서 원하는 섹션을 선택해 주세요.
          </p>
          
          <div className="inline-block font-mono text-sm bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md mb-8">
            <code>{`const welcome = (visitor) => { 
  console.log("Hello, ${"{"}visitor{"}"}! Thanks for visiting.");
}`}</code>
          </div>
        </header>

        <motion.nav 
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {navItems.map((navItem, index) => (
              <motion.li key={index} variants={item}>
                <Link 
                  href={navItem.href}
                  className="group block p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-gray-100 to-transparent rounded-bl-full -mt-8 -mr-8 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {navItem.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {navItem.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 pl-16">{navItem.description}</p>
                  
                  <div className="pl-16 flex items-center text-blue-600 font-medium">
                    <span>방문하기</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </PageTransition>
  );
}
