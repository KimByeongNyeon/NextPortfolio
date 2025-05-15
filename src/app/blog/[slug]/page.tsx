import { notFound } from "next/navigation";
import { getPostContent } from "@/lib/notion";
import { getPostBySlug, getAdjacentPosts } from "../../../lib/blog";
import BlogPostHeader from "./components/BlogPostHeader";
import BlogPostContent from "./components/BlogPostContent";
import BlogPostTags from "./components/BlogPostTags";
import BlogPostNavigation from "./components/BlogPostNavigation";
import { getAllPosts } from "@/lib/notion";

// 정적 페이지 생성을 위한 경로 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 1시간마다 재검증
export const revalidate = 3600;

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const content = await getPostContent(post.id);
  const { prevPost, nextPost } = await getAdjacentPosts(post.id);

  const formattedDate = new Date(post.date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 콘텐츠 길이 로깅
  console.log(`콘텐츠 길이: ${content.length} 자`);

  // 기본 렌더링: 애니메이션 없이 직접 렌더링
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <BlogPostHeader post={post} formattedDate={formattedDate} />
      <BlogPostContent content={content} />
      <BlogPostTags tags={post.tags} />
      <BlogPostNavigation prevPost={prevPost} nextPost={nextPost} />
    </article>
  );

  // 참고: 애니메이션을 다시 사용하려면 아래 코드를 활성화하고 위 return문을 주석 처리하세요
  // 단, 긴 콘텐츠에서는 성능 문제가 발생할 수 있습니다.
  /*
  return (
    <PageTransition>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <ScrollReveal>
          <BlogPostHeader post={post} formattedDate={formattedDate} />
        </ScrollReveal>
        
        <BlogPostContent content={content} />
        
        <ScrollReveal>
          <BlogPostTags tags={post.tags} />
          <BlogPostNavigation prevPost={prevPost} nextPost={nextPost} />
        </ScrollReveal>
      </article>
    </PageTransition>
  );
  */
}
