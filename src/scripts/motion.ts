const root = document.documentElement;
const media = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton =
  document.querySelector<HTMLButtonElement>("#motion-toggle");
const themeButton = document.querySelector<HTMLButtonElement>("#theme-toggle");
let userMotionOff = false;
try {
  userMotionOff = localStorage.getItem("portfolio-motion") === "off";
} catch {}
let reduced = userMotionOff || media.matches;
function syncMotion() {
  reduced = userMotionOff || media.matches;
  root.dataset.motion = reduced ? "off" : "on";
  if (motionButton) {
    motionButton.hidden = false;
    motionButton.textContent = reduced
      ? (root.dataset.motionOffLabel ?? "Animations : réduites")
      : (root.dataset.motionOnLabel ?? "Animations : actives");
    motionButton.setAttribute("aria-pressed", String(reduced));
  }
  if (reduced)
    document
      .querySelectorAll<HTMLElement>(".project-visual")
      .forEach((el) => (el.style.transform = ""));
}
syncMotion();
media.addEventListener("change", syncMotion);
motionButton?.addEventListener("click", () => {
  userMotionOff = !userMotionOff;
  try {
    localStorage.setItem("portfolio-motion", userMotionOff ? "off" : "on");
  } catch {}
  syncMotion();
});
function syncThemeButton() {
  if (themeButton) {
    const dark = root.dataset.theme === "dark";
    themeButton.textContent = dark ? "☀" : "☾";
    themeButton.setAttribute(
      "aria-label",
      dark
        ? (root.dataset.themeLightLabel ?? "Activer le thème clair")
        : (root.dataset.themeDarkLabel ?? "Activer le thème sombre"),
    );
    themeButton.setAttribute("aria-pressed", String(dark));
  }
}
syncThemeButton();
themeButton?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("portfolio-theme", root.dataset.theme);
  } catch {}
  syncThemeButton();
});
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.08 },
);
document
  .querySelectorAll<HTMLElement>(".project, .section-heading, .ai-row")
  .forEach((el) => {
    if (!reduced && el.getBoundingClientRect().top > innerHeight) {
      el.classList.add("reveal-ready");
      observer.observe(el);
    }
  });
const progress = document.querySelector<HTMLElement>(".scroll-progress");
let ticking = false;
function updateScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  if (progress)
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  ticking = false;
}
addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  },
  { passive: true },
);
updateScroll();
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll<HTMLElement>(".project-visual").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (reduced) return;
      const r = card.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - 0.5;
      const y = (event.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1100px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}
