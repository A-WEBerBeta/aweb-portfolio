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
          <h2 className={styles.h2}>Compétences</h2>
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
            <article className={styles.block}>
              <div className={styles.blockTop}>
                <h3 className={styles.h3}>Qualité</h3>
                <span className={styles.note}>
                  Ce que j'applique au quotidien
                </span>
              </div>

              <div className={styles.chips}>
                <span className={styles.chip}>Architecture composants</span>
                <span className={styles.chip}>Composants réutilisables</span>
                <span className={styles.chip}>Accessibilité (WCAG)</span>
                <span className={styles.chip}>Navigation clavier & focus</span>
                <span className={styles.chip}>Sémantique HTML</span>
                <span className={styles.chip}>Refacto & lisibilité</span>
                <span className={styles.chip}>Performance UI</span>
              </div>
            </article>

            <article className={styles.block}>
              <div className={styles.blockTop}>
                <h3 className={styles.h3}>Outils & workflow</h3>
                <span className={styles.note}>Pour livrer proprement</span>
              </div>

              <div className={styles.chips}>
                <span className={styles.chip}>Git / GitHub</span>
                <span className={styles.chip}>Intégration Figma</span>
                <span className={styles.chip}>Sass (SCSS)</span>
                <span className={styles.chip}>API REST</span>
                <span className={styles.chip}>Fetch / Async</span>
                <span className={styles.chip}>JSON</span>
                <span className={styles.chip}>Chrome DevTools</span>
              </div>
            </article>

            <article className={styles.block}>
              <div className={styles.blockTop}>
                <h3 className={styles.h3}>Approche & méthode</h3>
                <span className={styles.note}>
                  15 ans en optique : précision, écoute et exigence du détail
                </span>
              </div>

              <div className={styles.chips}>
                <span className={styles.chip}>Autonomie</span>
                <span className={styles.chip}>Souci du détail</span>
                <span className={styles.chip}>Sens utilisateur</span>
                <span className={styles.chip}>Pédagogie</span>
                <span className={styles.chip}>Rigueur</span>
                <span className={styles.chip}>Communication claire</span>
                <span className={styles.chip}>Priorisation</span>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
