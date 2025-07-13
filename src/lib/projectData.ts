import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 4,
    title: "ToBeContinued",
    subtitle: "얼굴 분석 기반 헤어스타일 추천 서비스",
    description: "React, TypeScript, Spring Boot, Fast API를 활용한 얼굴 분석 기반 헤어스타일 추천 프로젝트입니다. 기업 Becon과 연계하여 실제 사용자들에게 가치를 제공하는 서비스를 개발했습니다.",
    detailedDescription: "AI 기반 얼굴 분석 기술을 활용하여 사용자에게 최적의 헤어스타일을 추천하는 서비스이며 미용실에 가지 않고도 머리스타일 체험이 가능하며 공유 기능을 통해 미용실 디자이너 혹은 지인들과 헤어스타일 공유가 가능합니다. 내 주변 위치의 미용실 예약/결제 까지 가능합니다.",
    imageUrl: "/assets/projects/ToBeContinued.gif",
    galleryImages: [
      "/assets/projects/ToBeContinued.gif",
      "/assets/projects/tobecontinued-1.png",
      "/assets/projects/tobecontinued-2.png",
      "/assets/projects/tobecontinued-3.png"
    ],
    tags: ["React", "TypeScript", "Spring Boot", "Fast API", "face-api.js"],
    techIcons: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "SpringBoot", color: "#6DB33F" },
      { name: "FastAPI", color: "#009688" },
    ],
    techStack: {
      frontend: ["React", "TypeScript", "HTML5", "CSS3"],
      backend: ["Spring Boot", "Fast API", "Python"],
      database: ["MySQL", "Redis"],
      deployment: ["Docker", "AWS EC2", "Nginx"],
      tools: ["Git", "Figma", "face-api.js"]
    },
    features: [
      "프론트엔드 전체적인 아키텍처 및 UI", 
      "face-api.js를 통한 얼굴 유효성 검사", 
      "얼굴형 자동 분석", 
      "추천 헤어스타일 확인", 
      "나만의 커스텀 헤어", 
      "QR 코드를 통한 프로필 공유", 
      "예약 및 결제 시스템"
    ],
    detailedFeatures: [
      {
        category: "AI 얼굴 분석",
        items: [
          "face-api.js를 활용한 실시간 얼굴 감지",
          "얼굴형 자동 분류 (둥근형, 각진형, 긴형, 심장형)",
          "얼굴 특징점 추출 및 분석",
          "얼굴 유효성 검사 시스템"
        ]
      },
      {
        category: "헤어스타일 추천",
        items: [
          "얼굴형별 맞춤 헤어스타일 추천",
          "성별, 나이, 선호도를 고려한 개인화 추천",
          "실제 헤어샵 스타일 데이터 연동",
          "AR 기반 헤어스타일 미리보기"
        ]
      },
      {
        category: "예약 및 결제",
        items: [
          "실시간 미용실 예약 시스템",
          "결제 시스템 연동",
          "예약 관리 및 알림 서비스",
          "QR 코드 기반 프로필 공유"
        ]
      }
    ],
    challenges: [
      "FE 단에서의 얼굴 유효성 검사",
      "실시간 얼굴 분석의 정확도 향상",
      "다양한 조명 환경에서의 얼굴 인식",
      "비동기 처리 구조 설계"
    ],
    solutions: [
      "face-api.js 학습 및 적용",
      "다양한 얼굴 데이터셋을 활용한 모델 학습",
      "이미지 전처리 파이프라인 구축",
      "Celery를 통해 비동기 처리 구조 설계 및 refetchInterval을 통한 상태 추적",
    ],
    learnings: [
      "AI, BE, FE 통합 프로젝트 경험",
      "실시간 이미지 처리 기술",
      "사용자 경험을 고려한 반응형 UI/UX 설계",
      "기업과의 협업 프로세스",
      "비동기 처리 구조 설계"
    ],
    githubLink: "https://github.com/S207-tobe-continued/tobe-continued",
    award: {
      title: "SSAFY 우수상",
      rank: "최우수상",
    },
    year: "2025",
    month: "04 ~ 05",
    teamSize: 6,
    role: "팀장, 프론트엔드 리드, AI 연동",
    duration: "2개월",
    status: "completed"
  },
  {
    id: 1,
    title: "CashFit",
    subtitle: "금융상품 추천 웹 어플리케이션",
    description: "사용자는 추천받은 상품에 대한 의견을 나눌 수 있는 커뮤니티 게시판을 이용할 수 있으며, 각 상품에 대한 코멘트 작성이 가능합니다. AI 기반 맞춤형 금융 상품 추천과 직관적인 UI를 통해 금융 정보에 쉽게 접근할 수 있습니다.",
    detailedDescription: "개인의 금융 상황과 투자 성향을 분석하여 최적의 금융 상품을 추천하는 지능형 플랫폼입니다. 복잡한 금융 정보를 직관적으로 제공하여 누구나 쉽게 금융 상품을 비교하고 선택할 수 있습니다.",
    imageUrl: "/assets/projects/CashFit.gif",
    galleryImages: [
      "/assets/projects/CashFit.gif",
      "/assets/projects/cashfit-1.png",
      "/assets/projects/cashfit-2.png"
    ],
    tags: ["Vue.js", "Django", "금융 추천", "AI"],
    techIcons: [
      { name: "Vue", color: "#4FC08D" },
      { name: "Django", color: "#092E20" }
    ],
    techStack: {
      frontend: ["Vue.js", "JavaScript", "HTML5", "CSS3"],
      backend: ["Django", "Python", "Django REST Framework"],
      database: ["SQLite"],
    //   deployment: [""],
      tools: ["Git", "Postman", "Figma"]
    },
    features: [
      "개인 맞춤형 금융상품 추천", 
      "AI 기반 금융 상품 추천", 
      "환율 조회", 
      "암호화폐 시세 조회", 
      "커뮤니티 게시판"
    ],
    detailedFeatures: [
      {
        category: "금융 상품 추천",
        items: [
          "사용자 프로필 기반 개인화 추천",
          "예적금, 펀드, 보험 상품 비교",
          
        ]
      },
      {
        category: "금융 정보 서비스",
        items: [
          "실시간 환율 정보 제공",
          "암호화폐 시세 모니터링",
          
        ]
      }
    ],
    githubLink: "https://github.com/KimByeongNyeon/SSAFY_Final_PJT",
    year: "2024",
    month: "10 ~ 11",
    teamSize: 2,
    role: "팀장, 프론트엔드 전체 개발",
    duration: "1개월",
    status: "completed"
  },
  {
    id: 2,
    title: "MBG(문방구)",
    subtitle: "현장체험학습 어플리케이션",
    description: "Kotlin과 Spring Boot를 활용한 현장체험학습 관리 애플리케이션입니다. 학생, 교사에게 체험학습 진행을 위한 다양한 기능을 제공합니다.",
    detailedDescription: "학생과 교사 모두의 현장체험학습 어플이며 학생은 지루한 현장체험을 보다 재미있게 즐길 수 있고 교사는 편리하게 현장체험학습 관리 및 보고서 작성이 가능합니다.",
    imageUrl: "/assets/projects/MBG.gif",
    galleryImages: [
      "/assets/projects/MBG.gif",
      "/assets/projects/mbg-1.png",
      "/assets/projects/mbg-2.png"
    ],
    tags: ["Kotlin", "Spring Boot", "교육", "위치 기반", "Android"],
    techIcons: [
      { name: "Kotlin", color: "#7F52FF" },
      { name: "SpringBoot", color: "#6DB33F" }
    ],
    techStack: {
      frontend: ["Kotlin", "Android SDK", "XML"],
      backend: ["Spring Boot", "Java"],
      database: ["MySQL", "JPA"],
      deployment: ["AWS EC2"],
      tools: ["Android Studio", "Git", "Figma"]
    },
    features: [
      "OAuth2.0을 통한 소셜 로그인", 
      "출석 관리", 
      "만족도 조사", 
      "학습 자료 제공", 
      "문화재 도감 리워드", 
      "오답노트 제공", 
      "보고서 작성", 
      "전체적인 UI"
    ],
    detailedFeatures: [
      {
        category: "출석 및 위치 관리",
        items: [
          "만족도 조사를 통한 출석 관리",
          "팀원 위치 확인 기능",
         
        ]
      },
      {
        category: "학습 지원",
        items: [
          "체험지별 맞춤 학습 자료",
          "오답 노트 제공",
          "퀴즈 및 미션 시스템",
          "보고서 작성 기능"
        ]
      }
    ],
    githubLink: "https://github.com/KimByeongNyeon/MBG",
    year: "2025",
    month: "01 ~ 02",
    teamSize: 6,
    role: "안드로이드 개발, UI/UX",
    duration: "1개월",
    status: "completed"
  },
  {
    id: 3,
    title: "FinCatch",
    subtitle: "게이미피케이션 금융 학습 플랫폼",
    description: "React, TypeScript, Spring Boot를 활용하여 소비패턴 분석을 기반으로 한 게이미피케이션 요소가 적용된 금융 학습 플랫폼입니다. 사용자가 자신의 소비 습관을 재미있게 분석하고 개선할 수 있는 경험을 제공합니다.",
    detailedDescription: "복잡하고 어려운 금융 교육을 게임과 같은 재미있는 경험으로 바꾼 혁신적인 플랫폼입니다. 실제 소비 데이터를 분석하여 개인화된 금융 교육을 제공하고, 귀여운 고양이 캐릭터와 함께 즐겁게 학습할 수 있습니다.",
    imageUrl: "/assets/projects/FinCatch.gif",
    galleryImages: [
      "/assets/projects/FinCatch.gif",
      "/assets/projects/fincatch-1.png",
      "/assets/projects/fincatch-2.png"
    ],
    tags: ["React", "TypeScript", "Spring Boot", "게이미피케이션", "PIXI.js"],
    techIcons: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "SpringBoot", color: "#6DB33F" }
    ],
    techStack: {
      frontend: ["React", "TypeScript", "PIXI.js", "Chart.js"],
      backend: ["Spring Boot", "Java", "Spring Security"],
      database: ["MySQL", "Redis"],
      deployment: ["Docker", "AWS"],
      tools: ["Git", "Figma", "Postman"]
    },
    features: [
      "프론트엔드 전체적인 아키텍처 및 UI", 
      "개인 소비패턴 분석", 
      "1:1 퀴즈 게임", 
      "채팅", 
      "귀여운 고양이 뽑기", 
      "OAuth2.0을 통한 소셜 로그인", 
      "나의 거래내역 확인", 
      "PIXI.js를 통한 움직이는 고양이 캐릭터"
    ],
    detailedFeatures: [
      {
        category: "소비 분석",
        items: [
          "개인 소비 패턴 AI 분석",
          "카테고리별 지출 분석",
          "소비 습관 개선 제안",
         
        ]
      },
      {
        category: "게이미피케이션",
        items: [
          "실시간 1:1 퀴즈 대결",
          "고양이 캐릭터 수집 시스템",
          "레벨 시스템 및 보상",
          
        ]
      }
    ],
    githubLink: "https://github.com/KimByeongNyeon/FinCatch",
    year: "2025",
    month: "02 ~ 03",
    teamSize: 6,
    role: "프론트엔드 리드, STOMP 통신 구현",
    duration: "2개월",
    status: "completed"
  },
  {
    id: 5,
    title: "NextPortfolio",
    subtitle: "Next.js 기반 포트폴리오 사이트",
    description: "Next.js와 TypeScript를 활용하여 개발한 개인 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용하여 방문자에게 인상적인 경험을 제공합니다.",
    detailedDescription: "최신 웹 기술을 활용하여 개발한 개인 포트폴리오 사이트입니다. 현재 계속 작업중에 있습니다.",
    imageUrl: "/assets/profile.png",
    galleryImages: [
      "/assets/profile.png",
      "/assets/projects/portfolio-1.png",
      "/assets/projects/portfolio-2.png"
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    techIcons: [
      { name: "NextJS", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" }
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      backend: ["Next.js API Routes"],
      deployment: ["Vercel"],
      tools: ["Git", "Figma", "Framer Motion"]
    },
    features: [
      "Vercel로 빠른 배포", 
      "부드러운 페이지 전환", 
      "반응형 디자인", 
      "스크롤 기반 애니메이션"
    ],
    detailedFeatures: [
      {
        category: "성능 최적화",
        items: [
          "Next.js SSG를 활용한 빠른 로딩",
          "이미지 최적화 및 lazy loading",
          "코드 스플리팅으로 번들 크기 최적화",
          "웹 접근성 준수"
        ]
      },
      {
        category: "사용자 경험",
        items: [
          "Framer Motion 기반 부드러운 애니메이션",
          "스크롤 인터랙션 구현",
          "모바일 친화적 반응형 디자인",
          "다크모드 지원"
        ]
      }
    ],
    githubLink: "https://github.com/kimbyeongnyeon/nextportfolio",
    year: "2025",
    month: "05 ~ ing",
    teamSize: 1,
    role: "풀스택 개발, 디자인",
    duration: "1개월",
    status: "in-progress"
  },
]; 