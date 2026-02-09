"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<ReactElement[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  // 클라이언트 마운트 확인
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 파티클 생성 함수 - 클라이언트에서만 실행
  useEffect(() => {
    if (!isMounted) return;
    
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ));
    };

    setParticles(generateParticles());
  }, [isMounted]);

  return (
    <div className="w-full h-full bg-white dark:bg-black relative overflow-hidden flex items-center justify-center transition-colors duration-500">
      {/* 배경 파티클 시스템 */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && particles}
      </div>

      {/* 네온 그리드 배경 */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 transition-opacity"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 마우스 팔로우 글로우 */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* 메인 콘텐츠 */}
      <div className="w-full h-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 max-w-7xl mx-auto">
        
        {/* 프로필 이미지 섹션 - 왼쪽 */}
        <motion.div 
          className="flex justify-center lg:justify-center"
          initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            stiffness: 100,
            delay: 0.2 
          }}
        >
          <div className="relative">
            
            
            {/* 프로필 사진 */}
            <motion.div 
              className="relative w-72 h-72 md:w-72 md:h-72 lg:w-72 lg:h-72 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* 내부 글로우 */}
              
              
              <Image
                src="/assets/profile.png"
                alt="김병년 프로필"
                fill
                className="object-cover relative z-10"
                priority
              />
              
              {/* 오버레이 그라디언트 */}
              
            </motion.div>
            
            
          </div>
        </motion.div>

        {/* 텍스트 섹션 - 오른쪽 */}
        <motion.div 
          className="text-left lg:text-left space-y-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* 메인 타이틀 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-4"
            >
              <span className="text-lg text-blue-400 font-mono tracking-wide">console.log("Hello World!")</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <div className="mb-4 text-gray-900 dark:text-white relative">
                <TypeAnimation
                  sequence={[
                    '프론트엔드 개발자',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  cursor={false}
                />

              </div>
              
              <div className="relative">
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 relative z-10">
                  <TypeAnimation
                    sequence={[
                      '',
                      1500,
                      '김병년입니다',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                    cursor={true}
                  />
                </div>

              </div>
            </h1>
          </div>
          
          {/* 추가 설명 문구 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="space-y-4"
          >
            {/* 글로우 카드 형태의 설명 */}
            
          </motion.div>

          {/* 스킬 태그들 */}
          

          
        </motion.div>
      </div>

      {/* 하단 스크롤 인디케이터 */}
     
    </div>
  );
}
