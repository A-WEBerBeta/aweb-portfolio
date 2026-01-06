import logo from "../../assets/aweb-logo-trs.png";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <a className={styles.brand} href="#top">
            <img className={styles.logo} src={logo} alt="aweb. Aurélie Weber" />
          </a>
          <nav className={styles.nav}>
            <a href="#projects">Projets</a>
            <a href="#skills">Compétences</a>
            <a href="#about">À propos</a>
          </nav>

          <Button
            href="#contact"
            variant="primary"
            size="sm"
            className={styles.cta}
          >
            Contact
          </Button>
        </div>
      </Container>
    </header>
  );
}
