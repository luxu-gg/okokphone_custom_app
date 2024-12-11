import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    cssCodeSplit: true,
    outDir: "../web/",
    emptyOutDir: true,
    minify: "esbuild",
    chunkSizeWarningLimit: 1600,
  },
  base: "./",
});
