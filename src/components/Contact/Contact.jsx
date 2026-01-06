import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.h2}>Contact</h2>

          <p className={styles.text}>
            Vous pouvez me contacter pour échanger autour d'un poste frontend,
            d'un projet ou simplement pour discuter. Je réponds volontiers.
          </p>

          <div className={styles.actions}>
            <Button href="mailto:aurelieweb@gmail.com">Me contacter</Button>

            <Button
              href="https://www.linkedin.com/in/aurélie-weber-a354b1340/"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
