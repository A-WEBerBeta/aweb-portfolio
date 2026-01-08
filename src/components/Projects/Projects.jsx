import { ChevronDown, Github } from "lucide-react";
import { useState } from "react";
import { projects } from "../../data/projects";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Projects.module.css";

function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const visibleTags = project.tags.slice(0, 3);
  const hiddenTags = project.tags.slice(3);

  const hasDetails = project.description || hiddenTags.length > 0;

  return (
    <article className={styles.card}>
      {project.image && (
        <div className={styles.imageWrapper}>
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            loading="lazy"
          />
        </div>
      )}

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{project.title}</h3>
            {project.featured && (
              <span className={styles.badge}>{project.badge}</span>
            )}
          </div>

          {hasDetails && (
            <button
              className={`${styles.detailsBtn} ${open ? styles.open : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              type="button"
            >
              Détails
              <ChevronDown size={16} aria-hidden="true" />
            </button>
          )}

          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>

        {hasDetails && (
          <div
            className={`${styles.details} ${open ? styles.detailsOpen : ""}`}
          >
            <div className={styles.detailsInner}>
              {project.description && (
                <p className={styles.description}>{project.description}</p>
              )}

              {hiddenTags.length > 0 && (
                <div className={styles.tagsMore}>
                  {hiddenTags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.tags}>
          {visibleTags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className={styles.actions}>
          {project.links.demo && (
            <Button
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className={styles.cardBtn}
            >
              Voir le projet
            </Button>
          )}

          <Button
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className={styles.cardBtn}
          >
            <Github size={16} strokeWidth={2} />
            Code GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Projets</h2>
            <span className={styles.rule} aria-hidden></span>
          </div>
          <p className={styles.lead}>
            Une sélection courte et soignée, orientée React et qualité
            d'interface.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
