"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { engineeringHighlights } from "@/lib/engineeringHighlightData";
import type { EngineeringHighlight } from "@/types/engineeringHighlight";
import DetailDialog from "../common/DetailDialog";
import ArchitectureComparison from "./ArchitectureComparison";
import Reveal from "../common/Reveal";
import styles from "./Portfolio.module.css";

export default function EngineeringHighlightsSection() {
  const [selectedHighlight, setSelectedHighlight] = useState<EngineeringHighlight | null>(null);

  return (
    <section aria-labelledby="engineering-highlights-title" className={styles.section}>
      <Reveal>
        <div className={styles.sectionTopline}><span className={styles.eyebrow}>03 / 구조 개선</span><span className={styles.eyebrow}>Engineering Highlights</span></div>
        <div className={styles.largeSectionHeading}><h2 id="engineering-highlights-title">기존 구조를 어떻게 바꿨는지</h2><p>기존 시스템에서 발견한 문제를 구조와 기술 선택을 통해 개선한 경험입니다.</p></div>
      </Reveal>
      <div className={styles.highlightGrid}>
        {engineeringHighlights.map((highlight, index) => (
          <Reveal key={highlight.id} delay={index * 0.08}>
            <article className={styles.highlightCard}>
              <button type="button" className={styles.highlightButton} aria-haspopup="dialog" aria-labelledby={`${highlight.id}-title`} onClick={() => setSelectedHighlight(highlight)}>
                <div className={styles.highlightHeader}>
                  <div className={styles.cardCategory}><span>{highlight.category}</span><span>0{index + 1}</span></div>
                  <h3 id={`${highlight.id}-title`}>{highlight.title}</h3>
                </div>
                <ArchitectureComparison comparison={highlight.comparison} />
                <div className={styles.highlightBody}>
                  <p>{highlight.summary}</p>
                  <div className={styles.cardBottom}><span>{highlight.technologies.join(" · ")}</span><span className={styles.cardReadMore}>개선 과정 <FiArrowUpRight aria-hidden="true" /></span></div>
                </div>
              </button>
            </article>
          </Reveal>
        ))}
      </div>
      {selectedHighlight && (
        <DetailDialog title={selectedHighlight.title} label={selectedHighlight.category} onClose={() => setSelectedHighlight(null)}>
          <p className={styles.detailLead}>{selectedHighlight.description}</p>
          <div className={styles.tags}>{selectedHighlight.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className={styles.detailSections}>
            <section><span className={styles.eyebrow}>01 / 문제 발견</span><h3>어떤 문제가 있었나요?</h3><p>{selectedHighlight.problem}</p></section>
            <section><span className={styles.eyebrow}>02 / 해결 방법</span><h3>구조를 어떻게 바꿨나요?</h3><p>{selectedHighlight.solution}</p><ArchitectureComparison comparison={selectedHighlight.comparison} />{selectedHighlight.code && <pre><code>{selectedHighlight.code}</code></pre>}</section>
            <section><span className={styles.eyebrow}>03 / 개선 결과</span><h3>무엇이 달라졌나요?</h3><ul>{selectedHighlight.impacts.map((impact) => <li key={impact}>{impact}</li>)}</ul></section>
          </div>
        </DetailDialog>
      )}
    </section>
  );
}
