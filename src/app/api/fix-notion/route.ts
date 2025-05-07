import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function GET() {
  try {
    // Get environment variables
    const notionApiKey = process.env.NOTION_API_KEY;
    const databaseId = process.env.NOTION_DATABASE_ID;
    
    // Check if environment variables exist
    const envCheck = {
      notionApiKeyExists: !!notionApiKey,
      databaseIdExists: !!databaseId,
      notionApiKeyLength: notionApiKey ? notionApiKey.length : 0,
      notionApiKeyFirst3: notionApiKey ? notionApiKey.substring(0, 3) : '',
      notionApiKeyLast3: notionApiKey ? notionApiKey.substring(notionApiKey.length - 3) : '',
      databaseIdLength: databaseId ? databaseId.length : 0,
      databaseIdFirst3: databaseId ? databaseId.substring(0, 3) : '',
      databaseIdLast3: databaseId ? databaseId.substring(databaseId.length - 3) : '',
    };
    
    // Try to initialize client and make a test call
    let connectionTest = { success: false, error: null, details: null };
    
    if (notionApiKey) {
      try {
        const testClient = new Client({ auth: notionApiKey });
        // Try a simple API call that doesn't require database access
        const response = await testClient.users.me({});
        connectionTest = {
          success: true,
          error: null,
          details: {
            id: response.id,
            name: response.name,
            type: response.type
          }
        };
      } catch (error: any) {
        connectionTest = {
          success: false,
          error: error.message,
          details: {
            code: error.code,
            status: error.status
          }
        };
      }
    }
    
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environmentCheck: envCheck,
      connectionTest,
      nextSteps: [
        "Check if NOTION_API_KEY exists and is correct",
        "Verify NOTION_DATABASE_ID is valid",
        "Make sure your Notion integration has access to the database",
        "Check integration permissions in Notion",
        "Reload the server after fixing environment variables"
      ]
    });
  } catch (error: any) {
    return NextResponse.json({
      error: "Debug endpoint error",
      message: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 
 