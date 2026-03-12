import mokaImg from "../assets/projects/moka-miel.png";
import obsidianImg from "../assets/projects/obsidian-ink.png";
import portfolioImg from "../assets/projects/portfolio.png";

export const projects = [
  {
    id: "obsidian-ink",
    kicker: "Projet React - Site vitrine premium",
    title: "Obsidian Ink — Studio Tattoo\nsite vitrine responsive",
    description:
      "Conception et développement d'un site vitrine moderne pour un studio de tatouage fictif, avec un design sombre premium, une expérience mobile soignée et un parcours de prise de rendez-vous optimisé.",
    image: {
      src: obsidianImg,
      alt: "Aperçu du site Obsidian Ink",
    },
    tech: ["react", "tailwind", "js", "responsive"],
    links: {
      live: "https://obsidian-ink-nancy.vercel.app/",
      repo: "https://github.com/A-WEBerBeta/obsidian-ink-website",
      demoVideo: null,
    },
  },
  {
    id: "moka-miel",
    kicker: "Projet WordPress - UI / UX",
    title: "Moka & Miel — Cosy café\n& expérience de précommande",
    description:
      "Création d'un site vitrine immersif sous WordPress avec prototype de précommande et travail poussé sur la cohérence UI et le responsive.",
    image: {
      src: mokaImg,
      alt: "Aperçu du site Moka & Miel",
    },
    tech: ["wordpress", "elementor", "css"],
    links: {
      live: null, // pas en ligne
      repo: null,
      demoVideo: "https://youtu.be/weJuvUnlI1g",
    },
  },
  {
    id: "portfolio",
    kicker: "Projet React - UI & architecture",
    title: "Portfolio — UI sobre\n& responsive",
    description:
      "Développement d'un portfolio React orienté performance, animations progressives au scroll et architecture modulaire.",
    image: {
      src: portfolioImg,
      alt: "Aperçu du portfolio",
    },
    tech: ["react", "js", "cssmodules", "a11y"],
    links: {
      live: null,
      repo: "https://github.com/A-WEBerBeta/aweb-portfolio",
      demoVideo: null,
    },
  },
];
