"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function IntroduceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const skills = [
    "React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"
  ];

  // 내가 어떤 사람인지 설명하는 데이터
  const personalityTraits = [
    {
      icon: "⚡",
      title: "능동적인 개발자",
      description: "문제를 발견하면 기다리지 않고 직접 해결책을 찾아 실행합니다. 주도적으로 학습하고 도전합니다.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: "🏗️",
      title: "구조적 사고",
      description: "좋은 구조가 좋은 코드를 만든다고 믿습니다. 확장 가능하고 유지보수하기 쉬운 아키텍처를 설계합니다.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: "👤",
      title: "사용자 관점",
      description: "개발할 때 항상 '내가 사용자라면?' 이라고 생각합니다. 사용자의 입장에서 경험을 설계합니다.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: "🔄",
      title: "지속적 개선",
      description: "현재에 안주하지 않고 더 나은 방법을 찾기 위해 끊임없이 고민하고 개선해나갑니다.",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  const values = [
    {
      title: "능동적 문제해결",
      description: "문제를 마주했을 때 수동적으로 기다리지 않고, 적극적으로 해결방안을 모색하고 실행에 옮깁니다.",
      icon: "🎯"
    },
    {
      title: "탄탄한 설계",
      description: "좋은 구조가 좋은 코드를 만든다는 신념으로, 확장성과 유지보수성을 고려한 설계를 중요시합니다.",
      icon: "🏛️"
    },
    {
      title: "사용자 중심 개발",
      description: "개발자 편의가 아닌 사용자의 관점에서 생각하며, 실제 사용자가 되어 경험해보는 것을 중요하게 생각합니다.",
      icon: "❤️"
    }
  ];

  // 패럴랙스 효과
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* 배경 기하학적 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* 기하학적 도형들 */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full" />
          <div className="absolute bottom-40 left-40 w-40 h-40 border border-purple-500/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20" />
          
          {/* 그리드 패턴 */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }} 
          />
        </motion.div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ABOUT ME
          </motion.h2>
          
          {/* 언더라인 애니메이션 */}
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            {/* 프로필 이미지 with 독특한 디자인 */}
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="relative w-80 h-80">
                {/* 회전하는 링 */}
                <motion.div 
                  className="absolute inset-0 border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-4 border border-white/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* 실제 이미지 */}
                <div className="absolute inset-8 rounded-full overflow-hidden bg-gray-800/50 backdrop-blur-sm">
                  <Image
                    src="/assets/profile.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 플로팅 아이콘들 */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </div>

            {/* 텍스트 소개 */}
            <motion.div 
              className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">
                안녕하세요! 👋
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 
                최신 기술을 활용해 아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다.
                항상 새로운 도전을 통해 성장하고 있습니다.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-10">
              <h4 className="text-3xl font-bold text-white mb-4">
                저는 이런 사람입니다
              </h4>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto lg:mx-0" />
            </div>
            
            <div className="grid gap-6">
              {personalityTraits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r ${trait.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                        {trait.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-white text-xl mb-3 group-hover:text-white group-hover:bg-gradient-to-r group-hover:${trait.gradient} group-hover:bg-clip-text transition-all duration-300">
                          {trait.title}
                        </h5>
                        <p className="text-gray-300 leading-relaxed">
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              개발 철학 & 가치관
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              제가 개발을 하면서 가장 중요하게 생각하는 가치들입니다
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.8 + index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative h-80"
              >
                {/* 헥사곤 모양 배경 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />
                
                {/* 글로우 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* 콘텐츠 */}
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <motion.div 
                    className="text-5xl mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="mt-32 relative"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* 배경 블러 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/20 rounded-3xl" />
            
            {/* 플로팅 요소들 */}
            <motion.div 
              className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/30 rounded-full backdrop-blur-sm"
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500/30 rounded-full backdrop-blur-sm"
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />

            <div className="relative p-12 text-center">
              <motion.div 
                className="text-6xl mb-8"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💭
              </motion.div>
              
              <motion.blockquote 
                className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.6 }}
              >
                "좋은 구조가 좋은 코드를 만들고,<br />
                사용자의 관점에서 생각하는 것이<br />
                좋은 서비스를 만든다"
              </motion.blockquote>
              
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 3 }}
              />
              
              <motion.p 
                className="text-xl text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.2 }}
              >
                개발자 김병년
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}