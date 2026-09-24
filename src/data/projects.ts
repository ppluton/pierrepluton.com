export const projects = [
  {
    slug: "lgdm",
    name: "Le Grenier du Motard",
    category: "Marketplace",
    role: "CTO · architecture, web & mobile",
    image: "/assets/lgdm-2026.png",
    alt: "Page d’accueil actuelle du Grenier du Motard, marketplace d’équipement moto d’occasion",
    url: "https://legrenierdumotard.com",
    color: "#d8e3df",
    year: "Web & mobile",
    title: "Une marketplace pensée pour les motards.",
    description:
      "Marketplace de pièces et d’équipements moto d’occasion, accessible sur le web, iOS et Android. J’en pilote l’architecture et le développement en tant que CTO.",
    work: [
      "Arbitrages d’architecture et priorités techniques du produit",
      "Cohérence des parcours entre la marketplace web et les applications iOS et Android",
      "Intégration des parcours de paiement et de livraison",
      "Qualité, suivi des incidents et préparation des mises en production",
    ],
    context:
      "Relier parcours d’achat et de vente, paiement, livraison et applications mobiles dans un produit cohérent, au sein de l’équipe du Grenier du Motard.",
    note: "Projet d’équipe. Capture de la page d’accueil publique, septembre 2026.",
  },
  {
    slug: "unifete",
    name: "Unifête",
    category: "Plateforme mariage",
    role: "Cofondateur · produit, design & développement",
    image: "/assets/unifete-2026.png",
    alt: "Page d’accueil actuelle d’Unifête, avec un couple et un aperçu de l’espace mariage sur téléphone",
    url: "https://www.unifete.com",
    color: "#e5e0f6",
    year: "Produit web",
    title: "Un espace pour tout le parcours du mariage.",
    description:
      "Unifête aide les couples à préparer leur mariage, réunir leurs invités et garder leurs souvenirs. Je conçois et développe le produit, de l’interface aux parcours web.",
    work: [
      "Cofondation et conception du produit",
      "Design des parcours couple et invité",
      "Développement de la plateforme web",
    ],
    context:
      "Faire tenir ensemble l’invitation et les RSVP, l’organisation, les animations du jour J et les souvenirs partagés par les proches.",
    note: "Produit proposé aux couples pilotes. Capture de la page d’accueil publique, septembre 2026.",
  },
  {
    slug: "khinkluka",
    name: "Khinkluka",
    category: "Site de restauration",
    role: "Designer & développeur freelance",
    image: "/assets/khinkluka-desktop.png",
    alt: "Capture du site Khinkluka : accueil, navigation et présentation des produits",
    url: "https://www.khinkluka.com",
    color: "#f0c9b2",
    year: "Site web",
    title: "Une identité qui ouvre l’appétit.",
    description:
      "Un site pour faire découvrir une enseigne de street food géorgienne à Tbilissi. Des images gourmandes, une identité expressive et les bonnes informations au bon endroit.",
    work: [
      "Design du site de A à Z",
      "Développement de la landing et du site",
      "Présentation du menu et des adresses",
    ],
    context:
      "Une présence en ligne qui prolonge le caractère de l’enseigne et permet de découvrir son offre avant de pousser la porte.",
    note: "Visuel issu du site public Khinkluka.",
  },
  {
    slug: "motquete",
    name: "MotQuête",
    category: "Jeu de mots régional",
    role: "Créateur, designer & développeur",
    image: "/assets/motquete-desktop.png",
    alt: "Capture de la landing page MotQuête",
    url: "https://www.motquete.fr",
    color: "#f4e59e",
    year: "Web & mobile",
    title: "Un jeu de mots. Beaucoup de caractère.",
    description:
      "Mon projet personnel autour des mots et expressions de nos régions. Une landing qui donne le ton, une interface de jeu et un développement web et mobile.",
    work: [
      "Projet personnel, design de A à Z",
      "Landing et application web",
      "Développement iOS et Android",
    ],
    context:
      "Donner envie de jouer et de découvrir le patrimoine régional à travers un rituel simple : un mot, quelques essais et une histoire.",
    note: "Projet personnel autour du jeu et du patrimoine régional.",
  },
];
export const aiProjects = [
  {
    slug: "medical",
    url: "https://github.com/ppluton/medical-triage-llm-poc",
    fr: {
      type: "LLM · POC pédagogique",
      name: "Triage médical expérimental",
      description:
        "Un POC bilingue qui explore l’adaptation d’un modèle par LoRA, puis encadre ses réponses par des règles, un audit et une décision humaine. Aucune validation clinique.",
      stack: "Python · LoRA · FastAPI · évaluation",
    },
    en: {
      type: "LLM · Educational POC",
      name: "Experimental medical triage",
      description:
        "A bilingual POC exploring LoRA fine-tuning, with rule-based safeguards, audit and mandatory human judgment. Not clinically validated.",
      stack: "Python · LoRA · FastAPI · evaluation",
    },
  },
  {
    slug: "bubble-rag",
    url: "https://github.com/ppluton/Bubble.io-rag",
    fr: {
      type: "RAG · Application",
      name: "Assistant documentaire Bubble",
      description:
        "Une application qui retrouve les passages utiles dans la documentation Bubble et affiche les sources utilisées avec chaque réponse.",
      stack: "TypeScript · Next.js · embeddings · citations",
    },
    en: {
      type: "RAG · Application",
      name: "Bubble documentation assistant",
      description:
        "An application that retrieves relevant Bubble documentation passages and shows the sources used for each answer.",
      stack: "TypeScript · Next.js · embeddings · citations",
    },
  },
  {
    slug: "echoscript",
    url: "https://github.com/ppluton/EchoScript-AI-Powered-Audio-Transcription",
    fr: {
      type: "Audio · Application",
      name: "EchoScript",
      description:
        "Une interface de transcription audio qui structure les prises de parole et génère un résumé avec les modèles Mistral.",
      stack: "React · TypeScript · Voxtral · Mistral",
    },
    en: {
      type: "Audio · Application",
      name: "EchoScript",
      description:
        "An audio transcription interface that structures speaker turns and generates a summary using Mistral models.",
      stack: "React · TypeScript · Voxtral · Mistral",
    },
  },
];
