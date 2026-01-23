import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./SocialRail.module.css";

export default function SocialRail() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const target = document.querySelector("#contact");
    if (!target) return;

    const obs = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { root: null, rootMargin: "-20% 0px -35% 0px", threshold: 0.01 },
    );

    obs.observe(target);
    return () => obs.disconnect();
  }, []);

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

      {/* ✅ toggle partagé */}
      <ThemeToggle className={styles.iconBtn} />

      <span className={styles.line} aria-hidden="true" />
    </div>
  );
}
