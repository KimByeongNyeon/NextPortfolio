"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiExternalLink } from "react-icons/fi";

export default function ThankYouSection() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/KimByeongNyeon",
      icon: <FiGithub size={24} />,
      description: "코드와 프로젝트",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
        },
    {
      name: "이메일",
      href: "mailto:qud5252@naver.com",
      icon: <FiMail size={24} />,
      description: "연락하기",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "블로그",
      href: "/blog",
      icon: <FiExternalLink size={24} />,
      description: "개발 이야기",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    }
  ];

  return (
    <section className="min-h-[80vh] bg-white dark:bg-black relative overflow-hidden py-24 transition-colors duration-500 flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full">
        {/* 메인 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            THANK YOU
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium transition-colors">
            프론트엔드 개발자 김병년이었습니다. <br className="hidden md:block" />
            
          </p>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* 소셜 링크들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                className={`flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-3xl transition-all duration-300 group hover:shadow-xl`}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className={`w-14 h-14 ${link.bg} ${link.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  {link.icon}
                </div>
                
                <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-2">
                  {link.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 푸터 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 dark:border-gray-800 pt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-sm text-gray-500 dark:text-gray-400 font-medium">
            <p>© 2026 Kim Byeong Nyeon. All rights reserved.</p>
            
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-rose-500"
              >
                ❤️
              </motion.span>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
