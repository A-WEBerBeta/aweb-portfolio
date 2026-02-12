import mokaImg from "../assets/projects/moka-miel.png";
import portfolioImg from "../assets/projects/portfolio.png";

export const projects = [
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
      live: "https://github.com/A-WEBerBeta/aweb-portfolio",
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
      demoVideo: "https://youtu.be/weJuvUnlI1g",
    },
  },
];
