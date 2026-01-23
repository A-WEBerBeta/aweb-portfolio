import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import logo from "../../assets/aweb-logo-trs.png";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  )?.matches;
  return prefersDark ? "dark" : "light";
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const isDark = theme === "dark";

  const toggleLabel = useMemo(
    () => (isDark ? "Passer en mode clair" : "Passer en mode sombre"),
    [isDark],
  );

  const close = () => setOpen(false);

  // Apply + persist theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Lock scroll when drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <a className={styles.brand} href="#top" aria-label="Retour en haut">
            <img className={styles.logo} src={logo} alt="aweb. Aurélie Weber" />
          </a>

          {/* Desktop */}
          <div className={styles.right}>
            <nav className={styles.nav} aria-label="Navigation principale">
              <a href="#projects">Projets</a>
              <a href="#skills">Compétences</a>
              <a href="#about">À propos</a>
            </nav>

            <Button href="#contact" variant="secondary" className={styles.cta}>
              Contact
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={18} strokeWidth={2.2} />
          </button>
        </div>
      </Container>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={close}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside
        id="mobile-menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.drawerTop}>
          <p className={styles.drawerTitle}>Menu</p>

          <button
            type="button"
            className={styles.close}
            onClick={close}
            aria-label="Fermer"
          >
            <X size={18} strokeWidth={2.4} />
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Navigation mobile">
          <a href="#projects" onClick={close}>
            Projets
          </a>
          <a href="#skills" onClick={close}>
            Compétences
          </a>
          <a href="#about" onClick={close}>
            À propos
          </a>
        </nav>

        <div className={styles.drawerCtas}>
          <Button
            href="#contact"
            className={styles.drawerPrimary}
            onClick={close}
          >
            Me contacter
          </Button>

          <Button
            href="#projects"
            variant="secondary"
            className={styles.drawerSecondary}
            onClick={close}
          >
            Voir mes projets
          </Button>
        </div>

        <div className={styles.drawerDivider} aria-hidden="true" />

        {/* Actions secondaires (remplace le rail en mobile) */}
        <div className={styles.drawerRail} aria-label="Réseaux & thème">
          <a
            className={styles.drawerIconBtn}
            href="https://www.linkedin.com/in/aur%C3%A9lie-weber-a354b1340/"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.drawerActionLeft}>
              <Linkedin size={18} strokeWidth={2} />
              <span className={styles.drawerActionLabel}>LinkedIn</span>
            </span>
          </a>

          <a
            className={styles.drawerIconBtn}
            href="https://github.com/A-WEBerBeta"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.drawerActionLeft}>
              <Github size={18} strokeWidth={2} />
              <span className={styles.drawerActionLabel}>GitHub</span>
            </span>
          </a>

          <button
            type="button"
            className={styles.drawerThemeBtn}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={toggleLabel}
            title={toggleLabel}
          >
            <span className={styles.drawerActionLeft}>
              {isDark ? (
                <Sun size={18} strokeWidth={2} />
              ) : (
                <Moon size={18} strokeWidth={2} />
              )}
              <span className={styles.drawerActionLabel}>Thème</span>
            </span>

            <span className={styles.drawerPill}>
              {isDark ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </aside>
    </header>
  );
}
