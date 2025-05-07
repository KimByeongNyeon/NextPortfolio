import { getAllPosts } from "./notion";
import { NotionPost } from "@/types/notion";

export async function getPostBySlug(slug: string): Promise<NotionPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getAdjacentPosts(currentPostId: string): Promise<{ prevPost: NotionPost | null; nextPost: NotionPost | null }> {
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex((post) => post.id === currentPostId);

  if (currentIndex === -1) {
    return { prevPost: null, nextPost: null };
  }

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return { prevPost, nextPost };
}
