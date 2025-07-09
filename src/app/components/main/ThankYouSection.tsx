"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiMail, FiExternalLink, FiStar } from "react-icons/fi";
import { useRef, useState } from "react";

export default function ThankYouSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/KimByeongNyeon",
      icon: <FiGithub size={24} />,
      description: "코드와 프로젝트",
      gradient: "from-purple-400 to-blue-400",
      glowColor: "rgba(147, 51, 234, 0.3)"
    },
    {
      name: "이메일",
      href: "mailto:qud5252@naver.com",
      icon: <FiMail size={24} />,
      description: "연락하기",
      gradient: "from-pink-400 to-rose-400",
      glowColor: "rgba(236, 72, 153, 0.3)"
    },
    {
      name: "블로그",
      href: "/blog",
      icon: <FiExternalLink size={24} />,
      description: "개발 이야기",
      gradient: "from-green-400 to-emerald-400",
      glowColor: "rgba(34, 197, 94, 0.3)"
    }
  ];



  // 마우스 이벤트 핸들러
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden py-20"
      onMouseMove={handleMouseMove}
    >


      {/* 마우스 팔로우 글로우 */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* 홀로그램 격자 */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* 메인 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text">
              THANK YOU
            </h1>
            
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            프론트엔드 개발자 김병년이었습니다!<br />
            감사합니다!
          </motion.p>

          {/* 장식적 라인 */}
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* 소셜 링크들 - 홀로그램 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5
              }}
              className="group relative"
            >
              {/* 홀로그램 글로우 */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${link.glowColor}, transparent)`,
                  boxShadow: `0 0 40px ${link.glowColor}`
                }}
              />
              
              <Link
                href={link.href}
                className="relative block p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-500 group-hover:bg-white/10"
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* 아이콘 홀로그램 */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${link.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-2xl" />
                    <div className="text-white relative z-10">
                      {link.icon}
                    </div>
                    
                    {/* 홀로그램 스캔 라인 */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-white text-xl mb-2 group-hover:text-white group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                        style={{ backgroundImage: `linear-gradient(135deg, ${link.gradient.split(' ')[1]}, ${link.gradient.split(' ')[3]})` }}>
                      {link.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-white-300 transition-colors duration-300">
                      {link.description}
                    </p>
                  </div>
                </div>
                
                {/* 코너 액센트 */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white/20 group-hover:border-white/40 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 푸터 - 홀로그램 스타일 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* 홀로그램 패널 */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mx-auto max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.p 
                className="text-gray-400 mb-4 font-mono"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <span className="text-green-400">&gt;</span> system.info()
              </motion.p>
              
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              >
                © 2024 김병년. 이 포트폴리오는 Next.js와 TypeScript로 제작되었습니다.
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center space-x-3 text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.6 }}
              >
                <span className="font-mono text-sm">Made with</span>
                <motion.span
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-red-400 text-lg"
                >
                  ❤️
                </motion.span>
                <span className="font-mono text-sm">by KimByeongNyeon</span>
              </motion.div>

              {/* 스캔라인 효과 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </div>
          </div>

          {/* 플로팅 요소들 */}
          <motion.div 
            className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full backdrop-blur-sm"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400/20 rounded-full backdrop-blur-sm"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </motion.div>


      </div>
    </section>
  );
}
