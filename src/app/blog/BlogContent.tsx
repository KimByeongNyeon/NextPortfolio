"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import StaggeredAnimation from "../components/StaggeredAnimation";
import ScrollReveal from "../components/common/ScrollReveal";
import BlogFilter from "./components/BlogFilter";
import { NotionPost } from "@/types/notion";

type BlogPost = {
  id: number | string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage?: string;
};

interface BlogContentProps {
  initialPosts: NotionPost[];
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  // 노션 포스트를 BlogFilter에서 사용할 수 있는 형식으로 변환 및 최신 날짜 순 정렬
  const convertedPosts = initialPosts
    .map((post) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      coverImage: post.coverImage,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(convertedPosts);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ScrollReveal>
        <BlogFilter posts={convertedPosts} onFilterChange={setFilteredPosts} />
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div key={filteredPosts.length} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="pt-12">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.1}>
                  <BlogPostCard post={post} coverImage={initialPosts.find((p) => p.id === post.id)?.coverImage} slug={initialPosts.find((p) => p.id === post.id)?.slug || post.id.toString()} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <motion.div
                className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">포스트가 없습니다</h3>
                <p className="text-gray-600 mb-4">해당 카테고리에 게시글이 아직 없습니다.</p>
                <button
                  onClick={() => setFilteredPosts(convertedPosts)}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg font-medium"
                >
                  모든 글 보기
                </button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface BlogPostCardProps {
  post: BlogPost;
  coverImage?: string;
  slug: string;
}

function BlogPostCard({ post, coverImage, slug }: BlogPostCardProps) {
  const [imageError, setImageError] = useState(false);
  const [useRegularImg, setUseRegularImg] = useState(false);

  return (
    <motion.div
      className="group overflow-hidden h-full flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${slug}`} className="block overflow-hidden">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {coverImage ? (
            <>
              {/* base64 이미지나 data URL은 항상 일반 img 태그 사용 */}
              {coverImage.startsWith('data:') || imageError || useRegularImg ? (
                <img
                  src={coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* HTTP/HTTPS URL만 Next.js Image 컴포넌트 사용 */
                <Image
                  src={coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  unoptimized={true}
                  onError={() => {
                    setImageError(true);
                    setUseRegularImg(true);
                  }}
                />
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium text-sm tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              자세히 보기
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize font-medium transition-colors">{post.category}</span>
          <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full flex items-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>

        <Link href={`/blog/${slug}`}>
          <h2 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h2>
        </Link>

        <div className="text-sm text-gray-500 mb-4 flex items-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {post.date}
        </div>

        <p className="mb-5 text-gray-600 line-clamp-3 text-sm leading-relaxed flex-grow transition-colors">{post.excerpt}</p>

        <Link href={`/blog/${slug}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group mt-auto">
          <span className="group-hover:underline">더 읽기</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
