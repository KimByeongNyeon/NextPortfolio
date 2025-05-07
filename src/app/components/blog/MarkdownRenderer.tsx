"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <motion.div className="prose prose-lg max-w-none prose-blue prose-headings:scroll-mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight, remarkGfm]}
        components={{
          h1: ({ children }) => (
            <motion.h1 className="text-3xl font-bold mb-5 mt-8 pb-2 border-b border-gray-200" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
              {children}
            </motion.h1>
          ),
          h2: ({ children }) => (
            <motion.h2 className="text-2xl font-bold mb-4 mt-6 text-gray-800" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
              {children}
            </motion.h2>
          ),
          h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-5 text-gray-700">{children}</h3>,
          p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-gray-700">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-5 py-2 mb-5 italic bg-blue-50 rounded-r text-gray-700">{children}</blockquote>,
          code: (props: any) => {
            const { inline, className, children, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <div className="mb-5 relative group">
                <div className="absolute right-2 top-2 bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded opacity-70">{match[1]}</div>
                <pre className="overflow-auto rounded-lg p-4 bg-gray-800 text-white">
                  <code className={className} {...rest}>
                    {children}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="bg-gray-100 rounded-md px-1.5 py-0.5 text-gray-800 font-mono text-sm" {...rest}>
                {children}
              </code>
            );
          },
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <div className="my-6 rounded-lg overflow-hidden shadow-md">
              {src && (
                <div className="relative rounded-lg overflow-hidden">
                  <img src={src} alt={alt || ""} className="w-full rounded-lg transition-transform duration-500 hover:scale-105" />
                </div>
              )}
              {alt && <p className="text-center text-sm text-gray-500 mt-2 italic">{alt}</p>}
            </div>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-lg shadow-sm border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
          th: ({ children }) => <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>,
          td: ({ children }) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{children}</td>,
          tr: ({ children }) => <tr className="even:bg-gray-50">{children}</tr>,
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}
