import { NotionPost } from "@/types/notion";

interface BlogPostHeaderProps {
  post: NotionPost;
  formattedDate: string;
}

export default function BlogPostHeader({ post, formattedDate }: BlogPostHeaderProps) {
  return (
    <>
      {post.coverImage && (
        <div className="w-full h-72 sm:h-96 mb-8 overflow-hidden rounded-xl shadow-lg relative">
          <div className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-700 ease-in-out" style={{ backgroundImage: `url(${post.coverImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full capitalize font-medium backdrop-blur-sm">{post.category}</span>
                <span className="px-3 py-1 text-xs bg-gray-800/70 text-white rounded-full backdrop-blur-sm">{post.readTime}</span>
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
            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize font-medium">{post.category}</span>
            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{post.readTime}</span>
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
    </>
  );
}
