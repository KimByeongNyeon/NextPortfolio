"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroduceSection() {
  const skills = [
    "React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"
  ];

  // 내가 어떤 사람인지 설명하는 데이터
  const personalityTraits = [
    {
      icon: "⚡",
      title: "능동적인 개발자",
      description: "문제를 발견하면 기다리지 않고 직접 해결책을 찾아 실행합니다. 주도적으로 학습하고 도전합니다."
    },
    {
      icon: "🏗️",
      title: "구조적 사고",
      description: "좋은 구조가 좋은 코드를 만든다고 믿습니다. 확장 가능하고 유지보수하기 쉬운 아키텍처를 설계합니다."
    },
    {
      icon: "👤",
      title: "사용자 관점",
      description: "개발할 때 항상 '내가 사용자라면?' 이라고 생각합니다. 사용자의 입장에서 경험을 설계합니다."
    },
    {
      icon: "🔄",
      title: "지속적 개선",
      description: "현재에 안주하지 않고 더 나은 방법을 찾기 위해 끊임없이 고민하고 개선해나갑니다."
    }
  ];

  const values = [
    {
      title: "능동적 문제해결",
      description: "문제를 마주했을 때 수동적으로 기다리지 않고, 적극적으로 해결방안을 모색하고 실행에 옮깁니다."
    },
    {
      title: "탄탄한 설계",
      description: "좋은 구조가 좋은 코드를 만든다는 신념으로, 확장성과 유지보수성을 고려한 설계를 중요시합니다."
    },
    {
      title: "사용자 중심 개발",
      description: "개발자 편의가 아닌 사용자의 관점에서 생각하며, 실제 사용자가 되어 경험해보는 것을 중요하게 생각합니다."
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Image & Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full p-2">
                <Image
                  src="/assets/profile.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                안녕하세요! 👋
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 
                최신 기술을 활용해 아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다.
                항상 새로운 도전을 통해 성장하고 있습니다.
              </p>
              
              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Who Am I Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                나는 이런 사람입니다
              </h4>
              
              <div className="space-y-6">
                {personalityTraits.map((trait, index) => (
                  <motion.div
                    key={trait.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="text-2xl">{trait.icon}</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {trait.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {trait.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values & Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              개발 철학 & 가치관
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              제가 개발을 하면서 가장 중요하게 생각하는 가치들입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
            <div className="text-5xl mb-6 text-blue-600 dark:text-blue-400">💭</div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 text-gray-800 dark:text-gray-100 leading-relaxed">
              "좋은 구조가 좋은 코드를 만들고,<br />
              사용자의 관점에서 생각하는 것이<br />
              좋은 서비스를 만든다"
            </blockquote>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
              개발자 김병년
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}