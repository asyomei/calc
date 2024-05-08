import { defineConfig } from "vite";
import { resolve } from "path";
import { BASE_PUBLIC_PATH } from "./globals";

export default defineConfig({
  base: BASE_PUBLIC_PATH,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        conv: resolve(__dirname, "conv.html"),
      },
    },
  },
});
