import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// MergX V9 – Vite-konfiguration
// ------------------------------
// • React-plugin
// • Stöd för alias "@"
// • Förberedd för framtida miljövariabler (.env)
// • Klart för Vercel-deployment

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
