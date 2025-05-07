'use client';

import { SiNextdotjs } from 'react-icons/si';

export default function Header() {
  return (
    <header className="mb-16 text-center max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
            <SiNextdotjs className="text-4xl text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-400 rounded-lg -rotate-12 opacity-90"></div>
        </div>
      </div>
      
      <h1 className="text-5xl font-bold mb-4 text-gray-800">Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dashboard</span></h1>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        프론트엔드 개발자 포트폴리오에 오신 것을 환영합니다. <br className="hidden md:block" />
        아래 메뉴에서 원하는 섹션을 선택해 주세요.
      </p>
      
      <div className="inline-block font-mono text-sm bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md mb-8">
        <code>{`const welcome = (visitor) => { 
  console.log("Hello, ${"{"}visitor{"}"}! Thanks for visiting.");
}`}</code>
      </div>
    </header>
  );
} 