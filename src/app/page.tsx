"use client";

import PageTransition from "./components/PageTransition";
import WelcomeSection from "./components/main/WelcomeSection";
import HeroSection from "./components/main/HeroSection";
import IntroduceSection from "./components/main/IntroduceSeciton";
import ProjectsSection from "./components/main/ProjectsSection";
import ThankYouSection from "./components/main/ThankYouSection";
import SkillsContent from "./components/skills/SkillsContent";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Welcome 컨텐츠 애니메이션 - 더 길고 부드러운 전환
  const welcomeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const welcomeY = useTransform(scrollYProgress, [0, 0.5], [0, -20]);
  const welcomeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  // Hero 컨텐츠 애니메이션 - 더 빨리 완전히 나타나도록
  const heroOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0.2, 0.6], [15, 0]);
  const heroScale = useTransform(scrollYProgress, [0.2, 0.6], [1.01, 1]);

  return (
    <PageTransition animationType="slide-up">
      <div ref={containerRef} className="relative">
        {/* Sticky 전환 섹션 */}
        <section className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            
            {/* Welcome 컨텐츠 */}
            <motion.div 
              className="absolute inset-0"
              style={{
                opacity: welcomeOpacity,
                y: welcomeY,
                scale: welcomeScale
              }}
            >
              <WelcomeSection />
            </motion.div>

            {/* Hero 컨텐츠 */}
            <motion.div 
              className="absolute inset-0"
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
        
        {/* 스크롤 공간 확보 - 더 부드러운 전환을 위한 충분한 공간 */}
        <div className="h-[200vh]"></div>
      </div>

      {/* Introduce/About Section */}
      <div id="about">
        <IntroduceSection />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <SkillsContent />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Thank You Section */}
      <div id="thank-you">
        <ThankYouSection />
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
          scroll-snap-type: y proximity;
        }
        
        /* 매끄러운 스크롤링을 위한 추가 스타일 */
        body {
          overscroll-behavior: none;
        }
        
        /* 모바일에서의 부드러운 스크롤 */
        @media (max-width: 768px) {
          html {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </PageTransition>
  );
}
