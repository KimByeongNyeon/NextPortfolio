"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./main/Portfolio.module.css";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <button className={styles.iconButton} type="button" disabled={!mounted} onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "라이트 테마로 전환" : "다크 테마로 전환"} title={dark ? "라이트 테마" : "다크 테마"}>
      {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
