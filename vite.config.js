import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/calc/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        conv: resolve(__dirname, "conv.html"),
      },
    },
  },
});
