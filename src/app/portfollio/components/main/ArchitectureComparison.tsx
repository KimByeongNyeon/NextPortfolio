import { FiArrowDown } from "react-icons/fi";
import type { EngineeringHighlight } from "@/types/engineeringHighlight";
import styles from "./Portfolio.module.css";

export default function ArchitectureComparison({ comparison }: { comparison: EngineeringHighlight["comparison"] }) {
  return (
    <div className={styles.comparison}>
      {(["before", "after"] as const).map((side) => {
        const content = comparison[side];
        const changed = side === "after";

        return (
          <div key={side} className={`${styles.comparisonSide} ${changed ? styles.comparisonAfter : ""}`}>
            <div className={styles.comparisonLabel}>{changed ? "변경" : "기존"}</div>
            {comparison.kind === "content" ? (
              <div className={styles.comparisonSequence}>
                <strong>{content.heading}</strong>
                {content.steps.map((step, index) => (
                  <div key={step}>
                    <span className={styles.comparisonStep}>{step}</span>
                    {index < content.steps.length - 1 && <FiArrowDown aria-hidden="true" />}
                  </div>
                ))}
              </div>
            ) : changed ? (
              <div className={styles.comparisonStrategies}>
                <strong>{content.heading}</strong>
                <div className={styles.comparisonBranches}>
                  {content.steps.map((step) => <span key={step}>{step}<small>전략</small></span>)}
                </div>
              </div>
            ) : (
              <div className={styles.comparisonBundle}>
                <strong>{content.heading}</strong>
                {content.steps.map((step) => <span key={step}>{step}</span>)}
              </div>
            )}
            <p>{content.note}</p>
          </div>
        );
      })}
    </div>
  );
}
