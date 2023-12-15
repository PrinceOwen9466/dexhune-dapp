import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      "@": path.resolve("src/"),
    },
    // transpileDependencies: true,
  },
  build: {
    assetsInlineLimit: 0, // 2kb
  },
})
