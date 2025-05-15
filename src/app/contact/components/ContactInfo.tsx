"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ContactMethod = {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  color?: string;
};

export default function ContactInfo() {
  const contactMethods: ContactMethod[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      title: "전화번호",
      value: "010-7255-5901",
      link: "tel:010-7255-5901",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      title: "이메일",
      value: "qud5252@naver.com",
      link: "mailto:qud5252@naver.com",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "주소",
      value: "수원시",
      color: "from-green-400 to-green-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      ),
      title: "웹사이트",
      value: "저를 소개합니다.",
      link: "https://kimbyeongnyeon.github.io/",
      color: "from-amber-400 to-amber-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100"
          variants={itemVariants}
          whileHover={{
            y: -8,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            transition: { duration: 0.3 },
          }}
        >
          {/* 배경 패턴 */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-600"></div>

          <div className="p-5 sm:p-6 flex items-center gap-3">
            {/* 아이콘 */}
            <div
              className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 mr-2 sm:mr-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${method.color} text-white flex items-center justify-center shadow-md transform rotate-3 transition-transform duration-300`}
            >
              {method.icon}
            </div>

            {/* 텍스트 콘텐츠 */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 tracking-wide">{method.title.toUpperCase()}</h3>

              {method.link ? (
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a
                    href={method.link}
                    className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 inline-flex items-center truncate max-w-full"
                  >
                    <span className="truncate">{method.value}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              ) : (
                <p className="text-base sm:text-lg font-bold text-gray-800 truncate">{method.value}</p>
              )}
            </div>

            {/* 우측 아이콘 (링크가 있는 경우만) */}
            {method.link && (
              <motion.div whileHover={{ rotate: 15 }} className="flex-shrink-0 ml-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}

      {/* 소셜 미디어 링크 */}
      <motion.div className="relative col-span-1 md:col-span-2 rounded-2xl p-6 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md overflow-hidden" variants={itemVariants} whileHover={{ y: -5 }}>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600"></div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">소셜 계정</h3>

        <div className="flex space-x-4">
          <motion.a
            href="https://github.com/kimbyeongnyeon"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white shadow-md"
            whileHover={{ y: -5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
