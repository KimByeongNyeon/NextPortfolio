'use client';

import PageTransition from './components/PageTransition';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiJavascript, SiTypescript } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Toggle cursor visibility every 500ms for code block
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition animationType="slide-up">
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
                  <SiReact className="text-5xl text-white animate-spin-slow" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-lg -rotate-12 opacity-90 flex items-center justify-center">
                  <SiJavascript className="text-2xl text-gray-800" />
                </div>
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-blue-400 rounded-lg rotate-12 opacity-90 flex items-center justify-center">
                  <SiTypescript className="text-xl text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 text-gray-800">
              <TypeAnimation
                sequence={[
                  '프론트엔드 개발자',
                  1000,
                  '프론트엔드 개발자 김병년',
                  500
                ]}
                wrapper="span"
                speed={50}
                repeat={1}
                className="text-5xl font-bold"
                cursor={false}
              />
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              사용자 경험을 중요시하는 웹 개발자입니다. <br className="hidden md:block" />
              모던 기술로 아름답고 효율적인 웹 서비스를 구현합니다.
            </p>
          </header>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl font-mono text-sm bg-gray-800 text-gray-200 p-6 rounded-xl shadow-md mb-12 relative overflow-hidden">
              <div className="flex items-center mb-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="ml-2 text-gray-400">script.js</span>
              </div>
              <TypeAnimation
                sequence={[
                  'const welcome = () => {\n  console.log("Hello, visitor!");\n}',
                  1000,
                  'const welcome = (visitor) => {\n  console.log("Hello, " + visitor + "!");\n}',
                  1000, 
                  'const welcome = (visitor) => {\n  console.log(`Hello, ${visitor}! Thanks for visiting.`);\n}',
                  3000
                ]}
                wrapper="span"
                speed={50}
                className="block whitespace-pre"
                repeat={1}
                cursor={showCursor}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4 mb-12"
            >
              <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                포트폴리오 보기
              </a>
              <a href="#" className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors">
                연락하기
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
