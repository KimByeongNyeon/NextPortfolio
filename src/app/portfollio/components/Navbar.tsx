"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/portfolioData";
import styles from "./main/Portfolio.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const home = pathname === "/";
  const links = [
    { href: `${home ? "" : "/"}#about`, label: "소개" },
    { href: `${home ? "" : "/"}#engineering-highlights`, label: "구조 개선" },
    { href: `${home ? "" : "/"}#projects`, label: "프로젝트" },
  ];

  return (
    <header className={styles.header} id="top">
      <a className={styles.skipLink} href="#main-content">본문으로 건너뛰기</a>
      <div className={styles.navbar}>
        <Link className={styles.brand} href={home ? "#welcome" : "/"} aria-label="김병년 포트폴리오 홈" onClick={() => setIsOpen(false)}><Image src="/assets/profile.png" alt="김병년 프로필" width={38} height={38} priority className={styles.brandPhoto} /><span>김병년<span className={styles.brandSub}>프론트엔드 개발자</span></span></Link>
        <nav className={styles.desktopNav} aria-label="메인 메뉴">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}<a href={profile.blog} target="_blank" rel="noopener noreferrer">개발 기록<FiArrowUpRight /></a></nav>
        <div className={styles.navActions}><ThemeToggle /><button className={`${styles.iconButton} ${styles.menuButton}`} type="button" aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiX /> : <FiMenu />}</button></div>
      </div>
      {isOpen && <nav id="mobile-navigation" className={styles.mobileNav} aria-label="모바일 메뉴" onKeyDown={(event) => { if (event.key === "Escape") { setIsOpen(false); document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus(); } }}>{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}<FiArrowUpRight /></Link>)}<a href={profile.blog} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>개발 기록<FiArrowUpRight /></a></nav>}
    </header>
  );
}
