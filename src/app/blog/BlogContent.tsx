'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StaggeredAnimation from '../components/StaggeredAnimation';
import ScrollReveal from '../components/common/ScrollReveal';
import BlogFilter from '../components/blog/BlogFilter';
import { NotionPost } from '@/types/notion';

type BlogPost = {
  id: number | string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

interface BlogContentProps {
  initialPosts: NotionPost[];
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  // 노션 포스트를 BlogFilter에서 사용할 수 있는 형식으로 변환
  const convertedPosts = initialPosts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
  }));

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(convertedPosts);

  return (
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <BlogFilter posts={convertedPosts} onFilterChange={setFilteredPosts} />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {filteredPosts.map((post, index) => (
          <ScrollReveal key={post.id} delay={index * 0.1}>
            <BlogPostCard 
              post={post} 
              coverImage={initialPosts.find(p => p.id === post.id)?.coverImage}
              slug={initialPosts.find(p => p.id === post.id)?.slug || post.id.toString()}
            />
          </ScrollReveal>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="py-16 text-center">
          <div className="inline-block p-6 rounded-lg bg-gray-50 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-gray-500 text-lg">해당 카테고리에 게시글이 없습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}

interface BlogPostCardProps {
  post: BlogPost;
  coverImage?: string;
  slug: string;
}

function BlogPostCard({ post, coverImage, slug }: BlogPostCardProps) {
  return (
    <motion.div 
      className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {coverImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize font-medium">
            {post.category}
          </span>
          <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
            {post.readTime}
          </span>
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h2>
        <div className="text-sm text-gray-500 mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {post.date}
        </div>
        <p className="mb-4 text-gray-600 flex-grow">{post.excerpt}</p>
        <Link 
          href={`/blog/${slug}`} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
        >
          더 읽기
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
} 