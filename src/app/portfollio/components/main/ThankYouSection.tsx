"use client";

import { motion } from "framer-motion";

export default function ThankYouSection() {
  return (
    <section className="min-h-[80vh] bg-white dark:bg-black relative overflow-hidden py-24 transition-colors duration-500 flex items-center justify-center">
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
            프론트엔드 개발자 김병년이었습니다.{" "}
            <br className="hidden md:block" />
          </p>
        </motion.div>

        {/* 푸터 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 dark:border-gray-800 pt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto text-sm text-gray-500 dark:text-gray-400 font-medium">
            <p>© 2026 Kim Byeong Nyeon. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
