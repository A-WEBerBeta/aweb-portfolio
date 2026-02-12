import {
  FaCss3,
  FaJsSquare,
  FaPlay,
  FaReact,
  FaUniversalAccess,
  FaWordpress,
} from "react-icons/fa";
import { SiCssmodules, SiElementor } from "react-icons/si";
import useScrollProgressReveal from "../../hooks/useScrollProgressReveal";
import styles from "./FeaturedProjects.module.css";

const TECH = {
  react: { label: "React", Icon: FaReact },
  js: { label: "JavaScript", Icon: FaJsSquare },
  cssmodules: { label: "CSS Modules", Icon: SiCssmodules },
  a11y: { label: "Accessibilité", Icon: FaUniversalAccess },

  wordpress: { label: "WordPress", Icon: FaWordpress },
  elementor: { label: "Elementor", Icon: SiElementor },
  css: { label: "CSS", Icon: FaCss3 },
};

export default function ProjectCard({ project, reversed, onOpenDemo }) {
  // IMPORTANT : le preset focus doit être SUR CHAQUE CARD
  const { ref } = useScrollProgressReveal({ preset: "focus" });

  const lines = project.title.split("\n");

  const titleHtml = lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 ? <br /> : null}
    </span>
  ));

  return (
    <article
      ref={ref}
      className={`${styles.grid} ${reversed ? styles.reversed : ""}`}
    >
      {/* VISUEL */}
      <div className={styles.left}>
        <div className={styles.shot}>
          <img src={project.image.src} alt={project.image.alt} />
        </div>
      </div>

      {/* TEXTE */}
      <div className={styles.right}>
        <p className={styles.kicker}>{project.kicker}</p>

        <h3 className={styles.title}>{titleHtml}</h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.stack}>
          {project.tech.map((key) => {
            const item = TECH[key];
            if (!item) return null;

            const Icon = item.Icon;

            return (
              <div key={key} className={styles.tech}>
                <div className={styles.techIcon} aria-hidden>
                  <Icon />
                </div>
                <div className={styles.techLabel}>{item.label}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaRow}>
          {project.links?.live && (
            <a
              className={styles.cta}
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Voir le code sur GitHub
            </a>
          )}

          {project.links?.demoVideo && (
            <button
              type="button"
              className={styles.ctaBtn}
              onClick={() =>
                onOpenDemo({
                  title: project.title.replaceAll("\n", " "),
                  url: project.links.demoVideo,
                })
              }
            >
              <span className={styles.play}>
                {" "}
                <FaPlay />
              </span>
              Explorer le prototype
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
