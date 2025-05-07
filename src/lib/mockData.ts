import { NotionPost } from '@/types/notion';

// 임시 블로그 포스트 데이터
export const mockPosts: NotionPost[] = [
  {
    id: 'post-1',
    title: 'Next.js로 시작하는 웹 개발',
    slug: 'getting-started-with-nextjs',
    excerpt: 'Next.js와 React를 사용하여 현대적인 웹 애플리케이션을 구축하는 방법을 알아보세요.',
    date: '2023-05-15',
    tags: ['Next.js', 'React', '웹개발'],
    category: 'frontend',
    readTime: '5분 소요',
    coverImage: 'https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Next.js+Tutorial',
  },
  {
    id: 'post-2',
    title: 'TypeScript를 배워야 하는 이유',
    slug: 'why-learn-typescript',
    excerpt: '대규모 애플리케이션 개발에서 TypeScript가 제공하는 이점을 살펴봅니다.',
    date: '2023-06-20',
    tags: ['TypeScript', 'JavaScript', '개발팁'],
    category: 'frontend',
    readTime: '7분 소요',
    coverImage: 'https://via.placeholder.com/800x400/3178C6/FFFFFF?text=TypeScript',
  },
  {
    id: 'post-3',
    title: '반응형 디자인 모범 사례',
    slug: 'responsive-design-best-practices',
    excerpt: '모든 디바이스에서 훌륭하게 보이는 웹사이트를 만드는 방법을 알아보세요.',
    date: '2023-07-10',
    tags: ['CSS', '반응형디자인', 'UX'],
    category: 'design',
    readTime: '6분 소요',
    coverImage: 'https://via.placeholder.com/800x400/EC4899/FFFFFF?text=Responsive+Design',
  },
  {
    id: 'post-4',
    title: 'Node.js 백엔드 개발 팁',
    slug: 'nodejs-backend-tips',
    excerpt: '효율적인 Node.js 백엔드 구축을 위한 실용적인 팁과 트릭을 소개합니다.',
    date: '2023-08-05',
    tags: ['Node.js', 'Backend', 'Express'],
    category: 'backend',
    readTime: '8분 소요',
    coverImage: 'https://via.placeholder.com/800x400/68A063/FFFFFF?text=Node.js',
  },
  {
    id: 'post-5',
    title: '클라우드 배포 전략',
    slug: 'cloud-deployment-strategies',
    excerpt: '웹 애플리케이션을 클라우드에 효과적으로 배포하는 최신 전략을 알아봅니다.',
    date: '2023-09-12',
    tags: ['DevOps', 'AWS', 'Docker'],
    category: 'devops',
    readTime: '9분 소요',
    coverImage: 'https://via.placeholder.com/800x400/0080FF/FFFFFF?text=Cloud+Deployment',
  },
];

// 포스트 콘텐츠 예시
export const mockPostContents: Record<string, string> = {
  'post-1': `
# Next.js로 시작하는 웹 개발

Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우팅 등 다양한 기능을 제공합니다.

## 시작하기

새 Next.js 프로젝트를 만들어 봅시다:

\`\`\`bash
npx create-next-app my-nextjs-app
cd my-nextjs-app
npm run dev
\`\`\`

## 페이지 라우팅

Next.js는 파일 시스템 기반 라우팅을 사용합니다. \`pages\` 폴더에 파일을 생성하면 해당 경로로 접근할 수 있습니다.

\`\`\`javascript
// pages/about.js
export default function About() {
  return <h1>About Us</h1>
}
\`\`\`

## 데이터 페칭

Next.js에서는 여러 방식으로 데이터를 가져올 수 있습니다:

### getStaticProps (정적 생성)

\`\`\`javascript
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }
  }
}
\`\`\`

### getServerSideProps (서버 사이드 렌더링)

\`\`\`javascript
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }
  }
}
\`\`\`

## 결론

Next.js는 React 애플리케이션을 더욱 강력하게 만들어주는 도구입니다. SEO, 성능, 개발자 경험을 모두 개선하는 데 도움이 됩니다.
  `,
  'post-2': `
# TypeScript를 배워야 하는 이유

TypeScript는 JavaScript에 정적 타입 시스템을 추가한 언어로, 대규모 애플리케이션 개발에 많은 이점을 제공합니다.

## 타입 안전성

TypeScript의 가장 큰 장점은 타입 안전성입니다. 코드를 작성할 때 타입 오류를 미리 발견할 수 있어 런타임 에러를 줄일 수 있습니다.

\`\`\`typescript
// JavaScript
function add(a, b) {
  return a + b;
}

// TypeScript
function add(a: number, b: number): number {
  return a + b;
}
\`\`\`

## 더 나은 개발자 경험

TypeScript는 뛰어난 자동 완성과 인텔리센스 기능을 제공합니다. 이는 코드를 더 빠르고 정확하게 작성하는 데 도움이 됩니다.

## 타입 추론

TypeScript는 많은 경우 타입을 자동으로 추론할 수 있어 편리합니다.

\`\`\`typescript
// 타입 명시 없이도 타입 추론이 가능
let message = "Hello World"; // string 타입으로 추론
message = 42; // 에러: Type 'number' is not assignable to type 'string'
\`\`\`

## 인터페이스와 타입 정의

복잡한 객체 구조를 명확하게 정의할 수 있습니다.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  // ...
  return user;
}
\`\`\`

## 결론

TypeScript는 대규모 프로젝트에서 코드 품질과 유지 보수성을 크게 향상시킵니다. 초기 학습 비용이 조금 들더라도 장기적으로는 높은 생산성을 제공합니다.
  `,
};

// 임시 마크다운 콘텐츠 가져오기 함수
export function getMockPostContent(postId: string): string {
  return mockPostContents[postId] || '내용이 없습니다.';
} 