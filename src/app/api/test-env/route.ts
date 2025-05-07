import { NextResponse } from 'next/server';

export async function GET() {
  // 보안을 위해 실제 키를 노출하지 않고 존재 여부만 확인
  return NextResponse.json({
    notionApiKeyExists: !!process.env.NOTION_API_KEY,
    notionDatabaseIdExists: !!process.env.NOTION_DATABASE_ID,
    // 키의 일부만 표시 (보안상)
    notionApiKeyStart: process.env.NOTION_API_KEY ? `${process.env.NOTION_API_KEY.substring(0, 3)}...` : null,
    notionDatabaseIdStart: process.env.NOTION_DATABASE_ID ? `${process.env.NOTION_DATABASE_ID.substring(0, 3)}...` : null,
  });
} 