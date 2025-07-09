"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import type { ReactElement } from "react";

export default function WelcomeSection() {
  const [showCursor, setShowCursor] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [codeElements, setCodeElements] = useState<ReactElement[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // 패럴랙스 효과
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // 클라이언트 마운트 확인
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const cursorTimer = setTimeout(() => setShowCursor(false), 8000);
    // TypeAnimation 완료 후 실행 결과 표시 및 애니메이션 중지
    const resultTimer = setTimeout(() => {
      setShowResult(true);
      setAnimationPaused(true); // 모든 애니메이션 중지
    }, 16000);
    
    return () => {
      clearTimeout(cursorTimer);
      clearTimeout(resultTimer);
    };
  }, []);

  // 흐르는 코드 생성 - 클라이언트에서만 실행
  useEffect(() => {
    if (!isMounted) return;
    
    const generateCodeElements = () => {
      const codeSnippets = ['01', '10', '11', '00', 'if', 'let', 'const', '{}', '[]', '()'];
      return Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-green-400 font-mono text-xs opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ));
    };

    setCodeElements(generateCodeElements());
  }, [isMounted]);

  return (
    <section ref={sectionRef} className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
      {/* 배경 매트릭스 효과 */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* 흐르는 코드 라인들 */}
          <motion.div 
            className="absolute inset-0"
            animate={{ opacity: animationPaused ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            {isMounted && !animationPaused && codeElements}
          </motion.div>

          {/* 기하학적 패턴 */}
          <div className="absolute top-20 left-20 w-40 h-40 border border-green-400/10 rotate-45" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-blue-400/10 rounded-full" />
          <div className="absolute top-1/2 right-40 w-24 h-24 border border-purple-400/10" />
          
          {/* 그리드 */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </motion.div>
      </div>

      {/* 메인 콘텐츠 */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 w-full h-full flex items-center justify-center px-4"
      >
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        
         

          {/* 터미널 윈도우 */}
          <motion.div 
            className="w-full max-w-3xl relative"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* 터미널 글로우 효과 */}
            <div className="absolute inset-0 bg-green-400/10 rounded-2xl blur-xl" />
            
            {/* 터미널 윈도우 */}
            <div className="relative bg-gray-900/90 backdrop-blur-sm border border-green-400/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* 터미널 헤더 */}
              <div className="flex items-center justify-between p-4 bg-gray-800/80 border-b border-green-400/20">
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm font-mono">
                  <span>~/portfolio</span>
                  <span className="text-green-400">welcome.js</span>
                </div>
                <div className="text-gray-500 text-xs font-mono">
                  Node.js v18.17.0
                </div>
              </div>

              {/* 터미널 콘텐츠 */}
              <div className="p-6 font-mono text-sm">
                {/* 프롬프트 라인 */}
                <div className="text-gray-400 mb-2 flex items-center">
                  <span className="text-green-400 mr-2">$</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    node welcome.js
                  </motion.span>
                </div>

                {/* 코드 타이핑 영역 */}
                <div className="text-gray-200 leading-relaxed relative">
                  <TypeAnimation
                    sequence={[
                      'const welcome = () => {\n  console.log("안녕하세요., visitor!");\n}',
                      1000,
                      'const welcome = (visitor) => {\n  console.log("안녕하세요., " + visitor + "!");\n}',
                      1000,
                      "const welcome = (visitor) => {\n  console.log(`안녕하세요., ${visitor}! 방문해주셔서 감사합니다!`);\n}",
                      3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="block whitespace-pre"
                    repeat={1}
                    cursor={showCursor}
                  />
                </div>

                {/* 실행 결과 - TypeAnimation 완료 후에만 표시 */}
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-4 text-green-400"
                  >
                    <motion.div 
                      className="flex items-center mb-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="text-gray-400 mr-2">&gt;</span>
                      안녕하세요. 여러분! 방문해주셔서 감사합니다!
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <span className="text-gray-400 mr-2">&gt;</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                        className="text-green-400"
                      >
                        Portfolio loaded successfully ✓
                      </motion.span>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* 기술 스택 표시 */}
          
          
          {/* 스크롤 인디케이터 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="flex flex-col items-center text-gray-400 mt-40"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-sm mb-3 font-mono">
                <span className="text-green-400">&gt;</span> scroll.continue()
              </span>
              <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center relative overflow-hidden">
                <motion.div 
                  className="w-1 h-3 bg-gradient-to-b from-green-400 to-green-600 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* 내부 글로우 */}
                <div className="absolute inset-0 bg-green-400/10 rounded-full blur-sm" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 코너 액센트 */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-green-400/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-green-400/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-green-400/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-green-400/20" />
    </section>
  );
} 