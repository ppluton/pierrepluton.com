import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "https://pierrepluton.com",
  output: "static",
  trailingSlash: "always",
  vite: { plugins: [tailwindcss()] },
});
