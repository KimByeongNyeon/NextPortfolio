"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiExternalLink } from "react-icons/fi";
import { SiVelog, SiNotion } from "react-icons/si";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function ThankYouSection() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/KimByeongNyeon",
      icon: <FiGithub size={20} />,
      description: "코드와 프로젝트"
    },
    {
      name: "이메일",
      href: "mailto:qud5252@naver.com",
      icon: <FiMail size={20} />,
      description: "연락하기"
    },
    {
      name: "블로그",
      href: "/blog",
      icon: <FiExternalLink size={20} />,
      description: "개발 이야기"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You
            </h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              포트폴리오를 봐주셔서 감사합니다.<br />
              더 궁금한 점이 있으시다면 언제든지 연락해 주세요.
            </p>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-48"
          >
            <p className="text-sm text-gray-500">
              © 2024 김병년. 이 포트폴리오는 Next.js와 TypeScript로 제작되었습니다.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-2 text-sm text-gray-400">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>by KimByeongNyeon</span>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
