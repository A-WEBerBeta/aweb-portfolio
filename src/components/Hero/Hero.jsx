import { ArrowDown } from "lucide-react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.h1}>
            Développeuse Web <br />{" "}
            <span className={styles.muted}>JavaScript</span> /{" "}
            <span className={styles.react}>React</span>
          </h1>

          <p className={styles.name}>Aurélie Weber</p>

          <p className={styles.p}>
            Je conçois des interfaces web modernes, lisibles et maintenables,
            orientées utilisateur.
          </p>

          <div className={styles.actions}>
            <Button href="#projects">Voir mes projets</Button>
            <Button href="#contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>
        <div className={styles.scrollWrap}>
          <a
            className={styles.scrollHint}
            href="#projects"
            aria-label="Aller aux projets"
          >
            <ArrowDown size={22} strokeWidth={2.5} />
          </a>
        </div>
      </Container>
    </section>
  );
}
