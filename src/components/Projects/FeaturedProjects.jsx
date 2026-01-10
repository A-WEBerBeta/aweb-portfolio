import { FaJsSquare, FaReact, FaUniversalAccess } from "react-icons/fa";
import { SiCssmodules } from "react-icons/si";
import portfolioImg from "../../assets/projects/portfolio.png";
import useScrollProgressReveal from "../../hooks/useScrollProgressReveal";
import Container from "../Container/Container";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProject() {
  const { ref: headerRef } = useScrollProgressReveal({ preset: "header" });
  const { ref: gridRef } = useScrollProgressReveal({ preset: "focus" });

  return (
    <section id="projects" className={styles.section}>
      <Container>
        <div className={styles.header} ref={headerRef}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Mes projets</h2>
            <span className={styles.rule} aria-hidden />
          </div>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {/* VISUEL */}
          <div className={styles.left}>
            <div className={styles.shot}>
              <img src={portfolioImg} alt="Aperçu du portfolio" />
            </div>
          </div>

          {/* TEXTE */}
          <div className={styles.right}>
            <p className={styles.kicker}>Focus projet</p>

            <h3 className={styles.title}>
              Portfolio — UI sobre <br /> & responsive
            </h3>

            <div className={styles.stack}>
              <div className={styles.tech}>
                <div className={styles.techIcon} aria-hidden>
                  <FaReact />
                </div>
                <div className={styles.techLabel}>React</div>
              </div>

              <div className={styles.tech}>
                <div className={styles.techIcon} aria-hidden>
                  <FaJsSquare />
                </div>
                <div className={styles.techLabel}>JavaScript</div>
              </div>

              <div className={styles.tech}>
                <div className={styles.techIcon} aria-hidden>
                  <SiCssmodules />
                </div>
                <div className={styles.techLabel}>CSS Modules</div>
              </div>

              <div className={styles.tech}>
                <div className={styles.techIcon} aria-hidden>
                  <FaUniversalAccess />
                </div>
                <div className={styles.techLabel}>Accessibilité</div>
              </div>
            </div>

            <a
              className={styles.cta}
              href="https://aweb-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Voir le projet
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
