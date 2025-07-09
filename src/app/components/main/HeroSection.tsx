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
    <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
      {/* 배경 파티클 시스템 */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && particles}
      </div>

      {/* 네온 그리드 배경 */}
      <div 
        className="absolute inset-0 opacity-20"
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
          className="flex justify-center lg:justify-start"
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
            {/* 회전하는 네온 링들 */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border-2 border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
            </motion.div>
            
            <motion.div 
              className="absolute -inset-4 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border border-purple-400/20 shadow-[0_0_30px_rgba(147,51,234,0.2)]" />
            </motion.div>

            <motion.div 
              className="absolute -inset-8 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border border-cyan-400/15" />
            </motion.div>
            
            {/* 프로필 사진 */}
            <motion.div 
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* 내부 글로우 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl" />
              
              <Image
                src="/assets/profile.png"
                alt="김병년 프로필"
                fill
                className="object-cover relative z-10"
                priority
              />
              
              {/* 오버레이 그라디언트 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full" />
            </motion.div>
            
            {/* 플로팅 기술 아이콘들 */}
            <motion.div 
              className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-2xl">⚡</span>
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30"
              animate={{ 
                y: [0, 20, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <span className="text-2xl">🚀</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -left-12 w-12 h-12 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30"
              animate={{ 
                x: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-xl">💡</span>
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
              <div className="mb-4 text-white relative">
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
            <motion.div 
              className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
              <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                <span className="text-blue-400 font-mono">&gt;</span> 능동적인 태도로 개발하는 것을 추구합니다.
              </p>
            </motion.div>

            <motion.div 
              className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl" />
              <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                <span className="text-purple-400 font-mono">&gt;</span> 좋은 구조가 좋은 코드를 만든다.
              </p>
            </motion.div>
          </motion.div>

          {/* 스킬 태그들 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="flex flex-wrap gap-3"
          >
            {['React', 'Next.js', 'TypeScript', 'Vue.js'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 3.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-lg border border-blue-400/30 backdrop-blur-sm font-mono text-sm cursor-pointer hover:border-blue-400/50 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="pt-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                프로젝트 보러가기
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 하단 스크롤 인디케이터 */}
     
    </div>
  );
}
