import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 4,
    title: "ToBeContinued",
    subtitle: "얼굴 분석 기반 헤어스타일 추천 서비스",
    description:
      "React, TypeScript, Spring Boot, Fast API를 활용한 얼굴 분석 기반 헤어스타일 추천 프로젝트입니다. 기업 Becon과 연계하여 실제 사용자들에게 가치를 제공하는 서비스를 개발했습니다.",
    detailedDescription:
      "AI 기반 얼굴 분석 기술을 활용하여 사용자에게 최적의 헤어스타일을 추천하는 서비스이며 미용실에 가지 않고도 머리스타일 체험이 가능하며 공유 기능을 통해 미용실 디자이너 혹은 지인들과 헤어스타일 공유가 가능합니다. 내 주변 위치의 미용실 예약/결제 까지 가능합니다.",
    imageUrl: "/assets/projects/ToBeContinued.gif",
    galleryImages: [
      "/assets/projects/ToBeContinued.gif",
      "/assets/projects/tobecontinued-1.png",
      "/assets/projects/tobecontinued-2.png",
      "/assets/projects/tobecontinued-3.png",
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
      tools: ["Git", "Figma", "face-api.js"],
    },
    features: [
      "프론트엔드 전체적인 아키텍처 및 UI",
      "face-api.js를 통한 얼굴 유효성 검사",
      "얼굴형 자동 분석",
      "추천 헤어스타일 확인",
      "나만의 커스텀 헤어",
      "QR 코드를 통한 프로필 공유",
      "예약 및 결제 시스템",
    ],
    detailedFeatures: [
      {
        category: "AI 얼굴 분석",
        items: [
          "face-api.js를 활용한 실시간 얼굴 감지",
          "얼굴형 자동 분류",
          "얼굴 특징점 추출 및 분석",
          "얼굴 유효성 검사 시스템",
        ],
      },
      {
        category: "헤어스타일 추천",
        items: [
          "얼굴형별 맞춤 헤어스타일 추천",
          "나만의 커스텀 헤어 생성",
          "헤어 스타일 공유",
        ],
      },
      {
        category: "예약 및 결제",
        items: [
          "실시간 미용실 예약 시스템",
          "결제 시스템 연동",
          "예약 관리 서비스",
        ],
      },
    ],
    challenges: [
      "FE 단에서의 얼굴 유효성 검사",
      "실시간 얼굴 분석의 정확도 향상",
      "비동기 처리 구조 설계",
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
      "비동기 처리 구조 설계",
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
    status: "completed",
    techChoices: [
      {
        title: "TanStack Query",
        reason:
          "setInterval에서의 종료 타이밍 이슈로 인해 불필요한 요청이 여러 번 가던 것을 TanStack Query의 refetch 기능과 enabled 옵션을 이용하여 개선하고자 도입하였습니다.",
      },
      {
        title: "face-api.js",
        reason:
          "face-api.js는 사전 학습된 모델을 기반으로 간단하게 얼굴 인식 및 랜드마크 분석이 가능하며, 브라우저 환경에서 빠르고 가볍게 동작합니다. OpenCV에 비해 적용 난이도와 성능 면에서 실시간 웹 서비스에 더 적합하다고 판단하여 도입하였습니다.",
        table: {
          headers: ["항목", "face-api.js", "OpenCV.js"],
          rows: [
            ["주요 기능", "얼굴 인식, 랜드마크 탐지, 표정 분석 등", "이미지 처리 전반, 얼굴 인식 등 다양한 기능 지원"],
            ["딥러닝 모델", "사전 학습된 모델 내장 (TensorFlow.js 기반)", "별도 모델 연동 필요 (설정 복잡)"],
            ["사용 난이도", "간단한 API로 빠른 적용 가능", "낮은 수준의 이미지 처리 이해 필요"],
            ["브라우저 지원", "TensorFlow.js 기반, 브라우저 최적화", "WebAssembly 기반, 일부 연산 속도 느림"],
            ["성능/속도", "웹 실시간 환경에 최적화 (빠르고 가벼움)", "고정밀 처리 가능하나 무거운 편"],
            ["커스터마이징", "모델 교체는 어려움", "세부 알고리즘 커스터마이징 용이"],
          ],
        },
      },
      {
        title: "TypeScript",
        reason:
          "복잡한 데이터 구조(예: 얼굴 분석 결과, 헤어스타일 추천 정보 등)를 정적 타입으로 명확히 정의함으로써 데이터의 신뢰성과 코드 안정성을 확보하기 위해 도입하였습니다.",
      },
    ],
    retrospective: `얼굴 인식 기능을 구현할 당시, 가장 먼저 고민한 것은 **웹 환경에서 어떻게 얼굴을 정확하게 인식하고, 사용자의 얼굴 방향까지 판별할 수 있을지**였습니다. 이를 위해 객체 인식 기술을 조사했고, 대표적인 두 기술인 \`OpenCV\`와 \`face-api.js\`를 비교했습니다. 다양한 테스트와 문서 분석 결과, 웹 브라우저 환경에서는 JavaScript 기반으로 작성되어 있어 **브라우저 환경에 자연스럽게 통합할 수 있는 \`face-api.js\`가 더 가볍고 빠르게 동작**한다는 판단 하에 해당 기술을 적용했습니다. 얼굴 방향 판별은 단순한 이미지 인식만으로는 부족했기 때문에, **정량적인 기준을 직접 설계**했습니다. 얼굴의 너비, 코와 턱의 상대적인 위치 차이, 그리고 이 값을 정규화한 회전각을 기반으로 정면/좌측/우측을 판별했습니다. 실제 적용 결과, 사용자 대부분의 얼굴 방향을 정확히 분류할 수 있었고, 내부 테스트에서도 높은 일관성을 보였습니다. 이 경험을 통해, 기술을 단순히 사용하는 것이 아니라 **목적에 맞는 도구를 비교하고 최적의 방식으로 적용하는 과정**이 중요하다는 점을 체감했습니다. 또한 얼굴 방향을 단순 분류가 아닌 **정량적 지표로 환산하여 계산**한 경험은, 이후 복잡한 사용자 상태를 추론하는 문제에서도 유사한 접근 방식을 활용할 수 있는 자신감을 주었습니다.

AI 서버로부터 데이터를 받아오는 과정에서, 처리 시간이 길어 사용자 경험이 저하되는 문제가 있었습니다. 이를 개선하기 위해 백엔드에는 Celery 기반의 비동기 처리 구조를 도입하고, 프론트엔드에서는 polling을 통해 작업 상태를 주기적으로 패칭하는 구조를 구현했습니다. 이로써 사용자는 작업이 완료될 때까지 진행률과 애니메이션을 확인할 수 있게 되어, **기다림에 대한 불편이 완화**되었습니다. 초기에는 \`setInterval\`로 3초마다 polling을 진행하고 작업률이 100%가 되면 polling을 중단하는 방식이었으나, 타이밍 이슈로 인해 작업이 완료된 후에도 불필요한 요청이 한 번 더 발생하는 문제가 있었습니다. 이 문제를 해결하기 위해, \`TanStack Query\`의 \`refetchInterval\`과 \`enabled\` 옵션을 활용하여 조건부 polling 구조로 개선했습니다. 그 결과, **불필요한 네트워크 요청을 제거하고 코드의 유지 보수성 또한 높일 수 있었습니다.** 이 경험을 통해 단순한 기능 구현보다, **비동기 처리와 사용자 경험, 그리고 네트워크 효율성까지 고려하는 것이 프론트엔드 개발자의 중요한 역할**임을 체감했습니다. 또한 타이머 기반 로직이 가지는 한계를 인식하게 되었고, 이후 유사한 상황에서는 더 안정적인 상태 기반 도구를 우선적으로 고려하고 있습니다. 

전국 발표회에서 두 차례 직접 발표를 진행하며, 단순히 **기술을 구현하는 것 이상의 역량이 필요**하다는 사실을 깨달았습니다. 특히 마지막 발표회에서는 심사위원 대부분이 비개발자라는 이야기를 듣고, 기술 내용을 최대한 쉽게 풀어 설명하기 위해 노력했습니다. 그 결과, 전국 6위 수상과 함께 **“완성도가 매우 높은 프로젝트”**라는 평가를 받았습니다. 이 경험을 통해 저는 **개발자는 기술뿐 아니라, 그것을 사용자와 소통 가능한 언어로 전달할 수 있어야 한다는 사실**을 배웠습니다.`,
    troubleshooting: [
      {
        title: "비동기 작업 상태 Polling 효율화",
        content:
          "초기에는 setInterval을 사용해 3초마다 polling을 진행하고 작업률이 100%가 되면 중단하는 방식이었으나, 타이밍 이슈로 작업 완료 후에도 불필요한 요청이 발생하는 문제가 있었습니다. 이를 TanStack Query의 refetchInterval과 enabled 옵션을 활용한 조건부 polling 구조로 개선하여 불필요한 네트워크 요청을 제거했습니다.",
        link: "https://github.com/S207-tobe-continued/tobe-continued/pull/1", // 예시 링크
      },
    ],
  },
  {
    id: 1,
    title: "FinCatch",
    subtitle: "게이미피케이션 금융 학습 플랫폼",
    description:
      "React, TypeScript, Spring Boot를 활용하여 소비패턴 분석을 기반으로 한 게이미피케이션 요소가 적용된 금융 학습 플랫폼입니다. 사용자가 자신의 소비 습관을 재미있게 분석하고 개선할 수 있는 경험을 제공합니다.",
    detailedDescription:
      "사용자의 소비 데이터를 기반으로 퀴즈를 자동 생성하고, 실시간 1:1 대결 방식으로 게임처럼 금융 지식을 익힐 수 있는 플랫폼입니다. 소비 패턴 시각화부터 퀴즈 생성, 대결, 학습 피드백까지 이어지는 통합 프로세스를 제공합니다.",
    imageUrl: "/assets/projects/FinCatch.gif",
    galleryImages: [
      "/assets/projects/FinCatch.gif",
      "/assets/projects/fincatch-1.png",
      "/assets/projects/fincatch-2.png",
    ],
    tags: ["React", "TypeScript", "Spring Boot", "게이미피케이션", "PIXI.js"],
    techIcons: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "SpringBoot", color: "#6DB33F" },
    ],
    techStack: {
      frontend: ["React", "TypeScript", "PIXI.js", "Chart.js"],
      backend: ["Spring Boot", "Java", "Spring Security"],
      database: ["MySQL", "Redis"],
      deployment: ["Docker", "AWS"],
      tools: ["Git", "Figma", "Postman"],
    },
    features: [
      "프론트엔드 전체적인 아키텍처 및 UI",
      "내 계좌 확인 및 주 거래 통장 설정",
      "개인 소비패턴 분석",
      "1:1 퀴즈 게임",
      "채팅",
      "귀여운 고양이 뽑기",
      "OAuth2.0을 통한 소셜 로그인",
      "나의 거래내역 확인",
      "PIXI.js를 통한 움직이는 고양이 캐릭터",
    ],
    detailedFeatures: [
      {
        category: "핵심 기능",
        items: [
          "커스텀 훅 설계를 통한 비즈니스 로직 분리",
          "1:1 대기방 및 실시간 대결 시스템",
          "소셜 로그인 및 계좌 연동을 통한 데이터 분석",
          "Pixi.js 기반의 캐릭터 애니메이션 최적화",
        ],
      },
      {
        category: "소비 분석",
        items: [
          "개인 소비 패턴 AI 분석",
          "카테고리별 지출 분석",
          "소비 습관 개선 제안",
        ],
      },
      {
        category: "게이미피케이션",
        items: [
          "실시간 1:1 퀴즈 대결",
          "고양이 캐릭터 수집 시스템",
          "레벨 시스템 및 보상",
        ],
      },
    ],
    challenges: [
      "커스텀 훅을 이용한 비즈니스 로직과 UI 관심사 분리",
      "실시간 대결을 위한 대기방 동기화 문제",
      "캐릭터 애니메이션으로 인한 렌더링 성능 저하",
    ],
    solutions: [
      "useAxios 커스텀 훅 구현으로 에러/로딩 처리 공통화",
      "HTTP → WebSocket → STOMP 통신 순서 재정립",
      "useMemo를 통한 캐릭터 애셋 메모이제이션",
    ],
    learnings: [
      "관심사 분리를 통한 아키텍처 설계의 중요성",
      "Redis와 소켓 통신을 이용한 다중 사용자 상태 동기화",
      "렌더링 최적화를 통한 사용자 경험 개선",
    ],
    githubLink: "https://github.com/KimByeongNyeon/FinCatch",
    year: "2025",
    month: "02 ~ 03",
    teamSize: 6,
    role: "프론트엔드 리드, STOMP 통신 구현",
    duration: "2개월",
    status: "completed",
    techChoices: [
      {
        title: "TypeScript",
        reason: "Kotlin 경험에서 느낀 정적 타입 시스템의 안정성을 웹에서도 이어가고자 도입하였습니다.",
      },
      {
        title: "STOMP + WebSocket",
        reason:
          "1:1 실시간 대결을 위한 안정적인 양방향 통신을 구현하기 위해 도입하였습니다. 대부분의 최신 브라우저가 WebSocket을 기본 지원하기 때문에, 별도의 fallback 처리를 위한 SockJS는 사용하지 않았습니다.",
      },
      {
        title: "Pixi.js",
        reason:
          "픽셀 스타일의 고양이 캐릭터를 구현하기 위해 사용했으며 해당 이미지는 2D 픽셀 이미지였기 때문에 Three.js 는 오버 스펙이라 판단하여 해당 기술을 도입하게 되었습니다.",
        table: {
          headers: ["항목", "Pixi.js", "Three.js"],
          rows: [
            ["주요 용도", "2D 그래픽, 게임, UI, 애니메이션", "3D 그래픽, 복잡한 3D 씬 렌더링"],
            ["렌더링 방식", "WebGL 기반 2D 렌더링", "WebGL 기반 3D 렌더링"],
            ["성능", "2D 전용으로 경량/고속 렌더링 가능", "3D 엔진이므로 2D 작업 시 불필요한 성능 소모"],
            ["개발 난이도", "직관적 API, 빠른 적용 가능", "3D 개념 이해 필요, 높은 학습 곡선"],
            ["리소스 사용량", "가벼움 (2D 전용)", "무거움 (3D 연산 포함)"],
            ["적합한 사례", "2D 게임, 픽셀 아트 애니메이션", "3D 모델링, VR/AR, 물리 시뮬레이션"],
          ],
        },
      },
    ],
    retrospective: `기존에는 API 호출을 위해 컴포넌트 내부에서 \`axios\`와 \`try-catch\`를 직접 사용했고, 이 과정에서 **에러 처리, 로딩 상태, 데이터 가공 등 비즈니스 로직이 UI 로직과 섞여 코드의 재사용성과 가독성이 떨어지는 문제**가 있었습니다. 이를 해결하고자 \`useAxios\`라는 커스텀 훅을 구현해, **요청 로직, 로딩 상태 관리, 에러 핸들링을 하나의 모듈로 분리**했습니다. 이를 통해 컴포넌트는 \`data\`, \`isLoading\`, \`error\` 등의 상태만 받아 UI에 집중할 수 있게 되었고, **여러 API 요청에 동일한 패턴으로 대응할 수 있어 개발 속도와 유지보수성이 크게 향상**되었습니다. 이 경험은 단순한 코드 리팩토링을 넘어, **프론트엔드 아키텍처에서 로직 분리와 관심사 분리가 얼마나 중요한 가치인지 깊이 이해할 수 있는 계기**가 되었습니다.

1:1 대기방 기능을 구현할 당시, \`HTTP\`, \`WebSocket\`, \`STOMP\`를 함께 사용하는 구조에 대한 이해가 부족했습니다. 초기에는 연결 불안정 및 입장자 미표시 등 상태 동기화 이슈가 발생했으나, 백엔드 팀원과의 소통을 통해 **대기방 정보가 먼저 HTTP를 통해 Redis에 저장된 후 WebSocket 연결이 이뤄져야 한다**는 최적의 프로세스를 정립했습니다. 통신 순서를 \`HTTP → WebSocket → STOMP(pub/sub)\`로 재정립하여 연결 오류를 해결했으며, 이 경험을 통해 **각 통신 방식의 역할과 상태 정합성 확보의 중요성**을 배울 수 있었습니다.

캐릭터 애니메이션 기능을 구현하던 중, 캐릭터 변경 시 **전체 컴포넌트가 재렌더링되면서 프레임이 끊기는 문제**가 발생했습니다. 이를 해결하기 위해 \`useMemo\`를 도입하여 **변경되지 않는 캐릭터 애셋의 계산을 메모이제이션**함으로써 렌더링 빈도를 획기적으로 줄였습니다. 결과적으로 애니메이션 전환이 부드러워졌으며, 사용자 경험을 자연스럽게 만드는 최적화 설계의 중요성을 체감했습니다.`,
    troubleshooting: [
      {
        title: "1:1 대기방 상태 동기화 프로세스 정립",
        content:
          "초기 설계에서는 WebSocket 연결 전 대기방 정보 정합성을 고려하지 않아 상태 동기화 이슈가 발생했습니다. 이를 'HTTP(Redis 저장) → WebSocket → STOMP' 순서로 통신 로직을 전면 수정하여 다중 사용자 간의 실시간 상태 일관성을 확보했습니다.",
      },
      {
        title: "실시간 캐릭터 애니메이션 프레임 드롭 최적화",
        content:
          "캐릭터 변경 시 불필요한 이미지 데이터 재계산으로 인해 애니메이션이 끊기는 문제를 겪었습니다. useMemo를 활용한 애셋 메모이제이션과 컴포넌트 구조 분리를 통해 렌더링 부하를 줄여 부드러운 UX를 구현했습니다.",
      },
    ],
  },
  {
    id: 2,
    title: "MBG(문방구)",
    subtitle: "현장체험학습 어플리케이션",
    description:
      "Kotlin과 Spring Boot를 활용한 현장체험학습 관리 애플리케이션입니다. 학생, 교사에게 체험학습 진행을 위한 다양한 기능을 제공합니다.",
    detailedDescription:
      "학생들은 단순 관람과 불분명한 학습 목적, 반복적인 인증 활동으로 현장학습에서 지루함을 느꼈고, 인솔 교사는 실시간 현황 파악의 어려움과 관리 도구의 부재로 큰 불편을 겪고 있었습니다. 이를 해결하기 위해 GPS 기반 퀘스트 시스템과 게임적 요소를 결합하여 학생에게는 능동적인 학습을, 교사에게는 실시간 모니터링을 제공하는 플랫폼을 개발했습니다.",
    imageUrl: "/assets/projects/MBG.gif",
    galleryImages: [
      "/assets/projects/MBG.gif",
      "/assets/projects/mbg-1.png",
      "/assets/projects/mbg-2.png",
    ],
    tags: ["Kotlin", "Spring Boot", "MVVM", "Hilt", "Android"],
    techIcons: [
      { name: "Kotlin", color: "#7F52FF" },
      { name: "SpringBoot", color: "#6DB33F" },
    ],
    techStack: {
      frontend: ["Kotlin", "Android SDK", "MVVM", "Hilt"],
      backend: ["Spring Boot", "Java"],
      database: ["MySQL", "JPA"],
      deployment: ["AWS EC2"],
      tools: ["Android Studio", "Git", "Jira", "Figma"],
    },
    features: [
      "OAuth2.0을 통한 소셜 로그인",
      "폴링 기반 실시간 설문 및 만족도 조사",
      "체험지별 맞춤 리워드 시스템",
      "PDF 보고서 자동 생성 기능",
      "Git, Jira 기반 협업 환경 세팅",
    ],
    detailedFeatures: [
      {
        category: "사용자 경험",
        items: [
          "Kakao/Naver 기반 소셜 로그인으로 접근성 향상",
          "학생 참여 유도를 위한 실시간 리워드 지급 시스템",
          "모바일에 최적화된 직관적인 UI/UX 설계",
        ],
      },
      {
        category: "관리 및 분석",
        items: [
          "폴링 방식을 통한 실시간 만족도 조사 데이터 수집",
          "조사 데이터를 바탕으로 한 즉각적인 PDF 보고서 생성",
          "교사용 실시간 학생 현황 모니터링 대시보드",
        ],
      },
    ],
    challenges: [
      "MVC 패턴의 유지보수 한계와 상태 관리의 복잡성",
      "실시간 응답 반영을 위한 데이터 통신 구조 설계",
      "팀 내 Git CLI 사용법 차이로 인한 협업 병목",
    ],
    solutions: [
      "MVVM 아키텍처 도입으로 관심사 분리 및 유지보수성 확보",
      "폴링(Polling) 방식을 통한 실시간 비동기 데이터 업데이트",
      "팀 내 Git CLI 교육 세션 진행으로 협업 문화 정립",
    ],
    learnings: [
      "아키텍처 설계가 소프트웨어 생명주기에 미치는 영향",
      "협업 도구 관리 및 팀 기술 교육의 중요성",
      "모바일 환경에서의 실시간 데이터 처리 기법",
    ],
    githubLink: "https://github.com/KimByeongNyeon/MBG",
    year: "2025",
    month: "01 ~ 02",
    teamSize: 6,
    role: "클라이언트 개발, 협업 환경 세팅",
    duration: "1개월",
    status: "completed",
    techChoices: [
      {
        title: "Kotlin + MVVM",
        reason: "비즈니스 로직과 뷰를 명확히 분리하고 코드의 재사용성 및 유지보수성을 확보하기 위해 도입하였습니다.",
      },
      {
        title: "Hilt",
        reason: "의존성 주입을 통해 코드 구조를 간결화하고, 객체 간 결합도를 낮추어 테스트 편의성을 확보하기 위해 도입하였습니다.",
      },
    ],
    retrospective: `팀 내에서 \`SourceTree\`에만 의존해 Git을 사용하는 팀원이 많았고, 그로 인해 **복잡한 병합 충돌이나 브랜치 전략에 대한 이해 부족으로 협업에 어려움이 발생**하는 상황이 있었습니다. 이를 해결하기 위해, 2주간 Git CLI 교육 세션을 직접 기획하고 진행했습니다. 교육에서는 브랜치 생성, 머지, 충돌 해결 등 **실무에 필요한 Git 명령어를 실습 중심으로 구성**했습니다. 팀원들이 점차 CLI 명령어에 익숙해지고, 충돌 상황에서도 적극적으로 원인을 파악하고 해결할 수 있게 되는 과정을 보며 **교육의 실질적인 효과를 체감**할 수 있었습니다. 무엇보다 이 경험은 저에게도 **Git의 내부 동작 원리와 브랜치 관리 전략에 대해 더 깊이 고민해볼 수 있는 계기**가 되었고, 이후에는 **협업 도구를 단순히 사용하는 수준을 넘어 팀 내 기술 문화를 정립하는 것**에 대해 관심을 가지게 되었습니다.

기존에는 단순한 **MVC 패턴**에 익숙했지만, Kotlin 프로젝트에서 **복잡한 상태를 관리하는 과정에서 코드 유지보수가 어려워지는 문제**를 겪었습니다. 이를 계기로 **MVVM 아키텍처를 도입**했고, **상태의 흐름을 명확하게 분리해 UI와 로직의 의존도를 줄일 수 있었습니다.** 이 경험을 통해 **상태 관리의 중요성과 아키텍처 설계가 유지보수성과 직결된다**는 점을 체감했고, 이후 React 환경에서도 **아키텍처 설계에 대한 고민**으로 자연스럽게 확장되었습니다.`,
  },
  {
    id: 3,
    title: "CashFit",
    subtitle: "금융상품 추천 웹 어플리케이션",
    description:
      "사용자는 추천받은 상품에 대한 의견을 나눌 수 있는 커뮤니티 게시판을 이용할 수 있으며, 각 상품에 대한 코멘트 작성이 가능합니다. AI 기반 맞춤형 금융 상품 추천과 직관적인 UI를 통해 금융 정보에 쉽게 접근할 수 있습니다.",
    detailedDescription:
      "개인의 금융 상황과 투자 성향을 분석하여 최적의 금융 상품을 추천하는 지능형 플랫폼입니다. 복잡한 금융 정보를 직관적으로 제공하여 누구나 쉽게 금융 상품을 비교하고 선택할 수 있습니다.",
    imageUrl: "/assets/projects/CashFit.gif",
    galleryImages: [
      "/assets/projects/CashFit.gif",
      "/assets/projects/cashfit-1.png",
      "/assets/projects/cashfit-2.png",
    ],
    tags: ["Vue.js", "Django", "금융 추천", "AI"],
    techIcons: [
      { name: "Vue", color: "#4FC08D" },
      { name: "Django", color: "#092E20" },
    ],
    techStack: {
      frontend: ["Vue.js", "JavaScript", "HTML5", "CSS3"],
      backend: ["Django", "Python", "Django REST Framework"],
      database: ["SQLite"],
      //   deployment: [""],
      tools: ["Git", "Postman", "Figma"],
    },
    features: [
      "개인 맞춤형 금융상품 추천",
      "AI 기반 금융 상품 추천",
      "환율 조회",
      "암호화폐 시세 조회",
      "커뮤니티 게시판",
    ],
    detailedFeatures: [
      {
        category: "금융 상품 추천",
        items: [
          "사용자 프로필 기반 개인화 추천",
          "예적금, 펀드, 보험 상품 비교",
        ],
      },
      {
        category: "금융 정보 서비스",
        items: ["실시간 환율 정보 제공", "암호화폐 시세 모니터링"],
      },
    ],
    challenges: [
      "FE 프레임워크를 처음 사용하여 프로젝트 진행",
      "상태관리 라이브러리 선택",
      "실시간 암호화폐 시세 조회",
    ],
    solutions: [
      "Vue.js 학습 및 적용",
      "pinia를 통한 상태관리",
      "캔들 차트 라이브러리 적용",
    ],
    learnings: [
      "FE 프레임워크 프로젝트 경험",
      "기존 props와 pinia를 통한 상태관리의 차이 학습",
      "Vue.js의 특징 학습",
    ],
    githubLink: "https://github.com/KimByeongNyeon/SSAFY_Final_PJT",
    year: "2024",
    month: "10 ~ 11",
    teamSize: 2,
    role: "팀장, 프론트엔드 전체 개발",
    duration: "1개월",
    status: "completed",
  }
];
