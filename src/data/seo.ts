import { projects } from "./projects";
import { localizeProject, type Locale } from "./i18n";
import { selectedCases } from "./selected-cases";
import formation from "./formation.json";

export interface PageSeo {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  type: "ProfilePage" | "CollectionPage" | "WebPage";
}

const core = {
  fr: {
    "/": [
      "Pierre Pluton — Ingénieur IA & développeur full stack freelance",
      "Pierre Pluton, ingénieur IA et développeur full stack freelance : produits web et mobile, RAG, MLOps et design. Découvrez mes projets et mon parcours.",
    ],
    "/parcours/": [
      "Parcours : produit, full stack & ingénierie IA — Pierre Pluton",
      "Des sciences sociales au développement full stack et à l’IA : mon parcours, ma méthode et mes expériences de CTO et cofondateur de produits numériques.",
    ],
    "/competences/": [
      "Compétences IA, full stack & mobile — Pierre Pluton",
      "Explorez mes compétences en IA, Python, TypeScript, React et mobile : outils, design d’interface et graphe interactif relié aux projets réalisés.",
    ],
    "/realisations/": [
      "Projets web, mobile & intelligence artificielle — Pierre Pluton",
      "Découvrez mes réalisations : Le Grenier du Motard, Unifête, applications mobiles et études de cas RAG et MLOps. Rôles, choix techniques et code public.",
    ],
    "/formation/": [
      "Formation AI Engineer & acquis OpenClassrooms — Pierre Pluton",
      "Mon parcours AI Engineer OpenClassrooms : projets validés, compétences acquises, preuves techniques et regard critique sur les résultats et leurs limites.",
    ],
    "/formation/bilan/": [
      "Bilan de formation en ingénierie IA — Pierre Pluton",
      "Le bilan détaillé de ma formation en intelligence artificielle : projets OpenClassrooms, compétences, preuves disponibles et axes d’approfondissement.",
    ],
  },
  en: {
    "/": [
      "Pierre Pluton — Freelance AI & full-stack engineer",
      "Pierre Pluton, freelance AI and full-stack engineer. Explore web and mobile products, RAG, MLOps, interface design and my professional background.",
    ],
    "/parcours/": [
      "Background in product, full-stack & AI — Pierre Pluton",
      "From social sciences to full-stack development and AI engineering: my background, approach and experience as a CTO and digital product cofounder.",
    ],
    "/competences/": [
      "AI, full-stack & mobile skills — Pierre Pluton",
      "Explore my AI, Python, TypeScript, React and mobile skills: technical tools, interface design and an interactive map connected to completed projects.",
    ],
    "/realisations/": [
      "Web, mobile & AI projects — Pierre Pluton",
      "Explore Le Grenier du Motard, Unifête, mobile applications and RAG and MLOps case studies. My roles, technical decisions and public source code.",
    ],
    "/formation/": [
      "AI Engineer training & OpenClassrooms projects — Pierre Pluton",
      "My OpenClassrooms AI Engineer training: validated projects, acquired skills, technical evidence and a critical view of results and their limitations.",
    ],
    "/formation/bilan/": [
      "AI engineering training review — Pierre Pluton",
      "A detailed review of my AI engineering training: OpenClassrooms projects, acquired skills, available evidence and areas for further learning.",
    ],
  },
} as const;

export const seoPages: Record<string, PageSeo> = {};
for (const locale of ["fr", "en"] as const) {
  const prefix = locale === "en" ? "/en" : "";
  for (const [path, [title, description]] of Object.entries(core[locale])) {
    seoPages[`${prefix}${path}`] = {
      title,
      description,
      image: "/images/pierre-pluton.png",
      imageAlt: "Pierre Pluton",
      type:
        path === "/" || path === "/parcours/"
          ? "ProfilePage"
          : "CollectionPage",
    };
  }
  for (const source of projects) {
    const project = localizeProject(source, locale);
    seoPages[`${prefix}/projets/${project.slug}/`] = {
      title:
        locale === "en"
          ? `${project.name} — ${project.category} by Pierre Pluton`
          : `${project.name} : ${project.category} — Pierre Pluton`,
      description: project.description,
      image: project.image,
      imageAlt: project.alt,
      type: "WebPage",
    };
  }
  for (const study of selectedCases) {
    seoPages[`${prefix}/realisations/${study.slug}/`] = {
      title: `${study.title[locale]} — Pierre Pluton`,
      description: study.intro[locale],
      image: "/images/pierre-pluton.png",
      imageAlt: "Pierre Pluton",
      type: "WebPage",
    };
  }
  for (const project of formation.projects) {
    seoPages[`${prefix}/formation/p${project.n}/`] = {
      title: `${project.short_title[locale]} — Pierre Pluton`,
      description: project.intro[locale],
      image: "/images/pierre-pluton.png",
      imageAlt: "Pierre Pluton",
      type: "WebPage",
    };
  }
}

export function normalizePath(path: string) {
  return path === "/" ? path : `${path.replace(/\/+$/, "")}/`;
}

export function getPageSeo(path: string) {
  return seoPages[normalizePath(path)];
}

export function localizedPaths(path: string, locale: Locale) {
  const normalized = normalizePath(path);
  const fr =
    locale === "en"
      ? normalized.replace(/^\/en(?=\/|$)/, "") || "/"
      : normalized;
  return { fr, en: `/en${fr}` };
}
