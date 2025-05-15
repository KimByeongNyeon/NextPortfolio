"use client";

import { Suspense } from "react";
import MarkdownRenderer from "@/app/blog/components/MarkdownRenderer";

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  // console.log("BlogPostContent 렌더링!");

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md prose prose-blue max-w-none">
      <Suspense
        fallback={
          <div className="py-16 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">게시글을 불러오는 중...</p>
          </div>
        }
      >
        <MarkdownRenderer content={content} />
      </Suspense>
    </div>
  );
}
