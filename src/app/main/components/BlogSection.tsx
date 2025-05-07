import Link from "next/link";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function BlogSection() {
  return (
    <section>
      <ScrollReveal>
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <h2 className="text-2xl font-bold mx-4 px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-gray-800 border border-gray-200">최근 게시글</h2>
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
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {"{ "}개발자라면 알아야 할 웹 성능 최적화 기법{" }"}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    프론트엔드 성능 최적화는 사용자 경험에 직접적인 영향을 미칩니다. 코드 스플리팅, 레이지 로딩, 메모이제이션까지 다양한 기법을 알아봅니다.
                  </p>
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
  );
}
