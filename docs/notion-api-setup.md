# Notion API 설정 가이드

Next.js 포트폴리오 웹사이트의 블로그 기능은 Notion API를 사용하여 콘텐츠를 가져옵니다. API가 제대로 동작하려면 다음 설정이 필요합니다.

## 1. 환경 변수 설정

프로젝트 루트 디렉토리에 `.env.local` 파일을 만들고 다음 두 환경 변수를 설정하세요:

```
NOTION_API_KEY=your_notion_integration_token_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

## 2. Notion 통합(Integration) 설정

1. [Notion Developers](https://www.notion.so/my-integrations) 페이지에 접속하세요.
2. "새 통합 만들기(Create new integration)"를 클릭하세요.
3. 통합에 이름을 부여하고(예: "포트폴리오 블로그") 워크스페이스를 선택한 후 제출하세요.
4. 생성된 "Internal Integration Token"을 복사하여 `.env.local` 파일의 `NOTION_API_KEY` 값으로 사용하세요.

## 3. Notion 데이터베이스 설정

1. Notion에서 블로그 포스트를 저장할 데이터베이스를 생성하세요.
2. 다음 속성을 데이터베이스에 추가하세요:
   - Title (제목) - 기본 타입
   - Slug (슬러그) - Text 타입
   - Date (날짜) - Date 타입
   - Tags (태그) - Multi-select 타입
   - Excerpt (발췌) - Text 타입
   - Category (카테고리) - Select 타입
   - ReadTime (읽는 시간) - Text 타입
   - CoverImage (커버 이미지 URL) - URL 타입

3. 데이터베이스 페이지에서 "Share" 버튼을 클릭하고 통합을 추가하세요.
4. 데이터베이스 URL에서 ID를 추출하세요. URL의 형식은 다음과 같습니다:
   `https://www.notion.so/{workspace_name}/{database_id}?v={view_id}`
   여기서 `{database_id}`를 복사하여 `.env.local` 파일의 `NOTION_DATABASE_ID` 값으로 사용하세요.

## 4. 디버깅 도구 사용

API 연결에 문제가 있다면 다음 디버깅 도구를 사용하세요:

1. `/api/test-env` 엔드포인트에 접속하여 환경 변수가 올바르게 설정되었는지 확인하세요.
2. `/api/debug-notion` 엔드포인트에 접속하여 API 연결 테스트를 실행하세요.
3. `/api/fix-notion` 엔드포인트에 접속하여 더 자세한 진단 정보를 확인하세요.

## 5. 일반적인 문제 해결

1. **401 Unauthorized 오류**:
   - Notion API 키가 올바른지 확인하세요.
   - 키가 만료되었거나 재설정이 필요할 수 있습니다.

2. **404 Not Found 오류**:
   - 데이터베이스 ID가 올바른지 확인하세요.
   - 통합이 데이터베이스에 접근 권한을 가지고 있는지 확인하세요.

3. **일반적인 연결 문제**:
   - 서버를 재시작하여 환경 변수 변경사항을 적용하세요.
   - Notion API 서비스 상태를 확인하세요.

## 6. 개발 모드에서 테스트

개발 모드에서는 Notion API 연결이 실패하면 자동으로 모의 데이터를 사용하도록 설정되어 있습니다. 이를 통해 API 연결이 없는 상태에서도 개발을 계속할 수 있습니다. 