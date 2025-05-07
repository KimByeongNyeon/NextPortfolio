import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiTwitter, FiCode, FiSend } from 'react-icons/fi';
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import PageTransition from '../components/PageTransition';
import ProjectSlider from '../components/main/ProjectSlider';
import ScrollReveal from '../components/common/ScrollReveal';

export default function MainPage() {
  return (
    <PageTransition animationType="slide-right">
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
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
                <span className="text-blue-600 font-semibold">사용자 경험을 최우선으로</span> 고려하는 개발자입니다.
                모던 웹 기술을 활용해 직관적이고 반응형인 웹사이트와 애플리케이션을 구축합니다.
                클린 코드와 최신 개발 방법론을 적용하여 지속 가능한 솔루션을 제공합니다.
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

        {/* Projects Section */}
        <section className="mb-24">
          <ScrollReveal>
            <div className="flex items-center mb-8">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <h2 className="text-2xl font-bold mx-4 px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-gray-800 border border-gray-200">
                주요 프로젝트
              </h2>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>
            <ProjectSlider />
          </ScrollReveal>
        </section>

        {/* Blog Posts Section */}
        <section>
          <ScrollReveal>
            <div className="flex items-center mb-8">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <h2 className="text-2xl font-bold mx-4 px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-gray-800 border border-gray-200">
                최근 게시글
              </h2>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <ScrollReveal key={item} delay={item * 0.1}>
                  <div className="group border rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-blue-100 to-transparent rounded-bl-3xl -mr-4 -mt-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full mr-2 font-medium">프론트엔드</span>
                        <span>3일 전</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">{"{ "}개발자라면 알아야 할 웹 성능 최적화 기법{" }"}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">프론트엔드 성능 최적화는 사용자 경험에 직접적인 영향을 미칩니다. 코드 스플리팅, 레이지 로딩, 메모이제이션까지 다양한 기법을 알아봅니다.</p>
                      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline">
                        더 읽기
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Link href="/blog" className="inline-flex items-center px-6 py-3 border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors font-medium">
                모든 게시글 보기
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
}
