"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowDown, FiArrowDownRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { experiences, profile, skillGroups } from "@/lib/portfolioData";
import EngineeringHighlightsSection from "./EngineeringHighlightsSection";
import SelectedProjects from "./SelectedProjects";
import EngineeringPreview from "./EngineeringPreview";
import ScrollSections, { type PortfolioScene } from "./ScrollSections";
import DetailDialog from "../common/DetailDialog";
import Reveal from "../common/Reveal";
import styles from "./Portfolio.module.css";

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroTopline}>
        <span className={styles.eyebrow}><span className={styles.statusDot} /> 프론트엔드 개발자 김병년</span>
        <span className={styles.eyebrow}>사용자와 운영자를 위한 프론트엔드 개발</span>
      </div>
      <div className={styles.heroMain}>
        <div className={styles.heroCopy}>
          <div className={styles.profileBadge}>
            <Image src="/assets/profile.png" alt="김병년" width={44} height={44} priority />
            <div><strong>김병년</strong><span>프론트엔드 개발자</span></div>
          </div>
          <h1 id="hero-title" className={styles.heroTitle}>
            <span>문제를 해결하는</span>{" "}
            <span><em>개발자 김병년입니다.</em></span>
          </h1>
          <div className={styles.heroIntro}>
            <FiArrowDownRight aria-hidden="true" className={styles.heroArrow} />
            <div>
              <p>사용자의 불편을 이해하고,<br />코드와 구조로 해결하는 개발자입니다.</p>
              <a href="#engineering-highlights" className={styles.textLink}>실제 개선 사례 보기 <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <EngineeringPreview />
      </div>
      <div className={styles.heroBottom}>
        <span>React / Next.js / TypeScript</span>
        <a href="#about">저를 소개합니다 <FiArrowDown aria-hidden="true" /></a>
        <span>문제 발견부터 해결까지</span>
      </div>
    </section>
  );
}

function About() {
  const [showStory, setShowStory] = useState(false);

  return (
    <section className={styles.section} aria-labelledby="about-title">
      <Reveal className={styles.sectionGrid}>
        <div className={styles.sectionIndex}><span>01 / 소개</span><FiArrowDownRight aria-hidden="true" /></div>
        <div>
          <h2 id="about-title" className={styles.aboutTitle}>좋은 화면에서 한 걸음 더.<br /><span>좋은 구조와 협업까지.</span></h2>
          <p className={styles.aboutDescription}>{profile.introduction}</p>
          <div className={styles.aboutColumns}>
            <div><h3>함께 풀어가는 개발</h3><p>Git과 React가 낯선 팀원의 학습을 돕고, 어려운 부분을 먼저 찾아 함께 해결했습니다. 팀원들에게 가장 많은 도움을 준 ‘이달의 동료’로 선정되었습니다.</p></div>
            <div><h3>사용자의 언어로 소통</h3><p>전국 프로젝트 발표회에서 기술 용어보다 사용자의 불편과 해결 방법을 전달했습니다. 비개발자인 심사위원에게 전달력과 완성도를 인정받았습니다.</p></div>
          </div>
          <button type="button" className={styles.textLink} aria-haspopup="dialog" onClick={() => setShowStory(true)}>협업 이야기 더 읽기 <FiArrowUpRight aria-hidden="true" /></button>
          <div className={styles.skillList}>
            {skillGroups.map((group) => <div key={group.label} className={styles.skillRow}><h3>{group.label}</h3><p>{group.skills.join(" · ")}</p></div>)}
          </div>
        </div>
      </Reveal>
      {showStory && <DetailDialog title="함께 일하고, 함께 성장하는 개발" label="협업과 소통" onClose={() => setShowStory(false)}><div className={styles.detailSections}><section><h3>함께 풀어가는 개발</h3><p>{profile.collaboration}</p></section><section><h3>사용자의 언어로 소통</h3><p>{profile.communication}</p></section></div></DetailDialog>}
    </section>
  );
}

function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <Reveal className={styles.sectionGrid}>
        <div className={styles.sectionIndex}><span>02 / 경험</span><FiArrowDownRight aria-hidden="true" /></div>
        <div>
          <div className={styles.sectionHeading}><h2 id="experience-title">배우고, 만들며 쌓은 경험</h2><p>교육에서 팀 프로젝트, 그리고 프론트엔드 리드까지</p></div>
          {experiences.map((experience) => (
            <article key={experience.title} className={styles.experienceRow}>
              <span className={styles.eyebrow}>{experience.period}</span>
              <div><h3>{experience.title}</h3><span className={styles.experienceSubtitle}>{experience.subtitle}</span><p>{experience.description}</p><div className={styles.tags}>{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          ))}
          <div className={styles.recognition}><span className={styles.eyebrow}>수상 · 자격</span><ul><li>SSAFY 기업 연계 프로젝트 최우수상</li><li>SSAFY 전국 프로젝트 발표회 입상</li><li>SQLD</li><li>정보처리기사</li><li>한국사 능력 검정 시험 1급</li></ul></div>
        </div>
      </Reveal>
    </section>
  );
}

function Elsewhere() {
  return (
    <section className={`${styles.section} ${styles.contactSection}`} aria-labelledby="elsewhere-title">
      <Reveal className={styles.sectionGrid}>
        <div className={styles.sectionIndex}><span>06 / 코드와 기록</span><FiArrowDownRight aria-hidden="true" /></div>
        <div>
          <div className={styles.sectionHeading}><h2 id="elsewhere-title">포트폴리오 너머의 이야기</h2><p>작성한 코드와 문제를 해결한 과정을 기록합니다.</p></div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}><FiGithub aria-hidden="true" /><div><h3>프로젝트 코드</h3><p>GitHub에서 구현과 개발 과정을 살펴보세요.</p></div><FiArrowUpRight aria-hidden="true" /></a>
          <a href={profile.blog} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}><span className={styles.blogMark} aria-hidden="true">v.</span><div><h3>개발 기록</h3><p>Velog에 배운 것과 해결한 문제를 남깁니다.</p></div><FiArrowUpRight aria-hidden="true" /></a>
          <div className={styles.contactMessage}><h3>함께 더 나은 답을 만들어요.</h3><p>끝까지 읽어주셔서 감사합니다.<br />프론트엔드 개발자 김병년이었습니다.</p></div>
          <footer className={styles.footerBottom}><span>© 2026 김병년</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.blog} target="_blank" rel="noopener noreferrer">Velog ↗</a><a href="#welcome">처음으로 ↑</a></div></footer>
        </div>
      </Reveal>
    </section>
  );
}

// Stable scene definitions keep scroll position intact during interaction updates.
const scenes: PortfolioScene[] = [
  { id: "welcome", label: "첫인사", content: <Hero /> },
  { id: "about", label: "소개", content: <About /> },
  { id: "experience", label: "경험", content: <Experience /> },
  { id: "engineering-highlights", label: "구조 개선", content: <EngineeringHighlightsSection /> },
  { id: "projects", label: "프로젝트 1", content: <SelectedProjects start={0} end={2} /> },
  { id: "more-projects", label: "프로젝트 2", content: <SelectedProjects start={2} end={4} /> },
  { id: "elsewhere", label: "코드와 기록", content: <Elsewhere /> },
];

export default function PortfolioHome() {
  return <div className={styles.portfolio}><ScrollSections scenes={scenes} /></div>;
}
