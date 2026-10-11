# Bilan de formation AI Engineer — Pierre Pluton

**Juillet 2025 – octobre 2026 · Situation vérifiée le 9 octobre 2026**

Ce bilan relie les missions OpenClassrooms aux réalisations publiques, aux retours pédagogiques et aux résultats enregistrés. Le parcours vérifié commence par la validation du P1 le 4 juillet 2025 : il couvre donc environ quinze mois, et non une période strictement limitée à douze mois.

[Explorer la carte et le graphe](carte-interactive.html) · [Matrice détaillée des compétences](competences.csv)

## 1. Lecture d’ensemble

Le profil qui ressort est celui d’un **AI Engineer orienté produit et intégration**, capable de relier préparation des données, modélisation, API, interfaces et suivi technique. Cette lecture est une synthèse de preuves de formation ; elle n’attribue pas un niveau senior, une autonomie totale ou une performance en production.

| Indicateur | Constat |
| --- | --- |
| Parcours avant portfolio | 14 projets validés ; statut P14 actualisé sur confirmation de Pierre le 11 octobre 2026. |
| Correspondance GitHub | 11 projets reliés à 10 dépôts publics ; P6/P8 constituent une seule solution technique. |
| Autres preuves | P1, P3 et P9 documentés par OC ; aucun dépôt de livrable associé avec certitude. |
| Inventaire public | 26 dépôts : 10 associés au parcours et 16 complémentaires, dont 3 forks. |
| Acquis détaillés | 55 compétences étayées, regroupées en 9 domaines ; aucun pourcentage de maîtrise inventé. |

### Progression au fil du parcours

- **Juillet–novembre 2025 : les fondations.** Organisation, exploitation d’un modèle préentraîné, régression et classification. Passage de l’appel d’un service IA à la comparaison et à l’explication de modèles.
- **Janvier–février 2026 : la chaîne d’ingénierie.** API, stockage, conteneurisation, tracking, RAG et MLOps. Les réalisations deviennent des systèmes avec interfaces et suivi.
- **Mars–mai 2026 : élargissement méthodologique.** Cadrage, semi-supervision et RL. Les projets demandent de choisir des protocoles, des critères métier et des budgets d’expérience.
- **Juillet–août 2026 : données et orchestration.** ETL multimodal puis assistant d’échecs intégrant plusieurs outils, sources et replis.
- **Septembre–octobre 2026 : spécialisation LLM et recul critique.** SFT/LoRA/DPO, analyse des sorties et limites explicites d’un POC. Le portfolio devient une occasion de rendre ces preuves accessibles.

### Forces transversales

- **Intégration de bout en bout :** plusieurs projets vont au-delà du notebook et relient modèle, API, données et interface.
- **Vision métier :** seuil de scoring, besoin utilisateur, planification et étude de faisabilité ; confirmations pédagogiques en P8, P9 et P13.
- **Communication technique :** architectures et démonstrations régulièrement appréciées par les évaluateurs.
- **Diversité des approches :** ML tabulaire, RAG, semi-supervision, RL et adaptation LLM, chacun avec un périmètre expérimental propre.
- **Analyse des limites :** le résultat négatif du modèle médical fournit une preuve de discernement, à condition de le présenter sans transformer l’intégration en validation de la tâche.

### Ce qui reste à consolider

- **Authentification et autorisation applicative :** Non validée dans le détail du P5 ; déclarée dans certains projets personnels, sans audit de leurs parcours.
- **Robustesse statistique indépendante :** P10 réutilise le jeu test pour la sélection ; validation indépendante et incertitude à renforcer.
- **Fidélité RAG à grande échelle :** Jeu de 12 questions ; mesure de fidélité, retrieval et fraîcheur à compléter.
- **Exploitation réelle durable :** Disponibilité, montée en charge, rollback, restauration et coûts réels non vérifiés par cette lecture.
- **Autonomie, contribution personnelle et langues :** À autoévaluer ; aucun niveau CECRL, pourcentage de maîtrise ou attribution d’un fork n’est déduit.
- **Production clinique ou décisions sensibles :** Non démontrée : les cas médicaux sont pédagogiques et expérimentaux.

## 2. Méthode et niveaux de preuve

Les pages de mission et d’évaluation OC ont été consultées dans le navigateur authentifié. Les dépôts GitHub ont été lus via les interfaces publiques ; leurs branches et révisions ont été vérifiées à nouveau avant la génération de ce rapport. Aucun code de ces projets n’a été exécuté, aucun service de production n’a été interrogé et aucun compte externe n’a été modifié.

| Code | Signification | Ce que cela ne prouve pas |
| --- | --- | --- |
| J | Retour explicite du jury/mentor OC. | Le fonctionnement actuel, un audit de sécurité ou une performance en production. |
| C | Code, notebook ou document effectivement consulté. | L’exécution actuelle ni l’auteur individuel de chaque ligne. |
| R | Résultat enregistré dans un notebook ou un fichier. | Une reproduction indépendante, un résultat actuel ou une généralisation. |
| D | Déclaration dans le README et arborescence. | Une fonctionnalité testée ou une contribution personnelle certaine. |

Les nombres sont rattachés à leur protocole et à leur version. Les tests rapportés sont historiques : ils n’ont pas été relancés. Les ZIP remis sur OC ont été identifiés mais pas comparés aux dépôts ; les enregistrements de soutenance n’ont pas été visionnés. Le statut global « validé » est distingué des compétences individuelles, notamment l’authentification du P5.

Les compétences présentes dans le graphe sont des relations de preuve et d’expérience, pas des scores de maîtrise. Les formulations « répétée », « dédiée » ou « expérimentale » décrivent l’étendue des réalisations consultées. L’autonomie, les langues, le travail d’équipe réel et les contributions personnelles restent des éléments à compléter avec Pierre.

## 3. Chronologie et correspondance des projets

| Projet | Validation OC | Dépôt associé |
| --- | --- | --- |
| [P1 — Découvrez le métier d’AI Engineer](projet-p01.html) | 2025-07-04 | Non retrouvé / preuve OC |
| [P2 — Requêtez des services IA](projet-p02.html) | 2025-08-02 | [Clothe-segmentation-AI-ML](https://github.com/ppluton/Clothe-segmentation-AI-ML) |
| [P3 — Anticipez les besoins en consommations de bâtiments](projet-p03.html) | 2025-09-05 | Non retrouvé / preuve OC |
| [P4 — Classifiez automatiquement des informations](projet-p04.html) | 2025-11-18 | [Model-classification-turnover-full-analysis](https://github.com/ppluton/Model-classification-turnover-full-analysis) |
| [P5 — Déployez un modèle de Machine Learning](projet-p05.html) | 2026-01-09 | [api-attrition](https://github.com/ppluton/api-attrition) |
| [P6 — Initiez-vous au MLOps — partie 1](projet-p06.html) | 2026-01-23 | [Credit-Scoring-End-to-End-MLOps-Pipeline](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline) |
| [P7 — Concevez et déployez un système RAG](projet-p07.html) | 2026-02-06 | [Projet-RAG-Assistant-Intelligent-Events](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events) |
| [P8 — Confirmez vos compétences en MLOps — partie 2](projet-p08.html) | 2026-02-27 | [Credit-Scoring-End-to-End-MLOps-Pipeline](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline) |
| [P9 — Réalisez le cadrage d’un projet IA](projet-p09.html) | 2026-03-13 | Non retrouvé / preuve OC |
| [P10 — Labellisez et appliquez des approches semi-supervisées en traitement d’images](projet-p10.html) | 2026-04-15 | [brain-mri-semi-supervised](https://github.com/ppluton/brain-mri-semi-supervised) |
| [P11 — Entraînez votre agent RL — Eagle-1](projet-p11.html) | 2026-05-15 | [Learn---Reinforcement-Learning-](https://github.com/ppluton/Learn---Reinforcement-Learning-) |
| [P12 — Extrayez des données multimodales de sites web](projet-p12.html) | 2026-07-02 | [checkit-pipeline](https://github.com/ppluton/checkit-pipeline) |
| [P13 — Mettez en place un Agent IA — IA Chess](projet-p13.html) | 2026-08-28 | [ia-chess-oc](https://github.com/ppluton/ia-chess-oc) |
| [P14 — Fine-tunez votre propre LLM — POC médical](projet-p14.html) | Validé | [medical-triage-llm-poc](https://github.com/ppluton/medical-triage-llm-poc) |

## 4. Rapport détaillé de chaque projet

### P1 — Découvrez le métier d’AI Engineer

**Statut : Validé.** Validation : 2025-07-04. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3157/project-evaluation)

#### Mission et besoin

Poser le cadre de la formation, comprendre le métier et organiser son apprentissage. Ce premier projet prépare la trajectoire professionnelle et la relation avec le mentor.

#### Réalisations et approche

- Le bilan OC confirme la compréhension du fonctionnement de la formation et la création d’un document réunissant les informations importantes.
- Le projet n’exige pas de modèle entraîné : sa valeur réside dans la clarification des objectifs et l’organisation du travail.

#### Livrables et éléments repérés

- Document de cadrage et bilan visibles comme livrable déposé sur OC. Son contenu exact n’a pas été extrait du ZIP.

#### Résultats et niveau de preuve

- Projet validé le 4 juillet 2025. Le commentaire de compétence conserve la formule de gabarit « Validé / Non validé » ; le statut global est bien « Projet validé ».

#### Retour pédagogique

Bonne compréhension de la formation ; création d’une documentation des informations importantes.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Identifier et formaliser un besoin | J | Besoins et contexte confirmés par les bilans OC. |
| Documenter un projet technique | J | Documentation appréciée ; répétitions à réduire. |

#### Limites et points de vigilance

- Aucun dépôt public n’a été associé de façon certaine au livrable de cadrage. template-project-datascience-1 est un squelette de projet data science et ne démontre pas à lui seul les acquis du P1.

#### Recul professionnel

Le portfolio peut expliquer comment ton objectif initial a évolué vers l’ingénierie de solutions complètes. Cette évolution personnelle reste à formuler avec tes propres mots.

#### Recommandations pour la présentation

- Conserver une courte introduction de parcours : point de départ, objectif actuel et rôle recherché. Ne pas transformer ce projet d’orientation en expérience de développement.

### P2 — Requêtez des services IA

**Statut : Validé.** Validation : 2025-08-02. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3158/project-evaluation)

**Dépôt :** [ppluton/Clothe-segmentation-AI-ML](https://github.com/ppluton/Clothe-segmentation-AI-ML) · branche `main` · révision `dd15bbf94ad0`. Le dernier push GitHub est daté du 2025-07-25; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Réaliser un POC de segmentation de vêtements à partir d’images en exploitant un modèle déjà entraîné disponible via Hugging Face.

#### Réalisations et approche

- Le dépôt sépare la préparation des images, les appels d’inférence, le décodage des masques, leur combinaison et la visualisation.
- predict.py envoie les images à l’API et traite les réponses non 200 ; features.py décode les masques base64, les redimensionne et associe les classes aux pixels.
- Le notebook juxtapose images, vérité terrain et prédictions, puis calcule l’IoU par image et par classe. Le modèle préentraîné est utilisé, pas entraîné dans ce projet.

#### Livrables et éléments repérés

- Notebook rapport.ipynb ; modules features.py et modeling/predict.py ; documentation de l’environnement et des visualisations.

#### Résultats et niveau de preuve

- Les sorties sauvegardées montrent des IoU très variables selon les images et les classes. Aucun score unique n’est repris ici comme performance générale du modèle.
- Le calcul d’IoU ignore le fond et parcourt les classes présentes dans la vérité terrain : il faut documenter cette convention pour comparer les résultats à un benchmark externe.

#### Retour pédagogique

Choix du modèle Hugging Face et environnement validés ; visualisations et présentation appréciées.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Exploiter un modèle de segmentation préentraîné | J+C | Hugging Face ; pas d’entraînement du modèle dans P2. |
| Décoder les masques et calculer l’IoU | C+R | Masques base64 et conventions de classes/fond. |
| Consommer une API d’inférence | J+C | Appel HTTP Hugging Face ; timeout/retry à améliorer. |
| Documenter un projet technique | J+C | Documentation appréciée ; répétitions à réduire. |

#### Limites et points de vigilance

- L’appel requests.post ne définit pas de timeout ni de stratégie de retry : l’intégration API est présente, sa robustesse opérationnelle n’est pas démontrée.
- La disponibilité actuelle du service externe et la reproduction des scores n’ont pas été testées.

#### Recul professionnel

Passage de l’utilisation d’un modèle à l’évaluation de ses sorties : un service IA ne se juge pas seulement sur une image réussie.

#### Recommandations pour la présentation

- Présenter un triptyque image/masque attendu/masque prédit, avec un cas réussi et un cas difficile. Expliquer la convention IoU et la dépendance au service externe.

#### Fichiers sources à la révision inspectée

- [notebooks/rapport.ipynb](https://github.com/ppluton/Clothe-segmentation-AI-ML/blob/dd15bbf94ad0e20295b0feb239cc3c3acc58e927/notebooks/rapport.ipynb)
- [src/features.py](https://github.com/ppluton/Clothe-segmentation-AI-ML/blob/dd15bbf94ad0e20295b0feb239cc3c3acc58e927/src/features.py)
- [src/modeling/predict.py](https://github.com/ppluton/Clothe-segmentation-AI-ML/blob/dd15bbf94ad0e20295b0feb239cc3c3acc58e927/src/modeling/predict.py)

### P3 — Anticipez les besoins en consommations de bâtiments

**Statut : Validé.** Validation : 2025-09-05. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3145/project-evaluation)

#### Mission et besoin

Prédire la consommation énergétique de bâtiments à partir de leurs caractéristiques, après exploration et préparation des données.

#### Réalisations et approche

- Le jury décrit une analyse exploratoire avec distributions, boxplots et tests statistiques.
- Des variables ont été préparées avec encodage et mise à l’échelle ; régression linéaire, bagging et boosting ont été comparés.
- La sélection combine validation croisée et recherche de paramètres sur 80 % des données, avec 20 % réservés au test final ; l’environnement Poetry est mentionné.

#### Livrables et éléments repérés

- Notebook et présentation attendus par la mission ; ZIP de livraison identifié dans l’évaluation OC, sans inspection de son contenu.

#### Résultats et niveau de preuve

- Compétences de préparation, entraînement, évaluation et environnement validées. Aucune valeur de R² ou d’erreur n’est inventée en l’absence de notebook public identifié.

#### Retour pédagogique

Code clair et commenté ; présentation simple avec des graphiques utiles ; bonne vulgarisation de notions avancées. Amélioration : expliquer les outils à un public métier non data scientist.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Explorer et nettoyer des données | J | EDA et préparation ; code public absent pour P3. |
| Encoder et transformer les variables | J | Pipelines, encodage, mise à l’échelle et features. |
| Comparer des modèles de régression | J | Régression linéaire, bagging, boosting : évaluation OC. |
| Utiliser validation croisée et GridSearchCV | J | Contrôle de sélection ; P3 décrit par le jury. |
| Justifier le choix d’un modèle | J | Comparaison, contraintes et métriques. |
| Expliquer aux interlocuteurs métier | J | Forces en P8/P9 ; recommandation de vulgarisation en P3. |

#### Limites et points de vigilance

- Aucun des 26 dépôts publics actuels n’a été associé avec certitude à ce projet. Cela ne prouve pas que le code n’existe pas ailleurs.
- Le rapport s’appuie ici sur le retour pédagogique, pas sur une revue directe du code soumis.

#### Recul professionnel

Le choix d’un modèle doit rester compréhensible par le destinataire : impact d’une erreur, compromis de simplicité et usage de la prédiction.

#### Recommandations pour la présentation

- Retrouver le notebook remis puis préparer une étude de cas courte : données disponibles, baseline, comparaison, test final et intérêt métier.

### P4 — Classifiez automatiquement des informations

**Statut : Validé.** Validation : 2025-11-18. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3146/project-evaluation)

**Dépôt :** [ppluton/Model-classification-turnover-full-analysis](https://github.com/ppluton/Model-classification-turnover-full-analysis) · branche `main` · révision `7eeb461ced92`. Le dernier push GitHub est daté du 2025-10-24; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Prédire le départ d’employés à partir de données RH, en tenant compte du déséquilibre de classes et du compromis entre détection et fausses alertes.

#### Réalisations et approche

- Exploration et rapprochement de trois sources RH ; préparation des variables dans un pipeline ; comparaison de régression logistique, SVM, LightGBM, KNN et dummy.
- Sélection fondée sur la validation croisée ; analyse des métriques de classification et production d’un modèle exporté.
- SHAP et un dashboard permettent d’expliquer les facteurs associés aux prédictions. Une importance de variable ne constitue pas une preuve de causalité.

#### Livrables et éléments repérés

- 01_exploration.ipynb ; 02_modelisation.ipynb ; dashboard_shap.py ; artefact de pipeline exporté référencé par le notebook.

#### Résultats et niveau de preuve

- Le notebook consulté rapporte pour la régression logistique une AUC CV d’environ 0,832 et une AUC test d’environ 0,788.
- Sur son split de 368 lignes, la matrice de confusion indique 31 vrais positifs et 17 faux négatifs : rappel de 31/48, soit environ 64,6 %. Ce résultat appartient à ce split, pas à toutes les versions du projet.

#### Retour pédagogique

Les cinq compétences évaluées sont validées ; bon choix de métriques rappel/F-score, pipeline de nettoyage et transformation et maîtrise de la classification asymétrique.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Explorer et nettoyer des données | J+C | EDA et préparation ; code public absent pour P3. |
| Encoder et transformer les variables | J+C | Pipelines, encodage, mise à l’échelle et features. |
| Construire des features métier | J+C | Attrition et scoring ; validation explicite P6. |
| Comparer des classifieurs | J+C+R | LR/SVM/LGBM/KNN/dummy et scoring crédit. |
| Utiliser validation croisée et GridSearchCV | J+C | Contrôle de sélection ; P3 décrit par le jury. |
| Interpréter précision, rappel et F-score | J+C+R | Classification asymétrique et F5 ; limites du protocole P10. |
| Expliquer les prédictions avec SHAP | C | Dashboard et notebook ; importance non causale. |
| Versionner code et artefacts | C | Liens à préciser entre modèle, données, seuil et run. |
| Justifier le choix d’un modèle | J+C | Comparaison, contraintes et métriques. |

#### Limites et points de vigilance

- Le README de l’API P5 évoque un autre jeu de test : ne pas mélanger les chiffres des deux versions.
- Les facteurs SHAP doivent provenir du notebook ou du dashboard, sans reprendre automatiquement une liste générique du README.

#### Recul professionnel

La performance n’est pas un pourcentage unique : un modèle peut avoir une AUC correcte et manquer encore une partie importante des départs.

#### Recommandations pour la présentation

- Afficher le compromis précision/rappel, la matrice de confusion et un exemple d’explication. Décrire les limites d’une utilisation RH réelle et l’absence de causalité.

#### Fichiers sources à la révision inspectée

- [notebooks/01_exploration.ipynb](https://github.com/ppluton/Model-classification-turnover-full-analysis/blob/7eeb461ced9225ad9575040d46c3e69883fd42fe/notebooks/01_exploration.ipynb)
- [notebooks/02_modelisation.ipynb](https://github.com/ppluton/Model-classification-turnover-full-analysis/blob/7eeb461ced9225ad9575040d46c3e69883fd42fe/notebooks/02_modelisation.ipynb)
- [notebooks/dashboard_shap.py](https://github.com/ppluton/Model-classification-turnover-full-analysis/blob/7eeb461ced9225ad9575040d46c3e69883fd42fe/notebooks/dashboard_shap.py)

### P5 — Déployez un modèle de Machine Learning

**Statut : Validé.** Validation : 2026-01-09. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3148/project-evaluation)

**Dépôt :** [ppluton/api-attrition](https://github.com/ppluton/api-attrition) · branche `main` · révision `c06574d8f9b6`. Le dernier push GitHub est daté du 2026-01-09; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Rendre le modèle d’attrition exploitable via une API et une interface, avec stockage de données, conteneurisation et automatisation de la qualité.

#### Réalisations et approche

- FastAPI expose les routes de consultation et de prédiction ; des schémas définissent les entrées et sorties ; SQLAlchemy formalise la table employees.
- Le projet prévoit PostgreSQL en local et SQLite dans l’environnement de déploiement documenté, ainsi qu’une interface Streamlit.
- Docker et GitHub Actions organisent les tests et le déploiement vers Hugging Face Spaces ; la version scikit-learn attendue est explicitement contrôlée au chargement initial.

#### Livrables et éléments repérés

- main.py ; api/schemas.py ; database/models.py ; app.py ; workflow ci-cd.yml et documentation d’installation.

#### Résultats et niveau de preuve

- Le README annonce 13 tests et environ 60 % de couverture : données historiques déclarées, non réexécutées lors de cet audit.
- Le code démontre le branchement modèle/API et les contrats. Aucune requête n’a été envoyée à l’API déployée pour vérifier son état actuel.

#### Retour pédagogique

Projet global validé ; environnement, stockage, tests, SGBD, infrastructure et modèle de données validés. La compétence d’authentification est explicitement NON VALIDÉE. Le jury demande authentification/autorisation et durcissement des contraintes, index et imports.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Exposer un modèle via FastAPI | J+C | Sources de service ; état de fonctionnement actuel non testé. |
| Définir des contrats et schémas de données | C | Pydantic, réponses API et validation des structures. |
| Modéliser et utiliser SQL/SQLAlchemy | J+C | Table employees, PostgreSQL/SQLite. |
| Construire des interfaces de démonstration | C | Streamlit/React/Angular ; adoption non mesurée. |
| Conteneuriser et décrire les environnements | J+C | Docker et configurations ; aucun conteneur lancé dans l’audit. |
| Automatiser tests et déploiement CI/CD | J+C | Workflows et preuves historiques ; pas de nouveau run. |
| Documenter un projet technique | J+C | Documentation appréciée ; répétitions à réduire. |

#### Limites et points de vigilance

- Les routes consultées n’établissent pas un contrôle d’accès utilisateur. La bonne gestion d’un secret CI ne remplace pas l’authentification de l’application.
- Le code remplit certaines features absentes par des valeurs par défaut ; la cohérence avec les transformations de l’entraînement mérite un contrôle dédié.
- Des liens historiques utilisent un ancien nom de compte dans la documentation.

#### Recul professionnel

Le passage du notebook à un service introduit de nouvelles responsabilités : contrat d’entrée, cohérence des features, version du modèle, stockage et accès aux données.

#### Recommandations pour la présentation

- Présenter ce projet comme première mise en service d’un modèle. Placer la sécurité applicative parmi les acquis à consolider, sans la masquer derrière le statut global validé.

#### Fichiers sources à la révision inspectée

- [main.py](https://github.com/ppluton/api-attrition/blob/c06574d8f9b6c831a7eb06d7c2d239959f5bfdbc/main.py)
- [api/schemas.py](https://github.com/ppluton/api-attrition/blob/c06574d8f9b6c831a7eb06d7c2d239959f5bfdbc/api/schemas.py)
- [database/models.py](https://github.com/ppluton/api-attrition/blob/c06574d8f9b6c831a7eb06d7c2d239959f5bfdbc/database/models.py)
- [app.py](https://github.com/ppluton/api-attrition/blob/c06574d8f9b6c831a7eb06d7c2d239959f5bfdbc/app.py)
- [.github/workflows/ci-cd.yml](https://github.com/ppluton/api-attrition/blob/c06574d8f9b6c831a7eb06d7c2d239959f5bfdbc/.github/workflows/ci-cd.yml)

### P6 — Initiez-vous au MLOps — partie 1

**Statut : Validé.** Validation : 2026-01-23. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3149/project-evaluation)

**Dépôt :** [ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline) · branche `main` · révision `18c4c700e116`. Le dernier push GitHub est daté du 2026-02-25; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Construire un scoring de crédit en traçant les expériences, en comparant les modèles et en choisissant un seuil cohérent avec le coût des erreurs métier.

#### Réalisations et approche

- Agrégation de huit tables Home Credit en un jeu client ; le projet documente 307 511 clients et 419 features.
- MLflow trace les essais et GridSearchCV organise la recherche d’hyperparamètres. Les features métier et les méthodes de contrôle du sur/sous-apprentissage sont discutées.
- Une fonction de coût attribue un poids de 10 au faux négatif contre 1 au faux positif ; l’optimisation du seuil est séparée de la seule comparaison d’AUC.

#### Livrables et éléments repérés

- Notebook 03_modeling_with_MLFLOW.ipynb ; src/metrics.py ; modèle et métadonnées exportés. Dépôt partagé avec le P8.

#### Résultats et niveau de preuve

- Le notebook rapporte une AUC CV d’environ 0,7814 et une AUC de validation d’environ 0,7852 pour LightGBM sur le split documenté.
- Les métadonnées indiquent un seuil de 0,5145, tandis qu’un résultat du notebook utilise environ 0,494 : ce sont des sorties différentes à rattacher à leur run avant publication d’un chiffre final.

#### Retour pédagogique

Compétences de gestion du sur/sous-apprentissage, hyperparamètres, fonctions d’activation et qualité des features validées ; GridSearchCV, features métier et organisation du code relevés.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Explorer et nettoyer des données | J+C | EDA et préparation ; code public absent pour P3. |
| Encoder et transformer les variables | J+C | Pipelines, encodage, mise à l’échelle et features. |
| Construire des features métier | J+C | Attrition et scoring ; validation explicite P6. |
| Comparer des classifieurs | J+C+R | LR/SVM/LGBM/KNN/dummy et scoring crédit. |
| Utiliser validation croisée et GridSearchCV | J+C | Contrôle de sélection ; P3 décrit par le jury. |
| Choisir un seuil selon un coût métier | C+R | FN ×10 et FP ×1 ; versions de seuil à réconcilier. |
| Tracer les expériences avec MLflow | J+C | Tracking d’essais ; registry à mieux mettre en évidence. |
| Versionner code et artefacts | C | Liens à préciser entre modèle, données, seuil et run. |
| Justifier le choix d’un modèle | J+C | Comparaison, contraintes et métriques. |

#### Limites et points de vigilance

- Un intitulé de compétence OC ne prouve pas l’usage d’une technique dans le modèle final : LightGBM ne suffit pas à revendiquer une maîtrise générale des réseaux neuronaux.
- src/modeling.py est vide dans le snapshot ; une partie importante du travail de modélisation réside dans le notebook.
- Le volume de lignes des tables sources ne doit pas être présenté comme le nombre d’exemples du modèle.

#### Recul professionnel

Passage de « trouver un bon modèle » à « conserver une expérience traçable et décider selon le coût d’une erreur ».

#### Recommandations pour la présentation

- Réunir P6 et P8 dans une étude de cas, en distinguant clairement les étapes entraînement/tracking et service/monitoring. Associer modèle, run, features et seuil dans une fiche unique.

#### Fichiers sources à la révision inspectée

- [notebooks/03_modeling_with_MLFLOW.ipynb](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/notebooks/03_modeling_with_MLFLOW.ipynb)
- [src/metrics.py](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/src/metrics.py)
- [artifacts/model_metadata.json](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/artifacts/model_metadata.json)

### P7 — Concevez et déployez un système RAG

**Statut : Validé.** Validation : 2026-02-06. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3163/project-evaluation)

**Dépôt :** [ppluton/Projet-RAG-Assistant-Intelligent-Events](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events) · branche `main` · révision `aa707df92055`. Le dernier push GitHub est daté du 2026-02-06; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Permettre à un utilisateur de trouver des événements culturels en langage naturel, en reliant un modèle de langage à une base d’informations événementielles.

#### Réalisations et approche

- Pipeline LangChain/LCEL, embeddings Mistral, recherche FAISS et génération avec Mistral ; distinction entre conversation simple et recherche documentaire.
- API FastAPI et frontend React/TypeScript ; persistance des sessions PostgreSQL et monitoring, ajoutés au-delà du minimum demandé selon le jury.
- Un script d’évaluation et des résultats sauvegardés permettent d’examiner les recherches simples, filtres et contraintes temporelles.

#### Livrables et éléments repérés

- engine.py ; evaluate_rag.py ; résultats JSON ; rapport d’évaluation et dossier de livrables ; interface et documentation dans le dépôt.

#### Résultats et niveau de preuve

- Le fichier du 16 janvier 2026 contient 12 questions : 9 requêtes RAG et 3 conversations. Latence moyenne enregistrée : 2,412 s ; couverture moyenne de mots-clés : 0,815.
- ragas_scores est vide. Les deux questions temporelles ont une couverture moyenne de 0,5. La présence de mots-clés ne garantit ni exactitude ni fidélité à la source.

#### Retour pédagogique

Tests, API et choix du modèle validés. Le jury rapporte 80 % de couverture, apprécie le frontend, la persistance, le monitoring et l’explication globale. Il recommande de synthétiser une documentation trop abondante et répétitive.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Indexer et rechercher par embeddings | C | FAISS pour les événements ; Milvus pour le contexte d’échecs. |
| Construire un RAG avec routage | J+C | Pipeline LangChain/LCEL et routage conversation/recherche. |
| Évaluer les réponses d’un RAG | C+R | 12 questions ; mots-clés et latence, RAGAS non renseigné. |
| Exposer un modèle via FastAPI | J+C | Sources de service ; état de fonctionnement actuel non testé. |
| Intégrer SQL, MongoDB et Milvus | J+C | Sessions SQL, stockage ETL, contexte vectoriel et catalogue. |
| Construire des interfaces de démonstration | C | Streamlit/React/Angular ; adoption non mesurée. |
| Automatiser tests et déploiement CI/CD | J+C | Workflows et preuves historiques ; pas de nouveau run. |
| Présenter simplement une architecture | J | Retours récurrents sur la clarté des explications. |
| Documenter un projet technique | J+C | Documentation appréciée ; répétitions à réduire. |

#### Limites et points de vigilance

- Échantillon d’évaluation réduit ; pas de mesure générale établie d’hallucinations, de rappel du retrieval ou de qualité humaine.
- Les résultats enregistrés ne prouvent pas la latence actuelle du service, ni sa capacité sous charge.

#### Recul professionnel

La qualité d’un RAG dépend aussi de la fraîcheur des données et de la recherche : citer une source ne suffit pas à rendre une réponse correcte.

#### Recommandations pour la présentation

- Mettre ce projet en avant avec une architecture lisible et trois exemples : recherche réussie, contrainte temporelle difficile, absence de réponse. Étendre ultérieurement l’évaluation à retrieval, fidélité et fraîcheur, sans promettre des scores non mesurés.

#### Fichiers sources à la révision inspectée

- [backend/src/rag/engine.py](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events/blob/aa707df9205540cd02fc3c7fc34f04bced21c19f/backend/src/rag/engine.py)
- [backend/scripts/evaluate_rag.py](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events/blob/aa707df9205540cd02fc3c7fc34f04bced21c19f/backend/scripts/evaluate_rag.py)
- [backend/docs/livrables/04-RESULTATS-EVALUATION.md](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events/blob/aa707df9205540cd02fc3c7fc34f04bced21c19f/backend/docs/livrables/04-RESULTATS-EVALUATION.md)
- [backend/docs/livrables/donnees-evaluation/evaluation-results.json](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events/blob/aa707df9205540cd02fc3c7fc34f04bced21c19f/backend/docs/livrables/donnees-evaluation/evaluation-results.json)

### P8 — Confirmez vos compétences en MLOps — partie 2

**Statut : Validé.** Validation : 2026-02-27. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3150/project-evaluation)

**Dépôt :** [ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline) · branche `main` · révision `18c4c700e116`. Le dernier push GitHub est daté du 2026-02-25; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Prolonger le scoring par une chaîne de service, de déploiement et de surveillance du modèle, en analysant la dérive et les contraintes d’inférence.

#### Réalisations et approche

- API conteneurisée, pipeline CI/CD GitHub Actions, journalisation des prédictions et interface de monitoring.
- Analyse de data drift avec outils statistiques et Evidently ; propositions de maintenance et suivi du cycle de vie.
- Comparaison locale de l’inférence LightGBM et ONNX, avec mesure des temps et de l’écart de probabilités.

#### Livrables et éléments repérés

- api/predict.py ; monitoring/drift.py ; workflow ci-cd.yml ; notebook 06_inference_optimization.ipynb ; inference_benchmark.json.

#### Résultats et niveau de preuve

- Le benchmark sauvegardé annonce environ 57,7× d’accélération et un écart de probabilités de 7,31e-8 sur son protocole local.
- Cette comparaison oppose des chemins de calcul différents et ne mesure pas une requête HTTP complète, le démarrage cloud ni la charge concurrente.

#### Retour pédagogique

Chaîne MLOps et suivi du cycle de vie validés ; retours très positifs sur l’architecture, le monitoring et la démonstration. Amélioration : mettre davantage en avant MLflow, en particulier le model registry.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Exposer un modèle via FastAPI | J+C | Sources de service ; état de fonctionnement actuel non testé. |
| Construire des interfaces de démonstration | C | Streamlit/React/Angular ; adoption non mesurée. |
| Conteneuriser et décrire les environnements | J+C | Docker et configurations ; aucun conteneur lancé dans l’audit. |
| Automatiser tests et déploiement CI/CD | J+C | Workflows et preuves historiques ; pas de nouveau run. |
| Journaliser et surveiller le data drift | J+C | Logging, monitoring et analyse de dérive. |
| Mesurer une optimisation d’inférence ONNX | C+R | Microbenchmark local ≈57,7× ; pas latence HTTP. |
| Versionner code et artefacts | C | Liens à préciser entre modèle, données, seuil et run. |
| Expliquer aux interlocuteurs métier | J | Forces en P8/P9 ; recommandation de vulgarisation en P3. |

#### Limites et points de vigilance

- Même dépôt et même cas métier que P6 : deux validations pédagogiques, une seule solution de portfolio.
- La documentation et le benchmark doivent préserver le périmètre des chiffres. La configuration de seuil utilisée par le service reste à relier à la version exportée.
- Aucun état de déploiement ou de drift actuel n’a été contrôlé pendant l’audit.

#### Recul professionnel

Une solution ML continue de vivre après le déploiement : versions, observabilité, dérive, coûts et décisions de maintenance font partie du produit.

#### Recommandations pour la présentation

- En faire une étude de cas principale. Montrer le cycle de vie complet et une interprétation de drift. Présenter le benchmark ONNX comme optimisation d’un composant, avec son protocole.

#### Fichiers sources à la révision inspectée

- [api/predict.py](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/api/predict.py)
- [monitoring/drift.py](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/monitoring/drift.py)
- [.github/workflows/ci-cd.yml](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/.github/workflows/ci-cd.yml)
- [notebooks/06_inference_optimization.ipynb](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/notebooks/06_inference_optimization.ipynb)
- [artifacts/inference_benchmark.json](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/blob/18c4c700e11620f33aa6f5025ae96fe6c6a2a317/artifacts/inference_benchmark.json)

### P9 — Réalisez le cadrage d’un projet IA

**Statut : Validé.** Validation : 2026-03-13. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3165/project-evaluation)

#### Mission et besoin

Cadrer une solution IA de recommandation : expliciter les besoins, établir la faisabilité, définir les ressources et le suivi, analyser les risques et présenter les décisions.

#### Réalisations et approche

- Le jury confirme des user stories priorisées selon les intérêts du client et des features descriptives.
- Ressources techniques, humaines et financières identifiées ; méthode agile et planning de sprints établis.
- RGPD, enjeux éthiques et analyse de risques pris en compte ; faisabilité technique évaluée et présentation conforme.

#### Livrables et éléments repérés

- Dossier de cadrage et présentation remis dans un ZIP OC identifié. Leur contenu exact n’a pas été extrait ; la preuve principale est l’évaluation détaillée.

#### Résultats et niveau de preuve

- Les six compétences de coordination, planification, faisabilité, opportunités, risques et présentation sont validées. Aucun budget chiffré ni résultat de prototype n’est reconstruit sans accès aux livrables.

#### Retour pédagogique

Présentation claire ; bonne prise en compte du client, des ressources et des risques. Amélioration : préciser les besoins humains entre freelance et CDI/CDD.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Identifier et formaliser un besoin | J | Besoins et contexte confirmés par les bilans OC. |
| Étudier la faisabilité technique | J | Faisabilité P9 validée ; note d’extension vidéo/MCP P13. |
| Prioriser des user stories | J | Priorisation selon les intérêts du client dans l’évaluation P9. |
| Planifier ressources, budget et sprints | J | Planning P9 ; estimations de l’étude P13, pas coûts réels. |
| Analyser risques, éthique et RGPD | J | Cadrage validé P9 ; limites, droits et garde-fous documentés P13/P14. |
| Expliquer aux interlocuteurs métier | J | Forces en P8/P9 ; recommandation de vulgarisation en P3. |

#### Limites et points de vigilance

- Dépôt public correspondant non retrouvé dans l’inventaire actuel.
- La validation d’un exercice de cadrage ne mesure pas une coordination réelle d’équipe ou une rentabilité effectivement obtenue.

#### Recul professionnel

Le rôle d’AI Engineer inclut le choix de ce qu’il faut construire, sous quelles contraintes et avec quels critères d’arrêt ou de réussite.

#### Recommandations pour la présentation

- Réintroduire ce projet dans le portfolio même sans application visible. Une page présentant le problème, les options, le planning, les risques et les décisions apporte une preuve de maturité produit.

### P10 — Labellisez et appliquez des approches semi-supervisées en traitement d’images

**Statut : Validé.** Validation : 2026-04-15. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3151/project-evaluation)

**Dépôt :** [ppluton/brain-mri-semi-supervised](https://github.com/ppluton/brain-mri-semi-supervised) · branche `main` · révision `a73036703b99`. Le dernier push GitHub est daté du 2026-04-15; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Exploiter un petit ensemble d’IRM labellisées et un ensemble non labellisé pour comparer des stratégies de classification et de semi-supervision.

#### Réalisations et approche

- Dataset documenté de 1 506 images : 100 labels forts et 1 406 images non labellisées ; 50 labels forts pour l’apprentissage et 50 pour l’évaluation du protocole.
- Embeddings ResNet-18/ImageNet et comparaison avec ResNet-50/RadImageNet ; clustering, propagation de labels, self-training et entraînement des têtes de classification.
- Préparation spécifique des IRM ajoutée avec masque Otsu, Z-score et CLAHE ; métrique F5 justifiée pour privilégier le rappel.

#### Livrables et éléments repérés

- Notebooks 05_semi_supervise et 06_comparaison_modeles ; src/dataset.py ; src/preprocessing.py ; modules d’entraînement référencés par les notebooks.

#### Résultats et niveau de preuve

- Le notebook rapporte notamment un F5 d’environ 0,954 pour la stratégie C, avec rappel 0,96 et accuracy 0,88 sur le protocole documenté.
- Une variante RadImageNet atteint un rappel de 1 avec une précision de 0,625 et une accuracy de 0,70. Ces chiffres ne constituent pas une validation clinique.

#### Retour pédagogique

Modélisation et préparation validées ; comparaison de cinq stratégies, code modulaire, analyse du passage à l’échelle et comparaison des backbones appréciées. Améliorations : validation croisée, ROC, weight decay et rédaction plus concise.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Explorer et nettoyer des données | J+C | EDA et préparation ; code public absent pour P3. |
| Interpréter précision, rappel et F-score | J+C+R | Classification asymétrique et F5 ; limites du protocole P10. |
| Extraire des embeddings et transférer un backbone | J+C | ResNet/ImageNet et comparaison RadImageNet. |
| Comparer clustering et propagation de labels | J+C+R | Approche transductive explicitée ; test non indépendant. |
| Appliquer le self-training | C+R | Ensemble de features inclus dans le protocole semi-supervisé. |
| Prétraiter des IRM | J+C | Otsu, Z-score, CLAHE et transformations d’images. |
| Justifier le choix d’un modèle | J+C | Comparaison, contraintes et métriques. |
| Documenter un projet technique | J+C | Documentation appréciée ; répétitions à réduire. |
| Déclarer les limites et résultats négatifs | C | Protocole IRM, démonstrateur vision et réserve LLM. |

#### Limites et points de vigilance

- Les features des exemples dits test participent au traitement transductif sans leurs labels ; cela doit être explicitement distingué d’une évaluation sur données nouvelles.
- Le même jeu dit test sert à comparer des configurations et à suivre les epochs, avec affichage du meilleur F5 test : il n’est pas un test final indépendant.
- 50 images et l’absence de validation externe ne permettent pas de conclure sur la généralisation clinique.

#### Recul professionnel

Une performance élevée ne remplace pas un protocole indépendant. La distinction validation/test et le statut transductif font partie de l’explication scientifique.

#### Recommandations pour la présentation

- Valoriser le raisonnement expérimental et le travail avec peu de labels. Prévoir ultérieurement un split validation/test indépendant, un regroupement par patient si pertinent et des intervalles d’incertitude.

#### Fichiers sources à la révision inspectée

- [notebooks/05_semi_supervise.ipynb](https://github.com/ppluton/brain-mri-semi-supervised/blob/a73036703b992b2094e43c13c9f9cf9235475af9/notebooks/05_semi_supervise.ipynb)
- [notebooks/06_comparaison_modeles.ipynb](https://github.com/ppluton/brain-mri-semi-supervised/blob/a73036703b992b2094e43c13c9f9cf9235475af9/notebooks/06_comparaison_modeles.ipynb)
- [src/dataset.py](https://github.com/ppluton/brain-mri-semi-supervised/blob/a73036703b992b2094e43c13c9f9cf9235475af9/src/dataset.py)
- [src/preprocessing.py](https://github.com/ppluton/brain-mri-semi-supervised/blob/a73036703b992b2094e43c13c9f9cf9235475af9/src/preprocessing.py)

### P11 — Entraînez votre agent RL — Eagle-1

**Statut : Validé.** Validation : 2026-05-15. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3167/project-evaluation)

**Dépôt :** [ppluton/Learn---Reinforcement-Learning-](https://github.com/ppluton/Learn---Reinforcement-Learning-) · branche `main` · révision `c0b6e4bcab28`. Le dernier push GitHub est daté du 2026-05-07; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Apprendre une politique d’atterrissage dans LunarLander, après des exercices introductifs, en comparant une baseline, PPO optimisé et DQN.

#### Réalisations et approche

- Les tutoriels du dépôt ne sont pas toute la mission : MISSION contient exploration, optimisation PPO, comparaison DQN et évaluation finale.
- États, actions et récompenses sont explorés ; learning rate, gamma et n_steps sont ajustés ; une interface, une API, un dashboard et une vidéo sont référencés.
- L’évaluation finale porte sur 100 épisodes en simulation. La vidéo de démonstration est choisie parmi plusieurs tentatives et n’est pas une estimation moyenne.

#### Livrables et éléments repérés

- Quatre notebooks MISSION ; SOUTENANCE_QA.md ; fichiers d’API/interface/dashboard et support Eagle-1 présents dans l’arborescence.

#### Résultats et niveau de preuve

- Sorties enregistrées : PPO final 247,0 ± 49,9 sur 100 épisodes ; 91/100 épisodes dépassent le seuil de récompense 200.
- Le notebook de comparaison rapporte environ 243,7 pour PPO contre 115,0 pour DQN. Le document de questions/réponses affirmant que tous les DQN restent négatifs ne reflète pas ce résultat final.

#### Retour pédagogique

Bonne réalisation des exercices et du projet ; bonne connaissance théorique et usage maîtrisé des concepts et du vocabulaire RL.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Modéliser états, actions et récompense | J+C | LunarLander et exercices d’introduction. |
| Entraîner et comparer PPO/DQN | J+C+R | Notebooks MISSION et sorties enregistrées. |
| Ajuster les hyperparamètres RL | C+R | learning_rate, gamma, n_steps ; essais documentés. |
| Évaluer une politique en simulation | C+R | 100 épisodes ; pas de preuve multi-seed ou hors simulation. |
| Construire des interfaces de démonstration | C | Streamlit/React/Angular ; adoption non mesurée. |
| Justifier le choix d’un modèle | J+C | Comparaison, contraintes et métriques. |

#### Limites et points de vigilance

- Le seuil reward > 200 est la définition de réussite utilisée par le projet, pas une preuve de sécurité physique.
- Pas de démonstration multi-seed établie ni d’application hors simulation. Les écarts mesurent les épisodes du protocole, pas plusieurs entraînements indépendants.

#### Recul professionnel

L’agent apprend par interaction et récompense : la comparaison doit inclure variabilité, budget d’entraînement et protocole d’évaluation.

#### Recommandations pour la présentation

- Garder un encadré dédié au RL dans le portfolio. Montrer la progression de la baseline au modèle final et distinguer vidéo choisie, moyenne et taux selon le seuil.

#### Fichiers sources à la révision inspectée

- [MISSION/01_exploration_baseline.ipynb](https://github.com/ppluton/Learn---Reinforcement-Learning-/blob/c0b6e4bcab2804143bfad0b598ece3ba7409ab56/MISSION/01_exploration_baseline.ipynb)
- [MISSION/02_optimisation_ppo.ipynb](https://github.com/ppluton/Learn---Reinforcement-Learning-/blob/c0b6e4bcab2804143bfad0b598ece3ba7409ab56/MISSION/02_optimisation_ppo.ipynb)
- [MISSION/03_comparaison_dqn.ipynb](https://github.com/ppluton/Learn---Reinforcement-Learning-/blob/c0b6e4bcab2804143bfad0b598ece3ba7409ab56/MISSION/03_comparaison_dqn.ipynb)
- [MISSION/04_evaluation_finale.ipynb](https://github.com/ppluton/Learn---Reinforcement-Learning-/blob/c0b6e4bcab2804143bfad0b598ece3ba7409ab56/MISSION/04_evaluation_finale.ipynb)
- [MISSION/SOUTENANCE_QA.md](https://github.com/ppluton/Learn---Reinforcement-Learning-/blob/c0b6e4bcab2804143bfad0b598ece3ba7409ab56/MISSION/SOUTENANCE_QA.md)

### P12 — Extrayez des données multimodales de sites web

**Statut : Validé.** Validation : 2026-07-02. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3168/project-evaluation)

**Dépôt :** [ppluton/checkit-pipeline](https://github.com/ppluton/checkit-pipeline) · branche `main` · révision `f59076686885`. Le dernier push GitHub est daté du 2026-07-02; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Construire la chaîne d’acquisition et de préparation de données nécessaires à un futur détecteur multimodal de désinformation.

#### Réalisations et approche

- Le DAG relie quatre extracteurs — Fakeddit, Guardian, Snopes et LIAR — à la transformation, la construction du dataset, l’acquisition des images, le chargement PostgreSQL et le reporting des indicateurs.
- Neuf tâches, planification quotidienne, limites de concurrence et retry documentés ; schéma Pydantic et standardisation des données.
- La provenance, les labels, les images manquantes et la qualité des sources sont des dimensions importantes du pipeline. FakeNewsNet et NewsCLIPpings figurent dans l’exploration/backlog, pas parmi les quatre extracteurs actifs constatés.

#### Livrables et éléments repérés

- dags/checkit_pipeline_dag.py ; src/transformation/schema.py ; architecture, rapport de sources et monitoring.

#### Résultats et niveau de preuve

- Le jury valide extraction, transformation, stockage et indicateurs, et mentionne une démonstration live.
- Aucun volume de run actuel, uptime Airflow ou performance d’un classifieur de fake news n’a été mesuré dans cet audit.

#### Retour pédagogique

Quatre sources et modalités texte/image ; standardisation dans une table ; explication claire des outils Airflow/ETL et exécution montrée en soutenance.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Collecter via API et scraping | J+C | Quatre extracteurs actifs du pipeline multimodal. |
| Orchestrer un ETL avec Airflow | J+C | DAG de neuf tâches et démonstration mentionnée par le jury. |
| Normaliser, valider et conserver la provenance | C | Schéma Pydantic et documents de qualité ; vigilance sur les labels Guardian. |
| Définir des contrats et schémas de données | C | Pydantic, réponses API et validation des structures. |
| Intégrer SQL, MongoDB et Milvus | J+C | Sessions SQL, stockage ETL, contexte vectoriel et catalogue. |
| Conteneuriser et décrire les environnements | J+C | Docker et configurations ; aucun conteneur lancé dans l’audit. |
| Présenter simplement une architecture | J | Retours récurrents sur la clarté des explications. |

#### Limites et points de vigilance

- LIAR est textuel ; toutes les lignes ne doivent pas être décrites comme paires texte/image.
- Guardian ne fournit pas de label de vérité. La documentation doit éviter de confondre réputation éditoriale et annotation factuelle.
- Un pipeline d’entraînement n’est pas un modèle de détection livré.

#### Recul professionnel

La qualité du modèle futur dépend de la qualité et de la sémantique de ses données : provenance et absence de label sont des informations à conserver.

#### Recommandations pour la présentation

- En faire une étude de cas data engineering principale. Montrer le DAG, le schéma et un exemple de contrôle de qualité, avec une séparation entre sources explorées et effectivement intégrées.

#### Fichiers sources à la révision inspectée

- [dags/checkit_pipeline_dag.py](https://github.com/ppluton/checkit-pipeline/blob/f590766868852b8f87aafb178aff452eecbfa31a/dags/checkit_pipeline_dag.py)
- [src/transformation/schema.py](https://github.com/ppluton/checkit-pipeline/blob/f590766868852b8f87aafb178aff452eecbfa31a/src/transformation/schema.py)
- [docs/architecture.md](https://github.com/ppluton/checkit-pipeline/blob/f590766868852b8f87aafb178aff452eecbfa31a/docs/architecture.md)
- [docs/rapport_sources.md](https://github.com/ppluton/checkit-pipeline/blob/f590766868852b8f87aafb178aff452eecbfa31a/docs/rapport_sources.md)
- [docs/monitoring.md](https://github.com/ppluton/checkit-pipeline/blob/f590766868852b8f87aafb178aff452eecbfa31a/docs/monitoring.md)

### P13 — Mettez en place un Agent IA — IA Chess

**Statut : Validé.** Validation : 2026-08-28. [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3169/project-evaluation)

**Dépôt :** [ppluton/ia-chess-oc](https://github.com/ppluton/ia-chess-oc) · branche `main` · révision `14e15bea4e2d`. Le dernier push GitHub est daté du 2026-08-23; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Créer un assistant pédagogique d’échecs orchestrant recherche de coups, analyse moteur, contexte documentaire et recommandations vidéo, puis étudier une extension vidéo/MCP.

#### Réalisations et approche

- Le StateGraph LangGraph enchaîne Lichess, repli Stockfish, contexte RAG et recherche de vidéos ; les indisponibilités sont représentées par des avertissements et des replis.
- FastAPI, Angular, Milvus et MongoDB composent une architecture de POC ; le catalogue vidéo et l’analyse de positions sont séparés.
- Une note de conception examine faisabilité, coût, droits, limites et architecture cible incluant MCP.

#### Livrables et éléments repérés

- backend/app/services/agent_graph.py ; video_vision.py ; note-conception-analyse-video-mcp.md ; verification-livrables.md ; architecture et présentation.

#### Résultats et niveau de preuve

- La vérification sauvegardée du 23 août rapporte 34 tests backend, 6 tests Angular et un build réussi. Ces checks historiques n’ont pas été relancés.
- Le README rapporte environ 61–63 % de reconnaissance par case sur un court exemple vidéo synthétique : c’est un résultat de démonstrateur, pas une robustesse générale.

#### Retour pédagogique

Besoin identifié, architecture explicite, RAG et intégration YouTube adaptés ; vision produit et impact métier travaillés ; présentation claire.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Identifier et formaliser un besoin | J | Besoins et contexte confirmés par les bilans OC. |
| Étudier la faisabilité technique | J+C | Faisabilité P9 validée ; note d’extension vidéo/MCP P13. |
| Planifier ressources, budget et sprints | J+C | Planning P9 ; estimations de l’étude P13, pas coûts réels. |
| Analyser risques, éthique et RGPD | J+C | Cadrage validé P9 ; limites, droits et garde-fous documentés P13/P14. |
| Explorer la reconnaissance de positions en vidéo | C+R | Démonstrateur synthétique ; qualité générale non prouvée. |
| Indexer et rechercher par embeddings | C | FAISS pour les événements ; Milvus pour le contexte d’échecs. |
| Orchestrer des outils avec LangGraph | J+C | Graphe déterminé Lichess/Stockfish/contexte/vidéos. |
| Concevoir une extension MCP | C | Étude de conception uniquement ; service MCP non livré. |
| Exposer un modèle via FastAPI | J+C | Sources de service ; état de fonctionnement actuel non testé. |
| Définir des contrats et schémas de données | C | Pydantic, réponses API et validation des structures. |
| Intégrer SQL, MongoDB et Milvus | J+C | Sessions SQL, stockage ETL, contexte vectoriel et catalogue. |
| Construire des interfaces de démonstration | C | Streamlit/React/Angular ; adoption non mesurée. |
| Prévoir des replis de services | C | Stockfish et catalogue local avec avertissements. |
| Conteneuriser et décrire les environnements | J+C | Docker et configurations ; aucun conteneur lancé dans l’audit. |
| Présenter simplement une architecture | J | Retours récurrents sur la clarté des explications. |
| Documenter un projet technique | J+C | Documentation appréciée ; répétitions à réduire. |
| Déclarer les limites et résultats négatifs | C | Protocole IRM, démonstrateur vision et réserve LLM. |

#### Limites et points de vigilance

- Le graphe consulté suit une orchestration définie ; le résumé est construit de façon déterministe. Ne pas présenter un planificateur LLM autonome général.
- MCP/FastMCP est une cible, pas un service livré. Pas d’authentification utilisateur ni de preuve de montée en charge.
- L’étude chiffre 44 jours-personnes et environ 28 550 € HT avant marge, 32 833 € avec 15 % de réserve : estimations, pas dépenses réelles.

#### Recul professionnel

La valeur d’un agent vient aussi de contrats clairs, de composants spécialisés et de replis maîtrisés ; toutes les décisions n’ont pas besoin d’être générées par un LLM.

#### Recommandations pour la présentation

- Montrer un scénario de bout en bout et un scénario où Lichess est indisponible. Séparer la réalisation actuelle de l’extension vidéo/MCP et afficher les limites de vision.

#### Fichiers sources à la révision inspectée

- [backend/app/services/agent_graph.py](https://github.com/ppluton/ia-chess-oc/blob/14e15bea4e2d1ede5cbd3365b2a4e56046538458/backend/app/services/agent_graph.py)
- [backend/app/services/video_vision.py](https://github.com/ppluton/ia-chess-oc/blob/14e15bea4e2d1ede5cbd3365b2a4e56046538458/backend/app/services/video_vision.py)
- [docs/note-conception-analyse-video-mcp.md](https://github.com/ppluton/ia-chess-oc/blob/14e15bea4e2d1ede5cbd3365b2a4e56046538458/docs/note-conception-analyse-video-mcp.md)
- [docs/verification-livrables.md](https://github.com/ppluton/ia-chess-oc/blob/14e15bea4e2d1ede5cbd3365b2a4e56046538458/docs/verification-livrables.md)

### P14 — Fine-tunez votre propre LLM — POC médical

**Statut : Validé.** [Source OpenClassrooms](https://openclassrooms.com/fr/paths/2053/projects/3421)

**Dépôt :** [ppluton/medical-triage-llm-poc](https://github.com/ppluton/medical-triage-llm-poc) · branche `main` · révision `c5d7a2dd3946`. Le dernier push GitHub est daté du 2026-10-08; ce n’est pas la date de soutenance ni une mesure du temps de travail.

#### Mission et besoin

Construire et évaluer un POC bilingue fondé sur un LLM adapté par SFT/LoRA, puis comparer une étape DPO et intégrer le modèle derrière un contrat de sortie et des garde-fous.

#### Réalisations et approche

- Qwen3-1.7B-Base ; corpus de 4 700 paires FR/EN réparties en 3 721 apprentissages, 479 validations et 500 tests QA. Le corpus ne contient pas de labels de triage.
- SFT v39 à 150 étapes et DPO v41 à 20 étapes ; comparaison Base/SFT/DPO et réserve finale de 18 scénarios synthétiques.
- Rapport technique, code d’entraînement, API, schémas et garde-fous ; infrastructure d’inférence décrite, sans contrôle live pendant cet audit.

#### Livrables et éléments repérés

- RAPPORT_TECHNIQUE_POC.md ; LIVRABLES.md ; guardrails.py et dpo.py ; COMPARISON_V43_RESULT et SELECTED_RESERVE_V46_RESULT.

#### Résultats et niveau de preuve

- NLL sur les 479 validations : Base 1,532045 ; SFT 0,830098 ; DPO 0,828884. Cette baisse mesure l’apprentissage des réponses QA, pas l’exactitude d’une priorité médicale.
- Sur la réserve de 18 scénarios, le SFT brut donne 0/18 JSON conformes ; 17/18 générations atteignent 512 tokens. Des faits patient non étayés sont documentés.
- Le DPO n’a pas été retenu. Le résultat final est explicitement négatif pour une sortie de triage autonome fiable.

#### Retour pédagogique

Projet validé : confirmation de Pierre reçue le 11 octobre 2026. Le détail du retour du jury n’a pas été consulté à nouveau ; les résultats techniques restent ceux de l’audit du 9 octobre.

#### Acquis reliés à ce projet

| Compétence | Preuve | Portée |
| --- | --- | --- |
| Analyser risques, éthique et RGPD | C | Cadrage validé P9 ; limites, droits et garde-fous documentés P13/P14. |
| Préparer un corpus FR/EN et des splits | C | 4 700 paires QA ; absence de labels de triage explicitée. |
| Adapter un LLM par SFT/LoRA | C+R | SFT v39 ; résultat QA distinct du triage. |
| Comparer une étape DPO | C+R | DPO v41 non retenu ; NLL et revue qualitative. |
| Analyser sorties, hallucinations et contrat JSON | C+R | Réserve 18 scénarios et 0/18 JSON conformes du SFT brut. |
| Exposer un modèle via FastAPI | C | Sources de service ; état de fonctionnement actuel non testé. |
| Définir des contrats et schémas de données | C | Pydantic, réponses API et validation des structures. |
| Automatiser tests et déploiement CI/CD | C | Workflows et preuves historiques ; pas de nouveau run. |
| Versionner code et artefacts | C | Liens à préciser entre modèle, données, seuil et run. |
| Déclarer les limites et résultats négatifs | C | Protocole IRM, démonstrateur vision et réserve LLM. |

#### Limites et points de vigilance

- Scénarios synthétiques, pas une validation clinique. Une sortie JSON conforme obtenue avec des garde-fous ne prouve pas la correction de la décision.
- Le RAG est une ouverture proposée dans le contexte de soutenance, pas une fonctionnalité médicale livrée et évaluée.
- La disponibilité actuelle de l’inférence, les coûts effectifs et les performances sous charge ne sont pas vérifiés.

#### Recul professionnel

Ce projet montre la capacité à reconnaître un résultat négatif et à limiter le rôle du modèle. La métrique d’entraînement et l’utilité de la tâche finale sont deux objets différents.

#### Recommandations pour la présentation

- En faire une étude de cas expérimentale avec sa conclusion négative clairement visible. Conserver la décision humaine et distinguer modèle brut, garde-fous et intégration. Actualiser seulement le statut OC après la soutenance.

#### Fichiers sources à la révision inspectée

- [reports/RAPPORT_TECHNIQUE_POC.md](https://github.com/ppluton/medical-triage-llm-poc/blob/c5d7a2dd39464f37b45d4d616fd819a84db4b025/reports/RAPPORT_TECHNIQUE_POC.md)
- [reports/LIVRABLES.md](https://github.com/ppluton/medical-triage-llm-poc/blob/c5d7a2dd39464f37b45d4d616fd819a84db4b025/reports/LIVRABLES.md)
- [src/triage_poc/guardrails.py](https://github.com/ppluton/medical-triage-llm-poc/blob/c5d7a2dd39464f37b45d4d616fd819a84db4b025/src/triage_poc/guardrails.py)
- [src/triage_poc/dpo.py](https://github.com/ppluton/medical-triage-llm-poc/blob/c5d7a2dd39464f37b45d4d616fd819a84db4b025/src/triage_poc/dpo.py)
- [docs/evidence/COMPARISON_V43_RESULT_2026-09-16.md](https://github.com/ppluton/medical-triage-llm-poc/blob/c5d7a2dd39464f37b45d4d616fd819a84db4b025/docs/evidence/COMPARISON_V43_RESULT_2026-09-16.md)
- [docs/evidence/SELECTED_RESERVE_V46_RESULT_2026-09-16.md](https://github.com/ppluton/medical-triage-llm-poc/blob/c5d7a2dd39464f37b45d4d616fd819a84db4b025/docs/evidence/SELECTED_RESERVE_V46_RESULT_2026-09-16.md)

## 5. Carte complète des acquis

### Cadrage & produit

**Lecture des preuves :** Validé et réinvesti. La performance commerciale et la conduite d’une équipe réelle ne sont pas mesurées par ces projets.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Identifier et formaliser un besoin | [P1](projet-p01.html), [P9](projet-p09.html), [P13](projet-p13.html) | J | Besoins et contexte confirmés par les bilans OC. |
| Étudier la faisabilité technique | [P9](projet-p09.html), [P13](projet-p13.html) | J+C | Faisabilité P9 validée ; note d’extension vidéo/MCP P13. |
| Prioriser des user stories | [P9](projet-p09.html) | J | Priorisation selon les intérêts du client dans l’évaluation P9. |
| Planifier ressources, budget et sprints | [P9](projet-p09.html), [P13](projet-p13.html) | J+C | Planning P9 ; estimations de l’étude P13, pas coûts réels. |
| Analyser risques, éthique et RGPD | [P9](projet-p09.html), [P13](projet-p13.html), [P14](projet-p14.html) | J+C | Cadrage validé P9 ; limites, droits et garde-fous documentés P13/P14. |

### Données & pipelines

**Lecture des preuves :** Pratique répétée. La volumétrie réelle ingérée et l’exploitation durable doivent rester rattachées à un run et à un environnement.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Explorer et nettoyer des données | [P3](projet-p03.html), [P4](projet-p04.html), [P6](projet-p06.html), [P10](projet-p10.html) | J+C | EDA et préparation ; code public absent pour P3. |
| Encoder et transformer les variables | [P3](projet-p03.html), [P4](projet-p04.html), [P6](projet-p06.html) | J+C | Pipelines, encodage, mise à l’échelle et features. |
| Construire des features métier | [P4](projet-p04.html), [P6](projet-p06.html) | J+C | Attrition et scoring ; validation explicite P6. |
| Collecter via API et scraping | [P12](projet-p12.html) | J+C | Quatre extracteurs actifs du pipeline multimodal. |
| Orchestrer un ETL avec Airflow | [P12](projet-p12.html) | J+C | DAG de neuf tâches et démonstration mentionnée par le jury. |
| Normaliser, valider et conserver la provenance | [P12](projet-p12.html) | C | Schéma Pydantic et documents de qualité ; vigilance sur les labels Guardian. |
| Préparer un corpus FR/EN et des splits | [P14](projet-p14.html) | C | 4 700 paires QA ; absence de labels de triage explicitée. |

### ML supervisé

**Lecture des preuves :** Pratique répétée. Séparer systématiquement apprentissage, sélection et test final indépendant.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Comparer des modèles de régression | [P3](projet-p03.html) | J | Régression linéaire, bagging, boosting : évaluation OC. |
| Comparer des classifieurs | [P4](projet-p04.html), [P6](projet-p06.html) | J+C+R | LR/SVM/LGBM/KNN/dummy et scoring crédit. |
| Utiliser validation croisée et GridSearchCV | [P3](projet-p03.html), [P4](projet-p04.html), [P6](projet-p06.html) | J+C | Contrôle de sélection ; P3 décrit par le jury. |
| Interpréter précision, rappel et F-score | [P4](projet-p04.html), [P10](projet-p10.html) | J+C+R | Classification asymétrique et F5 ; limites du protocole P10. |
| Choisir un seuil selon un coût métier | [P6](projet-p06.html) | C+R | FN ×10 et FP ×1 ; versions de seuil à réconcilier. |
| Expliquer les prédictions avec SHAP | [P4](projet-p04.html) | C | Dashboard et notebook ; importance non causale. |

### Vision & semi-supervisé

**Lecture des preuves :** Expérience expérimentale validée. Les résultats IRM restent exploratoires ; la vision vidéo d’échecs reste un démonstrateur.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Exploiter un modèle de segmentation préentraîné | [P2](projet-p02.html) | J+C | Hugging Face ; pas d’entraînement du modèle dans P2. |
| Décoder les masques et calculer l’IoU | [P2](projet-p02.html) | C+R | Masques base64 et conventions de classes/fond. |
| Extraire des embeddings et transférer un backbone | [P10](projet-p10.html) | J+C | ResNet/ImageNet et comparaison RadImageNet. |
| Comparer clustering et propagation de labels | [P10](projet-p10.html) | J+C+R | Approche transductive explicitée ; test non indépendant. |
| Appliquer le self-training | [P10](projet-p10.html) | C+R | Ensemble de features inclus dans le protocole semi-supervisé. |
| Prétraiter des IRM | [P10](projet-p10.html) | J+C | Otsu, Z-score, CLAHE et transformations d’images. |
| Explorer la reconnaissance de positions en vidéo | [P13](projet-p13.html) | C+R | Démonstrateur synthétique ; qualité générale non prouvée. |

### Apprentissage par renforcement

**Lecture des preuves :** Projet dédié validé. Le résultat LunarLander ne prouve pas une robustesse hors simulation ou sur plusieurs entraînements indépendants.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Modéliser états, actions et récompense | [P11](projet-p11.html) | J+C | LunarLander et exercices d’introduction. |
| Entraîner et comparer PPO/DQN | [P11](projet-p11.html) | J+C+R | Notebooks MISSION et sorties enregistrées. |
| Ajuster les hyperparamètres RL | [P11](projet-p11.html) | C+R | learning_rate, gamma, n_steps ; essais documentés. |
| Évaluer une politique en simulation | [P11](projet-p11.html) | C+R | 100 épisodes ; pas de preuve multi-seed ou hors simulation. |

### RAG, agents & LLM

**Lecture des preuves :** RAG, agents et LLM : projets validés. MCP reste une cible ; ni la fidélité générale du RAG ni la fiabilité clinique du LLM ne sont démontrées.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Indexer et rechercher par embeddings | [P7](projet-p07.html), [P13](projet-p13.html) | C | FAISS pour les événements ; Milvus pour le contexte d’échecs. |
| Construire un RAG avec routage | [P7](projet-p07.html) | J+C | Pipeline LangChain/LCEL et routage conversation/recherche. |
| Évaluer les réponses d’un RAG | [P7](projet-p07.html) | C+R | 12 questions ; mots-clés et latence, RAGAS non renseigné. |
| Orchestrer des outils avec LangGraph | [P13](projet-p13.html) | J+C | Graphe déterminé Lichess/Stockfish/contexte/vidéos. |
| Adapter un LLM par SFT/LoRA | [P14](projet-p14.html) | C+R | SFT v39 ; résultat QA distinct du triage. |
| Comparer une étape DPO | [P14](projet-p14.html) | C+R | DPO v41 non retenu ; NLL et revue qualitative. |
| Analyser sorties, hallucinations et contrat JSON | [P14](projet-p14.html) | C+R | Réserve 18 scénarios et 0/18 JSON conformes du SFT brut. |
| Concevoir une extension MCP | [P13](projet-p13.html) | C | Étude de conception uniquement ; service MCP non livré. |

### API & applications

**Lecture des preuves :** Pratique répétée. Une interface utilisable ne démontre pas l’authentification, la sécurité des accès ou une adoption utilisateur.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Consommer une API d’inférence | [P2](projet-p02.html) | J+C | Appel HTTP Hugging Face ; timeout/retry à améliorer. |
| Exposer un modèle via FastAPI | [P5](projet-p05.html), [P7](projet-p07.html), [P8](projet-p08.html), [P13](projet-p13.html), [P14](projet-p14.html) | J+C | Sources de service ; état de fonctionnement actuel non testé. |
| Définir des contrats et schémas de données | [P5](projet-p05.html), [P12](projet-p12.html), [P13](projet-p13.html), [P14](projet-p14.html) | C | Pydantic, réponses API et validation des structures. |
| Modéliser et utiliser SQL/SQLAlchemy | [P5](projet-p05.html) | J+C | Table employees, PostgreSQL/SQLite. |
| Intégrer SQL, MongoDB et Milvus | [P7](projet-p07.html), [P12](projet-p12.html), [P13](projet-p13.html) | J+C | Sessions SQL, stockage ETL, contexte vectoriel et catalogue. |
| Construire des interfaces de démonstration | [P5](projet-p05.html), [P7](projet-p07.html), [P8](projet-p08.html), [P11](projet-p11.html), [P13](projet-p13.html) | C | Streamlit/React/Angular ; adoption non mesurée. |
| Prévoir des replis de services | [P13](projet-p13.html) | C | Stockfish et catalogue local avec avertissements. |

### MLOps & exploitation

**Lecture des preuves :** Axe fort validé. Registry MLflow, cohérence modèle/seuil et preuve d’exploitation actuelle restent à préciser.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Tracer les expériences avec MLflow | [P6](projet-p06.html) | J+C | Tracking d’essais ; registry à mieux mettre en évidence. |
| Conteneuriser et décrire les environnements | [P5](projet-p05.html), [P8](projet-p08.html), [P12](projet-p12.html), [P13](projet-p13.html) | J+C | Docker et configurations ; aucun conteneur lancé dans l’audit. |
| Automatiser tests et déploiement CI/CD | [P5](projet-p05.html), [P7](projet-p07.html), [P8](projet-p08.html), [P14](projet-p14.html) | J+C | Workflows et preuves historiques ; pas de nouveau run. |
| Journaliser et surveiller le data drift | [P8](projet-p08.html) | J+C | Logging, monitoring et analyse de dérive. |
| Mesurer une optimisation d’inférence ONNX | [P8](projet-p08.html) | C+R | Microbenchmark local ≈57,7× ; pas latence HTTP. |
| Versionner code et artefacts | [P4](projet-p04.html), [P6](projet-p06.html), [P8](projet-p08.html), [P14](projet-p14.html) | C | Liens à préciser entre modèle, données, seuil et run. |

### Communication & recul

**Lecture des preuves :** Retours jury récurrents. Le degré d’autonomie personnel et les langues doivent être autoévalués, sans score déduit du nombre de dépôts.

| Compétence | Projets | Preuve | Portée |
| --- | --- | --- | --- |
| Présenter simplement une architecture | [P7](projet-p07.html), [P12](projet-p12.html), [P13](projet-p13.html) | J | Retours récurrents sur la clarté des explications. |
| Justifier le choix d’un modèle | [P3](projet-p03.html), [P4](projet-p04.html), [P6](projet-p06.html), [P10](projet-p10.html), [P11](projet-p11.html) | J+C | Comparaison, contraintes et métriques. |
| Documenter un projet technique | [P1](projet-p01.html), [P2](projet-p02.html), [P5](projet-p05.html), [P7](projet-p07.html), [P10](projet-p10.html), [P13](projet-p13.html) | J+C | Documentation appréciée ; répétitions à réduire. |
| Expliquer aux interlocuteurs métier | [P3](projet-p03.html), [P8](projet-p08.html), [P9](projet-p09.html) | J | Forces en P8/P9 ; recommandation de vulgarisation en P3. |
| Déclarer les limites et résultats négatifs | [P10](projet-p10.html), [P13](projet-p13.html), [P14](projet-p14.html) | C | Protocole IRM, démonstrateur vision et réserve LLM. |

### Compétences humaines, langues et autonomie

Les retours OC étayent la clarté des présentations, la justification des choix, la documentation et la prise en compte du métier. Ils ne permettent pas de noter précisément leadership, collaboration quotidienne, négociation ou maîtrise d’une langue. Le corpus FR/EN du P14 et un portfolio bilingue ne sont pas une certification d’anglais.

| Question d’autoévaluation | À compléter personnellement |
| --- | --- |
| Ce que je peux refaire seul | Domaine, étapes précises, assistance nécessaire et exemple récent. |
| Ce que je peux expliquer sans support | Pourquoi cette métrique, ce modèle, cette architecture et quelles alternatives. |
| Ma contribution personnelle | Choix, code, tests, rédaction ; éléments repris d’un tutoriel, upstream, outil ou assistant. |
| Mes langues | Compréhension écrite, orale, présentation technique et échanges professionnels. |
| Mes axes de progression | Choisir deux priorités concrètes plutôt qu’une liste de technologies à apprendre. |

## 6. Dépôts complémentaires et inventaire public

[Voir le graphe de correspondance des 26 dépôts](graphe-depots-oc.svg)

Ces dépôts enrichissent le parcours sans être comptés comme missions OC supplémentaires. Leur lecture est principalement documentaire (README et arborescence) ; ils n’ont pas fait l’objet d’un audit exhaustif de fonctionnement. Les trois forks sont signalés pour éviter d’attribuer automatiquement le travail upstream à Pierre.

### airflow-tutorial

**Catégorie :** Tutoriel de préparation. **Profondeur de lecture :** README et arborescence.

DAG employés vers PostgreSQL, staging et upsert, basé sur le tutoriel officiel Airflow. Preuve d’apprentissage complémentaire au P12 ; pas une deuxième mission OC.

[Dépôt public](https://github.com/ppluton/airflow-tutorial) · [Snapshot inspecté](https://github.com/ppluton/airflow-tutorial/tree/a6b174e07dc3d6cb1bac63eb318d8186338632e8)

### Bubble.io-rag

**Catégorie :** Projet personnel IA. **Profondeur de lecture :** README et arborescence.

RAG sur la documentation Bubble, interface Next.js et plusieurs fournisseurs de modèles. Extension à un autre besoin ; embeddings volumineux non inclus à reconstruire. Qualité de recherche non mesurée ici.

[Dépôt public](https://github.com/ppluton/Bubble.io-rag) · [Snapshot inspecté](https://github.com/ppluton/Bubble.io-rag/tree/e0043b68083317b5b779e3450e17bb821273b1de)

### EchoScript-AI-Powered-Audio-Transcription

**Catégorie :** Projet personnel IA. **Profondeur de lecture :** README et arborescence.

Transcription avec Voxtral et enrichissement textuel Mistral. Élargit la carte vers l’audio et les applications IA ; précision de transcription, diarisation et émotions non vérifiées.

[Dépôt public](https://github.com/ppluton/EchoScript-AI-Powered-Audio-Transcription) · [Snapshot inspecté](https://github.com/ppluton/EchoScript-AI-Powered-Audio-Transcription/tree/e671ed6ac6732a937a43e363ef33ee752c6bc3df)

### Image-web-scrapper

**Catégorie :** Outil personnel. **Profondeur de lecture :** README et arborescence.

Application Streamlit de collecte d’images. Complète le thème acquisition de données ; qualité, droits du corpus et comportement effectif non évalués ici.

[Dépôt public](https://github.com/ppluton/Image-web-scrapper) · [Snapshot inspecté](https://github.com/ppluton/Image-web-scrapper/tree/b762b8f05d359e29ffd0429d309d227884ed44cc)

### Nest-JS-Chat-bot-Edtech-DDD-hexagonal

**Catégorie :** Projet personnel IA. **Profondeur de lecture :** README et arborescence.

Chatbot éducatif avec NestJS, Prisma, RabbitMQ, frontend et tool calling documenté. Apporte un axe architecture DDD/hexagonale ; ne prouve pas à lui seul une autonomie agentique ou une performance pédagogique.

[Dépôt public](https://github.com/ppluton/Nest-JS-Chat-bot-Edtech-DDD-hexagonal) · [Snapshot inspecté](https://github.com/ppluton/Nest-JS-Chat-bot-Edtech-DDD-hexagonal/tree/911513b5725c5d0de8ededab1ef0ee05b387f16e)

### cookbook-mistral-classification

**Catégorie :** Adaptation de cookbook. **Profondeur de lecture :** README et arborescence.

Préparation de données, entraînement et comparaison d’un classifieur de produits via Mistral Classifier Factory. Le README attribue la base au cookbook Mistral ; préciser les modifications personnelles.

[Dépôt public](https://github.com/ppluton/cookbook-mistral-classification) · [Snapshot inspecté](https://github.com/ppluton/cookbook-mistral-classification/tree/840f2f5f01e2ec417915b7d84e79718317a47d12)

### recipe-ai

**Catégorie :** Projet personnel IA. **Profondeur de lecture :** README et arborescence.

Génération de recettes avec Gemini, Next.js/TypeScript et Supabase. Authentification/RLS déclarées dans le README ; leur configuration et leur comportement ne sont pas audités. Ne remplace pas la compétence non validée du P5.

[Dépôt public](https://github.com/ppluton/recipe-ai) · [Snapshot inspecté](https://github.com/ppluton/recipe-ai/tree/61ad65cd7574c6e81a66ef2505e7c0032e693880)

### Smart-Meal-Planner

**Catégorie :** Projet personnel IA. **Profondeur de lecture :** README et arborescence.

Planning de repas via OpenRouter, React/Vite et Supabase ; recettes, plans et listes persistés selon la documentation. L’efficacité nutritionnelle, le budget et les parcours authentifiés ne sont pas mesurés.

[Dépôt public](https://github.com/ppluton/Smart-Meal-Planner) · [Snapshot inspecté](https://github.com/ppluton/Smart-Meal-Planner/tree/d443b1e4f0028a0f28a22e69eb305c57b7904a4a)

### pierrepluton.com

**Catégorie :** Support de portfolio existant. **Profondeur de lecture :** README et arborescence.

Portfolio Astro/Tailwind/TypeScript bilingue, avec pages d’études de cas. Candidat logique pour accueillir les contenus OC si tu le choisis ; le site et ses autres produits ne sont pas modifiés dans cet audit.

[Dépôt public](https://github.com/ppluton/pierrepluton.com) · [Snapshot inspecté](https://github.com/ppluton/pierrepluton.com/tree/1f5169554889f471e65bcd235fe4a31534cbbd05)

### pli

**Catégorie :** Projet web complémentaire. **Profondeur de lecture :** README et arborescence.

Site de jeux de cartes : Next.js, TypeScript, MDX/Velite, schémas Zod et SEO. Étaye la structuration de contenu ; pas une preuve d’entraînement IA.

[Dépôt public](https://github.com/ppluton/pli) · [Snapshot inspecté](https://github.com/ppluton/pli/tree/e9b0861c611e36330ec35d300ebbdf74cd0b63d4)

### ppluton

**Catégorie :** Profil GitHub. **Profondeur de lecture :** README et arborescence.

Présentation publique du profil. Sert de porte d’entrée, pas de réalisation technique distincte.

[Dépôt public](https://github.com/ppluton/ppluton) · [Snapshot inspecté](https://github.com/ppluton/ppluton/tree/72126b0e57f87798754dd8dd41c1c2d512ce35ea)

### template-project-datascience-1

**Catégorie :** Squelette. **Profondeur de lecture :** README et arborescence.

Structure réutilisable de projet data science. Aide à l’organisation ; ne doit pas être assimilée au livrable du P1 ni à un modèle réalisé.

[Dépôt public](https://github.com/ppluton/template-project-datascience-1) · [Snapshot inspecté](https://github.com/ppluton/template-project-datascience-1/tree/2450736948d91582bbff89be6e2d83c310d5933e)

### docs

**Catégorie :** Starter documentaire. **Profondeur de lecture :** README et arborescence.

README Mintlify Starter Kit ; exemples et structure de documentation. Ne permet pas de revendiquer une documentation métier personnalisée sans autre preuve.

[Dépôt public](https://github.com/ppluton/docs) · [Snapshot inspecté](https://github.com/ppluton/docs/tree/ac100a96802c8593d9f853364427de09cb981e18)

### portly

**Catégorie :** Fork / contribution à qualifier. **Profondeur de lecture :** Métadonnées, README et arborescence.

Superviseur macOS en Swift, marqué fork par GitHub. Le code upstream et les contributions personnelles doivent être séparés avant d’en déduire un acquis auteur.

[Dépôt public](https://github.com/ppluton/portly) · [Snapshot inspecté](https://github.com/ppluton/portly/tree/06fadd5c862daec3f2be525232aa1396e630eaca)

### boring.notch

**Catégorie :** Fork / contribution à qualifier. **Profondeur de lecture :** Métadonnées, README et arborescence.

Application macOS, marquée fork. Sa présence ne démontre pas que ses fonctionnalités ont été réalisées par toi.

[Dépôt public](https://github.com/ppluton/boring.notch) · [Snapshot inspecté](https://github.com/ppluton/boring.notch/tree/99900bf630a3d3e97fae079df2175993318d51f7)

### local_whisper

**Catégorie :** Fork / contribution à qualifier. **Profondeur de lecture :** Métadonnées, README et arborescence.

Application de transcription locale Tauri/Rust, marquée fork ; README issu de Parler/Handy. Les ajouts attribués au fork ne sont pas automatiquement tes contributions.

[Dépôt public](https://github.com/ppluton/local_whisper) · [Snapshot inspecté](https://github.com/ppluton/local_whisper/tree/774b308c9a1ee82f97bba5a0177d24cc2fd9da58)

### Inventaire des 26 dépôts au 9 octobre 2026

| Dépôt | Lien au parcours / catégorie | Fork | Révision |
| --- | --- | --- | --- |
| [airflow-tutorial](https://github.com/ppluton/airflow-tutorial) | Tutoriel de préparation | Non | [a6b174e07dc3](https://github.com/ppluton/airflow-tutorial/tree/a6b174e07dc3d6cb1bac63eb318d8186338632e8) |
| [api-attrition](https://github.com/ppluton/api-attrition) | P5 | Non | [c06574d8f9b6](https://github.com/ppluton/api-attrition/tree/c06574d8f9b6c831a7eb06d7c2d239959f5bfdbc) |
| [boring.notch](https://github.com/ppluton/boring.notch) | Fork / contribution à qualifier | Oui | [99900bf630a3](https://github.com/ppluton/boring.notch/tree/99900bf630a3d3e97fae079df2175993318d51f7) |
| [brain-mri-semi-supervised](https://github.com/ppluton/brain-mri-semi-supervised) | P10 | Non | [a73036703b99](https://github.com/ppluton/brain-mri-semi-supervised/tree/a73036703b992b2094e43c13c9f9cf9235475af9) |
| [Bubble.io-rag](https://github.com/ppluton/Bubble.io-rag) | Projet personnel IA | Non | [e0043b680833](https://github.com/ppluton/Bubble.io-rag/tree/e0043b68083317b5b779e3450e17bb821273b1de) |
| [checkit-pipeline](https://github.com/ppluton/checkit-pipeline) | P12 | Non | [f59076686885](https://github.com/ppluton/checkit-pipeline/tree/f590766868852b8f87aafb178aff452eecbfa31a) |
| [Clothe-segmentation-AI-ML](https://github.com/ppluton/Clothe-segmentation-AI-ML) | P2 | Non | [dd15bbf94ad0](https://github.com/ppluton/Clothe-segmentation-AI-ML/tree/dd15bbf94ad0e20295b0feb239cc3c3acc58e927) |
| [cookbook-mistral-classification](https://github.com/ppluton/cookbook-mistral-classification) | Adaptation de cookbook | Non | [840f2f5f01e2](https://github.com/ppluton/cookbook-mistral-classification/tree/840f2f5f01e2ec417915b7d84e79718317a47d12) |
| [Credit-Scoring-End-to-End-MLOps-Pipeline](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline) | P6, P8 | Non | [18c4c700e116](https://github.com/ppluton/Credit-Scoring-End-to-End-MLOps-Pipeline/tree/18c4c700e11620f33aa6f5025ae96fe6c6a2a317) |
| [docs](https://github.com/ppluton/docs) | Starter documentaire | Non | [ac100a96802c](https://github.com/ppluton/docs/tree/ac100a96802c8593d9f853364427de09cb981e18) |
| [EchoScript-AI-Powered-Audio-Transcription](https://github.com/ppluton/EchoScript-AI-Powered-Audio-Transcription) | Projet personnel IA | Non | [e671ed6ac673](https://github.com/ppluton/EchoScript-AI-Powered-Audio-Transcription/tree/e671ed6ac6732a937a43e363ef33ee752c6bc3df) |
| [ia-chess-oc](https://github.com/ppluton/ia-chess-oc) | P13 | Non | [14e15bea4e2d](https://github.com/ppluton/ia-chess-oc/tree/14e15bea4e2d1ede5cbd3365b2a4e56046538458) |
| [Image-web-scrapper](https://github.com/ppluton/Image-web-scrapper) | Outil personnel | Non | [b762b8f05d35](https://github.com/ppluton/Image-web-scrapper/tree/b762b8f05d359e29ffd0429d309d227884ed44cc) |
| [Learn---Reinforcement-Learning-](https://github.com/ppluton/Learn---Reinforcement-Learning-) | P11 | Non | [c0b6e4bcab28](https://github.com/ppluton/Learn---Reinforcement-Learning-/tree/c0b6e4bcab2804143bfad0b598ece3ba7409ab56) |
| [local_whisper](https://github.com/ppluton/local_whisper) | Fork / contribution à qualifier | Oui | [774b308c9a1e](https://github.com/ppluton/local_whisper/tree/774b308c9a1ee82f97bba5a0177d24cc2fd9da58) |
| [medical-triage-llm-poc](https://github.com/ppluton/medical-triage-llm-poc) | P14 | Non | [c5d7a2dd3946](https://github.com/ppluton/medical-triage-llm-poc/tree/c5d7a2dd39464f37b45d4d616fd819a84db4b025) |
| [Model-classification-turnover-full-analysis](https://github.com/ppluton/Model-classification-turnover-full-analysis) | P4 | Non | [7eeb461ced92](https://github.com/ppluton/Model-classification-turnover-full-analysis/tree/7eeb461ced9225ad9575040d46c3e69883fd42fe) |
| [Nest-JS-Chat-bot-Edtech-DDD-hexagonal](https://github.com/ppluton/Nest-JS-Chat-bot-Edtech-DDD-hexagonal) | Projet personnel IA | Non | [911513b5725c](https://github.com/ppluton/Nest-JS-Chat-bot-Edtech-DDD-hexagonal/tree/911513b5725c5d0de8ededab1ef0ee05b387f16e) |
| [pierrepluton.com](https://github.com/ppluton/pierrepluton.com) | Support de portfolio existant | Non | [1f5169554889](https://github.com/ppluton/pierrepluton.com/tree/1f5169554889f471e65bcd235fe4a31534cbbd05) |
| [pli](https://github.com/ppluton/pli) | Projet web complémentaire | Non | [e9b0861c611e](https://github.com/ppluton/pli/tree/e9b0861c611e36330ec35d300ebbdf74cd0b63d4) |
| [portly](https://github.com/ppluton/portly) | Fork / contribution à qualifier | Oui | [06fadd5c862d](https://github.com/ppluton/portly/tree/06fadd5c862daec3f2be525232aa1396e630eaca) |
| [ppluton](https://github.com/ppluton/ppluton) | Profil GitHub | Non | [72126b0e57f8](https://github.com/ppluton/ppluton/tree/72126b0e57f87798754dd8dd41c1c2d512ce35ea) |
| [Projet-RAG-Assistant-Intelligent-Events](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events) | P7 | Non | [aa707df92055](https://github.com/ppluton/Projet-RAG-Assistant-Intelligent-Events/tree/aa707df9205540cd02fc3c7fc34f04bced21c19f) |
| [recipe-ai](https://github.com/ppluton/recipe-ai) | Projet personnel IA | Non | [61ad65cd7574](https://github.com/ppluton/recipe-ai/tree/61ad65cd7574c6e81a66ef2505e7c0032e693880) |
| [Smart-Meal-Planner](https://github.com/ppluton/Smart-Meal-Planner) | Projet personnel IA | Non | [d443b1e4f002](https://github.com/ppluton/Smart-Meal-Planner/tree/d443b1e4f0028a0f28a22e69eb305c57b7904a4a) |
| [template-project-datascience-1](https://github.com/ppluton/template-project-datascience-1) | Squelette | Non | [2450736948d9](https://github.com/ppluton/template-project-datascience-1/tree/2450736948d91582bbff89be6e2d83c310d5933e) |

## 7. Recommandations et plan de valorisation

Le meilleur fil conducteur est : **comprendre un besoin, préparer les données, choisir une approche, livrer un service et vérifier ce qu’il démontre réellement**. Il décrit les acquis visibles sans revendiquer une validation de production ou une expertise dans tous les domaines.

### Priorité 1 — rendre les preuves cohérentes

Retrouver les livrables P3/P9 ; documenter le snapshot remis à OC ; rattacher chaque score à un dataset, un split, un run et une version. Réconcilier les seuils du scoring et les descriptions DQN. Résultat attendu : chaque affirmation du portfolio peut être reliée à une source précise.

### Priorité 2 — choisir quatre études de cas principales

Scoring P6/P8 pour le cycle de vie ML ; RAG P7 pour une application générative ; pipeline P12 pour l’ingénierie des données ; agent P13 pour l’orchestration et le produit. Conserver P10/P11/P14 comme études expérimentales complémentaires, avec leur protocole et leurs limites.

### Priorité 3 — consolider la sécurité applicative

Reprendre l’authentification/autorisation demandée par le jury P5 : identité, droits, accès aux données et tests de refus. Vérifier la cohérence des features côté entraînement/API et les contraintes DB. Ce sont des travaux futurs, pas des modifications effectuées par cet audit.

### Priorité 4 — renforcer les évaluations

P10 : validation séparée, test final indépendant et protocole transductif explicite. P7 : jeu de questions plus large, retrieval et fidélité aux sources. P11 : plusieurs seeds et variabilité entre entraînements. P14 : maintenir le résultat négatif et une tâche finale adéquatement labellisée avant toute revendication supplémentaire.

### Priorité 5 — clarifier l’exploitation

Pour le scoring, expliciter le registry, la version servie et les conditions de maintenance. Séparer microbenchmark, latence API, charge et coût. Ne pas présenter une configuration de déploiement ou un ancien test comme état de production actuel.

### Priorité 6 — réduire la charge de lecture

Un README d’entrée court, une architecture, une fiche de résultats et des liens vers les détails. Éviter les répétitions déjà signalées par le jury. Montrer d’abord le besoin et le résultat, puis laisser le lecteur explorer le code.

### Priorité 7 — compléter ton autoévaluation

Pour chaque domaine, préciser ce que tu peux refaire seul, ce que tu sais expliquer sans support et ce qui reste assisté. Ajouter langues, préférences de rôle et contribution personnelle. Une carte de preuves ne mesure pas automatiquement l’autonomie.

### Sélection conseillée pour le portfolio

| Étude de cas | Ce qu’elle démontre | Preuve centrale |
| --- | --- | --- |
| Scoring P6/P8 | Cycle de vie ML, coût métier, service et monitoring. | Notebook d’expérience + API + drift + architecture. |
| Assistant culturel P7 | RAG intégré à une application et à un besoin utilisateur. | Pipeline + interface + limites de l’évaluation. |
| Pipeline multimodal P12 | Data engineering, qualité et orchestration. | DAG + schéma + provenance + indicateurs. |
| Assistant d’échecs P13 | Orchestration d’outils et vision produit. | Graphe + replis + note de faisabilité. |
| Études expérimentales P10/P11/P14 | Diversité méthodologique et recul critique. | Protocole, résultats contextualisés et limites. |

### Une fiche de projet en huit points

- Problème et destinataire.
- Périmètre et contribution personnelle.
- Données, modèle et architecture.
- Choix et alternatives.
- Résultat avec dénominateur, split, date et version.
- Lien de preuve et démonstration reproductible.
- Limites et ce qui n’a pas été mesuré.
- Ce que tu ferais autrement aujourd’hui.

### Séquence de travail proposée — pas encore exécutée

| Étape | Livrable concret | Condition de fin |
| --- | --- | --- |
| Consolider les preuves | P3/P9 retrouvés ; tableau des versions/résultats. | Chaque chiffre et correspondance a une source. |
| Compléter l’autoévaluation | Autonomie, contribution, langues, axes de progression. | La carte décrit aussi ton aisance réelle. |
| Rédiger les études de cas | Quatre fiches principales et trois expérimentales. | Chaque fiche se lit sans ouvrir le code. |
| Choisir le support | Décision sur portfolio existant, autre site ou PDF. | Choix aligné avec les attendus du P15 et validé avec le mentor. |
| Construire le dossier du P15 | Projet technique, rapport, carte et portfolio. | Conformité vérifiée sur les consignes OC actuelles. |

Le dépôt pierrepluton.com constitue un support existant plausible ; l’intégration n’est ni réalisée ni publiée ici. Le choix du projet technique du P15 reste à faire : ce bilan sert à l’éclairer, pas à réduire le P15 à une simple mise en page de projets passés.

## 8. Traçabilité et limites du bilan

Les liens GitHub vers les fichiers sont fixés sur les révisions inspectées. Les pages OC demandent l’accès au compte étudiant ; le rapport ne contient ni liens de téléchargement signés, ni jetons, ni identité des évaluateurs. Les dépôts privés et les autres domaines professionnels ne sont pas audités.

Le manifeste audit.json conserve le modèle de données, les correspondances et les révisions. competences.csv fournit les liens spécifiques entre compétences et projets ; depots.csv couvre l’inventaire public. Les cartes SVG sont autonomes et la page interactive fonctionne sans chargement de bibliothèque externe ni appel réseau automatique.

L’interprétation est valable pour les sources inspectées le 9 octobre 2026. Elle ne constitue pas une garantie de disponibilité des applications, une mesure d’employabilité, une certification linguistique ou une validation clinique. Les recommandations restent des propositions de travail.
