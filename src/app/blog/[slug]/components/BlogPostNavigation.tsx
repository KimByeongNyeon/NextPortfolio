import Link from "next/link";
import { NotionPost } from "@/types/notion";

interface BlogPostNavigationProps {
  prevPost: NotionPost | null;
  nextPost: NotionPost | null;
}

export default function BlogPostNavigation({ prevPost, nextPost }: BlogPostNavigationProps) {
  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="group flex-1 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <span className="text-sm text-gray-500 group-hover:text-blue-500">이전 글</span>
                <h4 className="font-medium group-hover:text-blue-600">{prevPost.title}</h4>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="group flex-1 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-right">
            <div className="flex items-center justify-end">
              <div>
                <span className="text-sm text-gray-500 group-hover:text-blue-500">다음 글</span>
                <h4 className="font-medium group-hover:text-blue-600">{nextPost.title}</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
