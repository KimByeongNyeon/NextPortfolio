import { Suspense } from "react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/common/ScrollReveal";
import BlogContent from "./BlogContent";
import { getAllPosts } from "@/lib/notion";
import { NotionPost } from "@/types/notion";
import { mockPosts } from "@/lib/mockData";

// 정적 생성을 위한 revalidate 설정
export const revalidate = 3600; // 1시간마다 재생성

export default async function BlogPage() {
  let posts: NotionPost[] = [];

  try {
    // 노션에서 포스트 가져오기 시도
    posts = await getAllPosts();
    console.log("노션에서 가져온 포스트 수:", posts.length);

    // 노션에서 포스트를 가져오지 못했다면 모의 데이터 사용
    if (posts.length === 0) {
      console.log("노션 API 연결에 실패했거나 포스트가 없습니다. 모의 데이터를 사용합니다.");
      posts = mockPosts;
    }
  } catch (error) {
    console.error("노션 API 오류:", error);
    // 오류 발생 시 모의 데이터 사용
    posts = mockPosts;
  }

  return (
    <PageTransition animationType="slide-left">
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500">
        <div className="container mx-auto py-10 px-4">
          <ScrollReveal>
            <h1 className="text-3xl font-bold mb-6 text-gray-900">블로그</h1>
          </ScrollReveal>

          <Suspense fallback={<div className="py-10 text-center text-gray-500">블로그 글을 불러오는 중...</div>}>
            <BlogContent initialPosts={posts} />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  );
}
