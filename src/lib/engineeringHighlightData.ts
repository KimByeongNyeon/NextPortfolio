import type { EngineeringHighlight } from "@/types/engineeringHighlight";

export const engineeringHighlights: EngineeringHighlight[] = [
  {
    id: "content-architecture",
    category: "콘텐츠 운영 구조",
    title: "MDX에서 Headless CMS 기반 콘텐츠 구조로 개선",
    description:
      "개발자가 직접 MDX 파일을 수정하고 배포해야 했던 콘텐츠 관리 구조를 Payload CMS 기반으로 전환하여 비개발자도 직접 콘텐츠를 관리할 수 있도록 개선했습니다.",
    summary: "개발자에게 요청하던 콘텐츠 수정을 담당자가 CMS에서 직접 처리하도록 바꿨습니다.",
    comparison: {
      kind: "content",
      before: {
        heading: "개발자가 수정·배포",
        steps: ["담당자가 수정 요청", "개발자가 MDX · Git 작업", "배포 후 콘텐츠 반영"],
        note: "문구 수정에도 개발 작업 필요",
      },
      after: {
        heading: "담당자가 직접 관리",
        steps: ["담당자가 CMS에 접속", "콘텐츠 직접 수정", "사이트에 콘텐츠 반영"],
        note: "콘텐츠 운영과 코드 수정 분리",
      },
    },
    technologies: ["Payload CMS", "Fumadocs", "Next.js", "TypeScript"],
    problem:
      "기존 콘텐츠가 MDX 파일로 관리되어 문구 수정이나 신규 게시글 등록에도 개발자의 코드 수정, Git 작업, 배포가 필요했습니다. 콘텐츠 운영이 개발 작업에 의존하는 구조였습니다.",
    solution:
      "콘텐츠 관리 구조를 Payload CMS 기반으로 전환했습니다. 비개발자가 CMS에서 직접 콘텐츠를 관리할 수 있도록 콘텐츠 편집과 코드 수정의 책임을 분리하고, Fumadocs와 Next.js 기반 화면에서 콘텐츠를 제공하는 구조로 개선했습니다.",
    impacts: [
      "비개발자도 직접 콘텐츠 수정 및 신규 게시글 등록 가능",
      "콘텐츠 운영 과정에서 개발자 의존도 감소",
      "콘텐츠 관리와 화면 구현의 책임 분리",
      "파일 수정과 배포 중심에서 CMS 중심의 콘텐츠 운영으로 전환",
    ],
  },
  {
    id: "transport-route-strategy",
    category: "경로 계산 구조",
    title: "운송수단별 경로 계산 구조 개선",
    description:
      "운송수단마다 다른 API와 경로 계산 로직을 공통 인터페이스와 Strategy 기반으로 분리하여, 운송 방식이 늘어나도 확장할 수 있는 구조로 개선했습니다.",
    summary: "한 함수에 모여 있던 조건 분기를 분리해 운송수단마다 계산과 실패 처리를 맡도록 바꿨습니다.",
    comparison: {
      kind: "routing",
      before: {
        heading: "경로 계산 함수 하나",
        steps: ["도로 조건 → API 호출", "해상 조건 → API 호출", "철도 조건 → API 호출"],
        note: "조건 분기와 API 처리가 한곳에 집중",
      },
      after: {
        heading: "공통 인터페이스",
        steps: ["도로", "해상", "철도"],
        note: "각 전략이 계산·실패 처리를 담당",
      },
    },
    technologies: ["TypeScript", "Strategy Pattern"],
    problem:
      "road, sea, rail 등 운송 방식에 따른 조건문이 하나의 경로 계산 로직에 모여 있었습니다. 운송 방식이 늘어날수록 하나의 로직이 여러 API와 계산 방식을 알아야 하는 문제가 있었습니다.",
    solution:
      "TransportRouteStrategy 공통 인터페이스를 기준으로 Road, Sea, Rail Strategy를 분리했습니다. 각 운송수단은 자신의 API 호출 및 경로 계산 로직만 담당하고, 호출부는 공통 인터페이스를 통해 경로를 계산하도록 구성했습니다.",
    code: `interface TransportRouteStrategy {
  calculate(
    origin: Coordinate,
    destination: Coordinate,
  ): Promise<RouteResult>;
}`,
    impacts: [
      "운송수단별 거리 계산 책임 분리",
      "조건문 기반 분기 감소",
      "새로운 운송수단 추가 시 기존 로직 수정 최소화",
      "API별 실패 처리 및 fallback 로직 독립",
      "확장에 열려 있고 기존 구현 변경에는 닫힌 구조로 개선",
    ],
  },
];
