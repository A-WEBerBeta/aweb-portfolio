import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import styles from "./SocialRail.module.css";

function getInitialTheme() {
  if (typeof window === "undefined") return "light"; // safety SSR
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  )?.matches;
  return prefersDark ? "dark" : "light";
}

export default function SocialRail() {
  const [theme, setTheme] = useState(getInitialTheme); // ✅ init direct
  const [hide, setHide] = useState(false);

  const isDark = theme === "dark";

  // persist + apply theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // hide rail when #contact is in view
  useEffect(() => {
    const target = document.querySelector("#contact");
    if (!target) return;

    const obs = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { root: null, rootMargin: "-20% 0px -35% 0px", threshold: 0.01 }
    );

    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  const toggleLabel = useMemo(
    () => (isDark ? "Passer en mode clair" : "Passer en mode sombre"),
    [isDark]
  );

  return (
    <div
      className={`${styles.rail} ${hide ? styles.railHidden : ""}`}
      aria-label="Liens & thème"
    >
      <a
        className={styles.iconBtn}
        href="https://www.linkedin.com/in/aur%C3%A9lie-weber-a354b1340/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <Linkedin size={18} strokeWidth={2} />
      </a>

      <a
        className={styles.iconBtn}
        href="https://github.com/A-WEBerBeta"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <Github size={18} strokeWidth={2} />
      </a>

      <button
        type="button"
        className={styles.iconBtn}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={toggleLabel}
        title={toggleLabel}
      >
        {isDark ? (
          <Sun size={18} strokeWidth={2} />
        ) : (
          <Moon size={18} strokeWidth={2} />
        )}
      </button>

      <span className={styles.line} aria-hidden="true" />
    </div>
  );
}
