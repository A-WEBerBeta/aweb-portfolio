import useScrollProgressReveal from "../../hooks/useScrollProgressReveal";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Contact.module.css";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { ref } = useScrollProgressReveal({ preset: "soft" });

  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.shell}>
          {/* Fond déco ? */}
          <div className={styles.bg} aria-hidden="true"></div>

          <div className={styles.inner} ref={ref}>
            <h2 className={styles.title}>
              Prêt<span className={styles.dot1}>•</span>e à collaborer ?
            </h2>

            <p className={styles.lead}>
              Un poste frontend, un projet, ou juste envie d'échanger : <br />
              je réponds volontiers.
            </p>

            <div className={styles.ctaRow}>
              <Button
                href="mailto:aurelieweb@gmail.com"
                className={styles.bigCta}
              >
                <span className={styles.ctaIcon} aria-hidden="true">
                  <Mail size={24} strokeWidth={2.3} />
                </span>
                <span className={styles.ctaLabel}>M'écrire</span>
              </Button>
            </div>

            <div className={styles.chipsRow}>
              <Button
                href="https://www.linkedin.com/in/aur%C3%A9lie-weber-a354b1340/"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <span className={styles.chipIcon} aria-hidden="true">
                  <Linkedin
                    className={styles.iconTeal}
                    size={20}
                    strokeWidth={1.8}
                  />
                </span>
                LinkedIn
              </Button>

              <Button
                href="https://github.com/A-WEBerBeta"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <span className={styles.chipIcon} aria-hidden="true">
                  <Github
                    className={styles.iconTeal}
                    size={20}
                    strokeWidth={2}
                  />
                </span>
                GitHub
              </Button>
            </div>

            <div className={styles.hr} aria-hidden="true"></div>

            <div className={styles.meta}>
              <a href="mailto:aurelieweb@gmail.com" className={styles.metaLink}>
                <Mail className={styles.iconTeal} size={18} strokeWidth={2.2} />
                <span className={styles.metaLabel}>aurelieweb@gmail.com</span>
              </a>

              <div className={styles.metaSep} aria-hidden="true"></div>

              <span className={styles.metaItem}>
                <MapPin
                  className={styles.iconTeal}
                  size={18}
                  strokeWidth={2.2}
                />
                France <span className={styles.dot2}>•</span> Remote ok
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
