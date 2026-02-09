'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type BlogPost = {
  id: number | string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

interface BlogFilterProps {
  posts: BlogPost[];
  onFilterChange: (filtered: BlogPost[]) => void;
}

export default function BlogFilter({ posts, onFilterChange }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // 블로그 포스트에서 유니크한 카테고리 추출
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      onFilterChange(posts);
    } else {
      const filteredPosts = posts.filter(post => post.category === category);
      onFilterChange(filteredPosts);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        카테고리
      </h2>
      
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 relative border ${
              activeCategory === category
                ? 'text-white border-blue-600 shadow-md'
                : 'text-gray-600 hover:text-gray-900 border-gray-200 hover:border-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === category && (
              <motion.span
                layoutId="activeCategoryBg"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <span className="relative z-10">
              {category === 'all' ? '전체' : category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </motion.button>
        ))}
      </div>
      
      <div className="relative h-12 bg-gray-50 rounded-lg px-4 flex items-center transition-colors">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-700 font-medium transition-colors">
              {activeCategory === 'all'
                ? `전체 ${posts.length}개의 포스트`
                : `${activeCategory === 'all' ? '전체' : activeCategory} 카테고리에 ${
                    posts.filter(post => post.category === activeCategory).length
                  }개의 포스트`}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 