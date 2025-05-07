import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageTransition from '@/app/components/PageTransition';
import ScrollReveal from '@/app/components/common/ScrollReveal';
import MarkdownRenderer from '@/app/components/blog/MarkdownRenderer';
import { getAllPosts, getPostContent } from '@/lib/notion';
import { NotionPost } from '@/types/notion';

// 정적 페이지 생성을 위한 경로 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 1시간마다 재검증
export const revalidate = 3600;

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fix: await the params to resolve the Next.js warning
  const { slug } = await Promise.resolve(params);
  
  // 모든 게시글 가져오기
  const posts = await getAllPosts();
  
  // slug로 게시글 찾기
  const post = posts.find((post) => post.slug === slug);
  
  // 게시글이 없으면 404
  if (!post) {
    notFound();
  }
  
  // 게시글 내용 가져오기
  const content = await getPostContent(post.id);
  
  // 날짜 포맷팅
  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <PageTransition animationType="fade">
      <article className="max-w-4xl mx-auto py-10 px-4">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group mb-6 inline-block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            모든 게시글로 돌아가기
          </Link>
        </div>
        
        <ScrollReveal>
          {post.coverImage && (
            <div className="w-full h-72 sm:h-96 mb-8 overflow-hidden rounded-xl shadow-lg relative">
              <div 
                className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-700 ease-in-out"
                style={{ backgroundImage: `url(${post.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full capitalize font-medium backdrop-blur-sm">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 text-xs bg-gray-800/70 text-white rounded-full backdrop-blur-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-md">{post.title}</h1>
                  <div className="text-gray-200 flex items-center backdrop-blur-sm bg-black/20 rounded-full px-3 py-1 w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formattedDate}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {!post.coverImage && (
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize font-medium">
                  {post.category}
                </span>
                <span className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">{post.title}</h1>
              <div className="text-gray-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </div>
            </div>
          )}
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md prose prose-blue max-w-none">
            <Suspense fallback={
              <div className="py-16 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-600">게시글을 불러오는 중...</p>
              </div>
            }>
              <MarkdownRenderer content={content} />
            </Suspense>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              태그
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200 transition-colors duration-200 hover:text-blue-600 hover:border-blue-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length === 0 && (
                <span className="text-gray-500 italic">등록된 태그가 없습니다.</span>
              )}
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="mt-16 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-full border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors duration-200 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              더 많은 글 보기
            </Link>
          </div>
        </ScrollReveal>
      </article>
    </PageTransition>
  );
} 