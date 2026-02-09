import { ReactNode } from "react";

export type TechIcon = {
  name: string;
  color: string;
};

export type TechChoice = {
  title: string;
  reason: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type Troubleshooting = {
  title: string;
  content: string;
  link?: string;
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string; // 상세 설명
  imageUrl: string;
  galleryImages?: string[]; // 프로젝트 움짤/이미지 리스트
  tags: string[];
  techIcons: TechIcon[]; // 기술 아이콘 정보
  techStack: {
    frontend: string[];
    backend: string[];
    database?: string[];
    deployment?: string[];
    tools?: string[];
  };
  features: string[];
  detailedFeatures?: {
    category: string;
    items: string[];
  }[]; // 카테고리별 상세 기능
  challenges?: string[]; // 개발 과정에서 겪은 도전과제
  solutions?: string[]; // 해결 방법
  learnings?: string[]; // 배운 점
  link?: string;
  githubLink?: string;
  award?: {
    title: string;
    rank: string;
  };
  year: string;
  month: string;
  teamSize?: number; // 팀 규모
  role?: string; // 담당 역할
  duration?: string; // 개발 기간
  status: "completed" | "in-progress" | "planned"; // 프로젝트 상태
  techChoices?: TechChoice[]; // 기술적 선택과 이유
  retrospective?: string; // 회고 및 성장
  troubleshooting?: Troubleshooting[]; // 트러블 슈팅
}; 