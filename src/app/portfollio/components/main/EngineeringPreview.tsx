"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiCheck, FiFileText, FiGitBranch, FiLayers } from "react-icons/fi";
import styles from "./Portfolio.module.css";

const previews = [
  {
    label: "콘텐츠 운영",
    before: ["콘텐츠 작성", "개발자에게 수정 요청", "MDX 수정 · Git · 배포"],
    after: ["콘텐츠 작성", "Payload CMS에서 직접 편집", "콘텐츠 반영"],
    beforeNote: "콘텐츠 변경마다 개발 작업에 의존",
    afterNote: "비개발자가 직접 운영하는 콘텐츠",
  },
  {
    label: "경로 설계",
    before: ["경로 계산 요청", "도로 · 해상 · 철도 조건 분기", "하나의 로직에서 API별 처리"],
    after: ["경로 계산 요청", "공통 경로 계산 인터페이스", "도로 · 해상 · 철도 독립 처리"],
    beforeNote: "운송수단이 늘수록 함께 커지는 조건문",
    afterNote: "공통 인터페이스, 분리된 책임",
  },
];

export default function EngineeringPreview() {
  const [selected, setSelected] = useState(0);
  const [improved, setImproved] = useState(true);
  const reduceMotion = useReducedMotion();
  const panelId = useId();
  const preview = previews[selected];
  const steps = improved ? preview.after : preview.before;

  return (
    <div className={styles.preview}>
      <div className={styles.previewHeader}><span className={styles.previewIcon}><FiLayers /></span><div><strong>구조 개선 노트</strong><span>개발 과정에서 바꾼 두 가지</span></div></div>
      <div className={styles.previewTopics} aria-label="개선 사례 선택">
        {previews.map((item, index) => <button key={item.label} type="button" aria-pressed={selected === index} aria-controls={panelId} onClick={() => setSelected(index)}>{index === 0 ? <FiFileText /> : <FiGitBranch />}{item.label}</button>)}
      </div>
      <div className={styles.previewCanvas} id={panelId}>
        <div className={styles.previewState}><span className={styles.eyebrow}>{improved ? "개선된 작업 흐름" : "기존 작업 흐름"}</span><div className={styles.segmentedControl} aria-label="개선 전후 비교"><button type="button" aria-pressed={!improved} onClick={() => setImproved(false)}>개선 전</button><button type="button" aria-pressed={improved} onClick={() => setImproved(true)}>개선 후</button></div></div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={`${selected}-${improved}`} initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduceMotion ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.15 }} className={styles.previewSteps}>
            {steps.map((step, index) => <div key={step}><div className={`${styles.previewStep} ${index === 1 && improved ? styles.previewStepActive : ""}`}><span>{index === 2 && improved ? <FiCheck /> : `0${index + 1}`}</span>{step}{index === 1 && improved && <span className={styles.stepStatus} />}</div>{index < steps.length - 1 && <FiArrowDown className={styles.stepArrow} aria-hidden="true" />}</div>)}
          </motion.div>
        </AnimatePresence>
        <p className={styles.previewNote} aria-live="polite">{improved ? <FiCheck /> : <FiGitBranch />}{improved ? preview.afterNote : preview.beforeNote}</p>
      </div>
      <a className={styles.previewFooter} href="#engineering-highlights">실제 개선 사례 살펴보기<FiArrowUpRight aria-hidden="true" /></a>
    </div>
  );
}
