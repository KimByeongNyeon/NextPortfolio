import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function GET() {
  const notionApiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  // 환경 변수 확인
  if (!notionApiKey || !databaseId) {
    return NextResponse.json(
      {
        error: '환경 변수가 설정되지 않았습니다.',
        apiKeyExists: !!notionApiKey,
        databaseIdExists: !!databaseId,
      },
      { status: 500 }
    );
  }

  try {
    // 테스트용 클라이언트 생성
    const testClient = new Client({
      auth: notionApiKey,
    });

    // 간단한 API 호출로 연결 테스트
    const response = await testClient.users.me({});

    return NextResponse.json({
      success: true,
      user: {
        id: response.id,
        name: response.name,
        type: response.type,
      },
      message: 'Notion API에 성공적으로 연결되었습니다.',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
        status: error.status,
        details: error.toString(),
      },
      { status: 500 }
    );
  }
} 