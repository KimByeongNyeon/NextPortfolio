"use client";

import { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/projectData";
import { projectGalleries } from "@/lib/portfolioData";
import type { Project } from "@/types/project";
import DetailDialog from "../common/DetailDialog";
import Reveal from "../common/Reveal";
import styles from "./Portfolio.module.css";

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imageIndex, setImageIndex] = useState(0);
  const gallery = projectGalleries[project.title];
  const images = gallery
    ? [project.imageUrl, ...Array.from({ length: gallery.count }, (_, index) => `/assets/projects/${gallery.folder}/${gallery.folder}${String(index + 1).padStart(2, "0")}.gif`)]
    : [project.imageUrl];

  return (
    <DetailDialog title={project.title} label={`프로젝트 / ${project.year}`} onClose={onClose}>
      <p className={styles.detailLead}>{project.subtitle}</p>
      <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <dl className={styles.projectFacts}>
        <div><dt>기간</dt><dd>{project.year} / {project.month} · {project.duration}</dd></div>
        <div><dt>역할</dt><dd>{project.role}</dd></div>
        {project.teamSize && <div><dt>팀 구성</dt><dd>{project.teamSize}명</dd></div>}
        {project.award && <div><dt>수상</dt><dd>{project.award.rank}</dd></div>}
      </dl>
      <div className={styles.detailLinks}>
        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FiGithub />GitHub<FiArrowUpRight /></a>}
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">서비스 보기<FiArrowUpRight /></a>}
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryImage}><Image src={images[imageIndex]} alt={`${project.title} 실행 화면 ${imageIndex + 1}`} fill unoptimized sizes="(max-width: 700px) 90vw, 760px" /></div>
        <div className={styles.galleryControls}><span aria-live="polite">{String(imageIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span><div><button className={styles.iconButton} type="button" aria-label="이전 프로젝트 이미지" onClick={() => setImageIndex((index) => (index - 1 + images.length) % images.length)}><FiChevronLeft /></button><button className={styles.iconButton} type="button" aria-label="다음 프로젝트 이미지" onClick={() => setImageIndex((index) => (index + 1) % images.length)}><FiChevronRight /></button></div></div>
      </div>
      <div className={styles.detailSections}>
        <section><h3>프로젝트 소개</h3><p>{project.detailedDescription || project.description}</p></section>
        <section><h3>담당 기능</h3><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
        {project.detailedFeatures && <details className={styles.detailDisclosure}><summary>전체 기능 살펴보기</summary>{project.detailedFeatures.map((feature) => <section key={feature.category}><h4>{feature.category}</h4><ul>{feature.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</details>}
        <details className={styles.detailDisclosure}><summary>기술 스택</summary>{Object.entries(project.techStack).map(([category, technologies]) => <section key={category}><h4>{{ frontend: "프론트엔드", backend: "백엔드", database: "데이터베이스", deployment: "배포", tools: "도구" }[category] || category}</h4><p>{technologies.join(" · ")}</p></section>)}</details>
        {project.techChoices && <section><h3>기술 선택과 이유</h3>{project.techChoices.map((choice) => <details className={styles.detailDisclosure} key={choice.title}><summary>{choice.title}</summary><p>{choice.reason}</p>{choice.table && <div className={styles.tableScroll} tabIndex={0} role="region" aria-label={`${choice.title} 기술 비교`}><table><thead><tr>{choice.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{choice.table.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>}</details>)}</section>}
        {project.troubleshooting && <section><h3>문제 해결 과정</h3>{project.troubleshooting.map((item) => <details className={styles.detailDisclosure} key={item.title}><summary>{item.title}</summary><p>{item.content}</p>{item.link && <a className={styles.textLink} href={item.link} target="_blank" rel="noopener noreferrer">자세한 기록<FiArrowUpRight /></a>}</details>)}</section>}
        {project.challenges && <section><h3>도전 과제</h3><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        {project.solutions && <section><h3>해결 방법</h3><ul>{project.solutions.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        {project.learnings && <section><h3>배운 점</h3><ul>{project.learnings.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        {project.retrospective && <details className={styles.detailDisclosure}><summary>회고와 성장</summary><div className={styles.markdown}><ReactMarkdown>{project.retrospective}</ReactMarkdown></div></details>}
      </div>
    </DetailDialog>
  );
}

export default function SelectedProjects({ start = 0, end = projects.length }: { start?: number; end?: number }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const titleId = `projects-title-${start}`;

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <Reveal>
        <div className={styles.sectionTopline}><span className={styles.eyebrow}>{start === 0 ? "04 / 프로젝트" : "05 / 프로젝트"}</span><span className={styles.eyebrow}>{start + 1}–{Math.min(end, projects.length)} / 전체 {projects.length}개</span></div>
        <div className={styles.largeSectionHeading}><h2 id={titleId}>{start === 0 ? "사용자 경험을 만든 프로젝트" : "일상의 문제를 풀어낸 프로젝트"}</h2><p>아이디어를 실제로 동작하는<br />제품으로 만든 경험입니다.</p></div>
      </Reveal>
      <div className={styles.projectGrid}>
        {projects.slice(start, end).map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.08}>
            <article className={styles.projectCard}>
              <button type="button" aria-haspopup="dialog" aria-labelledby={`project-${project.id}-title`} className={styles.projectButton} onClick={() => setSelectedProject(project)}>
                <div className={styles.projectImage} data-project={start + index}>
                  <div className={styles.projectImageBar}><span /><span /><span /><span>{project.title}</span><FiArrowUpRight /></div>
                  <div className={styles.projectScreen}><Image src={project.imageUrl} alt={`${project.title} 서비스 화면`} fill unoptimized sizes="(max-width: 700px) 90vw, 520px" /></div>
                  {project.award && <span className={styles.awardBadge}>✦ {project.award.rank}</span>}
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectTitleRow}><h3 id={`project-${project.id}-title`}>{project.title}</h3><span className={styles.roundArrow}><FiArrowUpRight aria-hidden="true" /><span className="sr-only">프로젝트 상세보기</span></span></div>
                  <p>{project.subtitle}</p>
                  <div className={styles.cardBottom}><span>{project.tags.slice(0, 3).join(" · ")}</span><span>{project.year}</span></div>
                </div>
              </button>
            </article>
          </Reveal>
        ))}
      </div>
      {selectedProject && <ProjectDetail key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
