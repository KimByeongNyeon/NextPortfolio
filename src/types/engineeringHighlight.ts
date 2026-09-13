export interface EngineeringHighlight {
  id: string;
  category: string;
  title: string;
  description: string;
  summary: string;
  comparison: {
    kind: "content" | "routing";
    before: { heading: string; steps: string[]; note: string };
    after: { heading: string; steps: string[]; note: string };
  };
  technologies: string[];
  problem: string;
  solution: string;
  impacts: string[];
  code?: string;
}
