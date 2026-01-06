import argentbankImg from "../assets/projects/argentbank.png";
import fisheyeImg from "../assets/projects/fisheye.png";
import kasaImg from "../assets/projects/kasa.png";
import sportseeImg from "../assets/projects/sportsee.png";

export const projects = [
  {
    id: "kasa",
    title: "Kasa - Application web de location immobilière",
    badge: "App React",
    subtitle: "Projet OpenClassrooms • React + React Router",
    description:
      "Application web développée avec React permettant de naviguer entre des annonces de logements. Routage dynamique, composants réutilisables et interface responsive.",
    image: kasaImg,
    tags: ["React", "React Router", "JavaScript", "CSS", "Vite"],
    links: {
      github: "https://github.com/A-WEBerBeta/P11_Kasa",
      demo: "https://kasa-zeta-murex.vercel.app/",
    },
    featured: false,
  },
  {
    id: "sportsee",
    title: "SportSee - Tableau de bord d'analytics sportives",
    badge: "Projet OCR",
    subtitle: "Dashboard de visualisation de données avec React",
    description:
      "Tableau de bord d'analytics développé avec React permettant de visualiser des données de performance sportive (projet OpenClassrooms). Mise en place de graphiques dynamiques avec Recharts, composants réutilisables et gestion des données via une API mockée.",
    image: sportseeImg,
    tags: ["React", "Data visualization", "Recharts", "Hooks", "JavaScript"],
    links: {
      github: "https://github.com/A-WEBerBeta/P12_SportSee",
      demo: "https://sportsee-ten.vercel.app/",
    },
    featured: false,
  },
  {
    id: "argentbank",
    title: "ArgentBank - Compte utilisateur bancaire",
    badge: "Projet OCR",
    subtitle: "Application React connectée à une API",
    description:
      "Application bancaire développée avec React permettant à un utilisateur de se connecter et de consulter ses informations. Intégration d'une API, gestion des appels asynchrones et structuration des composants pour une interface claire et maintenable. Contexte : formation OpenClassrooms.",
    image: argentbankImg,
    tags: ["React", "Redux", "API REST", "Async", "JavaScript"],
    links: {
      github: "https://github.com/A-WEBerBeta/P13_Argent_Bank",
      demo: null,
    },
    featured: false,
  },
  {
    id: "fisheye",
    title: "FishEye - Plateforme de photographes accessible",
    badge: "Projet OCR",
    subtitle: "Refonte d'un site web orientée utilisateur",
    description:
      "Refonte d'une plateforme de photographes • projet OpenClassrooms • en mettant l'accent sur l'accessibilité et l'expérience utilisateur. Amélioration de la gestion clavier, des interactions et du balisage sémantique dans le respect des recommandations WCAG.",
    image: fisheyeImg,
    tags: ["Accessibilité", "WCAG", "JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/A-WEBerBeta/P6-Front-End-Fisheye",
      demo: "https://a-weberbeta.github.io/P6-Front-End-Fisheye/",
    },
    featured: false,
  },
];
