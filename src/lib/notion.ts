import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { mockPosts, getMockPostContent } from './mockData';

// Notion API 클라이언트 초기화 - 개선된 방식
let notion: Client;
let n2m: NotionToMarkdown;

try {
  const notionApiKey = process.env.NOTION_API_KEY;

  if (!notionApiKey) {
    console.error('NOTION_API_KEY가 환경 변수에 설정되지 않았습니다.');
    throw new Error('NOTION_API_KEY is not set');
  }

  // 클라이언트 초기화
  notion = new Client({ auth: notionApiKey });
  
  // 노션 페이지를 마크다운으로 변환하기 위한 인스턴스
  n2m = new NotionToMarkdown({ notionClient: notion });
  
  console.log('Notion 클라이언트가 성공적으로 초기화되었습니다.');
} catch (error) {
  console.error('Notion 클라이언트 초기화 실패:', error);
  // 클라이언트 초기화 실패 시 빈 객체 생성 (실제로는 사용되지 않음)
  notion = {} as Client;
  n2m = {} as NotionToMarkdown;
}

// 데이터베이스에서 모든 포스트 가져오기
export async function getAllPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    console.error('NOTION_DATABASE_ID가 환경 변수에 설정되지 않았습니다.');
    return mockPosts; // 환경 변수가 없으면 모의 데이터 반환
  }
  
  try {
    console.log('노션 API 요청 시작 - 데이터베이스 ID:', databaseId.substring(0, 5) + '...');
    
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    console.log('노션 API 응답 성공 - 결과 수:', response.results.length);

    if (response.results.length === 0) {
      console.log('노션 API 결과가 없어 모의 데이터를 사용합니다.');
      return mockPosts;
    }

    return response.results.map((page: any) => {
      return {
        id: page.id,
        title: page.properties.Title?.title[0]?.plain_text || '제목 없음',
        slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
        date: page.properties.Date?.date?.start || '',
        tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        excerpt: page.properties.Excerpt?.rich_text[0]?.plain_text || '',
        category: page.properties.Category?.select?.name || '미분류',
        readTime: page.properties.ReadTime?.rich_text[0]?.plain_text || '3분 소요',
        coverImage: page.properties.CoverImage?.url || page.cover?.external?.url || '',
      };
    });
  } catch (error) {
    console.error('노션 데이터베이스에서 포스트를 가져오는 중 오류가 발생했습니다:', error);
    return mockPosts; // 오류 발생 시 모의 데이터 반환
  }
}

// 특정 포스트의 내용 가져오기
export async function getPostContent(pageId: string) {
  try {
    // 페이지 블럭을 마크다운으로 변환
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdBlocks);
    
    return mdString.parent;
  } catch (error) {
    console.error('노션 페이지 콘텐츠를 가져오는 중 오류가 발생했습니다:', error);
    // 오류 발생 시 모의 데이터 반환
    return getMockPostContent(pageId);
  }
}

// 특정 포스트 메타데이터 가져오기
export async function getPost(pageId: string) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    
    return {
      id: page.id,
      title: (page as any).properties.Title?.title[0]?.plain_text || '제목 없음',
      date: (page as any).properties.Date?.date?.start || '',
      tags: (page as any).properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      excerpt: (page as any).properties.Excerpt?.rich_text[0]?.plain_text || '',
      category: (page as any).properties.Category?.select?.name || '미분류',
      readTime: (page as any).properties.ReadTime?.rich_text[0]?.plain_text || '3분 소요',
      coverImage: (page as any).properties.CoverImage?.url || (page as any).cover?.external?.url || '',
    };
  } catch (error) {
    console.error('노션 페이지 메타데이터를 가져오는 중 오류가 발생했습니다:', error);
    // pageId와 일치하는 모의 포스트 찾기
    const mockPost = mockPosts.find(post => post.id === pageId);
    return mockPost || null;
  }
}

// 특정 카테고리로 포스트 필터링
export async function getPostsByCategory(category: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    console.error('NOTION_DATABASE_ID가 환경 변수에 설정되지 않았습니다.');
    // 카테고리로 모의 데이터 필터링
    return mockPosts.filter(post => post.category === category);
  }
  
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Category',
        select: {
          equals: category,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    if (response.results.length === 0) {
      // 결과가 없으면 모의 데이터에서 필터링
      return mockPosts.filter(post => post.category === category);
    }

    return response.results.map((page: any) => {
      return {
        id: page.id,
        title: page.properties.Title?.title[0]?.plain_text || '제목 없음',
        slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
        date: page.properties.Date?.date?.start || '',
        tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        excerpt: page.properties.Excerpt?.rich_text[0]?.plain_text || '',
        category: page.properties.Category?.select?.name || '미분류',
        readTime: page.properties.ReadTime?.rich_text[0]?.plain_text || '3분 소요',
        coverImage: page.properties.CoverImage?.url || page.cover?.external?.url || '',
      };
    });
  } catch (error) {
    console.error('특정 카테고리의 포스트를 가져오는 중 오류가 발생했습니다:', error);
    // 오류 발생 시 모의 데이터에서 필터링
    return mockPosts.filter(post => post.category === category);
  }
} 