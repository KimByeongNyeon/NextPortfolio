export type NotionPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  tags: string[];
  excerpt: string;
  category: string;
  readTime: string;
  coverImage?: string;
}; 