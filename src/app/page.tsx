"use client";

import PageTransition from "./components/PageTransition";
import HeroSection from "./components/main/HeroSection";
import ProjectsSection from "./components/main/ProjectsSection";
import ThankYouSection from "./components/main/ThankYouSection";
import SkillsContent from "./components/skills/SkillsContent";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Skills Section 스크롤 진행도
  const { scrollYProgress: skillsScrollProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "start start"]
  });

  // Welcome 컨텐츠 애니메이션 - 더 천천히 사라지도록
  const welcomeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const welcomeY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  const welcomeScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  // Hero 컨텐츠 애니메이션 - 더 천천히 나타나고 더 오래 유지
  const heroOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0.2, 0.6], [50, 0]);
  const heroScale = useTransform(scrollYProgress, [0.2, 1.0], [1.1, 1]);

  // Skills Section 슬라이드 애니메이션 - 오른쪽에서 슬라이드
  const skillsX = useTransform(skillsScrollProgress, [0, 0.8], [1000, 0]);
  const skillsOpacity = useTransform(skillsScrollProgress, [0, 0.6], [0, 1]);

  useEffect(() => {
    // Toggle cursor visibility every 500ms for code block
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition animationType="slide-up">
      <div ref={containerRef} className="relative">
        {/* Sticky 전환 섹션 */}
        <section className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            
            {/* Welcome 컨텐츠 */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: welcomeOpacity,
                y: welcomeY,
                scale: welcomeScale
              }}
            >
              <div className="container mx-auto py-16 px-4">
                <div className="max-w-3xl mx-auto">
                  {/*  */}

                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
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
                          "const welcome = (visitor) => {\n  console.log(`Hello, ${visitor}! Thanks for visiting.`);\n}",
                          3000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="block whitespace-pre"
                        repeat={1}
                        cursor={showCursor}
                      />
                    </div>
                    
                    {/* 스크롤 인디케이터 */}
                    <motion.div
                      className="flex flex-col items-center text-gray-400 mt-50"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-sm mb-2">Scroll to continue</span>
                      <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Hero 컨텐츠 */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: heroOpacity,
                y: heroY,
                scale: heroScale
              }}
            >
              <HeroSection />
            </motion.div>
          </div>
        </section>
        
        {/* 스크롤 공간 확보 - 더 많은 공간으로 천천히 스크롤 */}
        <div className="h-[200vh]"></div>
      </div>

      {/* Skills Section */}
      <motion.div 
        id="skills" 
        className="w-full bg-gray-50"
        ref={skillsRef}
        style={{
          x: skillsX,
          opacity: skillsOpacity
        }}
      >
        <SkillsContent />
      </motion.div>

      {/* Projects Section */}
      <div id="projects" className="w-full min-h-screen overflow-visible relative bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <ProjectsSection />
        </div>
      </div>

      {/* Thank You Section */}
      <div id="thank-you" className="w-full min-h-screen overflow-visible relative bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <ThankYouSection />
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        /* 스크롤바 스타일링 */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* 부드러운 스크롤 */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </PageTransition>
  );
}
