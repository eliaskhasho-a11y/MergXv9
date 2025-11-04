import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  root: ".", // projektets rot
  base: "./", // gör att alla paths byggs relativt (löser Vercel-problemet)
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "./index.html", // OBS: punkt här också
    },
  },
  server: {
    port: 5173,
    open: true,
    historyApiFallback: true,
  },
});
