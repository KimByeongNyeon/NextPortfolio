"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./Portfolio.module.css";

export interface PortfolioScene {
  id: string;
  label: string;
  content: ReactNode;
}

const desktopQuery = "(min-width: 1024px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)";

export default function ScrollSections({ scenes }: { scenes: PortfolioScene[] }) {
  const [enabled, setEnabled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const currentScene = useRef(0);
  const initialized = useRef(false);
  const horizontal = enabled && !expanded;
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 84px", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(scenes.length - 1) * 100}%`]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!horizontal) return;
    const index = Math.min(scenes.length - 1, Math.max(0, Math.round(value * (scenes.length - 1))));
    currentScene.current = index;
    setActive(index);
  });

  useEffect(() => {
    const query = window.matchMedia(desktopQuery);
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (horizontal) document.documentElement.dataset.portfolioDeck = "true";
    else delete document.documentElement.dataset.portfolioDeck;

    // Keep the same destination when switching between the presentation and reading layouts.
    const frame = requestAnimationFrame(() => {
      if (!initialized.current) {
        const index = scenes.findIndex((scene) => scene.id === window.location.hash.slice(1));
        if (index >= 0) currentScene.current = index;
        initialized.current = true;
      }
      document.getElementById(scenes[currentScene.current].id)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => {
      cancelAnimationFrame(frame);
      delete document.documentElement.dataset.portfolioDeck;
    };
  }, [horizontal, scenes]);

  return (
    <div ref={railRef} className={horizontal ? styles.scrollRail : styles.readingFlow} style={horizontal ? { height: `calc((100svh - 84px) * ${scenes.length})` } : undefined}>
      {horizontal ? (
        <>
          <div aria-hidden="true" className={styles.scrollMarkers}>
            {scenes.map((scene, index) => <div key={scene.id} id={scene.id} className={styles.scrollMarker} style={{ top: `calc((100svh - 84px) * ${index})` }} />)}
          </div>
          <div className={styles.sceneViewport}>
            <motion.div className={styles.sceneTrack} style={{ x }}>
              {scenes.map((scene, index) => (
                <div key={scene.id} className={styles.scene} inert={active !== index} aria-hidden={active !== index}>
                  <div className={styles.sceneContent} tabIndex={0} role="region" aria-label={`${scene.label} 화면 내용`}>{scene.content}</div>
                </div>
              ))}
            </motion.div>
            <div className={styles.sceneDock}>
              <div className={styles.scenePosition}><span>{String(active + 1).padStart(2, "0")} <span>/ {String(scenes.length).padStart(2, "0")}</span></span><strong>{scenes[active].label}</strong></div>
              <nav className={styles.sceneNavigation} aria-label="화면별 섹션 탐색">
                {scenes.map((scene, index) => <a key={scene.id} href={`#${scene.id}`} aria-label={`${index + 1}. ${scene.label}`} aria-current={active === index ? "step" : undefined} title={scene.label}><span /></a>)}
              </nav>
              <div className={styles.sceneActions}>
                <button type="button" onClick={() => setExpanded(true)}>전체 펼쳐 보기</button>
                {active > 0 && <a href={`#${scenes[active - 1].id}`} aria-label="이전 화면" className={styles.iconButton}><FiArrowLeft /></a>}
                {active < scenes.length - 1 ? <a href={`#${scenes[active + 1].id}`} aria-label="다음 화면" className={styles.iconButton}><FiArrowRight /></a> : <a href="#welcome" aria-label="첫 화면으로" className={styles.iconButton}><FiArrowLeft /></a>}
              </div>
            </div>
            <span className={styles.scrollHint} aria-hidden="true"><FiArrowDown /> 아래로 스크롤하면 다음 화면으로</span>
          </div>
        </>
      ) : (
        <>
          {enabled && <button type="button" className={styles.presentationToggle} onClick={() => {
            const index = scenes.findIndex((scene) => (document.getElementById(scene.id)?.getBoundingClientRect().bottom || 0) > 150);
            currentScene.current = Math.max(0, index);
            setExpanded(false);
          }}>한 화면씩 보기 <FiArrowRight /></button>}
          {scenes.map((scene) => <div key={scene.id} id={scene.id} className={styles.readingScene}>{scene.content}</div>)}
        </>
      )}
    </div>
  );
}
