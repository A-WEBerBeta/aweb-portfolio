import Container from "../Container/Container";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>À propos</h2>
            <span className={styles.rule} aria-hidden></span>
          </div>

          <div className={styles.content}>
            <p>
              Après{" "}
              <strong>15 années d'expérience en tant qu'opticienne</strong>, je
              travaille aujourd'hui comme développeuse frontend.
            </p>
            <p>
              Ce parcours m'a transmis{" "}
              <strong>rigueur, précision et sens du détail</strong>, que
              j'applique désormais dans la conception d'interfaces web.
            </p>
            <p>
              Je développe principalement avec <strong>React</strong>, en
              portant une attention particulière à{" "}
              <strong>l'accessibilité</strong>, à la lisibilité et à la
              maintenabilité du code.
            </p>

            <p className={styles.signature}>
              Interfaces sobres, accessibles et pensées pour durer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
