export const selectedCases = [
  {
    slug: "rag-evenements",
    project: 7,
    stack: "RAG · FastAPI · React · PostgreSQL",
    title: {
      fr: "Trouver un événement en langage naturel",
      en: "Finding events in natural language",
    },
    intro: {
      fr: "Un assistant qui recherche dans un corpus culturel et relie une demande à des événements pertinents.",
      en: "An assistant connecting a request to relevant events through a cultural information corpus.",
    },
    need: {
      fr: "Permettre une recherche d’événements avec des préférences et des contraintes exprimées en langage naturel.",
      en: "Let users find events using preferences and constraints expressed in natural language.",
    },
    role: {
      fr: "J’ai construit le pipeline de recherche et de génération, son API et son interface, puis un protocole d’évaluation des réponses.",
      en: "I built the retrieval and generation pipeline, its API and interface, and a response evaluation protocol.",
    },
    choices: {
      fr: [
        "Séparer les échanges conversationnels des demandes nécessitant une recherche dans le corpus.",
        "Combiner embeddings Mistral, index FAISS et génération via LangChain/LCEL.",
        "Relier le pipeline à FastAPI et React, avec persistance des sessions PostgreSQL.",
      ],
      en: [
        "Separate conversational exchanges from requests requiring corpus retrieval.",
        "Combine Mistral embeddings, a FAISS index and LangChain/LCEL generation.",
        "Connect the pipeline to FastAPI and React, with PostgreSQL session persistence.",
      ],
    },
    results: {
      fr: "Sur 12 questions enregistrées, dont 9 requêtes RAG et 3 conversations, la latence moyenne mesurée était de 2,412 secondes. Ce petit échantillon permet d’examiner le pipeline, pas d’affirmer une qualité générale des réponses.",
      en: "Across 12 recorded questions, including 9 RAG requests and 3 conversations, measured mean latency was 2.412 seconds. This small sample helps inspect the pipeline; it does not establish general response quality.",
    },
    limits: {
      fr: "La couverture de mots-clés utilisée ne mesure pas la fidélité aux sources. Les contraintes temporelles restent un point à améliorer ; une évaluation indépendante du retrieval et des réponses est nécessaire.",
      en: "Keyword coverage does not measure source faithfulness. Temporal constraints remain an improvement area; retrieval and answers need independent evaluation.",
    },
  },
  {
    slug: "scoring-mlops",
    project: 8,
    stack: "LightGBM · MLflow · FastAPI · Docker · ONNX",
    title: {
      fr: "Du modèle de scoring au service suivi",
      en: "From scoring model to monitored service",
    },
    intro: {
      fr: "Une chaîne de prédiction qui relie expérimentation, API, déploiement et analyse de dérive.",
      en: "A prediction pipeline connecting experimentation, an API, deployment and drift analysis.",
    },
    need: {
      fr: "Transformer un modèle de scoring crédit en une solution technique dont les prédictions, les versions et les évolutions peuvent être suivies.",
      en: "Turn a credit scoring model into a technical solution whose predictions, versions and changes can be monitored.",
    },
    role: {
      fr: "J’ai travaillé sur l’expérimentation et la chaîne MLOps : service de prédiction, conteneurisation, intégration continue et surveillance des données.",
      en: "I worked on experimentation and the MLOps pipeline: prediction serving, containers, continuous integration and data monitoring.",
    },
    choices: {
      fr: [
        "Tracer les expériences et comparer les modèles avec MLflow.",
        "Exposer les prédictions par une API conteneurisée et automatiser la chaîne avec GitHub Actions.",
        "Analyser la dérive avec Evidently et comparer l’inférence LightGBM et ONNX.",
      ],
      en: [
        "Track experiments and compare models with MLflow.",
        "Expose predictions through a containerised API and automate the pipeline with GitHub Actions.",
        "Analyse drift with Evidently and compare LightGBM and ONNX inference.",
      ],
    },
    results: {
      fr: "Le benchmark sauvegardé rapporte un écart de probabilités de 7,31 × 10⁻⁸ entre les chemins comparés. Il fournit un point de comparaison pour l’export du modèle, sans mesurer les performances du service HTTP complet.",
      en: "The saved benchmark reports a probability difference of 7.31 × 10⁻⁸ between the compared paths. It provides an export comparison, without measuring full HTTP service performance.",
    },
    limits: {
      fr: "Le benchmark local compare des chemins de calcul différents. La latence cloud, la charge concurrente et le déploiement actuel n’ont pas été contrôlés dans l’audit. Ce projet pédagogique n’est pas un service de décision financière.",
      en: "The local benchmark compares different computation paths. Cloud latency, concurrent load and current deployment were not checked in the audit. This educational project is not a financial decision service.",
    },
  },
] as const;
