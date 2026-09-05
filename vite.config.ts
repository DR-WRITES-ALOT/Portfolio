import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built site works from any sub-path
  // (e.g. https://<user>.github.io/<repo>/) and not just the domain root.
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  server: {
    // Allow access via sandbox/ preview hostnames during development.
    allowedHosts: true,
  },
  preview: {
    // Allow access via sandbox/ preview hostnames for the built site.
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
