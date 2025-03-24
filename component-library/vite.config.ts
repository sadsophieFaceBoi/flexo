import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Entry point for your library
      name: "ComponentLibrary", // Global name for UMD builds
      fileName: (format) => `component-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Mark peer dependencies as external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react()],
});