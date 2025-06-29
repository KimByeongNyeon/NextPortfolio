"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 프로필 이미지 - 왼쪽 */}
        <motion.div 
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* 배경 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl scale-150"></div>
            
            {/* 프로필 사진 */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <Image
                src="/assets/profile.png"
                alt="김병년 프로필"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* 테두리 효과 */}
            <div className="absolute inset-0 rounded-full border-4 border-white/50 shadow-2xl"></div>
          </div>
        </motion.div>

        {/* 텍스트 섹션 - 오른쪽 */}
        <motion.div 
          className="text-left lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <div className="mb-2 text-gray-800">
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
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              <TypeAnimation
                sequence={[
                  '',
                  1500, // 첫 번째 텍스트 완료 후 대기
                  '김병년입니다',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={true}
              />
            </div>
          </h1>
          
          {/* 추가 설명 문구 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-3"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              능동적인 태도로 개발하는 것을 추구합니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              좋은 구조가 좋은 코드를 만든다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
