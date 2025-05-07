interface BlogPostTagsProps {
  tags: string[];
}

export default function BlogPostTags({ tags }: BlogPostTagsProps) {
  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        태그
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200 transition-colors duration-200 hover:text-blue-600 hover:border-blue-200 cursor-pointer"
          >
            #{tag}
          </span>
        ))}
        {tags.length === 0 && <span className="text-gray-500 italic">등록된 태그가 없습니다.</span>}
      </div>
    </div>
  );
}
