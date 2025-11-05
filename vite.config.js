import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Hjälper Vite/Vercel att resolva moduler direkt i build
    include: ["lucide-react", "recharts"]
  },
  server: {
    host: true,
    port: 5173
  }
});
