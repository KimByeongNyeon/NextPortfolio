import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiCode, FiSend } from "react-icons/fi";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 mb-24 relative">
      {/* Background Code Elements */}
      <div className="absolute -z-10 opacity-5 left-0 top-0 hidden md:block w-1/3 h-full overflow-hidden font-mono text-xs">
        {`
          const Developer = {
            name: "홍길동",
            skills: ["React", "TypeScript", "Next.js"],
            passion: "Building intuitive UIs",
            loves: "Clean Code",
            currentlyLearning: "WebGL",
            contact: "hello@example.com"
          }

          function createProject(idea) {
            return {
              ...idea,
              technologies: selectBestTech(idea),
              result: "Amazing User Experience"
            }
          }

          // More code coming soon...
        `}
      </div>

      <div className="md:w-1/2 relative z-10">
        <ScrollReveal direction="right">
          <div className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-mono mb-4 text-gray-600 border border-gray-200">
            <span className="text-green-500 mr-2">$</span> 안녕하세요
          </div>
          <h1 className="text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            <span>프론트엔드 개발자</span>
            <br />
            <span>홍길동입니다</span>
          </h1>
          <p className="mb-8 text-gray-700 text-lg leading-relaxed max-w-xl">
            <span className="text-blue-600 font-semibold">사용자 경험을 최우선으로</span> 고려하는 개발자입니다. 모던 웹 기술을 활용해 직관적이고 반응형인 웹사이트와 애플리케이션을 구축합니다. 클린
            코드와 최신 개발 방법론을 적용하여 지속 가능한 솔루션을 제공합니다.
          </p>

          <div className="flex gap-3 mb-8">
            <div className="flex items-center p-3 bg-blue-50 rounded-full border border-blue-100">
              <SiReact className="text-blue-600 text-2xl" />
            </div>
            <div className="flex items-center p-3 bg-black rounded-full border border-gray-800">
              <SiNextdotjs className="text-white text-2xl" />
            </div>
            <div className="flex items-center p-3 bg-blue-50 rounded-full border border-blue-100">
              <SiTypescript className="text-blue-600 text-2xl" />
            </div>
            <div className="flex items-center p-3 bg-cyan-50 rounded-full border border-cyan-100">
              <SiTailwindcss className="text-cyan-600 text-2xl" />
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-full border border-yellow-100">
              <SiJavascript className="text-yellow-600 text-2xl" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center gap-2"
            >
              <FiSend className="text-lg" /> 연락하기
            </Link>
            <Link
              href="/skills"
              className="px-8 py-3 border border-gray-300 text-gray-800 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
            >
              <FiCode className="text-lg" /> 기술 스택
            </Link>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiGithub className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiTwitter className="text-xl" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <ScrollReveal direction="left" delay={0.2}>
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse opacity-30"></div>
            <div className="absolute inset-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20"></div>
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* 프로필 이미지 */}
              <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center bg-blue-50">
                  <svg className="w-40 h-40 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-lg rotate-12 opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400 rounded-lg -rotate-12 opacity-70"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
