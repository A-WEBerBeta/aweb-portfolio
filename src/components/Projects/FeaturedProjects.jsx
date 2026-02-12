import { useMemo, useState } from "react";
import useScrollProgressReveal from "../../hooks/useScrollProgressReveal";
import Container from "../Container/Container";
import styles from "./FeaturedProjects.module.css";

import { projects } from "../../data/projectsFeatured";
import VideoModal from "../VideoModal/VideoModal";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const { ref: headerRef } = useScrollProgressReveal({ preset: "header" });

  const [video, setVideo] = useState(null); // { title, url } | null
  const items = useMemo(() => projects, []);

  return (
    <section id="projects" className={styles.section}>
      <Container>
        <div className={styles.header} ref={headerRef}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Mes projets</h2>
            <span className={styles.rule} aria-hidden />
          </div>
        </div>

        {/* IMPORTANT : PAS DE ref focus ICI */}
        <div className={styles.list}>
          {items.map((p, index) => (
            <ProjectCard
              key={p.id}
              project={p}
              reversed={index % 2 === 1}
              onOpenDemo={(payload) => setVideo(payload)}
            />
          ))}
        </div>

        <VideoModal
          open={!!video}
          onClose={() => setVideo(null)}
          title={video?.title}
          videoUrl={video?.url}
        />
      </Container>
    </section>
  );
}
