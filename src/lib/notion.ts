import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { mockPosts, getMockPostContent } from "./mockData";
import { NotionPost } from "@/types/notion";
import { BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Notion API 클라이언트 초기화 - 개선된 방식
let notion: Client;
let n2m: NotionToMarkdown;

try {
  const notionApiKey = process.env.NOTION_API_KEY;

  if (!notionApiKey) {
    console.error("NOTION_API_KEY가 환경 변수에 설정되지 않았습니다.");
    throw new Error("NOTION_API_KEY is not set");
  }

  // 클라이언트 초기화
  notion = new Client({ auth: notionApiKey });

  // 노션 페이지를 마크다운으로 변환하기 위한 인스턴스
  n2m = new NotionToMarkdown({ notionClient: notion });

  // console.log("Notion 클라이언트가 성공적으로 초기화되었습니다.");
} catch (error) {
  console.error("Notion 클라이언트 초기화 실패:", error);
  // 클라이언트 초기화 실패 시 빈 객체 생성 (실제로는 사용되지 않음)
  notion = {} as Client;
  n2m = {} as NotionToMarkdown;
}

const databaseId = process.env.NOTION_DATABASE_ID || "";

// 데이터베이스에서 모든 포스트 가져오기
export async function getAllPosts(): Promise<NotionPost[]> {
  try {
    // console.log("노션 API 요청 시작 - 데이터베이스 ID:", databaseId.substring(0, 5) + "...");

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
    });

    const posts = response.results.map((page: any) => {
      const properties = page.properties;

      // 커버 이미지 URL 추출 (여러 형태 지원)
      let coverImageUrl = "";
      if (properties.CoverImage) {
        // Files & media 타입의 경우
        if (properties.CoverImage.files && properties.CoverImage.files.length > 0) {
          const file = properties.CoverImage.files[0];
          coverImageUrl = file.file?.url || file.external?.url || "";
        }
        // URL 타입의 경우  
        else if (properties.CoverImage.url) {
          coverImageUrl = properties.CoverImage.url;
        }
        // Rich text 타입의 경우
        else if (properties.CoverImage.rich_text && properties.CoverImage.rich_text.length > 0) {
          coverImageUrl = properties.CoverImage.rich_text[0].plain_text || "";
        }
      }

      return {
        id: page.id,
        title: properties.Title?.title[0]?.plain_text || "",
        slug: properties.Slug?.rich_text[0]?.plain_text || "",
        excerpt: properties.Excerpt?.rich_text[0]?.plain_text || "",
        date: properties.Date?.date?.start || page.created_time,
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        category: properties.Category?.select?.name || "",
        readTime: properties.ReadTime?.rich_text[0]?.plain_text || "",
        coverImage: coverImageUrl,
      };
    });

    return posts;
  } catch (error) {
    console.error("노션 데이터베이스에서 포스트를 가져오는 중 오류가 발생했습니다:", error);
    return [];
  }
}

// 특정 포스트의 내용 가져오기
export async function getPostContent(pageId: string): Promise<string> {
  try {
    // NotionToMarkdown 사용 시도
    try {
      const mdblocks = await n2m.pageToMarkdown(pageId);
      const mdString = n2m.toMarkdownString(mdblocks);
      // console.log("NotionToMarkdown으로 변환 성공");
      return mdString.parent;
    } catch (mdError) {
      console.warn("NotionToMarkdown 변환 실패, 대체 방법으로 시도:", mdError);

      // 대체 방법으로 계속 진행
      let content = "";
      let hasMore = true;
      let startCursor: string | null = null;

      while (hasMore) {
        const response = await notion.blocks.children.list({
          block_id: pageId,
          start_cursor: startCursor || undefined,
          page_size: 100,
        });

        const blocks = response.results;

        for (const block of blocks) {
          if ("type" in block) {
            switch (block.type) {
              case "paragraph":
                content += block.paragraph.rich_text.map((text: any) => text.plain_text).join("") + "\n\n";
                break;
              case "heading_1":
                content += "# " + block.heading_1.rich_text.map((text: any) => text.plain_text).join("") + "\n\n";
                break;
              case "heading_2":
                content += "## " + block.heading_2.rich_text.map((text: any) => text.plain_text).join("") + "\n\n";
                break;
              case "heading_3":
                content += "### " + block.heading_3.rich_text.map((text: any) => text.plain_text).join("") + "\n\n";
                break;
              case "bulleted_list_item":
                content += "- " + block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join("") + "\n";
                break;
              case "numbered_list_item":
                content += "1. " + block.numbered_list_item.rich_text.map((text: any) => text.plain_text).join("") + "\n";
                break;
              case "image":
                if ("file" in block.image) {
                  content += `![이미지](${block.image.file.url})\n\n`;
                } else if ("external" in block.image) {
                  content += `![이미지](${block.image.external.url})\n\n`;
                }
                break;
              case "code":
                content += "```" + (block.code.language || "") + "\n";
                content += block.code.rich_text.map((text: any) => text.plain_text).join("") + "\n";
                content += "```\n\n";
                break;
            }
          }
        }

        hasMore = response.has_more;
        startCursor = response.next_cursor;
      }
      // console.log("대체 방법으로 포스트 내용 가져오기 성공");
      return content;
    }
  } catch (error) {
    console.error("포스트 내용을 가져오는 중 오류가 발생했습니다:", error);
    return "";
  }
}

// 특정 포스트 메타데이터 가져오기
export async function getPost(pageId: string) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const properties = (page as any).properties;

    // 커버 이미지 URL 추출
    let coverImageUrl = "";
    if (properties.CoverImage) {
      if (properties.CoverImage.files && properties.CoverImage.files.length > 0) {
        const file = properties.CoverImage.files[0];
        coverImageUrl = file.file?.url || file.external?.url || "";
      }
      else if (properties.CoverImage.url) {
        coverImageUrl = properties.CoverImage.url;
      }
      else if (properties.CoverImage.rich_text && properties.CoverImage.rich_text.length > 0) {
        coverImageUrl = properties.CoverImage.rich_text[0].plain_text || "";
      }
    }

    return {
      id: page.id,
      title: properties.Title?.title[0]?.plain_text || "제목 없음",
      date: properties.Date?.date?.start || "",
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      excerpt: properties.Excerpt?.rich_text[0]?.plain_text || "",
      category: properties.Category?.select?.name || "미분류",
      readTime: properties.ReadTime?.rich_text[0]?.plain_text || "3분 소요",
      coverImage: coverImageUrl,
    };
  } catch (error) {
    console.error("노션 페이지 메타데이터를 가져오는 중 오류가 발생했습니다:", error);
    // pageId와 일치하는 모의 포스트 찾기
    const mockPost = mockPosts.find((post) => post.id === pageId);
    return mockPost || null;
  }
}

// 특정 카테고리로 포스트 필터링
export async function getPostsByCategory(category: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    console.error("NOTION_DATABASE_ID가 환경 변수에 설정되지 않았습니다.");
    // 카테고리로 모의 데이터 필터링
    return mockPosts.filter((post) => post.category === category);
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Category",
        select: {
          equals: category,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    if (response.results.length === 0) {
      // 결과가 없으면 모의 데이터에서 필터링
      return mockPosts.filter((post) => post.category === category);
    }

    return response.results.map((page: any) => {
      const properties = page.properties;

      // 커버 이미지 URL 추출
      let coverImageUrl = "";
      if (properties.CoverImage) {
        if (properties.CoverImage.files && properties.CoverImage.files.length > 0) {
          const file = properties.CoverImage.files[0];
          coverImageUrl = file.file?.url || file.external?.url || "";
        }
        else if (properties.CoverImage.url) {
          coverImageUrl = properties.CoverImage.url;
        }
        else if (properties.CoverImage.rich_text && properties.CoverImage.rich_text.length > 0) {
          coverImageUrl = properties.CoverImage.rich_text[0].plain_text || "";
        }
      }

      return {
        id: page.id,
        title: properties.Title?.title[0]?.plain_text || "제목 없음",
        slug: properties.Slug?.rich_text[0]?.plain_text || page.id,
        date: properties.Date?.date?.start || "",
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        excerpt: properties.Excerpt?.rich_text[0]?.plain_text || "",
        category: properties.Category?.select?.name || "미분류",
        readTime: properties.ReadTime?.rich_text[0]?.plain_text || "3분 소요",
        coverImage: coverImageUrl,
      };
    });
  } catch (error) {
    console.error("특정 카테고리의 포스트를 가져오는 중 오류가 발생했습니다:", error);
    // 오류 발생 시 모의 데이터에서 필터링
    return mockPosts.filter((post) => post.category === category);
  }
}
