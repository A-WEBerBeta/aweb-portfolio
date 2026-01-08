import Container from "../Container/Container";
import styles from "./Skills.module.css";

import cssIcon from "../../assets/tech/css.svg";
import figmaIcon from "../../assets/tech/figma.svg";
import htmlIcon from "../../assets/tech/html.svg";
import jsIcon from "../../assets/tech/javascript.svg";
import reactIcon from "../../assets/tech/react.svg";
import reduxIcon from "../../assets/tech/redux.svg";
import viteIcon from "../../assets/tech/vite.svg";

const tech = [
  { name: "React", src: reactIcon },
  { name: "JavaScript", src: jsIcon },
  { name: "Redux", src: reduxIcon },
  { name: "HTML", src: htmlIcon },
  { name: "CSS", src: cssIcon },
  { name: "Vite", src: viteIcon },
  { name: "Figma", src: figmaIcon },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Compétences</h2>
            <span className={styles.rule} aria-hidden></span>
          </div>

          <p className={styles.lead}>
            Stack orientée React, avec un focus sur l'accessibilité et la
            qualité d'interface.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Colonne gauche */}
          <div className={styles.left}>
            <div className={styles.railTitle}>Stack</div>

            <div className={styles.rail}>
              {tech.map((t) => (
                <div key={t.name} className={styles.railItem}>
                  <img
                    className={styles.railLogo}
                    src={t.src}
                    alt={t.name}
                    loading="lazy"
                  />
                  <span className={styles.railLabel}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite */}
          <div className={styles.right}>
            <div className={styles.rightCard}>
              <article className={styles.block}>
                <div className={styles.blockTop}>
                  <h3 className={styles.h3}>Qualité</h3>
                  {/* <p className={styles.note}>Ce que j'applique au quotidien</p> */}
                </div>

                <ul className={styles.items}>
                  <li className={styles.item}>
                    Composants réutilisables & design system
                  </li>
                  <li className={styles.item}>
                    Accessibilité (WCAG), clavier & focus
                  </li>
                  <li className={styles.item}>Sémantique HTML</li>
                  <li className={styles.item}>Refacto & lisibilité</li>
                  <li className={styles.item}>Performance UI</li>
                </ul>
              </article>

              <article className={styles.block}>
                <div className={styles.blockTop}>
                  <h3 className={styles.h3}>Outils & workflow</h3>
                  {/* <p className={styles.note}>Pour livrer proprement</p> */}
                </div>

                <ul className={styles.items}>
                  <li className={styles.item}>Git / GitHub</li>
                  <li className={styles.item}>Intégration Figma</li>
                  <li className={styles.item}>Sass (SCSS)</li>
                  <li className={styles.item}>API REST + fetch/async</li>
                  <li className={styles.item}>Chrome DevTools</li>
                </ul>
              </article>

              <article className={styles.block}>
                <div className={styles.blockTop}>
                  <h3 className={styles.h3}>Approche & méthode</h3>
                  {/* <p className={styles.note}>
                    15 ans en optique : précision, écoute et exigence du détail
                  </p> */}
                </div>

                <ul className={styles.items}>
                  <li className={styles.item}>Rigueur & autonomie</li>
                  <li className={styles.item}>
                    Souci du détail, sens utilisateur
                  </li>
                  <li className={styles.item}>Communication claire</li>
                  <li className={styles.item}>Priorisation</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
