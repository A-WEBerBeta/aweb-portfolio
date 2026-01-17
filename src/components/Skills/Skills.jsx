import Container from "../Container/Container";
import styles from "./Skills.module.css";

import cssLogo from "../../assets/tech/css.svg";
import htmlLogo from "../../assets/tech/html.svg";
import jsLogo from "../../assets/tech/javascript.svg";
import sassLogo from "../../assets/tech/sass.svg";

import reactLogo from "../../assets/tech/react.svg";
import reduxLogo from "../../assets/tech/redux.svg";

import figmaLogo from "../../assets/tech/figma.svg";
import githubLogo from "../../assets/tech/github.svg";
import viteLogo from "../../assets/tech/vite.svg";

const GROUPS = [
  {
    label: "Langages & styling",
    items: [
      { name: "JavaScript", src: jsLogo, glow: "rgba(247, 223, 30, 0.55)" },
      { name: "HTML", src: htmlLogo, glow: "rgba(227, 79, 38, 0.55)" },
      { name: "CSS", src: cssLogo, glow: "rgba(21, 114, 182, 0.55)" },
      { name: "Sass/SCSS", src: sassLogo, glow: "rgba(204, 102, 153, 0.55)" },
    ],
  },
  {
    label: "Frameworks & libs",
    items: [
      { name: "React", src: reactLogo, glow: "rgba(97, 218, 251, 0.55)" },
      { name: "Redux", src: reduxLogo, glow: "rgba(118, 74, 188, 0.55)" },
    ],
  },
  {
    label: "Outils",
    items: [
      { name: "Vite", src: viteLogo, glow: "rgba(100, 108, 255, 0.55)" },
      { name: "Figma", src: figmaLogo, glow: "rgba(242, 115, 30, 0.55)" },
      {
        name: "GitHub",
        src: githubLogo,
        glow: "rgba(255, 255, 255, 0.35)",
        invert: true,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Compétences</h2>
            <span className={styles.rule} aria-hidden />
          </div>

          <p className={styles.lead}>
            Stack front-end orientée UI, avec un focus accessibilité et qualité
            d’interface.
          </p>
        </header>

        <div className={styles.groups}>
          {GROUPS.map((group) => (
            <div key={group.label} className={styles.group}>
              <p className={styles.groupLabel}>{group.label}</p>

              <ul className={styles.grid}>
                {group.items.map((it) => (
                  <li
                    key={it.name}
                    className={`${styles.item} ${
                      it.name === "GitHub" ? styles.isGithub : ""
                    }`}
                    style={{ ["--glow"]: it.glow }}
                  >
                    <img
                      className={`${styles.logo} ${
                        it.invert ? styles.logoGithub : ""
                      }`}
                      src={it.src}
                      alt={it.name}
                      loading="lazy"
                      draggable={false}
                    />
                    <span className={styles.name}>{it.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
