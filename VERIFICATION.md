# Local verification — 2026-09-07

Claim: a visitor can browse the portfolio and its four case studies, change theme, and reduce motion in a responsive local Astro site.

- Proven: `npm run check` exited 0, zero errors/warnings/hints.
- Proven: `npm run build` exited 0, five French static routes generated in the original portfolio pass. Total dist approximately 1.9 MB including imagery and fonts.
- Proven in the in-app browser: home → Khinkluka → Unifête → LGDM → MotQuête → home navigation.
- Proven: dark theme selection persisted across reload; light theme restored afterwards.
- Proven: reduced animation preference persisted across reload; active animation preference restored afterwards.
- Proven: application service accordion opens and exposes its description.
- Proven: all four homepage images loaded. DOM width equaled viewport width at the measured desktop 1800 px and mobile 487 px widths. Browser viewport overrides were reset.
- Partially proven: visual desktop/mobile review performed, but in-app screenshot capture cropped the right edge despite matching DOM widths. Broader cross-browser and device verification remains outstanding.
- Not proven: OS-level reduced-motion emulation (implemented via media query and matchMedia, not exercised with OS settings).
- Not proven: public domain hosting, Cloudflare DNS/deployment or external AI demo functionality. No external deployment performed.

The first validation ran before the Tailwind installation completed and failed; after installation all final checks passed. The temporary development server was stopped; a bounded Portly preview is provided for user review.

## Project imagery and AI emphasis update

- Proven locally: Astro check reports zero errors, warnings and hints; build generates all five French routes successfully in the imagery and AI emphasis pass.
- Proven: Prettier format check passes after formatting the source.
- Proven in browser: the homepage exposes the AI/data science section directly after the hero, links to the three GitHub projects, and identifies certification as in preparation with completion expected November 2026.
- Proven: four authentic 1280 × 850 homepage captures replace the project artwork; MotQuête detail image loads. Mobile DOM width equals viewport width (487 px).
- Partially proven: visual review remains limited by browser screenshot cropping. Real-device verification remains outstanding.
- Viewport override reset, light theme restored, temporary review tab closed. Existing bounded preview remains available at localhost:3050 for review.
- No commit, push or public deployment performed for this update.

## French and English routes — 2026-09-07

Claim: a visitor can browse the portfolio and the four case studies in French and English, switch language on the current page, and receive locale-specific metadata and accessible labels.

- Proven: `npm run format:check`, `npm run check` and `npm run build` pass with zero diagnostics; 10 static routes are generated (French and English home plus four case studies per language).
- Proven in the in-app browser: `/en/` renders English navigation, hero, AI section, project roles, approach, contact copy, footer and mailto subject/body.
- Proven in the in-app browser: `/en/projets/khinkluka/` renders the English case study, links to the next English case study, and its language switch returns to `/projets/khinkluka/` with French copy.
- Proven: English project cards target `/en/projets/*/`; French cards target `/projets/*/`.
- Proven in the generated HTML: `lang`, canonical URL and `hreflang` links are emitted for both locales.
- Not proven: translation review by a native English copy editor and public Cloudflare deployment. No external publication performed.
