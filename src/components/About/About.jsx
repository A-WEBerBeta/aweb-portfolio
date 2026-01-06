import Container from "../Container/Container";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.h2}>À propos</h2>

          <div className={styles.text}>
            <p>
              Après 15 années d'expérience en tant qu'opticienne, je travaille
              aujourd'hui comme développeuse frontend.
            </p>
            <p>
              Ce parcours m'a transmis rigueur, précision et sens du détail, que
              j'applique désormais dans la conception d'interfaces web.
            </p>
            <p>
              Je développe principalement avec React, en portant une attention
              particulière à l'accessibilité, à la lisibilité et à la
              maintenabilité du code.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
