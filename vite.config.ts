import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  base: "/collinlanie12.github.io/",
  build: {
    outDir: "dist",
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
