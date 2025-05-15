"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiSend } from "react-icons/fi";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-10 md:pt-0">
      <ScrollReveal>
        <div className="max-w-3xl">
          <div className="inline-block rounded-full px-4 py-2 text-sm font-mono mb-6 text-blue-600 border border-blue-100 bg-blue-50">
            <span className="text-blue-600 mr-2">👋</span> 안녕하세요
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <div className="mb-2">프론트엔드 개발자</div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">김병년입니다</div>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            좋은 구조가 좋은 코드를 만드는 지름길이라 생각하는 <span className="text-blue-600 font-medium">능동적인 FE 개발자</span>를 지향합니다.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">
            <div className="tech-item">
              <SiReact className="text-[#61DAFB] text-2xl" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <SiNextdotjs className="text-black text-2xl" />
              <span>Next.js</span>
            </div>
            <div className="tech-item">
              <SiTypescript className="text-[#3178C6] text-2xl" />
              <span>TypeScript</span>
            </div>
            <div className="tech-item">
              <SiTailwindcss className="text-[#06B6D4] text-2xl" />
              <span>Tailwind</span>
            </div>
            <div className="tech-item">
              <SiJavascript className="text-[#F7DF1E] text-2xl" />
              <span>JavaScript</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all">
              프로젝트 보기
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-gray-200 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all">
              연락하기
            </Link>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <FiLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>
      </ScrollReveal>

      <style jsx global>{`
        .tech-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background-color: #f5f8ff;
          border: 1px solid #e5e8ff;
          font-size: 14px;
          font-weight: 500;
          color: #555;
        }

        .social-icon {
          color: #666;
          transition: all 0.2s;
        }

        .social-icon:hover {
          color: #2563eb;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
