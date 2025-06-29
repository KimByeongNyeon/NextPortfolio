# 🚀 NextPortfolio

**김병년의 개인 포트폴리오 웹사이트**

현대적이고 반응형인 개인 포트폴리오 웹사이트입니다. Next.js 14와 TypeScript로 구축되었으며, Notion API를 통한 블로그 기능을 제공합니다.

## ✨ 주요 기능

- **🎨 미니멀 디자인**: 깔끔하고 전문적인 사용자 인터페이스
- **📱 완전 반응형**: 모든 디바이스에서 최적화된 경험
- **⚡ 성능 최적화**: Next.js 14의 최신 기능 활용
- **📝 동적 블로그**: Notion API를 통한 실시간 콘텐츠 관리
- **🎭 부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브 효과
- **🔍 SEO 최적화**: 검색 엔진 최적화 및 메타데이터 설정

## 🛠️ 기술 스택

### Frontend
- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리

### Backend & CMS
- **Notion API** - 헤드리스 CMS로 블로그 관리
- **Vercel** - 배포 및 호스팅

### Design & UX
- **Pretendard** - 한국어 최적화 폰트
- **Responsive Design** - 모바일 퍼스트 접근법
- **Modern UI/UX** - 미니멀하고 직관적인 인터페이스

## 🚀 시작하기

### 필요 조건
- Node.js 18.0 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/kimbyeongnyeon/NextPortfolio.git
   cd NextPortfolio
   ```

2. **의존성 설치**
   ```bash
   npm install
   # 또는
   yarn install
   # 또는
   pnpm install
   ```

3. **환경 변수 설정**
   `.env.local` 파일을 생성하고 다음 변수들을 설정하세요:
   ```env
   NOTION_TOKEN=your_notion_integration_token
   NOTION_DATABASE_ID=your_notion_database_id
   ```

4. **개발 서버 실행**
   ```bash
   npm run dev
   # 또는
   yarn dev
   # 또는
   pnpm dev
   ```

5. **브라우저에서 확인**
   [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📁 프로젝트 구조

```
NextPortfolio/
├── public/                 # 정적 자산
│   ├── assets/            # 이미지 및 미디어 파일
│   └── fonts/             # 폰트 파일
├── src/
│   ├── app/               # Next.js 13+ App Router
│   │   ├── blog/          # 블로그 페이지
│   │   ├── components/    # React 컴포넌트
│   │   ├── api/           # API 라우트
│   │   └── globals.css    # 전역 스타일
│   ├── lib/               # 유틸리티 및 설정
│   └── types/             # TypeScript 타입 정의
├── docs/                  # 문서
├── next.config.ts         # Next.js 설정
├── tailwind.config.js     # Tailwind CSS 설정
└── tsconfig.json          # TypeScript 설정
```

## 🎯 주요 섹션

### 🏠 홈
- **Hero Section**: 간단한 자기소개와 핵심 가치
- **Skills Section**: 프론트엔드 기술 스택 시각화
- **Projects Section**: 주요 프로젝트 쇼케이스
- **Thank You Section**: 연락처 및 소셜 링크

### 📝 블로그
- Notion API를 통한 동적 콘텐츠
- 카테고리별 필터링
- 반응형 카드 레이아웃
- 검색 및 태그 기능

## ⚙️ Notion 설정

블로그 기능을 사용하려면 Notion 데이터베이스를 설정해야 합니다:

1. **Notion Integration 생성**
   - [Notion Developers](https://developers.notion.com/)에서 새 integration 생성
   - API 토큰 복사

2. **데이터베이스 구조**
   ```
   - Title (제목) - Title
   - Category (카테고리) - Select
   - Date (날짜) - Date
   - ReadTime (읽기 시간) - Rich Text
   - Excerpt (요약) - Rich Text
   - CoverImage (커버 이미지) - Files & Media
   - Published (게시됨) - Checkbox
   ```

3. **Integration 연결**
   - 데이터베이스 페이지에서 "..." → "연결" → Integration 선택

자세한 설정 방법은 [Notion API 설정 가이드](./docs/notion-api-setup.md)를 참조하세요.

## 🎨 커스터마이징

### 색상 테마
`tailwind.config.js`에서 색상 팔레트를 수정할 수 있습니다:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      // ...
    }
  }
}
```

### 폰트
현재 Pretendard 폰트를 사용하고 있으며, `src/app/layout.tsx`에서 변경 가능합니다.

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 배포

### Vercel (권장)
1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 환경 변수 설정
3. 자동 배포 완료

### 기타 플랫폼
- Netlify
- AWS Amplify
- Firebase Hosting

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👨‍💻 개발자

**김병년 (KimByeongNyeon)**
- GitHub: [주소](https://github.com/KimByeongNyeon)
- Portfolio: [보러가기](https://next-portfolio-bbwx.vercel.app/)

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 도움을 받았습니다:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Notion API](https://developers.notion.com/)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
