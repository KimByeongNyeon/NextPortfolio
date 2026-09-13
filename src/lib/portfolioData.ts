export const profile = {
  name: "김병년",
  github: "https://github.com/KimByeongNyeon",
  blog: "https://velog.io/@qud5252/posts",
  introduction: "사용자의 언어로 문제를 이해하고, 코드와 구조로 해결합니다. 새로운 서비스를 만드는 일부터 기존 시스템의 운영 방식을 개선하는 일까지, 더 나은 경험을 만드는 프론트엔드 개발자입니다.",
  collaboration: "SSAFY 프로젝트에서 Git에 서툰 팀원을 위한 교육을 진행하고, 프론트엔드를 처음 접한 팀원과 컴포넌트 구성 및 커스텀 훅 사용 방법을 함께 고민했습니다. 먼저 어려운 부분을 찾아가 도움을 나누었고, 팀원들에게 가장 많은 도움을 준 ‘이달의 동료’로 선정되었습니다.",
  communication: "SSAFY 최종 프로젝트 전국 발표회에서는 비개발자인 심사위원의 관점에서 서비스를 설명했습니다. 기술 용어보다 사용자의 불편과 해결 방법을 직관적으로 전달해, 전달 능력과 서비스 완성도에 대한 긍정적인 평가를 받았습니다.",
};

export const experiences = [
  {
    period: "2024 — 2025",
    title: "삼성 청년 SW 아카데미",
    subtitle: "SSAFY 12기 · 교육 및 팀 프로젝트",
    description: "Python 기반 컴퓨팅 사고력부터 Vue·Django, TypeScript·React 프로젝트까지. 기업 연계 프로젝트에서 프론트엔드 리드를 맡아 기획, 개발, 발표를 함께 이끌었습니다.",
    tags: ["프론트엔드 리드", "기업 연계 프로젝트", "이달의 동료"],
  },
  {
    period: "2023 — 2024",
    title: "쌍용 교육센터",
    subtitle: "Java 풀스택 교육과정",
    description: "Java 기반 풀스택 교육과 JSP 프로젝트를 통해 웹 프로그래밍의 기초와 서비스 개발 과정을 익혔습니다.",
    tags: ["Java", "JSP", "웹 프로그래밍"],
  },
];

export const skillGroups = [
  { label: "화면 구현", skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { label: "상태 · 인터랙션", skills: ["TanStack Query", "Redux Toolkit", "Zustand", "Framer Motion"] },
  { label: "협업 도구", skills: ["Git", "GitHub", "Figma", "Jira", "Vercel"] },
];

export const projectGalleries: Record<string, { folder: string; count: number }> = {
  ToBeContinued: { folder: "tobecontinued", count: 5 },
  FinCatch: { folder: "fincatch", count: 8 },
  "MBG(문방구)": { folder: "mbg", count: 5 },
  CashFit: { folder: "cashfit", count: 8 },
};
